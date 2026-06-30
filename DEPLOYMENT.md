# 🚀 Deployment Guide - GitHub Pages

## Prerequisites

1. **GitHub Account** - You need a GitHub account
2. **Git installed** - Make sure git is installed on your machine
3. **Repository created** - Create a GitHub repository for your project

---

## Step 1: Setup Google Analytics (Track Visitors)

### Get Your Google Analytics ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring"
4. Fill in your account details
5. Add a property (your website)
6. Choose "Web" platform
7. Enter your website details
8. Copy your **Measurement ID** (looks like `G-XXXXXXXXXX`)

### Add to Your Project

Open `src/utils/analytics.ts` and replace:

```typescript
export const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // Replace with your actual ID
```

With your actual Measurement ID:

```typescript
export const GA_MEASUREMENT_ID = "G-ABC123DEF4"; // Your real ID
```

**What Gets Tracked:**

- ✅ Page views (which pages people visit)
- ✅ Time spent reading articles
- ✅ Navigation clicks
- ✅ User demographics (location, device, browser)
- ✅ Real-time active users

You can view all stats in your Google Analytics dashboard!

---

## Step 2: Configure GitHub Pages

### Update package.json

Open `package.json` and update the `homepage` field:

```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME"
```

**Example:**
If your GitHub username is `johndoe` and repository is `computer-architecture-blog`:

```json
"homepage": "https://johndoe.github.io/computer-architecture-blog"
```

---

## Step 3: Initialize Git Repository (If Not Done)

```bash
cd digital-electronics-blog

# Initialize git if not already done
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Transistors to GPUs educational website"
```

---

## Step 4: Connect to GitHub

### Create a new repository on GitHub

1. Go to [GitHub](https://github.com)
2. Click the "+" icon → "New repository"
3. Name your repository (e.g., `computer-architecture-blog`)
4. Choose Public or Private
5. **DO NOT** initialize with README
6. Click "Create repository"

### Link your local repository

```bash
# Add GitHub as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## Step 5: Deploy to GitHub Pages

### One-Command Deployment

```bash
npm run deploy
```

This command will:

1. Build your production-ready website
2. Create a `gh-pages` branch
3. Push the built website to GitHub Pages
4. Your site will be live in a few minutes!

### Check Deployment

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll to "Pages" in the left sidebar
4. You should see: **"Your site is published at https://..."**
5. Click the link to view your live website!

---

## Step 6: Update Content and Redeploy

Whenever you add new content or make changes:

```bash
# 1. Make your changes (add articles, update content, etc.)

# 2. Test locally
npm start

# 3. Commit changes
git add .
git commit -m "Add new article on transistors"
git push

# 4. Deploy updated version
npm run deploy
```

Your site will update in 2-3 minutes!

---

## Navigation Features

### Floating Navigation Button

Your site now has an innovative navigation system:

**Features:**

- ✨ Floating button at bottom-right
- 📱 Shows current chapter number
- 🎯 Slides out full navigation panel
- 🔍 Auto-expands current chapter
- 📊 Shows progress (topics completed)
- 💨 Smooth animations
- 📱 Fully responsive

**How to Use:**

1. Click the floating button (☰) to open navigation
2. Click on any chapter to expand its topics
3. Click a topic to navigate
4. Use the ✕ button or click outside to close

---

## Viewing Analytics

### Google Analytics Dashboard

1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your property
3. View real-time data and reports

**Key Metrics to Track:**

- **Users**: Total visitors
- **Page Views**: Most viewed articles
- **Avg Session Duration**: How long people spend
- **Bounce Rate**: % who leave immediately
- **Demographics**: Where visitors are from
- **Devices**: Mobile vs Desktop usage

### Setting Up Custom Reports

You can create custom reports to track:

- Which chapters are most popular
- Reading completion rates
- User journey through topics
- Time spent per article

---

## Troubleshooting

### Site Not Loading

**Check homepage URL:**

```json
"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
```

Must match exactly with your GitHub username and repository name!

**Repository Settings:**

1. Go to Settings → Pages
2. Ensure Source is set to "gh-pages" branch
3. Ensure folder is "/ (root)"

### 404 Errors on Refresh

This is expected with client-side routing. Solutions:

**Option 1: Use Hash Router (Easiest)**

In `src/App.tsx`, change:

```typescript
import { BrowserRouter as Router } from "react-router-dom";
```

To:

```typescript
import { HashRouter as Router } from "react-router-dom";
```

URLs will have `/#/` but will work perfectly!

**Option 2: Add 404.html redirect** (Already configured)

### Analytics Not Working

1. Check your Measurement ID is correct in `src/utils/analytics.ts`
2. Wait 24-48 hours for data to appear in Google Analytics
3. Test in incognito mode (ad blockers can block analytics)
4. Check browser console for errors

### Build Fails

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install

# Try building again
npm run build
```

---

## Custom Domain (Optional)

Want your own domain like `computerarchitecture.dev`?

1. Buy a domain from Namecheap, GoDaddy, etc.
2. In your repository, create file: `public/CNAME`
3. Add your domain: `www.yourdom

ain.com`4. Configure DNS settings with your domain provider
5. Redeploy:`npm run deploy`

Full guide: [GitHub Pages Custom Domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

## Maintenance

### Regular Updates

```bash
# Update dependencies monthly
npm update

# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

### Backup

Your code is on GitHub - that's your backup! But consider:

- Exporting Google Analytics data monthly
- Keeping local copies of images/diagrams
- Documenting major content updates

---

## Performance Tips

### Your site is already optimized with:

- ✅ Code splitting
- ✅ Minified CSS and JS
- ✅ Gzip compression
- ✅ Lazy loading ready
- ✅ Small bundle size (~310KB gzipped)

### Monitor Performance:

- Use Google PageSpeed Insights
- Check Lighthouse scores
- Monitor Core Web Vitals in Google Analytics

---

## Support & Resources

- **GitHub Pages Docs**: https://pages.github.com/
- **Google Analytics Help**: https://support.google.com/analytics/
- **React Router Docs**: https://reactrouter.com/
- **Your Project Docs**: See README.md, CONTENT_GUIDE.md

---

## Quick Command Reference

```bash
# Local development
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy

# Test production build locally
npm install -g serve
serve -s build

# Update and redeploy
git add .
git commit -m "Your commit message"
git push
npm run deploy
```

---

## Success! 🎉

Your educational website is now live and tracking visitors!

**Your Site**: https://YOUR_USERNAME.github.io/YOUR_REPO_NAME
**Analytics**: https://analytics.google.com/

Share your site and start teaching!

---

**Need Help?**

- Check GitHub Issues in your repository
- Review error messages carefully
- Test locally before deploying
- Read the documentation files in your project

Happy teaching! 📚
