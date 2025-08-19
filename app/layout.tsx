import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Ravencroft Jobs — Demo Job Board',
  description: 'Next.js + Supabase job board with Sentry monitoring.',
  metadataBase: new URL('https://ravencroft-jobs.vercel.app'),
  openGraph: {
    title: 'Ravencroft Jobs — Demo Job Board',
    description: 'Next.js + Supabase job board with Sentry monitoring.',
    url: 'https://ravencroft-jobs.vercel.app',
    siteName: 'Ravencroft Jobs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ravencroft Jobs — Demo Job Board',
    description: 'Next.js + Supabase job board with Sentry monitoring.',
  },
};

