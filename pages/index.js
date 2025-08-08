// pages/index.js
import { useEffect } from "react";
import { useRouter } from "next/router";

import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Motivation from "../components/Motivation";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import CTA from "../components/CTA";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // If URL has a hash, scroll to the element after the page mounts
    if (typeof window === "undefined") return;

    const hashIndex = router.asPath.indexOf("#");
    if (hashIndex > -1) {
      const id = router.asPath.slice(hashIndex + 1);
      // slight delay so the layout is painted before scrolling
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [router.asPath]);

  return (
    <>
      {/* Make sure each of these components renders a section with a matching id */}
      {/* e.g., <section id="home-hero"> in Hero, <section id="about"> in About, etc. */}
      <Hero />
      <About />
      <Projects />
      <Education />
      <Motivation />
      <Experience />
      <Skills />
      <CTA />
    </>
  );
}
