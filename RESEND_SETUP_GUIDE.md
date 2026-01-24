# Resend Setup Guide - Step by Step

## What is Resend?
Resend is a free email service that sends your welcome emails automatically. Free tier: 3,000 emails/month.

## Step-by-Step Setup

### Step 1: Sign Up for Resend (2 minutes)

1. Go to **https://resend.com**
2. Click **"Sign Up"** (top right)
3. Sign up with your email (or use Google/GitHub)
4. Verify your email address (check your inbox)

### Step 2: Get Your API Key (1 minute)

1. Once logged in, you'll see the Resend dashboard
2. Click on **"API Keys"** in the left sidebar
3. Click **"Create API Key"** button
4. Give it a name: `Landing Page Emails`
5. Click **"Add"** or **"Create"**
6. **IMPORTANT:** Copy the API key immediately (it starts with `re_...`)
   - It looks like: `re_abc123xyz789...`
   - You can only see it once! If you lose it, create a new one.

### Step 3: Install Resend Package

Open your terminal in the project folder and run:

```bash
npm install resend
```

### Step 4: Create `.env.local` File

1. In your project root folder (`automation-landing-page`), create a new file called `.env.local`
2. Add this line (replace with YOUR actual API key):

```
RESEND_API_KEY=re_your_actual_api_key_here
```

**Example:**
```
RESEND_API_KEY=re_abc123xyz789def456ghi012jkl345mno678pqr901stu234vwx567
```

3. Save the file

### Step 5: Restart Your Server

1. Stop your current server (press `Ctrl+C` in terminal)
2. Start it again:

```bash
npm run dev
```

### Step 6: Test It!

1. Go to your landing page: `http://localhost:3000`
2. Scroll to the "Want More Info?" section
3. Enter a test email address
4. Click "Send Me the Automation Checklist"
5. Check that email inbox - you should receive the welcome email!

## ✅ That's It!

Now when someone subscribes:
- ✅ Email is saved to `data/subscribers.json`
- ✅ They receive your welcome email automatically
- ✅ You receive a notification email
- ✅ All free! (3,000 emails/month)

## Troubleshooting

### "Module not found: resend"
- Make sure you ran `npm install resend`
- Restart your server after installing

### "Email not sending"
- Check that your `.env.local` file has the correct API key
- Make sure there are no spaces around the `=` sign
- Restart your server after adding the API key

### "API key invalid"
- Make sure you copied the ENTIRE key (it's long!)
- Check for any extra spaces or line breaks
- Try creating a new API key in Resend

## Need Help?

- Resend Docs: https://resend.com/docs
- Resend Dashboard: https://resend.com/api-keys
- Free tier: 3,000 emails/month (plenty for starting out!)
