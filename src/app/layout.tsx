import "@/styles/globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-neutral-900">
        <header className="border-b">
          <nav className="mx-auto flex max-w-5xl items-center justify-between p-4">
            <Link href="/" className="font-semibold">Old & Gold</Link>
            <div className="flex gap-6">
              <Link href="/catalog">Catalog</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-5xl p-4">{children}</main>
        <footer className="mx-auto max-w-5xl p-4 border-t text-sm text-neutral-500">© {new Date().getFullYear()} Old & Gold</footer>
      </body>
    </html>
  );
}
