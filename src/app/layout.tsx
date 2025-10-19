import type { Metadata } from "next";
import "../styles/globals.css";
import ClientHeader from "../components/header/ClientHeader";

export const metadata: Metadata = {
  title: "Old & Gold - Vintage Shopping",
  description: "Vintage shop for clothing and accessories inspired by tradition.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
