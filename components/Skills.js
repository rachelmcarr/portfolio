export default function Skills() {
  const skills = [
    {
      name: "Java",
      category: "Backend Language",
      years: "3 YEARS",
      description:
        "Java is a versatile, object-oriented programming language known for its reliability and cross-platform compatibility, ideal for building scalable web, mobile, and enterprise applications.",
      icon: "/images/java.png",
    },
    {
      name: "Angular",
      category: "Front End Framework",
      years: "3 YEARS",
      description:
        "Angular is a TypeScript-based framework for building dynamic web applications, offering powerful tools for scalable architecture and seamless user experiences.",
      icon: "/images/angular.png",
    },
    {
      name: "Python",
      category: "Backend Language",
      years: "3 YEARS",
      description:
        "Python is a high-level, versatile programming language known for its readability and wide range of uses, from web development to data science and automation.",
      icon: "/images/python.png",
    },
    {
      name: "MySQL",
      category: "Database",
      years: "3 YEARS",
      description:
        "MySQL is a reliable, open-source relational database management system, ideal for storing, organizing, and querying structured data in scalable applications.",
      icon: "/images/mysql.png",
    },
    {
      name: "React",
      category: "Front End Framework",
      years: "1 YEAR",
      description:
        "React is a declarative JavaScript library for building fast, interactive user interfaces with reusable components and efficient state management.",
      icon: "/images/react.png",
    },
  ];

  return (
    <div 
    id="skills"
    className="bg-black text-white w-full min-h-screen px-6 md:px-24 py-20">
      {/* Title */}
      <div className="mb-16">
        <h2 className="font-inter font-bold text-[90px] leading-[87px] tracking-[-4.3px] uppercase">SKILLS</h2>
        <p className="mt-2 text-lg font-semibold uppercase tracking-wide">Explore my current top skills</p>
      </div>

      {/* Skill List */}
      <div className="relative pl-8 pt-8 border-l border-white/20">
        {/* Tag */}
        <div className="absolute -top-6 left-0 flex items-center space-x-2">
          <span className="h-2 w-2 bg-white rounded-full"></span>
          <span className="text-xs bg-cyan-500 text-black font-semibold px-3 py-1 rounded-md tracking-wide">
            MY SKILL
          </span>
        </div>

        {skills.map((skill, index) => (
          <div key={index} className="mb-16 flex items-start space-x-4">
            <img src={skill.icon} alt={skill.name} className="w-6 h-6 md:w-8 md:h-8 object-contain" />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-extrabold uppercase">{skill.name}</h3>
                <span className="text-sm font-semibold">[ {skill.years} ]</span>
              </div>
              <p className="font-semibold uppercase mt-1 text-sm">{skill.category}</p>
              <p className="mt-2 text-sm md:text-base">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
