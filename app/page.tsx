import Book from "@/components/book/Book";
import MobilePortfolio from "@/components/mobile/MobilePortfolio";
import ScrollDetail from "@/components/ui/ScrollDetail";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      {/* DESKTOP 3D EXPEDITION BOOK (Screens >= 768px / md) */}
      <div className="hidden md:block h-screen w-screen overflow-hidden">
        <Book />
      </div>

      {/* MOBILE INFINITE EDITORIAL SCROLL (Screens < 768px) */}
      <div className="block md:hidden min-h-screen w-full">
        <MobilePortfolio />
      </div>

      {/* UNROLLING PARCHMENT SCROLL MODAL (Global for both Desktop & Mobile) */}
      <ScrollDetail />
    </main>
  );
}