import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Script from "next/script";

const lato = Lato({
  weight: ["300", "400"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Kaifei Landscaping - Transform Your Outdoor Space",
  description: "Professional landscaping services for residential and commercial properties. Over 20 years of experience creating beautiful outdoor spaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://api.mapbox.com/mapbox-gl-js/v3.1.0/mapbox-gl.css" rel="stylesheet" />
      </head>
      <body className={`${lato.variable} font-sans antialiased`}>
        <Script src="https://api.mapbox.com/mapbox-gl-js/v3.1.0/mapbox-gl.js" strategy="beforeInteractive" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
