# Resend Email Setup (Free Alternative to ConvertKit Automations)

Since ConvertKit automations are paid, we'll use **Resend** (free tier) to send welcome emails automatically.

## Step 1: Sign Up for Resend (Free)

1. Go to https://resend.com
2. Sign up for a free account
3. Verify your email

## Step 2: Get Your API Key

1. In Resend dashboard, go to **API Keys**
2. Click **"Create API Key"**
3. Name it: "Landing Page Emails"
4. Copy the API key (starts with `re_...`)

## Step 3: Add to Your Project

1. Create/update `.env.local` file in your project root:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```
2. Save the file

## Step 4: Verify Your Domain (Optional but Recommended)

For production, you'll want to verify your domain:
1. In Resend, go to **Domains**
2. Click **"Add Domain"**
3. Follow the DNS setup instructions

**For testing:** You can use `onboarding@resend.dev` temporarily (works immediately, no setup needed)

## Step 5: Update the Email "From" Address

In `app/api/send-checklist/route.ts`, update these lines:

**For testing (works immediately):**
```typescript
from: 'Automation Landing Page <onboarding@resend.dev>',
```

**For production (after domain verification):**
```typescript
from: 'Victoria Francis <automation@yourdomain.com>',
```

## Step 6: Restart Your Server

```bash
npm run dev
```

## Step 7: Install Resend Package

```bash
npm install resend
```

## ✅ That's It!

Now when someone subscribes:
- ✅ They're added to ConvertKit (for your list)
- ✅ They automatically receive the welcome email with checklist
- ✅ You get a notification email
- ✅ All free! (Resend free tier: 3,000 emails/month)

## What Happens Now?

1. **Subscriber gets:** Beautiful welcome email with your Automation Checklist
2. **You get:** Notification email with their details
3. **ConvertKit:** Still collects the email for your list (even without automations)

## Need Help?

- Resend Docs: https://resend.com/docs
- Free tier includes 3,000 emails/month
- No credit card required
