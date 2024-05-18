import type { Metadata } from "next";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "My React App",
  description: "Belajar React dengan Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" />
      <body>
        <Navbar />
        <main className="container mt-2">{children}</main>
      </body>
    </html>
  );
}
