import type { Metadata } from "next";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./components/Navbar";
import "./globals.css";

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
      <body>
        <Navbar />
        <main className="container mt-2">{children}</main>
      </body>
    </html>
  );
}
