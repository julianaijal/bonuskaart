import type { Metadata } from "next";
import "./globals.scss";
import "./styles/main.scss";

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
