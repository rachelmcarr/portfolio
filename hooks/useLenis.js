// hooks/useLenis.js
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

// nice gentle ease-out
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
// or spicier: const easeOutExpo = (t) => 1 - Math.pow(2, -10 * t);

export default function useLenis() {
  const lenisRef = useRef(null);
  const rafIdRef = useRef(null);

  useEffect(() => {
    if (lenisRef.current) return;

    const lenis = new Lenis({
      // lengthen the glide a bit
      duration: 1.15,          // try 1.0–1.4
      easing: easeOutCubic,    // smooth deceleration
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 0.9,    // lower = less “jerk” per wheel step
      touchMultiplier: 1.1,
      normalizeWheel: true,
    });
    lenisRef.current = lenis;
    if (typeof window !== "undefined") window.lenis = lenis;

    const raf = (time) => {
      lenis.raf(time);
      rafIdRef.current = requestAnimationFrame(raf);
    };
    rafIdRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);
}
