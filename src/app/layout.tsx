import type { Metadata } from "next";
import "../styles/globals.css";
import ClientHeader from "../components/header/ClientHeader";
import { Footer } from "@/components/footer/Footer";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

export const metadata: Metadata = {
  title: "Old & Gold - Vintage Shopping",
  description: "Vintage shop for clothing and accessories inspired by tradition.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientHeader />
        <main>
          {/*This cache provider makes sure that MUI’s Emotion-generated class names are the same on the server and client, which removes that hydration error.*/}
          <AppRouterCacheProvider>
            {children}
          </AppRouterCacheProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
