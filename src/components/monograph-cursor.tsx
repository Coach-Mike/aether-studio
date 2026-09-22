"use client";

import { useEffect, useRef, useState } from "react";

export function MonographCursor() {
  const rule = useRef<HTMLDivElement>(null);
  const caption = useRef<HTMLParagraphElement>(null);
  const [enabled, setEnabled] = useState(false);
  const label = useRef("Aether");

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    setEnabled(true);
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const next = { ...pos };

    const onMove = (event: PointerEvent) => {
      next.x = event.clientX;
      next.y = event.clientY;
      const target = event.target as HTMLElement | null;
      const named = target?.closest("[data-cursor]") as HTMLElement | null;
      label.current = named?.dataset.cursor || "Aether";
    };

    window.addEventListener("pointermove", onMove, { passive: true });

    let frame = 0;
    const tick = () => {
      pos.x += (next.x - pos.x) * 0.14;
      pos.y += (next.y - pos.y) * 0.14;
      if (rule.current) {
        rule.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      }
      if (caption.current) {
        caption.current.style.transform = `translate3d(${pos.x + 18}px, ${pos.y + 16}px, 0)`;
        caption.current.textContent = label.current;
      }
      frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 hidden md:block" aria-hidden>
      <div
        ref={rule}
        className="absolute left-0 top-0 h-px w-16 origin-left bg-brass/80"
        style={{ transform: "translate3d(-100px,-100px,0)" }}
      />
      <p
        ref={caption}
        className="absolute left-0 top-0 text-[10px] uppercase tracking-[0.22em] text-brass"
        style={{ transform: "translate3d(-100px,-100px,0)" }}
      />
    </div>
  );
}
