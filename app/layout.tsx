import type { Metadata, Viewport } from "next";
import "./globals.scss";
import "./styles/main.scss";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ahbonuskaart.online";
const siteName = "Mijn AH Bonuskaart";
const pageTitle = "Mijn AH Bonuskaart - Nooit meer je kaart vergeten!";
const pageDescription = "Altijd je Albert Heijn Bonuskaart bij de hand. Handig als je je fysieke kaart bent vergeten. Scan de barcode direct vanaf je telefoon."; // Renamed
const imageUrl = `/img/barcode.svg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon', sizes: 'any' },
      { url: '/icons/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon/32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon/192.png', type: 'image/png', sizes: '192x192' },
      { url: '/favicon/256.png', type: 'image/png', sizes: '256x256' },
      { url: '/icon-384x384.png', type: 'image/png', sizes: '384x384' },
      { url: '/favicon/512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: { url: '/favicon.ico', type: 'image/x-icon' },
  },
  description: pageDescription,
  applicationName: siteName,
  keywords: ["bonuskaart", "korting", "digitaal", "barcode", "pas", "klantenkaart"],
  
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: siteUrl,
    siteName: siteName,
    images: [
      {
        url: imageUrl,
        width: 1200, 
        height: 630,
        alt: "Bonuskaart Barcode",
      },
    ],
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image", 
    title: pageTitle,
    description: pageDescription,
    images: [imageUrl],
  },
  appleWebApp: {
    capable: true,
    title: siteName,
    statusBarStyle: "default",
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

};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#179eda" },
    { media: "(prefers-color-scheme: dark)", color: "#003b73" }, 
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body>
        {children}
      </body>
    </html>
  );
}
