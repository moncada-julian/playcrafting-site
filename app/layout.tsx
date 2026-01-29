import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Playcrafting - We Build Games",
  description: "We create games, produce exclusive events, and make waves for brands to leverage the power of play.",
  openGraph: {
    title: "Playcrafting - We Build Games",
    description: "We create games, produce exclusive events, and make waves for brands to leverage the power of play.",
    images: ["/images/misc/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-pc-dark text-pc-light antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
