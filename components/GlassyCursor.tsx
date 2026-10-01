"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR =
  "a, button, input, textarea, select, label, [role='button'], [data-cursor='interactive']";

export default function GlassyCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const root = document.documentElement;
    root.classList.add("custom-cursor-ready");

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;

      cursor.style.transform = `translate3d(${event.clientX - 7}px, ${event.clientY}px, 0)`;
      cursor.classList.add("is-visible");

      const target = event.target;
      const isInteractive =
        target instanceof Element && target.closest(INTERACTIVE_SELECTOR);
      cursor.classList.toggle("is-interactive", Boolean(isInteractive));
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (event.pointerType !== "touch") cursor.classList.add("is-pressed");
    };

    const handlePointerUp = () => cursor.classList.remove("is-pressed");
    const handlePointerLeave = () => {
      cursor.classList.remove("is-visible", "is-pressed", "is-interactive");
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    window.addEventListener("pointercancel", handlePointerUp, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
      window.removeEventListener("pointerleave", handlePointerLeave);
      root.classList.remove("custom-cursor-ready");
    };
  }, []);

  return (
    <div ref={cursorRef} aria-hidden="true" className="glassy-cursor">
      <span className="glassy-cursor__pointer" />
    </div>
  );
}
