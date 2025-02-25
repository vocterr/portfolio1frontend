import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Topbar } from "@/components/Topbar/Topbar";
import { FiLinkedin, FiTwitter, FiYoutube } from "react-icons/fi";
import { Footer } from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "finAI",
  description: "Your assistant on a daily transactions",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full">
      <body
        className={`text-gray-300 antialiased h-full w-full flex flex-col bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A] font-inter`}
      >

        <Topbar />


        <div className="flex flex-grow">{children}</div>

        <Footer/>
      </body>
    </html>
  );
}
