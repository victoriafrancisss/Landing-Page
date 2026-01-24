# Fix: 403 Forbidden Error on Welcome Emails

## The Problem

You're seeing a **403 Forbidden** error when trying to send welcome emails. This happens because Resend's test domain (`onboarding@resend.dev`) has restrictions.

**What's working:**
- ✅ Notification emails to you (working)
- ✅ Email storage (working)

**What's not working:**
- ❌ Welcome emails to subscribers (403 error)

## The Solution: Verify Your Domain

To send emails reliably, you need to verify a domain in Resend. Here's how:

### Option 1: Verify Your Own Domain (Recommended for Production)

1. **Go to Resend Dashboard:**
   - Visit https://resend.com/domains
   - Click **"Add Domain"**

2. **Enter Your Domain:**
   - If you have a domain (e.g., `yourdomain.com`), enter it
   - If you don't have a domain, see Option 2 below

3. **Add DNS Records:**
   - Resend will show you DNS records to add
   - Go to your domain registrar (where you bought the domain)
   - Add the DNS records (usually TXT and MX records)
   - Wait for verification (can take a few minutes to 24 hours)

4. **Update the Code:**
   Once verified, update `app/api/send-checklist/route.ts`:
   ```typescript
   from: 'Victoria Francis <automation@yourdomain.com>',
   ```

### Option 2: Use a Subdomain (Quick Test)

If you don't have a domain, you can:
1. Use a free subdomain service
2. Or use Resend's test domain with restrictions (current setup)

### Option 3: Temporary Workaround

For immediate testing, you can send emails only to verified addresses. But this won't work for real subscribers.

## Quick Test After Domain Verification

1. **Restart your server:**
   ```bash
   npm run dev
   ```

2. **Test the form again**
3. **Check Resend dashboard** - should show status `200` instead of `403`

## Need Help?

- Resend Domain Setup: https://resend.com/docs/dashboard/domains/introduction
- Resend Support: Check their docs or support

## Current Status

- ✅ API key configured
- ✅ Notification emails working
- ⚠️ Welcome emails blocked (need domain verification)
