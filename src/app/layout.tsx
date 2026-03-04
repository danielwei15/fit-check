import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RECODE: Black Jacket Patch Blazer | SSENSE",
  description: "Buy RECODE Black Jacket Patch Blazer on SSENSE.com and get free shipping & returns in US. Paneled wool twill and stretch wool-blend twill blazer.",
  icons: {
    icon: "https://ext.same-assets.com/1677610041/3195598470.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
