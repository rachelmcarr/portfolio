import Meta from './Meta'
import PageTransition from './PageTransition'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <header className="flex justify-between items-center px-[40px] py-[20px] bg-black text-white">
        <span className="text-sm tracking-wider uppercase">RACHELCARR</span>
        <nav className="flex gap-6">
          <a href="#about" className="text-sm">[ ABOUT ]</a>
          <a href="#projects" className="text-sm">[ PROJECTS ]</a>
          <a href="#education" className="text-sm">[ EDUCATION ]</a>
          <a href="#motivation" className="text-sm">[ MOTIVATION ]</a>
          <a href="#experience" className="text-sm">[ EXPERIENCE ]</a>
          <a href="#skills" className="text-sm">[ SKILLS ]</a>
          <a href="#contact" className="bg-white text-black px-4 py-1 rounded font-semibold text-sm">
            CONTACT NOW
          </a>
        </nav>
      </header>
      <PageTransition>
        <main>{children}</main>
      </PageTransition>
    </>
  )
}
