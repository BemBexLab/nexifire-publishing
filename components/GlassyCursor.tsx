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
      <svg
        className="glassy-cursor__pointer"
        viewBox="0 0 36 52"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.156 1.915C2.668 1.082 1 2.157 1 3.86v41.667c0 1.933 2.265 2.976 3.734 1.72l9.537-8.157c.73-.625 1.855-.402 2.281.453l4.645 9.332c.49.986 1.69 1.407 2.7.946l6.286-2.865c1.093-.498 1.575-1.792 1.071-2.883l-4.598-9.969c-.38-.823-.05-1.799.75-2.219l6.774-3.561c1.646-.866 1.695-3.201.083-4.135L4.156 1.915Z"
          fill="#000000"
          stroke="#ffffff"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
