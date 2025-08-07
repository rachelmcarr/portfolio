// components/ProjectCard.js
import Link from "next/link";

export default function ProjectCard({ project }) {
  const indexLabel = `[${String(project.number).padStart(2, "0")}]`;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block"
    >
      {/* Image */}
      <div className="relative w-full overflow-hidden bg-gray-900 rounded-[6px]">
        {/* Slightly shorter than square to match inspo */}
        <div className="aspect-[16/10] md:aspect-[16/9]">
          <img
            src={project.mainImage}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        {/* VIEW pill on hover */}
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-white/85 text-black text-[11px] tracking-[0.25em] px-3 py-[6px] rounded-sm uppercase">
            View
          </span>
        </div>
      </div>

      {/* Meta strip */}
      <div className="mt-5 grid grid-cols-3 gap-4 items-start">
        {/* Left: Tagline + Title */}
        <div className="col-span-2">
          {project.tagline && (
            <p className="text-[12px] md:text-[13px] uppercase font-bold tracking-[0.25em] opacity-80">
              ({project.tagline})
            </p>
          )}
          <h3 className="mt-1 text-[22px] md:text-[26px] font-extrabold uppercase leading-tight tracking-wide">
            {project.title}
          </h3>
        </div>

        {/* Right: Index */}
        <div className="text-right">
          <span className="text-[#00CFFF] font-extrabold text-[14px] md:text-[16px]">
            {indexLabel}
          </span>
        </div>

        {/* Center: Category (spans center column on a new row) */}
        <div className="col-span-3 md:col-span-1 md:col-start-2 md:text-center mt-2 md:mt-0">
          {project.category && (
            <p className="text-[12px] md:text-[13px] uppercase tracking-[0.25em] text-white/80">
              ({project.category})
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
