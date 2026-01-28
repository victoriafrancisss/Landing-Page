# YouTube VSL on the Landing Page

The video section uses a **responsive YouTube embed** (same spot: below Hero, above 3-Step Plan).

## Set your video ID

1. **Upload your VSL** to YouTube (public or unlisted).
2. **Copy the Video ID** from the URL:
   - URL: `https://www.youtube.com/watch?v=ABC123xyz`
   - Video ID: `ABC123xyz`

3. **Use one of these:**

   **Option A – Environment variable (good for Vercel)**  
   In your Vercel project: **Settings → Environment Variables**  
   - Name: `NEXT_PUBLIC_YOUTUBE_VIDEO_ID`  
   - Value: your video ID (e.g. `ABC123xyz`)  
   Then redeploy.

   **Option B – In code**  
   In `app/page.tsx`, change:
   ```ts
   const YOUTUBE_VIDEO_ID = process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_ID || '';
   ```
   to:
   ```ts
   const YOUTUBE_VIDEO_ID = process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_ID || 'YOUR_VIDEO_ID';
   ```
   Replace `YOUR_VIDEO_ID` with your actual ID.

## Styling

The embed keeps:
- **Placement:** Below Hero, above “The 3-Step Recovery Plan”
- **Layout:** Responsive 16:9 (`aspect-video`)
- **Look:** `rounded-xl`, `shadow-2xl`, cyan border

If the ID is missing, a “Add your YouTube Video ID” placeholder is shown instead.
