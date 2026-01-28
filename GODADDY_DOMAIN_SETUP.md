# Connecting Your GoDaddy Domain to Vercel

This guide will help you connect your GoDaddy domain to your Vercel deployment.

## Step 1: Add Domain in Vercel

1. Go to your Vercel project dashboard
2. Click on **Settings** → **Domains**
3. Enter your domain (e.g., `yourdomain.com`)
4. Click **Add**
5. Vercel will show you the DNS records you need to configure

**Important:** Copy the exact values Vercel shows you. They will look something like:
- **A Record:** `216.198.79.1` (for root domain)
- **CNAME Record:** `cname.vercel-dns.com.` (for www subdomain)

## Step 2: Configure DNS in GoDaddy

### Option A: Using DNS Management (Recommended)

1. **Log in to GoDaddy**
   - Go to [godaddy.com](https://godaddy.com) and sign in
   - Click on your name in the top right → **My Products**

2. **Find Your Domain**
   - Scroll down to "Domains" section
   - Find your domain and click **DNS** (or click the three dots → **Manage DNS**)

3. **Add/Edit DNS Records**

   **For Root Domain (yourdomain.com):**
   - Look for an existing **A Record** with Name `@` or blank
   - If it exists, click the **pencil icon** to edit it
   - If it doesn't exist, click **Add** → **A**
   - Set:
     - **Name:** `@` (or leave blank)
     - **Value:** Enter the IP address from Vercel (e.g., `216.198.79.1`)
     - **TTL:** 600 seconds (or default)
   - Click **Save**

   **For WWW Subdomain (www.yourdomain.com):**
   - Look for an existing **CNAME Record** with Name `www`
   - If it exists, click the **pencil icon** to edit it
   - If it doesn't exist, click **Add** → **CNAME**
   - Set:
     - **Name:** `www`
     - **Value:** Enter the CNAME from Vercel (e.g., `cname.vercel-dns.com.`)
     - **TTL:** 600 seconds (or default)
   - Click **Save**

4. **Remove Conflicting Records (if needed)**
   - If you see any A or CNAME records pointing to GoDaddy's parking page or other services, you can delete them (but keep email-related records like MX, TXT for email)

### Option B: Using Vercel Nameservers (Alternative)

If you prefer to manage DNS entirely through Vercel:

1. In Vercel → Settings → Domains → Your Domain
2. Look for "Use Vercel Nameservers" option
3. Copy the nameservers Vercel provides (usually 4 nameservers)
4. In GoDaddy:
   - Go to your domain's DNS settings
   - Scroll to "Nameservers" section
   - Click **Change**
   - Select **Custom**
   - Enter the 4 nameservers from Vercel
   - Click **Save**

## Step 3: Verify in Vercel

1. Go back to Vercel → Settings → Domains
2. You should see your domain listed
3. Status will show:
   - **"Pending"** or **"Configuring"** initially
   - **"Valid Configuration"** once DNS propagates

## Step 4: Wait for DNS Propagation

- **Typical time:** 5-30 minutes
- **Maximum time:** Up to 48 hours (rare)
- You can check status in Vercel dashboard
- Test your domain: Visit `yourdomain.com` and `www.yourdomain.com`

## Troubleshooting

### Domain Not Connecting?

1. **Double-check DNS records** in GoDaddy match exactly what Vercel shows
   - Make sure there's no trailing spaces
   - For CNAME, include the trailing dot (`.`) if Vercel shows it
   
2. **Wait longer** - DNS can take time to propagate globally
   - Use [dnschecker.org](https://dnschecker.org) to check propagation worldwide

3. **Check for conflicting records**
   - Make sure you don't have multiple A records for `@`
   - Make sure you don't have multiple CNAME records for `www`

4. **Verify domain ownership**
   - Make sure you own the domain in GoDaddy
   - Check that the domain isn't locked or expired

### Still Having Issues?

- Check Vercel's domain status page for specific error messages
- Verify DNS records are correct using: https://dnschecker.org
- Contact Vercel support or GoDaddy support if needed

## Important Notes

- **Don't delete** the domain from GoDaddy - just update DNS records
- **Keep GoDaddy as registrar** - you're only changing where the domain points
- **SSL Certificate** - Vercel will automatically provision an SSL certificate once DNS is configured (usually within minutes)
- **Email** - If you use email with this domain, keep your MX records in GoDaddy. Only change A and CNAME records for web traffic.

---

**After setup is complete:**
- Your site will be accessible at `yourdomain.com` and `www.yourdomain.com`
- Vercel will handle HTTPS automatically
- Any changes you push to GitHub will automatically deploy
