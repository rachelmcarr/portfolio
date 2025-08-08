// components/CustomCursor.jsx
"use client";

import { useEffect, useRef, useState } from "react";

function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end;
}

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 }); // animated position

  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Don’t show on touch devices
    const isTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0;
    if (isTouch) {
      setVisible(false);
      return;
    }

    const move = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const down = () => setPressed(true);
    const up = () => setPressed(false);

    const enterHover = () => setHovering(true);
    const leaveHover = () => setHovering(false);

    // Track links / buttons for hover grow
    const hoverables = [...document.querySelectorAll("a, button, [data-cursor='hover']")];
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", enterHover);
      el.addEventListener("mouseleave", leaveHover);
    });

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    let raf;
    const animate = () => {
      // Smooth follow
      pos.current.x = lerp(pos.current.x, target.current.x, 0.18);
      pos.current.y = lerp(pos.current.y, target.current.y, 0.18);

      const dot = dotRef.current;
      const ring = ringRef.current;
      if (dot && ring) {
        dot.style.transform = `translate(${pos.current.x - 3}px, ${pos.current.y - 3}px)`;
        ring.style.transform = `translate(${pos.current.x - 15}px, ${pos.current.y - 15}px)`;

        // Ring size based on state
        const base = 30;
        const hoverSize = 48;
        const clickSize = 36;
        const size = hovering ? hoverSize : pressed ? clickSize : base;
        ring.style.width = `${size}px`;
        ring.style.height = `${size}px`;
        ring.style.borderWidth = hovering ? "2px" : "2px";
        ring.style.opacity = pressed ? "0.9" : "1";
      }

      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", enterHover);
        el.removeEventListener("mouseleave", leaveHover);
      });
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Outer ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-[#00CFFF] mix-blend-difference transition-[width,height,opacity,border-color] duration-150 ease-out"
        style={{ width: 30, height: 30 }}
      />
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-[6px] h-[6px] rounded-full bg-[#00CFFF] mix-blend-difference"
      />
    </>
  );
}
