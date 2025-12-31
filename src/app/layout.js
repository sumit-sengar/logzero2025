// src/app/layout.js
"use client";

import { usePathname } from "next/navigation";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Providers from "./providers";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body>
        <Providers>
          {!isAdminRoute && <Header />}
          <main className={!isAdminRoute ? "mt-[76px]" : ""}>{children}</main>
          {!isAdminRoute && <ScrollToTopButton />}
          {!isAdminRoute && <Footer />}
        </Providers>
      </body>
    </html>
  );
}