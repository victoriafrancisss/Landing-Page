# Deployment Guide - Publishing Your Landing Page

This guide will walk you through deploying your Next.js landing page to production.

## 🚀 Option 1: Vercel (Recommended - Easiest for Next.js)

Vercel is made by the Next.js team and offers the simplest deployment process.

### Step 1: Prepare Your Code

1. **Test your build locally first:**
   ```bash
   npm run build
   ```
   If this succeeds, you're ready to deploy!

2. **Make sure your code is in Git:**
   ```bash
   git init  # if not already initialized
   git add .
   git commit -m "Ready for deployment"
   ```

### Step 2: Push to GitHub

1. Create a new repository on GitHub (if you haven't already)
2. Push your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

### Step 3: Deploy to Vercel

1. **Sign up/Login:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account (free)

2. **Import your project:**
   - Click "Add New Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables:**
   Before deploying, add these in Vercel's project settings:
   
   Go to: **Project Settings → Environment Variables**
   
   Add these variables:
   ```
   RESEND_API_KEY=re_BcTpzorZ_EiKWDmev5hztxdKLTRbGZdTH
   GOOGLE_SHEET_ID=your_sheet_id_here
   GOOGLE_CREDENTIALS_PATH=./google-credentials.json
   ```
   
   **Optional (if using ConvertKit):**
   ```
   CONVERTKIT_API_KEY=your_convertkit_key
   CONVERTKIT_FORM_ID=your_form_id
   ```

4. **Handle Google Credentials:**
   
   **Option A: Upload credentials file (Recommended)**
   - In Vercel, go to your project
   - Go to **Settings → General**
   - Scroll to "Environment Variables"
   - You can't upload files directly, so you'll need to:
     
     **Convert JSON to environment variable:**
     - Copy the entire contents of your `google-credentials.json`
     - In Vercel, add a new environment variable:
       - Name: `GOOGLE_CREDENTIALS`
       - Value: (paste entire JSON content)
     - Update your code to read from this (see below)

   **Option B: Use Vercel's file system**
   - Add `google-credentials.json` to your repository (⚠️ **NOT RECOMMENDED** - security risk)
   - Or use a different approach (see below)

5. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site will be live at `your-project.vercel.app`

### Step 4: Update Google Credentials Handling (If needed)

If you stored credentials as an environment variable, update `app/api/send-checklist/route.ts`:

```typescript
// Instead of reading from file, read from env var
const credentialsContent = process.env.GOOGLE_CREDENTIALS;
if (!credentialsContent) {
  console.log('Google Sheets: No GOOGLE_CREDENTIALS found');
  return false;
}
const credentials = JSON.parse(credentialsContent);
```

---

## 🌐 Option 2: Netlify

1. **Sign up:** Go to [netlify.com](https://netlify.com)
2. **Connect GitHub:** Link your repository
3. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
4. **Add environment variables** in Site Settings → Environment Variables
5. **Deploy**

---

## 🔧 Pre-Deployment Checklist

- [ ] Test build locally: `npm run build`
- [ ] All environment variables documented
- [ ] `.env.local` is in `.gitignore` (✅ already done)
- [ ] `google-credentials.json` is in `.gitignore` (✅ already done)
- [ ] No sensitive data in code
- [ ] Images are in `/public` folder (like `/victoria-headshot.jpg`)

---

## 🔐 Environment Variables Setup

### Required Variables:
- `RESEND_API_KEY` - Your Resend API key for email notifications
- `GOOGLE_SHEET_ID` - Your Google Sheet ID (if using Sheets integration)
- `GOOGLE_CREDENTIALS` - Your Google service account JSON (as string)

### Optional Variables:
- `CONVERTKIT_API_KEY` - If using ConvertKit
- `CONVERTKIT_FORM_ID` - If using ConvertKit

---

## 📝 Custom Domain (Optional)

After deployment, you can add a custom domain:

1. **Vercel:**
   - Go to Project Settings → Domains
   - Add your domain
   - Follow DNS configuration instructions

2. **Netlify:**
   - Go to Site Settings → Domain Management
   - Add custom domain

---

## 🐛 Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Ensure TypeScript errors are fixed
- Check build logs in Vercel/Netlify dashboard

### Environment Variables Not Working
- Make sure variables are added in the correct environment (Production, Preview, Development)
- Redeploy after adding new variables
- Check variable names match exactly (case-sensitive)

### Google Sheets Not Working
- Verify `GOOGLE_CREDENTIALS` environment variable is set correctly
- Ensure the service account email has access to your Sheet
- Check Vercel function logs for errors

### Images Not Loading
- Ensure images are in `/public` folder
- Use paths like `/victoria-headshot.jpg` (not `/public/victoria-headshot.jpg`)
- Check file names match exactly (case-sensitive)

---

## 🎉 After Deployment

1. **Test everything:**
   - Visit your live site
   - Test the email form
   - Verify Google Sheets integration (if enabled)
   - Check all links work

2. **Monitor:**
   - Check Vercel/Netlify dashboard for errors
   - Monitor email notifications
   - Check Google Sheets for new entries

3. **Share:**
   - Your site is live! Share the URL
   - Update any links pointing to your site

---

## 💡 Quick Start (Vercel CLI)

If you prefer command line:

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts
# Add environment variables when asked
```

---

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Netlify Documentation](https://docs.netlify.com)

---

**Need help?** Check the deployment platform's documentation or support forums.
