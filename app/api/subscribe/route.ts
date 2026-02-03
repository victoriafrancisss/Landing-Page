import { NextRequest, NextResponse } from 'next/server';

const EMAIL_MAX_LENGTH = 254;
const COMPANY_NAME_MAX_LENGTH = 200;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const companyName = typeof body.companyName === 'string' ? body.companyName.trim().slice(0, COMPANY_NAME_MAX_LENGTH) : undefined;

    if (!email || email.length > EMAIL_MAX_LENGTH || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // ConvertKit API integration
    const CONVERTKIT_API_KEY = process.env.CONVERTKIT_API_KEY;
    const CONVERTKIT_FORM_ID = process.env.CONVERTKIT_FORM_ID;

    if (!CONVERTKIT_API_KEY || !CONVERTKIT_FORM_ID) {
      console.error('ConvertKit credentials not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Prepare the subscription data
    const subscriptionData: any = {
      api_key: CONVERTKIT_API_KEY,
      email: email,
    };

    // Add company name as a custom field if provided
    if (companyName) {
      subscriptionData.fields = {
        company_name: companyName,
      };
    }

    // Subscribe to ConvertKit
    const convertkitResponse = await fetch(
      `https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscriptionData),
      }
    );

    if (!convertkitResponse.ok) {
      const errorData = await convertkitResponse.json();
      console.error('ConvertKit error:', errorData);
      return NextResponse.json(
        { error: 'Failed to subscribe. Please try again.' },
        { status: 500 }
      );
    }

    // Success! ConvertKit will automatically:
    // 1. Add them to your list
    // 2. Send your welcome email sequence (if configured)
    // 3. Trigger any automation you've set up

    return NextResponse.json(
      { message: 'Successfully subscribed! Check your email for the Automation Checklist.' },
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
