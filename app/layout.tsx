import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Automation Solutions - Recover Your Team's First 500 Hours",
  description: "Reduce manual reconciliation time by 70% using AI-native Python pipelines",
};

const GA_MEASUREMENT_ID = "G-LMKSM39YCJ";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
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
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
