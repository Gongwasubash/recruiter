# .subashjobanalyser

**Hiring intelligence for modern teams**

An AI-powered resume screening tool that helps recruiters quickly analyze and rank candidates against job descriptions. Built with Groq AI for intelligent matching and scoring.

![SubashJobAnalyser](https://img.shields.io/badge/AI-Powered-blue) ![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- **AI-Powered Analysis** - Uses Groq AI (Llama 3.3 70B) for intelligent resume screening
- **PDF Support** - Upload job descriptions and resumes as PDFs (extracted in-browser with PDF.js)
- **Smart Scoring** - Candidates scored 0-100 based on skill match, experience, and location
- **Skill Matching** - Automatically identifies matched and missing skills
- **Detailed Reasoning** - AI explains why each candidate received their score
- **Drag & Drop** - Easy multi-file PDF upload with drag-and-drop support
- **Export to CSV** - Download ranked shortlist for further processing
- **Premium UI** - Clean, modern interface inspired by Perplexity, Linear, and Vercel

## 🚀 Demo

### Workflow
1. Upload or paste a job description
2. Upload or paste candidate resumes (multiple supported)
3. Click "Score Resumes" - AI analyzes each candidate
4. View ranked results with scores, matched/missing skills, and reasoning
5. Export shortlist as CSV

### Scoring Tiers
- **Strong Match (75-100)** - Most required skills present, experience fits well
- **Maybe (55-74)** - Some skills present, may need evaluation
- **Skip (0-54)** - Significant skill gaps

## 🛠️ Tech Stack

- **Frontend** - Pure HTML, CSS, JavaScript (no frameworks)
- **AI** - Groq API (Llama 3.3 70B Versatile)
- **PDF Processing** - PDF.js (client-side extraction)
- **Fonts** - Instrument Serif (headings), Inter (body)
- **Hosting** - Static site (can deploy to GitHub Pages, Vercel, Netlify)

## 📦 Installation

### Option 1: Run Locally

1. Clone the repository:
```bash
git clone https://github.com/yourusername/subashjobanalyser.git
cd subashjobanalyser
```

2. Open `index.html` in your browser:
```bash
# On Windows
start index.html

# On macOS
open index.html

# On Linux
xdg-open index.html
```

That's it! No build process or dependencies needed.

### Option 2: Deploy to GitHub Pages

1. Go to your repository settings
2. Navigate to **Pages** section
3. Select **main** branch as source
4. Your site will be live at `https://yourusername.github.io/subashjobanalyser`

## 🔑 API Setup

The tool uses Groq AI API for resume analysis. The API key is currently hardcoded in the source.

**For production use:**

1. Get your free API key from [Groq Console](https://console.groq.com)
2. Replace the API key in `index.html`:
```javascript
const GROQ_API_KEY = 'your_api_key_here';
```

**Security Note:** For production, consider:
- Using environment variables
- Implementing a backend proxy to hide the API key
- Setting up rate limiting

## 📖 Usage

### 1. Job Description Input
- **Upload PDF**: Click the upload zone or drag & drop a JD PDF
- **Paste Text**: Manually paste job description in the textarea

### 2. Resume Input
- **Upload PDFs**: Select multiple resume PDFs at once
- **Drag & Drop**: Drag multiple PDFs into the upload zone
- **Paste Text**: Manually paste resumes separated by `---`

### 3. Score Candidates
- Click **"Score Resumes"** button (or press Cmd/Ctrl+Enter)
- AI analyzes each resume against the JD
- Results appear ranked by score

### 4. Review Results
- Expand cards to see:
  - Contact information
  - Professional summary
  - Matched skills (green dots)
  - Missing skills (amber dashes)
  - Detailed reasoning
- Use filter tabs: All / Strong match / Maybe / Skip

### 5. Export
- Click **"Export Shortlist as CSV"** to download results

## 🎨 Design System

### Brand Colors
- **Primary**: Deep Indigo `#1E1B4B`
- **Accent**: Warm Amber `#F59E0B`
- **Background**: Soft Off-White `#FAFAF9`
- **Success**: Forest Green `#16A34A`
- **Warning**: Amber `#D97706`
- **Danger**: Warm Red `#DC2626`

### Typography
- **Headings**: Instrument Serif (italic for h1)
- **Body**: Inter (400, 500, 600)
- **Numbers**: Tabular numerals

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Groq AI** - For providing fast AI inference
- **PDF.js** - Mozilla's PDF rendering library
- **Google Fonts** - Instrument Serif & Inter typefaces
- Design inspiration from Perplexity, Linear, and Vercel

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

**Built with ❤️ for modern recruitment teams**
