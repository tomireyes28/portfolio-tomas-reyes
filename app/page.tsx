import Book from "@/components/book/Book";
import MobilePortfolio from "@/components/mobile/MobilePortfolio";
import ScrollDetail from "@/components/ui/ScrollDetail";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      {/* DESKTOP 3D EXPEDITION BOOK (when the viewport fits two readable pages) */}
      <div className="portfolio-book-view">
        <Book />
      </div>

      {/* MOBILE INFINITE EDITORIAL SCROLL (compact, portrait and low-height viewports) */}
      <div className="portfolio-scroll-view">
        <MobilePortfolio />
      </div>

      {/* UNROLLING PARCHMENT SCROLL MODAL (Global for both Desktop & Mobile) */}
      <ScrollDetail />
    </main>
  );
}