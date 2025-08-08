import HashLink from './HashLink'
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
          <HashLink href="#about" className="text-sm">[ ABOUT ]</HashLink>
          <HashLink href="#projects" className="text-sm">[ PROJECTS ]</HashLink>
          <HashLink href="#education" className="text-sm">[ EDUCATION ]</HashLink>
          <HashLink href="#motivation" className="text-sm">[ MOTIVATION ]</HashLink>
          <HashLink href="#experience" className="text-sm">[ EXPERIENCE ]</HashLink>
          <HashLink href="#skills" className="text-sm">[ SKILLS ]</HashLink>
          <Link href="/contact#contact-form" className="btn">Contact Now</Link>
        </nav>
      </header>
      <PageTransition>
        <main>{children}</main>
      </PageTransition>
    </>
  )
}
