# Simple Email Setup (No Paid ConvertKit Automations Needed!)

Since ConvertKit automations are paid, here's a **free solution** that sends welcome emails automatically.

## ✅ What I've Set Up

1. **Custom form** that submits to ConvertKit (for your email list)
2. **Automatic welcome emails** sent via Resend (free - 3,000 emails/month)
3. **Notification emails** to you when someone subscribes

## Quick Setup (5 minutes)

### Step 1: Install Resend
```bash
npm install resend
```

### Step 2: Get Resend API Key (Free)
1. Go to https://resend.com
2. Sign up (free, no credit card)
3. Go to **API Keys** → **Create API Key**
4. Copy your API key (starts with `re_...`)

### Step 3: Add to `.env.local`
Create/update `.env.local` in your project root:
```
RESEND_API_KEY=re_your_api_key_here
```

### Step 4: Restart Server
```bash
npm run dev
```

## ✅ That's It!

Now when someone subscribes:
- ✅ Added to ConvertKit (your free list)
- ✅ **Automatically receives welcome email** with checklist
- ✅ You get notification email
- ✅ **All free!**

## What the Email Includes

- Welcome message
- Automation Checklist overview
- Link to book a free audit
- Professional design matching your brand

## Testing

1. Go to your landing page
2. Enter a test email
3. Check that inbox - you should receive the welcome email immediately!

## Need to Customize the Email?

Edit `app/api/send-checklist/route.ts` to change:
- Email content
- Subject line
- Checklist details
- Your signature

See `RESEND_SETUP.md` for more details!
