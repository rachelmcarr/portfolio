// components/HashLink.js
import { useRouter } from "next/router";

export default function HashLink({ href, children, ...props }) {
  const router = useRouter();

  const handleClick = (e) => {
    // Only intercept real hash links like "#projects"
    if (!href || !href.startsWith("#")) return;
    e.preventDefault();

    const id = href.slice(1);

    if (router.pathname !== "/") {
      // Go to home with the hash, but prevent Next from auto-scrolling to top
      router.push(`/#${id}`, undefined, { scroll: false });
    } else {
      // Already on the home page: smooth-scroll directly
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Use a plain <a> so middle-click etc. still works
  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
