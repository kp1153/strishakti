import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/providers/LenisProvider";
import GSAPProvider from "@/components/providers/GSAPProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: `${process.env.NEXT_PUBLIC_ORG_SHORT} - ${process.env.NEXT_PUBLIC_ORG_CURRENT_NAME}`,
  description: process.env.NEXT_PUBLIC_VISION,
  keywords:
    "NGO, education, health, awareness, social work, delhi ngo, child education, women empowerment, arp india, association of responsible professionals",
  authors: [{ name: process.env.NEXT_PUBLIC_ORG_SHORT }],
  creator: process.env.NEXT_PUBLIC_ORG_SHORT,
  publisher: process.env.NEXT_PUBLIC_ORG_SHORT,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `https://${process.env.NEXT_PUBLIC_WEBSITE}`,
    title: `${process.env.NEXT_PUBLIC_ORG_SHORT} - ${process.env.NEXT_PUBLIC_ORG_CURRENT_NAME}`,
    description: process.env.NEXT_PUBLIC_VISION,
    siteName: process.env.NEXT_PUBLIC_ORG_SHORT,
  },
  twitter: {
    card: "summary_large_image",
    title: `${process.env.NEXT_PUBLIC_ORG_SHORT} - ${process.env.NEXT_PUBLIC_ORG_CURRENT_NAME}`,
    description: process.env.NEXT_PUBLIC_VISION,
    creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="canonical"
          href={`https://${process.env.NEXT_PUBLIC_WEBSITE}`}
        />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LenisProvider>
          <GSAPProvider>
            <Navbar />
            <main className="min-h-screen pt-20">{children}</main>
            <Footer />
          </GSAPProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
