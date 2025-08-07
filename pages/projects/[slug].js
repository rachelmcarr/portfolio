// pages/work/[slug].js
import { useRouter } from "next/router";
import projectsData from "../../data/projectsData";
import Link from "next/link";

export default function ProjectDetail() {
  const { query } = useRouter();
  const project = projectsData.find((p) => p.slug === query.slug);

  if (!project) return <p className="text-white">Project not found.</p>;

  // Split sections into two groups
  const firstHalf = project.sections.slice(0, 2);
  const secondHalf = project.sections.slice(2);

  return (
    <div className="bg-black text-white">
      {/* HERO */}
      <section className="px-6 md:px-12 py-12 md:py-20 max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <h1 className="text-5xl md:text-6xl font-bold uppercase leading-tight">
            {project.title}
          </h1>
          <p className="text-lg max-w-md">{project.description}</p>
        </div>
      </section>

      {/* MAIN IMAGE */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <img
          src={project.mainImage}
          alt={project.title}
          className="w-full h-[70vh] object-cover"
        />
      </div>

      {/* META STRIP */}
      <div className="px-6 md:px-12 py-10 max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-sm md:text-base uppercase tracking-wide">
        <div>
          <p className="font-bold">Client</p>
          <p className="mt-1">{project.client}</p>
        </div>
        <div>
          <p className="font-bold">Role</p>
          <p className="mt-1">{project.role}</p>
        </div>
        <div>
          <p className="font-bold">Timeline</p>
          <p className="mt-1">{project.timeline}</p>
        </div>
        <div>
          <p className="font-bold">Live Project</p>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block underline"
          >
            Visit Website
          </a>
        </div>
      </div>

      {/* FIRST GALLERY IMAGE */}
      {project.gallery[0] && (
        <div className="w-screen mt-12 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <img
            src={project.gallery[0]}
            alt={`${project.title} gallery image 1`}
            className="w-full h-[70vh] object-cover"
          />
        </div>
      )}

      {/* FIRST HALF OF SECTIONS */}
      <div className="mt-20">
        {firstHalf.map((section, i) => (
          <div key={i} className="mb-28">
            <div className="px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
              <h2 className="text-lg md:text-xl font-bold uppercase col-span-1">
                {section.heading}
              </h2>
              <p className="text-lg leading-relaxed col-span-2">
                {section.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* SECOND GALLERY IMAGE */}
      {project.gallery[1] && (
        <div className="w-screen mt-12 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <img
            src={project.gallery[1]}
            alt={`${project.title} gallery image 2`}
            className="w-full h-[70vh] object-cover"
          />
        </div>
      )}

      {/* SECOND HALF OF SECTIONS */}
      <div className="mt-20">
        {secondHalf.map((section, i) => (
          <div key={i} className="mb-28">
            <div className="px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
              <h2 className="text-lg md:text-xl font-bold uppercase col-span-1">
                {section.heading}
              </h2>
              <p className="text-lg leading-relaxed col-span-2">
                {section.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* NEXT PROJECT */}
      <div className="px-6 md:px-12 max-w-[1440px] mx-auto py-20 border-t border-gray-800">
        <h3 className="text-lg font-bold uppercase mb-6">Next Project</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData
            .filter((p) => p.slug !== project.slug)
            .slice(0, 1)
            .map((nextProj) => (
              <Link
                key={nextProj.slug}
                href={`/work/${nextProj.slug}`}
                className="group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={nextProj.mainImage}
                    alt={nextProj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="mt-3 flex justify-between items-center">
                  <div>
                    <p className="font-bold uppercase">{nextProj.title}</p>
                    <p className="text-sm opacity-70">{nextProj.category}</p>
                  </div>
                  <p className="text-[#00CFFF] font-bold">
                    [{nextProj.projectNumber}]
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
