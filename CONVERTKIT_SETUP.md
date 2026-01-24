# ConvertKit Setup Guide

## Step 1: Create a ConvertKit Account
1. Go to https://convertkit.com
2. Sign up for a free account (up to 1,000 subscribers free)
3. Complete the onboarding

## Step 2: Create a Form
1. In ConvertKit dashboard, go to **Forms** → **Create Form**
2. Choose "Landing Page" or "Inline Form"
3. Name it "Automation Checklist Signup" (or whatever you prefer)
4. **Important**: Copy the **Form ID** (you'll see it in the URL or form settings)
   - It looks like: `1234567` (just numbers)

## Step 3: Get Your API Key
1. Go to **Settings** → **Advanced** → **API Secret**
2. Copy your **API Secret** (starts with something like `your_api_key_here`)

## Step 4: Set Up Your Welcome Email Sequence
1. In ConvertKit, go to **Automations** → **Create Automation**
2. Set up a trigger: "When someone subscribes to [Your Form]"
3. Add action: "Send Email"
4. Create your welcome email with:
   - Subject: "Your Automation Checklist is here!"
   - Content: Include your Automation Checklist content
   - Or attach it as a PDF/download link

## Step 5: Add Environment Variables
1. Create a `.env.local` file in your project root (if it doesn't exist)
2. Add these lines:
   ```
   CONVERTKIT_API_KEY=your_api_secret_here
   CONVERTKIT_FORM_ID=your_form_id_here
   ```
3. Replace with your actual values from Steps 2 & 3

## Step 6: Restart Your Dev Server
```bash
# Stop your server (Ctrl+C)
npm run dev
```

## What Happens Now?
✅ When someone enters their email:
- They're automatically added to your ConvertKit list
- They receive your welcome email with the Automation Checklist
- You can see them in your ConvertKit dashboard
- You can set up follow-up email sequences

## Pro Tips:
- **Tags**: You can tag subscribers (e.g., "automation-checklist") for better segmentation
- **Sequences**: Set up a 3-5 email sequence to nurture leads
- **Analytics**: Track opens, clicks, and conversions in ConvertKit
- **Integration**: Connect ConvertKit to other tools (Calendly, etc.)

## Need Help?
- ConvertKit Docs: https://developers.convertkit.com/
- Support: Available in your ConvertKit dashboard
