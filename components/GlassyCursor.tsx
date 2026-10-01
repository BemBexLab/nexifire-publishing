"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

type CursorState = {
  x: number;
  y: number;
  visible: boolean;
  pressed: boolean;
  interactive: boolean;
};

const INTERACTIVE_SELECTOR =
  "a, button, input, textarea, select, label, [role='button'], [data-cursor='interactive']";

export default function GlassyCursor() {
  const frameRef = useRef<number | null>(null);
  const [cursorState, setCursorState] = useState<CursorState>({
    x: 0,
    y: 0,
    visible: false,
    pressed: false,
    interactive: false,
  });

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !window.matchMedia("(pointer: fine)").matches
    ) {
      return;
    }

    const updateInteractive = (eventTarget: EventTarget | null) => {
      const element =
        eventTarget instanceof Element
          ? eventTarget.closest(INTERACTIVE_SELECTOR)
          : null;

      setCursorState((previous) => ({
        ...previous,
        interactive: Boolean(element),
      }));
    };

    const handlePointerMove = (event: PointerEvent) => {
      setCursorState((previous) => ({
        ...previous,
        x: event.clientX,
        y: event.clientY,
        visible: true,
      }));

      updateInteractive(event.target);
    };

    const handlePointerDown = () => {
      setCursorState((previous) => ({ ...previous, pressed: true }));
    };

    const handlePointerUp = () => {
      setCursorState((previous) => ({ ...previous, pressed: false }));
    };

    const handlePointerLeave = () => {
      setCursorState((previous) => ({ ...previous, visible: false }));
    };

    const handlePointerEnter = () => {
      setCursorState((previous) => ({ ...previous, visible: true }));
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("pointerenter", handlePointerEnter);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("pointerenter", handlePointerEnter);
    };
  }, [cursorState.visible]);

  return (
    <div
      aria-hidden="true"
      className={`glassy-cursor ${cursorState.visible ? "is-visible" : ""} ${
        cursorState.pressed ? "is-pressed" : ""
      } ${cursorState.interactive ? "is-interactive" : ""}`}
      style={
        {
          "--cursor-x": `${cursorState.x}px`,
          "--cursor-y": `${cursorState.y}px`,
        } as CSSProperties
      }
    >
      <span className="glassy-cursor__pointer" />
    </div>
  );
}
