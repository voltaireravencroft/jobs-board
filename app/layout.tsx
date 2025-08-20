// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

// (Optional) if you're using the Geist font in your project, keep these.
// If not using these fonts, remove the Geist bits + <body className={...}>
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ravencroft Jobs — Demo Job Board",
  description: "Next.js + Supabase job board with Sentry monitoring.",
  metadataBase: new URL("https://ravencroft-jobs.vercel.app"),
  openGraph: {
    title: "Ravencroft Jobs — Demo Job Board",
    description: "Next.js + Supabase job board with Sentry monitoring.",
    url: "https://ravencroft-jobs.vercel.app",
    siteName: "Ravencroft Jobs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravencroft Jobs — Demo Job Board",
    description: "Next.js + Supabase job board with Sentry monitoring.",
  },
};

// ✅ This is the required default export React component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* If you kept Geist above, keep the className; otherwise just <body> */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
