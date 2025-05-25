import type { Metadata } from "next";
import "./globals.scss";
import "./styles/main.scss";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bonuskaart.julian-aijal.pages.dev";
const siteName = "Mijn AH Bonuskaart";
const pageTitle = "Mijn AH Bonuskaart - Nooit meer je kaart vergeten!";
const pageDescription = "Altijd je Albert Heijn Bonuskaart bij de hand. Handig als je je fysieke kaart bent vergeten. Scan de barcode direct vanaf je telefoon."; // Renamed
const imageUrl = `/img/barcode.jpeg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
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
        alt: "AH Bonuskaart Barcode",
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

  manifest: "/manifest.json", 
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
