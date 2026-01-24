# Where Are Emails Being Stored?

## Current Setup

Right now, emails are being stored in **two places** (depending on what you have configured):

### 1. Local File Storage (Always Active) ✅
- **Location:** `data/subscribers.json` in your project folder
- **What's stored:** Email, company name (if provided), and timestamp
- **Format:** JSON file that you can open and read
- **Status:** This is now working automatically!

### 2. Resend (For Sending Emails)
- **Status:** Not set up yet (no API key)
- **What it does:** Sends welcome emails to subscribers
- **Setup needed:** See below

### 3. ConvertKit (Optional)
- **Status:** Not set up yet (no API credentials)
- **What it does:** Adds subscribers to your ConvertKit list
- **Setup needed:** Only if you want to use ConvertKit for email marketing

## How to View Your Subscribers

### Option 1: Check the JSON File
1. Open your project folder
2. Look for `data/subscribers.json`
3. Open it in any text editor
4. You'll see all subscribers with their email, company name, and date

### Option 2: Check Your Email
Once you set up Resend, you'll receive a notification email every time someone subscribes.

## To Get Emails Working

You need to set up Resend to actually send emails:

1. **Install Resend:**
   ```bash
   npm install resend
   ```

2. **Get Resend API Key:**
   - Go to https://resend.com
   - Sign up (free)
   - Get your API key

3. **Add to `.env.local`:**
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```

4. **Restart server:**
   ```bash
   npm run dev
   ```

## Current Status

✅ **Emails ARE being saved** to `data/subscribers.json`  
❌ **Emails are NOT being sent** (need Resend API key)  
❌ **Not in ConvertKit** (optional, need API credentials)

## Test It Now

1. Submit a test email on your landing page
2. Check `data/subscribers.json` - you should see it there!
3. Once you add Resend API key, emails will also be sent automatically
