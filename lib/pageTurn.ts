export type TurnDirection = "next" | "prev";

/** Map edge travel to an angle without moving the binding away from the gutter. */
export function pageTurnAngle(offset: number, pageWidth: number, direction: TurnDirection) {
  const angle = (offset / Math.max(1, pageWidth * 0.9)) * 180;
  return direction === "next" ? Math.max(-180, Math.min(0, angle)) : Math.min(180, Math.max(0, angle));
}

export function shouldCompleteTurn(angle: number, velocity: number, direction: TurnDirection) {
  const sign = direction === "next" ? -1 : 1;
  if (sign * velocity <= -400) return false;
  // A flick must have lifted the page; a fast reverse flick cancels.
  return sign * angle >= 55 || (sign * angle >= 12 && sign * velocity >= 400);
}

export function turnSettleDuration(angle: number, destination: number) {
  return 0.18 + (Math.min(180, Math.abs(destination - angle)) / 180) * 0.28;
}
