export const BOOK_SECTIONS = ["about", "projects", "projects-2", "skills", "story", "contact"] as const;
export type BookSectionId = (typeof BOOK_SECTIONS)[number];
export interface PageTurn {
  id: number;
  from: BookSectionId;
  to: BookSectionId;
  mode: "auto" | "drag";
}
export interface NavigationState {
  isOpen: boolean;
  activeSection: BookSectionId;
  turn: PageTurn | null;
  revision: number;
}
export type NavigationAction =
  | { type: "open" | "close" | "next" | "prev" | "cancel" }
  | { type: "navigate"; to: BookSectionId; mode?: PageTurn["mode"] }
  | { type: "finish"; id: number; commit: boolean };
export const initialNavigation: NavigationState = {
  isOpen: true, activeSection: "about", turn: null, revision: 0,
};

// Requests and completions stay atomic, including events in the same frame.
export function navigationReducer(state: NavigationState, action: NavigationAction): NavigationState {
  if (action.type === "close") return { ...state, isOpen: false, activeSection: "about", turn: null, revision: state.revision + 1 };
  if (action.type === "cancel") return { ...state, turn: null };
  if (action.type === "open") return { ...state, isOpen: true };
  if (action.type === "finish") {
    if (state.turn?.id !== action.id) return state;
    return { ...state, activeSection: action.commit ? state.turn.to : state.activeSection, turn: null };
  }
  if (!state.isOpen || state.turn) return state;
  const index = BOOK_SECTIONS.indexOf(state.activeSection);
  if (action.type === "prev" && index === 0) return navigationReducer(state, { type: "close" });
  const to = action.type === "navigate" ? action.to : BOOK_SECTIONS[index + (action.type === "next" ? 1 : -1)];
  if (!to || to === state.activeSection || !BOOK_SECTIONS.includes(to)) return state;
  const id = state.revision + 1;
  return { ...state, revision: id, turn: { id, from: state.activeSection, to, mode: action.type === "navigate" ? action.mode ?? "auto" : "auto" } };
}
