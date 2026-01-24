import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, companyName } = await request.json();

    if (!email || !email.includes('@')) {
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
