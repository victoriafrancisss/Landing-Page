# Quick Start: Connect Your ConvertKit Form to Your Landing Page

## ✅ Good News: Your Form is Already Integrated!

The email form is already on your landing page in the "Want More Info?" section. You just need to connect it to your ConvertKit form.

## Step 1: Get Your ConvertKit Form ID

1. In ConvertKit, go to **Forms**
2. Click on your form: **"Stop the $15,600 Leak: The Automation Audit Checklist"**
3. Look at the URL - it will be something like:
   ```
   https://app.convertkit.com/forms/designers/1234567/edit
   ```
4. The **Form ID** is the number: `1234567` (copy this number)

## Step 2: Get Your ConvertKit API Secret

**Important:** The API Secret is in your **Account Settings**, NOT in the form settings!

1. In ConvertKit, click on your **profile/account icon** (usually top right corner)
2. Click **"Settings"** from the dropdown menu
3. In the left sidebar, click **"Advanced"**
4. Scroll down to find **"API Secret"** section
5. Click **"Show"** or **"Reveal"** button next to the API Secret
6. Copy your API Secret
   - It looks like: `abc123xyz789...` (a long string of letters and numbers)

**Note:** If you don't see "API Secret" in Advanced settings, you might need to:
- Make sure you're on a paid plan (some free accounts have limited API access)
- Or use "API Key" instead (found in the same location)

## Step 3: Add to Your Project

1. In your project root folder, create a file called `.env.local` (if it doesn't exist)
2. Add these two lines (replace with YOUR actual values):
   ```
   CONVERTKIT_API_KEY=your_api_secret_here
   CONVERTKIT_FORM_ID=your_form_id_here
   ```
3. Save the file

## Step 4: Restart Your Server

1. Stop your dev server (press `Ctrl+C` in terminal)
2. Start it again:
   ```bash
   npm run dev
   ```

## Step 5: Test It!

1. Go to your landing page: `http://localhost:3000`
2. Scroll to the "Want More Info?" section
3. Enter an email address and click "Send Me the Automation Checklist"
4. Check that email inbox - you should receive your welcome email!

## ✅ That's It!

Your form is now connected to ConvertKit. When someone subscribes:
- ✅ They're added to your ConvertKit list
- ✅ They receive your automated welcome email (if you set it up)
- ✅ You can see them in your ConvertKit dashboard

## Need Help Setting Up the Automated Email?

See `CONVERTKIT_EMAIL_SETUP.md` for step-by-step instructions on creating your welcome email automation.
