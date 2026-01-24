# Google Sheets Integration Setup

## Quick Setup (5 minutes)

### Step 1: Create a Google Sheet

1. Go to https://sheets.google.com
2. Create a new spreadsheet
3. Name it "Automation Landing Page Leads"
4. In the first row, add these headers:
   - **A1:** Email
   - **B1:** Company Name
   - **C1:** Date
   - **D1:** Time

### Step 2: Set Up Google Cloud Project

1. Go to https://console.cloud.google.com
2. Create a new project (or use existing)
3. Enable Google Sheets API:
   - Go to "APIs & Services" → "Library"
   - Search for "Google Sheets API"
   - Click "Enable"

### Step 3: Create Service Account

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "Service Account"
3. Name it: "Landing Page Service"
4. Click "Create and Continue"
5. Skip role assignment (click "Continue")
6. Click "Done"

### Step 4: Create Key

1. Click on the service account you just created
2. Go to "Keys" tab
3. Click "Add Key" → "Create new key"
4. Choose "JSON"
5. Download the JSON file
6. **IMPORTANT:** Save this file securely - you'll need it!

### Step 5: Share Sheet with Service Account

1. Open your Google Sheet
2. Click "Share" button (top right)
3. Copy the **email address** from the JSON file (look for `"client_email"` field)
   - It looks like: `landing-page-service@your-project.iam.gserviceaccount.com`
4. Paste it in the "Share" dialog
5. Give it "Editor" permission
6. Click "Send"

### Step 6: Get Sheet ID

1. Look at your Google Sheet URL:
   - Example: `https://docs.google.com/spreadsheets/d/1ABC123xyz789/edit`
   - The Sheet ID is: `1ABC123xyz789` (the part between `/d/` and `/edit`)

### Step 7: Add to Your Project

1. Copy the downloaded JSON file to your project folder
2. Rename it to `google-credentials.json`
3. Add to `.env.local`:
   ```
   GOOGLE_SHEET_ID=your_sheet_id_here
   GOOGLE_CREDENTIALS_PATH=./google-credentials.json
   ```

### Step 8: Install Package

```bash
npm install googleapis
```

## ✅ That's It!

Now when someone signs up:
- ✅ Email notification sent to you
- ✅ Saved to `data/subscribers.json`
- ✅ **Automatically added to Google Sheet!**

## Security Note

Add `google-credentials.json` to `.gitignore` to keep it safe!
