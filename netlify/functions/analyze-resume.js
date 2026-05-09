const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  // Get API key from environment variable
  const GROQ_API_KEY = process.env.GROQ_API_KEY;

  if (!GROQ_API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'API key not configured' })
    };
  }

  try {
    const { jdText, resumeText } = JSON.parse(event.body);

    const prompt = `You are an expert HR recruiter analyzing candidate resumes against job descriptions.

Job Description:
${jdText}

Candidate Resume:
${resumeText}

Analyze this candidate's fit for the role and provide a JSON response with the following structure:
{
  "score": <number 0-100>,
  "tier": "strong" | "maybe" | "skip",
  "matchedSkills": ["skill1", "skill2", ...],
  "missingSkills": ["skill1", "skill2", ...],
  "reasoning": "<detailed explanation of the score>"
}

Scoring criteria:
- 75-100: Strong match (tier: "strong") - Most required skills present, experience fits well
- 55-74: Moderate match (tier: "maybe") - Some skills present, may need evaluation
- 0-54: Poor match (tier: "skip") - Significant skill gaps

Be strict and realistic. Only return valid JSON, no additional text.`;

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.3,
        max_tokens: 1000
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: errorData.error?.message || 'API request failed' })
      };
    }

    const data = await response.json();
    const content = data.choices[0].message.content;

    // Parse JSON response
    let analysis;
    try {
      const jsonMatch = content.match(/```(?:json)?\s*([\s\S]*?)```/) || [null, content];
      analysis = JSON.parse(jsonMatch[1].trim());
    } catch (e) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Invalid response format from AI' })
      };
    }

    // Return the analysis
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        score: Math.min(100, Math.max(0, parseInt(analysis.score) || 50)),
        tier: ['strong', 'maybe', 'skip'].includes(analysis.tier) ? analysis.tier : 'maybe',
        matchedSkills: Array.isArray(analysis.matchedSkills) ? analysis.matchedSkills.slice(0, 15) : [],
        missingSkills: Array.isArray(analysis.missingSkills) ? analysis.missingSkills.slice(0, 10) : [],
        reasoning: analysis.reasoning || 'No reasoning provided.'
      })
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
