# Netlify Deployment Guide

## Deploy SubashJobAnalyser to Netlify (Free Hosting)

Netlify offers free hosting with custom domains, HTTPS, and continuous deployment from GitHub.

---

## Method 1: Deploy from GitHub (Recommended)

### Prerequisites
- GitHub repository already set up ✅ (https://github.com/Gongwasubash/recruiter)
- Netlify account (free)

### Steps:

#### 1. Sign Up for Netlify
- Go to [netlify.com](https://www.netlify.com)
- Click **"Sign up"**
- Choose **"Sign up with GitHub"** (easiest option)
- Authorize Netlify to access your GitHub account

#### 2. Create New Site
1. Click **"Add new site"** → **"Import an existing project"**
2. Choose **"Deploy with GitHub"**
3. Select your repository: **Gongwasubash/recruiter**
4. Configure build settings:
   - **Branch to deploy:** `main`
   - **Build command:** (leave empty)
   - **Publish directory:** `.` (dot means root)
5. Click **"Deploy site"**

#### 3. Wait for Deployment
- Netlify will build and deploy your site (takes 30-60 seconds)
- You'll get a random URL like: `https://random-name-123456.netlify.app`

#### 4. Customize Your URL (Optional)
1. Go to **Site settings** → **Domain management**
2. Click **"Options"** → **"Edit site name"**
3. Change to: `subashjobanalyser` (if available)
4. Your new URL: `https://subashjobanalyser.netlify.app`

---

## Method 2: Drag & Drop Deploy (Quick Test)

### Steps:

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag your entire `e:\recuter` folder into the browser
3. Netlify will deploy instantly
4. You'll get a live URL immediately

**Note:** This method doesn't connect to GitHub, so updates require manual re-upload.

---

## Method 3: Netlify CLI (For Developers)

### Install Netlify CLI:
```bash
npm install -g netlify-cli
```

### Deploy:
```bash
cd e:\recuter
netlify login
netlify init
netlify deploy --prod
```

---

## Custom Domain Setup (Optional)

### If you own a domain:

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `subashjobanalyser.com`)
4. Follow DNS configuration instructions
5. Netlify provides free HTTPS automatically

---

## Continuous Deployment

Once connected to GitHub, Netlify automatically:
- ✅ Deploys every time you push to `main` branch
- ✅ Shows build logs and errors
- ✅ Provides deploy previews for pull requests
- ✅ Rolls back to previous versions if needed

### To Update Your Site:
```bash
cd e:\recuter
git add .
git commit -m "Update feature"
git push
```
Netlify will auto-deploy in 30-60 seconds!

---

## Environment Variables (For API Keys)

If you want to add environment variables:

1. Go to **Site settings** → **Environment variables**
2. Click **"Add a variable"**
3. Key: `GROQ_API_KEY`
4. Value: Your API key
5. Click **"Save"**

**Note:** For client-side apps like this, environment variables won't hide the key from users. The current localStorage approach is better for this use case.

---

## Netlify Features You Get (Free Plan)

- ✅ **100 GB bandwidth/month**
- ✅ **Unlimited sites**
- ✅ **HTTPS/SSL certificates** (automatic)
- ✅ **Custom domains**
- ✅ **Continuous deployment from Git**
- ✅ **Deploy previews**
- ✅ **Instant rollbacks**
- ✅ **Form handling**
- ✅ **Serverless functions** (if needed later)

---

## Troubleshooting

### Site not loading?
- Check **Deploys** tab for build errors
- Ensure `index.html` is in the root directory
- Clear browser cache and try again

### API key not working?
- Users need to enter their own Groq API key
- Check browser console (F12) for errors
- Verify API key is valid at [console.groq.com](https://console.groq.com)

### Want to redeploy?
- Go to **Deploys** tab
- Click **"Trigger deploy"** → **"Deploy site"**

---

## Comparison: Netlify vs GitHub Pages

| Feature | Netlify | GitHub Pages |
|---------|---------|--------------|
| Setup | Easier | Moderate |
| Custom domain | Free HTTPS | Free HTTPS |
| Build time | Faster | Slower |
| Redirects | Yes | Limited |
| Forms | Yes | No |
| Functions | Yes | No |
| Analytics | Yes (paid) | No |

**Recommendation:** Use Netlify for better features and easier setup!

---

## Your Deployment URLs

After deployment, you'll have:
- **Netlify URL:** `https://subashjobanalyser.netlify.app` (customizable)
- **GitHub URL:** `https://gongwasubash.github.io/recruiter` (if Pages enabled)

Both will work! Choose whichever you prefer.

---

## Next Steps After Deployment

1. ✅ Test the live site thoroughly
2. ✅ Share the URL on LinkedIn/portfolio
3. ✅ Add the URL to your GitHub README
4. ✅ Monitor usage in Netlify dashboard
5. ✅ Set up custom domain (optional)

---

## Need Help?

- Netlify Docs: [docs.netlify.com](https://docs.netlify.com)
- Netlify Support: [answers.netlify.com](https://answers.netlify.com)
- Status Page: [netlifystatus.com](https://www.netlifystatus.com)

---

**Your site will be live in under 2 minutes! 🚀**
