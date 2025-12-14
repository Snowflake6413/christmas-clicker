import type { Metadata } from "next";
import { Cinzel, Geist_Mono } from "next/font/google";
import "./globals.css";

const myFont = Cinzel({ // make sure to import from "next/font/google"!
	subsets: ["latin"],
	weight: "variable", // some fonts aren't variable, so you'll need to figure out what 
  // weight to use. Google Fonts can tell you this, usually.
	variable: "--font-cinzel", // for css
})

const geistSans = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "heidi clicker REAL",
  description: "on the first day of haxmas my orpheus gave to me.....a react orpheus clicker game!",
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
