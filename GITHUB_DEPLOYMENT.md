# Deploying Your Academic Website to GitHub Pages

This guide will walk you through hosting your website on GitHub Pages for free.

## Prerequisites

- A GitHub account (sign up at https://github.com if you don't have one)
- Git installed on your computer (download from https://git-scm.com)

## Step-by-Step Instructions

### Step 1: Create a GitHub Repository

1. Go to https://github.com and log in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository:
   - For personal site: `yourusername.github.io` (replace `yourusername` with your GitHub username)
   - Or any name like: `academic-website`
5. Make it **Public**
6. **Do NOT** initialize with README, .gitignore, or license
7. Click "Create repository"

### Step 2: Initialize Git in Your Website Folder

Open Terminal (Mac/Linux) or Command Prompt (Windows) and navigate to your Website folder:

```bash
cd /Users/surabhi/Desktop/Application/Website
```

Initialize git and add your files:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create your first commit
git commit -m "Initial commit: Academic website"
```

### Step 3: Connect to GitHub and Push

Replace `YOUR_USERNAME` and `REPO_NAME` with your GitHub username and repository name:

```bash
# Add GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

Example:
```bash
git remote add origin https://github.com/prashant-kumar/academic-website.git
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" (top menu)
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click "Save"
6. Wait 1-2 minutes for deployment

### Step 5: Access Your Website

Your website will be available at:

- If named `yourusername.github.io`: `https://yourusername.github.io`
- If named differently: `https://yourusername.github.io/repo-name`

## Updating Your Website

After making changes to your local files:

```bash
# Add changed files
git add .

# Commit changes
git commit -m "Update publications"

# Push to GitHub
git push
```

Your website will automatically update in 1-2 minutes.

## Custom Domain (Optional)

If you own a domain name:

1. Go to repository Settings → Pages
2. Under "Custom domain", enter your domain (e.g., `prashant-kumar.com`)
3. Click "Save"
4. Update your domain's DNS settings with your domain provider:
   - Add a CNAME record pointing to `yourusername.github.io`
5. Wait for DNS propagation (can take up to 24 hours)

## Common Issues and Solutions

### Issue: "Permission denied" when pushing

**Solution**: Set up SSH keys or use personal access token
```bash
# Use HTTPS with token instead
git remote set-url origin https://YOUR_TOKEN@github.com/YOUR_USERNAME/REPO_NAME.git
```

Generate token at: https://github.com/settings/tokens

### Issue: Website not updating

**Solution**:
1. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
2. Clear browser cache
3. Wait 2-3 minutes after pushing

### Issue: Images not showing

**Solution**: Check file names match exactly (case-sensitive)
```bash
# List files to verify names
ls -la
```

## Quick Reference Commands

```bash
# Check status of changes
git status

# View commit history
git log --oneline

# Undo local changes (before commit)
git checkout -- filename.html

# Update from GitHub
git pull
```

## Repository Structure on GitHub

```
your-repo/
├── index.html
├── styles.css
├── script.js
├── CV.pdf
├── Publications.pdf
├── Teaching_Statement.pdf
├── Picture_Prashant.jpg
├── README.md
└── GITHUB_DEPLOYMENT.md
```

## Security Notes

- Never commit sensitive information (passwords, private keys, etc.)
- Keep your PDFs up to date
- Review changes before committing

## Additional Resources

- GitHub Pages Documentation: https://docs.github.com/en/pages
- Git Basics: https://git-scm.com/book/en/v2/Getting-Started-Git-Basics
- GitHub Desktop (GUI alternative): https://desktop.github.com

## Support

If you encounter issues:
1. Check GitHub Status: https://www.githubstatus.com
2. Review GitHub Pages documentation
3. Search GitHub Community: https://github.community

---

Congratulations! Your academic website is now live on GitHub Pages.
