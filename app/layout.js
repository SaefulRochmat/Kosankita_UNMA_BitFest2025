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

export const metadata = {
  title: "Landing Page - Universitas CIC",
  description: "Universitas Catur Insan Cendekia - Mencetak Generasi Unggul dan Berdaya Saing Global",
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      url: '/Image/logo_title.png',
    },
    {
      rel: 'shortcut icon',
      type: 'image/png',
      url: '/Image/logo_title.png',
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      url: '/Image/logo_title.png',
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/Image/logo_title.png" />
        <link rel="shortcut icon" type="image/png" href="/Image/logo_title.png" />
        <link rel="apple-touch-icon" type="image/png" href="/Image/logo_title.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
