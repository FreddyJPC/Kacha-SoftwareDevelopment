import { useEffect, useState, useRef } from "react";

const SPOT_RADIUS = 250;
const SPOT_SIZE = SPOT_RADIUS * 2;

export default function CursorSpotlight() {
  const [isMobile, setIsMobile] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const spotRef = useRef(null);
  const rafRef = useRef(0);
  const pendingRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const checkMobile = () =>
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0;

    setIsMobile(checkMobile());

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncReduce = () => setReduceMotion(mq.matches);
    syncReduce();
    mq.addEventListener("change", syncReduce);
    return () => mq.removeEventListener("change", syncReduce);
  }, []);

  useEffect(() => {
    if (isMobile || reduceMotion || !spotRef.current) return;

    const el = spotRef.current;

    const flush = () => {
      rafRef.current = 0;
      const { x, y } = pendingRef.current;
      el.style.transform = `translate3d(${x - SPOT_RADIUS}px, ${y - SPOT_RADIUS}px, 0)`;
    };

    const handleMouseMove = (e) => {
      pendingRef.current = { x: e.clientX, y: e.clientY };
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(flush);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isMobile, reduceMotion]);

  if (isMobile || reduceMotion) return null;

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 1,
        overflow: "hidden",
        contain: "strict",
      }}
    >
      <div
        ref={spotRef}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: SPOT_SIZE,
          height: SPOT_SIZE,
          borderRadius: "50%",
          willChange: "transform",
          mixBlendMode: "screen",
          background: `radial-gradient(
            circle ${SPOT_RADIUS}px at center,
            rgba(30, 179, 139, 0.6) 0%,
            transparent 100%
          )`,
          transform: "translate3d(-9999px, -9999px, 0)",
        }}
      />
    </div>
  );
}
