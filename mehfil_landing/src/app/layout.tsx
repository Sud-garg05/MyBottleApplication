import type { Metadata, Viewport } from "next";
import { Inter, Syne } from "next/font/google";
import LenisProvider from "@/components/LenisProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Mehfil — Your Night. Your People. Your Bottle.",
  description: "Mehfil is the social, identity, and retention layer of India's nightlife. Reserve premium bottles, build your Taste DNA, and belong to the culture.",
  keywords: ["Mehfil", "nightlife", "digital wallet", "bottle wallet", "clubs Bangalore", "social identity", "exclusive events"],
  authors: [{ name: "Mehfil Team" }],
  openGraph: {
    title: "Mehfil — Your Night. Your People. Your Bottle.",
    description: "Mehfil is the social, identity, and retention layer of India's nightlife. Reserve premium bottles, build your Taste DNA, and belong to the culture.",
    url: "https://mehfil.ing",
    siteName: "Mehfil",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehfil — Your Night. Your People. Your Bottle.",
    description: "Mehfil is the social, identity, and retention layer of India's nightlife. Reserve premium bottles, build your Taste DNA, and belong to the culture.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#050506",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} h-full antialiased dark`}
      style={{ colorScheme: "dark" }}
    >
      <body className="bg-brand-black text-gray-100 font-sans selection:bg-brand-teal/20 selection:text-brand-teal min-h-full flex flex-col antialiased">
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
