import type { Metadata } from "next";
import "../styles/globals.css";
import ClientHeader from "../components/header/ClientHeader";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Old & Gold - Vintage Shopping",
  description: "Vintage shop for clothing and accessories inspired by tradition.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={playfair.className}>
      <body>
        <ClientHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
