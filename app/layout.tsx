import type { Metadata } from "next";
import "./globals.scss";
import "./styles/main.scss";

export const metadata: Metadata = {
  title: "Mijn AH Bonuskaart - Nooit meer je kaart vergeten!",
  description: "Altijd je Albert Heijn Bonuskaart bij de hand. Handig als je je fysieke kaart bent vergeten. Scan de barcode direct vanaf je telefoon.",
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
