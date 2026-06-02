import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://judithogbara.com"),
  title: {
    default: "Hon. Dr. Judith Mayen Ogbara | Official Profile",
    template: "%s | Judith Ogbara",
  },
  description:
    "Public Servant, Philanthropist, Governance Advocate, and Community Leader dedicated to empowering women, advancing education, and driving sustainable impact.",
  openGraph: {
    title: "Hon. Dr. Judith Mayen Ogbara | Official Profile",
    description:
      "Public Servant, Philanthropist, Governance Advocate, and Community Leader dedicated to empowering women, advancing education, and driving sustainable impact.",
    url: "https://judithogbara.com",
    siteName: "Judith Ogbara",
    images: [
      {
        url: "/images/judith-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Hon. Dr. Judith Mayen Ogbara",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hon. Dr. Judith Mayen Ogbara | Official Profile",
    description:
      "Public Servant, Philanthropist, Governance Advocate, and Community Leader dedicated to empowering women, advancing education, and driving sustainable impact.",
    images: ["/images/judith-preview.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}