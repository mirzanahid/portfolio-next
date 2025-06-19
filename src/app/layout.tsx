import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mirza Nahid",
  description: "I'ts a Mirza Nahid's Portfolio who is a Mern stack developer.",
  icons: {
    icon: '/mn-favicon.svg',
  },

  openGraph: {
    title: 'Mirza Nahid',
    description: "I'ts a Mirza Nahid's Portfolio who is a Mern stack developer",
    url: 'https://mirzanahid.vercel.app/',
    siteName: "Mirza Nahid's Portfolio",
    images: [
      {
        url: 'https://mirzanahid.vercel.app/thumbnail.png', // 🔗 Your thumbnail image (absolute URL)
        width: 1200,
        height: 630,
        alt: "Mirza Nahid's Portfolio Thumbnail",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mirza Nahid',
    description: "I'ts a Mirza Nahid's Portfolio who is a Mern stack developer.",
    images: ['https://mirzanahid.vercel.app/thumbnail.png'],
  },

};







export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
