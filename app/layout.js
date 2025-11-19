import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ARP India - Association of Responsible Professionals",
  description:
    "Empowering marginalized communities through education, health, and awareness since 2014. A registered NGO working for inclusive growth and social development in India.",
  keywords:
    "NGO India, ARP India, education NGO, health awareness, social work, Delhi NGO, marginalized communities, skill development, free education",
  authors: [{ name: "ARP India" }],
  creator: "ARP India",
  publisher: "ARP India",
  metadataBase: new URL("https://www.arpindia.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ARP India - Association of Responsible Professionals",
    description:
      "Empowering marginalized communities through education, health, and awareness since 2014.",
    url: "https://www.arpindia.org",
    siteName: "ARP India",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ARP India - Social Development Organization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ARP India - Association of Responsible Professionals",
    description:
      "Empowering marginalized communities through education, health, and awareness since 2014.",
    creator: "@arpindiaorg",
    images: ["/og-image.jpg"],
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
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Additional SEO Tags */}
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Delhi" />
        <meta name="geo.position" content="28.6139;77.2090" />
        <meta name="ICBM" content="28.6139, 77.2090" />

        {/* Theme Color */}
        <meta name="theme-color" content="#1e3a8a" />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              name: "ARP India - Association of Responsible Professionals",
              alternateName: "ARP India",
              url: "https://www.arpindia.org",
              logo: "https://www.arpindia.org/logo.png",
              description:
                "Empowering marginalized communities through education, health, and awareness since 2014.",
              foundingDate: "2014",
              founder: {
                "@type": "Person",
                name: "Dr. Raza Quadir",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "RZ-44, Third Floor, Gali No 1, Geetanjali Park, West Sagarpur-1",
                addressLocality: "Delhi",
                postalCode: "110046",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9523534038",
                contactType: "customer service",
                email: "info.arpindia@gmail.com",
              },
              sameAs: [
                "https://www.facebook.com/arpindiaorg",
                "https://twitter.com/arpindiaorg",
                "https://www.instagram.com/arpindiaorg",
                "https://www.youtube.com/@arpindiaorg",
              ],
              areaServed: {
                "@type": "Country",
                name: "India",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
