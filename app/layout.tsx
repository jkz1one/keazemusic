import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "KEAZE",
  description: "Official site of Keaze",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@vercel/fonts@latest/geist/variable.css"
        />
      </head>
      <body className="font-sans antialiased bg-[var(--background)] text-[var(--foreground)]">
        {/* Header: wordmark + nav */}
        <header className="w-full px-6 py-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0">
        {/* Clickable Wordmark */}
        <Link href="/" className="text-2xl font-serif tracking-widest text-white hover:text-primary transition">
          KEAZE
        </Link>

        {/* Responsive Nav */}
        <nav className="flex flex-wrap justify-center sm:justify-end gap-6 text-md tracking-widest font-light uppercase text-gray-400">
          <Link href="/beats" className="hover:text-white transition">Beats</Link>
          <Link href="/studio" className="hover:text-white transition">Studio</Link>
          <Link href="/discography" className="hover:text-white transition">Discography</Link>
          <Link href="/store" className="hover:text-white transition">Store</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </nav>
      </header>



        <main>{children}</main>
      </body>
    </html>
  );
}
