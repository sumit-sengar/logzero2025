"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Header />}
      <main className={!isAdminRoute ? "mt-[76px]" : ""}>{children}</main>
      {!isAdminRoute && <ScrollToTopButton />}
      {!isAdminRoute && <Footer />}
    </>
  );
}