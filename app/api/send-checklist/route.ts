import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

// Store emails in a JSON file
async function saveEmail(email: string, companyName?: string) {
  try {
    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'subscribers.json');
    
    // Create data directory if it doesn't exist
    if (!existsSync(dataDir)) {
      await mkdir(dataDir, { recursive: true });
    }
    
    // Read existing subscribers
    let subscribers: Array<{ email: string; companyName?: string; date: string }> = [];
    if (existsSync(filePath)) {
      const fileContent = await readFile(filePath, 'utf-8');
      subscribers = JSON.parse(fileContent);
    }
    
    // Add new subscriber
    subscribers.push({
      email,
      companyName: companyName || undefined,
      date: new Date().toISOString(),
    });
    
    // Save back to file
    await writeFile(filePath, JSON.stringify(subscribers, null, 2), 'utf-8');
    
    return true;
  } catch (error) {
    console.error('Error saving email:', error);
    return false;
  }
}

// Add to Google Sheets
async function addToGoogleSheets(email: string, companyName?: string) {
  try {
    const { google } = await import('googleapis');
    const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID?.trim();
    const GOOGLE_CREDENTIALS_PATH = process.env.GOOGLE_CREDENTIALS_PATH?.trim() || './google-credentials.json';
    const GOOGLE_CREDENTIALS = process.env.GOOGLE_CREDENTIALS; // For deployment (env var as JSON string)

    // Check configuration
    if (!GOOGLE_SHEET_ID) {
      console.log('Google Sheets: No GOOGLE_SHEET_ID found in environment variables');
      return false;
    }

    console.log(`Google Sheets: Attempting to add row with Sheet ID: ${GOOGLE_SHEET_ID}`);

    // Load credentials - try environment variable first (for deployment), then file (for local dev)
    let credentials;
    if (GOOGLE_CREDENTIALS) {
      // Use credentials from environment variable (production)
      try {
        credentials = JSON.parse(GOOGLE_CREDENTIALS);
        console.log(`Google Sheets: Using credentials from environment variable`);
      } catch (parseError) {
        console.error('Google Sheets: Failed to parse GOOGLE_CREDENTIALS environment variable');
        return false;
      }
    } else {
      // Try to load from file (local development)
      const credentialsPath = path.join(process.cwd(), GOOGLE_CREDENTIALS_PATH);
      if (!existsSync(credentialsPath)) {
        console.log(`Google Sheets: Credentials file not found at: ${credentialsPath} and no GOOGLE_CREDENTIALS env var`);
        return false;
      }
      const credentialsContent = await readFile(credentialsPath, 'utf-8');
      credentials = JSON.parse(credentialsContent);
      console.log(`Google Sheets: Using credentials from file: ${credentialsPath}`);
    }

    if (!credentials.client_email) {
      console.error('Google Sheets: Invalid credentials file - missing client_email');
      return false;
    }

    console.log(`Google Sheets: Using service account: ${credentials.client_email}`);

    // Authenticate
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Format date
    const now = new Date();
    const dateStr = now.toLocaleDateString();
    const timeStr = now.toLocaleTimeString();

    // Add row to sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: 'Sheet1!A:D', // Adjust if your sheet name is different
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[email, companyName || '', dateStr, timeStr]],
      },
    });

    console.log('✅ Added to Google Sheets successfully:', response.data);
    return true;
  } catch (error: any) {
    console.error('❌ Error adding to Google Sheets:');
    console.error('Error message:', error.message);
    if (error.response) {
      console.error('Error details:', JSON.stringify(error.response.data, null, 2));
    }
    return false; // Don't fail the whole request if Sheets fails
  }
}

export async function POST(request: NextRequest) {
  try {
    const { email, companyName } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Save email to local file (always do this)
    await saveEmail(email, companyName);

    // Add to Google Sheets (if configured)
    await addToGoogleSheets(email, companyName);

    // Send notification email to you
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (RESEND_API_KEY) {
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'onboarding@resend.dev',
          to: 'victoriafranciss@hotmail.com',
          subject: 'New Lead - Automation Landing Page',
          html: `
            <h2>New Lead Submission</h2>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${companyName ? `<p><strong>Company:</strong> ${companyName}</p>` : ''}
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>Action:</strong> They requested more information about automation services.</p>
            <hr>
            <p><strong>Next Steps:</strong> Reach out to them personally to discuss their automation needs.</p>
          `,
        }),
      });
    } catch (err) {
      console.error('Error sending notification:', err);
    }
    }

    // Optionally add to ConvertKit if credentials are available
    const CONVERTKIT_API_KEY = process.env.CONVERTKIT_API_KEY;
    const CONVERTKIT_FORM_ID = process.env.CONVERTKIT_FORM_ID;

    if (CONVERTKIT_API_KEY && CONVERTKIT_FORM_ID) {
      try {
        const subscriptionData: any = {
          api_key: CONVERTKIT_API_KEY,
          email: email,
        };

        if (companyName) {
          subscriptionData.fields = {
            company_name: companyName,
          };
        }

        await fetch(
          `https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(subscriptionData),
          }
        );
      } catch (err) {
        console.error('Error adding to ConvertKit:', err);
        // Don't fail - email was saved and sent
      }
    }

    return NextResponse.json(
      { message: 'Thank you! I\'ll be in touch soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing subscription:', error);
    return NextResponse.json(
      { error: 'Failed to process subscription. Please try again.' },
      { status: 500 }
    );
  }
}
