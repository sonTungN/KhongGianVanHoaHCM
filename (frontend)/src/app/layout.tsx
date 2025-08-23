import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Open_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";


const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-playfair",
});

const openSans = Open_Sans({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Không gian Văn hoá Hồ Chí Minh",
  description: "Nơi lưu giữ và lan toả tư tưởng, đạo đức, phong cách của Người",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${playfair.variable} ${openSans.variable}`}>
      <body className="font-sans antialiased flex flex-col">
        <Navbar />

        <main className="min-h-screen mt-16">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
