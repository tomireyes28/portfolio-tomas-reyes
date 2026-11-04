import React from "react";

/** The open book shows its gutter and endbands, rather than its outer spine. */
export default function BookSpine() {
  return (
    <div className="book-gutter" aria-hidden="true">
      <span className="book-endband book-endband-top" />
      <span className="book-binding-seam" />
      <span className="book-endband book-endband-bottom" />
      <span className="book-tail-ribbon" />
    </div>
  );
}
