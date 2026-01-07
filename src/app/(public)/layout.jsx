import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function PublicLayout({ children }) {
  return (
    <>
      <Header />
      <main className="mt-[76px]">
        {children}
      </main>
      <ScrollToTopButton />
      <Footer />
    </>
  );
}
