"use client";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LztProvider from "@/context/Lztcontext";
import ScrollToTopButton from "@/components/ScrollToTopButton";

import { ModalProvider } from "@/context/ModalContext";
import LeadFormModal from "@/components/LeadFormModal";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body>
        <ModalProvider>
          <LztProvider>
            <Header />
            <main className="mt-[76px]">{children}</main>
            <ScrollToTopButton />
            <Footer />
          </LztProvider>
          <LeadFormModal />
        </ModalProvider>
      </body>
    </html>
  );
}
