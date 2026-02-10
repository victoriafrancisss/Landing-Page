import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "BoldScale Solutions - Recover Your Team's First 500 Hours",
  description: "Reduce manual reconciliation time by 70% using AI-native Python pipelines",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const GA_MEASUREMENT_ID = "G-LMKSM39YCJ";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <head>
        {/* Google Analytics 4 - at the very top of head for outreach campaign tracking */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LMKSM39YCJ"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-LMKSM39YCJ');`,
          }}
        />
      </head>
      <body className={`${spaceGrotesk.className} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
