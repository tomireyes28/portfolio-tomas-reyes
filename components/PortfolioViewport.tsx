"use client";

import { useSyncExternalStore } from "react";
import dynamic from "next/dynamic";
import MobilePortfolio from "@/components/mobile/MobilePortfolio";
import ScrollDetail from "@/components/ui/ScrollDetail";
import { BOOK_VIEWPORT_QUERY } from "@/lib/bookViewport";

const Book = dynamic(() => import("@/components/book/Book"), {
  ssr: false,
  loading: () => <div className="book-loading" role="status" aria-label="Portfolio"><span /></div>,
});
const subscribe = (callback: () => void) => {
  const media = window.matchMedia(BOOK_VIEWPORT_QUERY);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
};
const getSnapshot = () => window.matchMedia(BOOK_VIEWPORT_QUERY).matches;
const getServerSnapshot = () => false;

export default function PortfolioViewport() {
  // Continuous content remains server rendered for crawlers and narrow viewports.
  const desktop = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return <>
    {desktop ? <div className="portfolio-book-view"><Book /></div> : <div className="portfolio-scroll-view"><MobilePortfolio /></div>}
    <ScrollDetail />
  </>;
}
