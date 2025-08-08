import HashLink from "./HashLink";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-black text-white w-full px-6 md:px-24 py-20">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Left: Text & Links */}
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="font-inter font-bold text-[90px] leading-[87px] tracking-[-4.3px] uppercase">
            LET’S WORK TOGETHER.
          </h2>
          <p className="mt-4 text-md md:text-lg font-semibold uppercase">
            "Driven to learn. Ready to build. Let’s create something meaningful together."
          </p> <br></br>

          <Link href="/contact#contact-form" className="mt-6 px-4 py-2 border border-white hover:bg-white hover:text-black font-semibold text-sm uppercase tracking-wider transition duration-200">Contact Now</Link>

          <div className="mt-6 space-x-6 text-sm font-semibold uppercase">
            <a href="https://github.com/rachelmcarr" target="_blank" rel="noopener noreferrer" className="underline hover:text-cyan-400">
              GitHub 🡭
            </a>
            <a href="https://wgu.joinhandshake.com/profiles/h29daa" target="_blank" rel="noopener noreferrer" className="underline hover:text-cyan-400">
              Handshake 🡭
            </a>
            <a href="www.linkedin.com/in/rachelmcarr" target="_blank" rel="noopener noreferrer" className="underline hover:text-cyan-400">
              LinkedIn 🡭
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="mt-12 md:mt-0 md:w-1/3 flex justify-center">
          <img
            src="/images/rachelcarr.jpg"
            alt="Rachel Carr Headshot"
            className="rounded-md shadow-lg w-64 h-auto object-cover"
          />
        </div>
      </div>

      {/* Name Banner */}
      <h1 className="text-[80px] md:text-[120px] font-extrabold tracking-tight text-center mt-12">
        RACHELCARR<span className="inline-block w-6 h-6 md:w-10 md:h-10 bg-cyan-500 rounded-full ml-2 align-middle"></span>
      </h1>

      {/* Footer */}
      <footer className="mt-24 border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <span className="mb-4 md:mb-0">&copy;2025</span>
        <span><HashLink href="#home-hero" className="uppercase font-semibold">BACK TO TOP</HashLink></span>
      </footer>
    </section>
  );
}
