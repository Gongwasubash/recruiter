# Environment Variable Setup Guide

## Setting Up GROQ_API_KEY in Netlify

Your Groq API key is now stored securely as an environment variable on Netlify's servers, not in your code!

---

## Step 1: Get Your Groq API Key

1. Go to [Groq Console](https://console.groq.com)
2. Sign up or log in
3. Navigate to **API Keys** section
4. Click **"Create API Key"**
5. Copy your API key (starts with `gsk_...`)

---

## Step 2: Add Environment Variable to Netlify

### Method A: Via Netlify Dashboard (Easiest)

1. Go to your Netlify site dashboard: https://app.netlify.com
2. Select your site: **subashrecurement**
3. Click **Site settings** (top navigation)
4. In the left sidebar, click **Environment variables**
5. Click **"Add a variable"** or **"Add environment variables"**
6. Fill in:
   - **Key:** `GROQ_API_KEY`
   - **Value:** Your Groq API key (paste it here)
   - **Scopes:** Select all (Production, Deploy Previews, Branch deploys)
7. Click **"Create variable"** or **"Save"**

### Method B: Via Netlify CLI

```bash
# Install Netlify CLI (if not installed)
npm install -g netlify-cli

# Login to Netlify
netlify login

# Link to your site
cd e:\recuter
netlify link

# Set environment variable
netlify env:set GROQ_API_KEY "your_groq_api_key_here"
```

---

## Step 3: Redeploy Your Site

After adding the environment variable, you need to trigger a new deployment:

### Option A: Push to GitHub (Automatic)
```bash
cd e:\recuter
git add .
git commit -m "Add Netlify Functions for secure API calls"
git push
```
Netlify will automatically redeploy with the new environment variable.

### Option B: Manual Trigger
1. Go to **Deploys** tab in Netlify dashboard
2. Click **"Trigger deploy"** → **"Deploy site"**

---

## Step 4: Verify It's Working

1. Wait for deployment to complete (1-2 minutes)
2. Visit your site: https://subashrecurement.netlify.app
3. Upload a JD and resumes
4. Click **"Score Resumes"**
5. Check browser console (F12) - you should see:
   - `"Calling Netlify Function for AI analysis..."`
   - `"AI Analysis Result: {...}"`

---

## How It Works Now

### Before (Insecure):
```
Browser → Groq API (with exposed API key)
```

### After (Secure):
```
Browser → Netlify Function → Groq API (key hidden on server)
```

**Benefits:**
- ✅ API key is never exposed in browser
- ✅ API key is not in your code
- ✅ Users can't steal or misuse your key
- ✅ You can rotate keys without changing code

---

## Troubleshooting

### Error: "API key not configured"
- Make sure you added `GROQ_API_KEY` in Netlify environment variables
- Check spelling (case-sensitive)
- Redeploy the site after adding the variable

### Error: "Failed to analyze resume"
- Check if your Groq API key is valid
- Verify you have API credits remaining
- Check Netlify Function logs in dashboard

### Check Function Logs:
1. Go to Netlify dashboard
2. Click **Functions** tab
3. Click **analyze-resume**
4. View logs for errors

---

## Local Development (Optional)

To test locally with environment variables:

1. Create `.env` file in project root:
```bash
GROQ_API_KEY=your_groq_api_key_here
```

2. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

3. Run locally:
```bash
netlify dev
```

This will run your site at `http://localhost:8888` with environment variables loaded.

---

## Security Best Practices

✅ **DO:**
- Store API keys in environment variables
- Use Netlify Functions for API calls
- Rotate keys periodically
- Monitor API usage

❌ **DON'T:**
- Commit `.env` file to Git (it's in `.gitignore`)
- Share your API key publicly
- Hardcode keys in your code
- Expose keys in client-side JavaScript

---

## Need Help?

- Netlify Docs: [docs.netlify.com/environment-variables](https://docs.netlify.com/environment-variables/overview/)
- Groq API Docs: [console.groq.com/docs](https://console.groq.com/docs)
- Check Function logs in Netlify dashboard

---

**Your API key is now secure! 🔒**
