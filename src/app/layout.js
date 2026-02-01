import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata = {
  title: "QueryQuant - AI Market Insights",
  description: "Your AI analyst for crypto & stocks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${orbitron.variable} antialiased`}
      >
        {children}
         <Footer />
        <CookieBanner />
      
      </body>
    </html>
  );
}
