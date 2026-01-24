# Quick Start: Google Sheets Integration

## What This Does

When someone signs up on your landing page, their info is automatically added to a Google Sheet! 📊

## Setup Steps (10 minutes)

### 1. Create Google Sheet (2 min)

1. Go to https://sheets.google.com
2. Click "Blank" to create a new spreadsheet
3. Name it: **"Automation Landing Page Leads"**
4. Add headers in row 1:
   - **Column A:** Email
   - **Column B:** Company Name
   - **Column C:** Date
   - **Column D:** Time

### 2. Get Google Cloud Credentials (5 min)

1. Go to https://console.cloud.google.com
2. Click "Select a project" → "New Project"
3. Name it: "Landing Page" → Click "Create"
4. Wait a few seconds, then select your new project

5. **Enable Google Sheets API:**
   - Click "APIs & Services" → "Library"
   - Search: "Google Sheets API"
   - Click it → Click "Enable"

6. **Create Service Account:**
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "Service Account"
   - Name: "Landing Page Service"
   - Click "Create and Continue"
   - Skip role (click "Continue")
   - Click "Done"

7. **Create Key:**
   - Click on your new service account
   - Go to "Keys" tab
   - Click "Add Key" → "Create new key"
   - Choose "JSON"
   - **Download the file** (it will download automatically)

### 3. Share Sheet with Service Account (1 min)

1. Open the downloaded JSON file
2. Find the `"client_email"` field (looks like: `landing-page-service@...iam.gserviceaccount.com`)
3. Copy that email address
4. Go back to your Google Sheet
5. Click "Share" (top right)
6. Paste the service account email
7. Give it "Editor" permission
8. Click "Send"

### 4. Get Sheet ID (30 sec)

1. Look at your Google Sheet URL:
   ```
   https://docs.google.com/spreadsheets/d/1ABC123xyz789/edit
   ```
2. The Sheet ID is: `1ABC123xyz789` (the part between `/d/` and `/edit`)
3. Copy it!

### 5. Add to Your Project (2 min)

1. **Move the JSON file:**
   - Rename the downloaded file to: `google-credentials.json`
   - Move it to your project folder: `c:\Users\vic\OneDrive\Desktop\automation-landing-page\`

2. **Update `.env.local`:**
   - Open `.env.local` in your project
   - Add these lines:
     ```
     GOOGLE_SHEET_ID=your_sheet_id_here
     GOOGLE_CREDENTIALS_PATH=./google-credentials.json
     ```
   - Replace `your_sheet_id_here` with the Sheet ID you copied

3. **Restart your server:**
   ```bash
   npm run dev
   ```

## ✅ Test It!

1. Fill out the form on your landing page
2. Check your Google Sheet - the new row should appear automatically!

## What Gets Added

Each signup adds a new row with:
- **Email:** Subscriber's email address
- **Company Name:** Their company (or blank if not provided)
- **Date:** Date they signed up
- **Time:** Time they signed up

## Troubleshooting

**"Error adding to Google Sheets" in console:**
- Check that the service account email has "Editor" access to the sheet
- Verify the Sheet ID is correct in `.env.local`
- Make sure `google-credentials.json` is in your project root

**Sheet not updating:**
- Refresh the Google Sheet page
- Check your server console for errors
- Verify the credentials file path is correct

## Security

✅ `google-credentials.json` is already in `.gitignore` - it won't be committed to git!
