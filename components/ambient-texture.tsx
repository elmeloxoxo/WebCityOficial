"use client";

import { useEffect } from "react";

export function AmbientTexture() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    let hasPointerPosition = false;

    const update = () => {
      currentX += (targetX - currentX) * 0.09;
      currentY += (targetY - currentY) * 0.09;
      root.style.setProperty("--ambient-x", `${currentX}px`);
      root.style.setProperty("--ambient-y", `${currentY}px`);

      if (Math.abs(targetX - currentX) + Math.abs(targetY - currentY) > 0.4) {
        frame = window.requestAnimationFrame(update);
      } else {
        frame = 0;
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" && event.pointerType !== "pen") return;
      targetX = event.clientX;
      targetY = event.clientY;
      root.classList.add("has-pointer");

      if (!hasPointerPosition) {
        currentX = targetX;
        currentY = targetY;
        root.style.setProperty("--ambient-x", `${currentX}px`);
        root.style.setProperty("--ambient-y", `${currentY}px`);
        hasPointerPosition = true;
      } else if (!frame) {
        frame = window.requestAnimationFrame(update);
      }
    };

    const onPointerLeave = () => {
      root.classList.remove("has-pointer");
      hasPointerPosition = false;
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      if (frame) window.cancelAnimationFrame(frame);
      root.classList.remove("has-pointer");
      root.style.removeProperty("--ambient-x");
      root.style.removeProperty("--ambient-y");
    };
  }, []);

  return <div className="ambient-texture" aria-hidden="true" />;
}
