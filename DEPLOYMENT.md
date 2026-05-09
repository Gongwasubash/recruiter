# GitHub Publishing Guide

## Step-by-Step Instructions to Publish SubashJobAnalyser

### Prerequisites
- Git installed on your computer ([Download Git](https://git-scm.com/downloads))
- GitHub account ([Sign up](https://github.com/signup))

---

## Option 1: Using Git Command Line

### 1. Initialize Git Repository
Open terminal/command prompt in your project folder (`e:\recuter`) and run:

```bash
git init
git add .
git commit -m "Initial commit: SubashJobAnalyser - AI-powered resume screening tool"
```

### 2. Create GitHub Repository
1. Go to [GitHub](https://github.com) and log in
2. Click the **"+"** icon (top right) → **"New repository"**
3. Repository name: `subashjobanalyser`
4. Description: `AI-powered resume screening tool with Groq AI integration`
5. Choose **Public** (or Private if you prefer)
6. **DO NOT** initialize with README (we already have one)
7. Click **"Create repository"**

### 3. Connect and Push to GitHub
Copy the commands from GitHub (they'll look like this):

```bash
git remote add origin https://github.com/YOUR_USERNAME/subashjobanalyser.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

---

## Option 2: Using GitHub Desktop (Easier)

### 1. Download GitHub Desktop
- Download from [desktop.github.com](https://desktop.github.com)
- Install and sign in with your GitHub account

### 2. Add Your Project
1. Open GitHub Desktop
2. Click **File** → **Add Local Repository**
3. Choose your project folder: `e:\recuter`
4. Click **"create a repository"** if prompted
5. Fill in:
   - Name: `subashjobanalyser`
   - Description: `AI-powered resume screening tool`
6. Click **"Create Repository"**

### 3. Publish to GitHub
1. Click **"Publish repository"** button (top right)
2. Uncheck **"Keep this code private"** (unless you want it private)
3. Click **"Publish Repository"**

Done! Your project is now on GitHub.

---

## Enable GitHub Pages (Free Hosting)

### Make Your Site Live

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes
7. Your site will be live at: `https://YOUR_USERNAME.github.io/subashjobanalyser`

---

## Important: API Key Setup

⚠️ **You need a Groq API key to use this tool**

### Get Your Free API Key:
1. Visit [Groq Console](https://console.groq.com)
2. Sign up for a free account
3. Generate an API key
4. When you first use the tool, you'll be prompted to enter your key
5. The key is saved in your browser for future use

### For Developers:
If you want to hardcode your API key (not recommended for public repos):
1. Open `index.html`
2. Find the line: `const GROQ_API_KEY = localStorage.getItem('groq_api_key')...`
3. Replace with: `const GROQ_API_KEY = 'your_api_key_here';`

---

## Verify Your Repository

After publishing, check that these files are visible on GitHub:
- ✅ `index.html` - Main application file
- ✅ `README.md` - Project documentation
- ✅ `LICENSE` - MIT License
- ✅ `.gitignore` - Git ignore rules

---

## Share Your Project

Once published, share your repository:
- Repository URL: `https://github.com/YOUR_USERNAME/subashjobanalyser`
- Live Site URL: `https://YOUR_USERNAME.github.io/subashjobanalyser`

Add these to your:
- LinkedIn profile
- Portfolio website
- Resume

---

## Updating Your Project

When you make changes:

### Using Git Command Line:
```bash
git add .
git commit -m "Description of changes"
git push
```

### Using GitHub Desktop:
1. Make your changes
2. GitHub Desktop will show changed files
3. Write a commit message
4. Click **"Commit to main"**
5. Click **"Push origin"**

---

## Troubleshooting

### "Permission denied" error
- Make sure you're logged into GitHub
- Check your repository URL is correct

### GitHub Pages not working
- Wait 5-10 minutes after enabling
- Check Settings → Pages for error messages
- Ensure `index.html` is in the root folder

### API key not working
- Verify the key is correct
- Check Groq API dashboard for usage limits
- Look at browser console (F12) for error messages

---

## Need Help?

- GitHub Docs: [docs.github.com](https://docs.github.com)
- Groq API Docs: [console.groq.com/docs](https://console.groq.com/docs)
- Open an issue in your repository for community help

---

**Good luck with your project! 🚀**
