import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bonuskaart",
  description: "Manage your Bonuskaart savings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
