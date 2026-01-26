# Connecting Your Domain to Vercel

This guide will help you connect `victoria-francis.com` (managed by Squarespace) to your Vercel deployment.

## Step 1: Add Domain in Vercel

1. Go to your Vercel project dashboard
2. Click on **Settings** → **Domains**
3. Enter your domain: `victoria-francis.com`
4. Click **Add**
5. Vercel will show you the DNS records you need to configure

## Step 2: Configure DNS in Squarespace

1. Go to your Squarespace account
2. Navigate to **Domains** → **DNS** (left sidebar)
3. You'll see your current DNS records

### Use the values from YOUR Vercel Domains page

Vercel shows project-specific records. Use the **exact** Type, Name, and Value from Vercel. Typical values:

**For Root Domain (`victoria-francis.com`):**
- **Type:** A
- **Name:** @ (or leave blank)
- **Value:** `216.198.79.1` (from Vercel—your project may show a different IP; always use what Vercel shows)
- **TTL:** 4 hrs or default

**For WWW (`www.victoria-francis.com`):**
- **Type:** CNAME
- **Name:** www
- **Value:** `347bcf8134a51620.vercel-dns-017.com.` (from Vercel—your project may show a different hostname; always use what Vercel shows)
- **TTL:** 4 hrs or default

### In Squarespace: change where the domain points

1. **Squarespace Defaults**  
   Those records currently point `victoria-francis.com` and `www` to Squarespace. To use Vercel, they must point to Vercel instead.

2. **Option A – Prefer “Custom records” (recommended)**  
   - In DNS settings, open **Custom Records** (or “Add record” / “Manage custom records”).
   - Add:
     - **A** — Name: `@` → Value: `216.198.79.1` (or whatever Vercel shows for the root).
     - **CNAME** — Name: `www` → Value: `347bcf8134a51620.vercel-dns-017.com.` (or whatever Vercel shows for www).
   - If Squarespace lets you remove or override the default A and www CNAME, do that so only these custom records control `@` and `www`.

3. **Option B – If Squarespace won’t let you remove defaults**  
   - Use **Domain Forwarding** or **“Connect external site”**-style options to point the domain to your Vercel URL, if available.
   - Or in **Domain Nameservers**, switch to **Custom** and use Vercel’s nameservers (Vercel → Domains → your domain → “Use Vercel nameservers” or similar). Only do this if you’re comfortable managing DNS at Vercel.

4. **Leave these as they are**  
   - **Email Security** (TXT records for `_domainkey`, `_dmarc`, `@`)  
   - **Squarespace Domain Forwarding** for `automation` (e.g. `automation` → `ext-sq.squarespace.com`) unless you want that subdomain to point to Vercel too.

## Step 3: Verify in Vercel

1. Go back to Vercel → Settings → Domains
2. You should see the domain status
3. It may show "Pending" or "Configuring" initially
4. Once DNS propagates, it will show "Valid Configuration"

## Step 4: Wait for DNS Propagation

- **Typical time:** 5-30 minutes
- **Maximum time:** Up to 48 hours (rare)
- You can check status in Vercel dashboard

## Troubleshooting

### Domain Not Connecting?
1. **Double-check DNS records** in Squarespace match exactly what Vercel shows
2. **Wait longer** - DNS can take time to propagate
3. **Check Vercel logs** for any error messages
4. **Verify domain ownership** - make sure you own the domain

### Still Having Issues?
- Check Vercel's domain status page for specific error messages
- Verify DNS records are correct using: https://dnschecker.org
- Contact Vercel support if needed

## Important Notes

- **Don't delete** the domain from Squarespace - just update DNS records
- **Keep Squarespace as registrar** - you're only changing where the domain points
- **SSL Certificate** - Vercel will automatically provision an SSL certificate once DNS is configured

---

**After setup is complete:**
- Your site will be accessible at `victoria-francis.com` and `www.victoria-francis.com`
- Vercel will handle HTTPS automatically
- Any changes you push to GitHub will automatically deploy
