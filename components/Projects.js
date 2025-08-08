// pages/projects/index.js
import projectsData from "../data/projectsData";
import ProjectCard from "./ProjectCard";

export default function ProjectsPage() {
  return (
    <section 
    id="projects"
    className="bg-black text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12 py-12">
        {/* Header */}
        <div className="flex justify-between items-start">
          <h1 className="font-inter font-bold text-[90px] leading-[87px] tracking-[-4.3px] uppercase">
            Featured Work
          </h1>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-white rounded-full"></span>
            <a
              href="#"
              className="bg-[#00CFFF] text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
            >
              Explore
            </a>
          </div>
        </div>

        <p className="font-inter font-semibold text-[16px] leading-[22px] uppercase mt-[6px] tracking-[0.5px]">
          Explore past course work and current projects along with future
          development plans.
        </p>

        {/* Project Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={{
                ...project,
                number: index + 1, // [01], [02], ...
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
