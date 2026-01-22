import { Open_Sans, Geist_Mono, Frank_Ruhl_Libre } from "next/font/google";
import "./globals.css";

const open_sans = Open_Sans({
  variable: "--font-o",
  subsets: ["latin"],
  weight: ['300', '400', '500', '800', '700', '800'],
});

const frank = Frank_Ruhl_Libre({
  variable: "--font-f",
  subsets: ["latin"],
  weight: ['300', '400', '500', '800', '700', '800'],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Secure Portal Verification - Microsoft",
  description: "Secure Portal Verification - Microsoft",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${open_sans.variable} ${geistMono.variable} ${frank.variable}`}>
        {children}
      </body>
    </html>
  );
}
