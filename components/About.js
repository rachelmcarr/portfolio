import TechStrip from "./TechStrip";

export default function About() {
  const certifications = [
    { name: "AWS Certified Cloud Practitioner", year: "2023" },
    { name: "ITIL Foundation Certification", year: "2024" },
    { name: "WGU Certified Back End Developer", year: "2025" },
    { name: "WGU Certified Front End Developer", year: "2024" }
  ];

  return (
    <section
      id="about"
      className="bg-black text-white max-w-[1920px] w-full px-[40px] pt-[80px] mx-auto"
    >
      {/* Heading Row */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <div>
          <h2 className="font-inter font-bold text-[90px] leading-[87px] tracking-[-4.3px] uppercase">
            ABOUT RACHEL
          </h2>
          <p className="font-inter font-semibold text-[16px] leading-[22px] uppercase mt-[6px] tracking-[0.5px]">
            FROM TEXAS-BASED STUDENT TO ASPIRING SOFTWARE ENGINEER
          </p>
        </div>

        {/* Blue Pill with White Circle */}
        <a
          href="#contact"
          className="flex items-center gap-[8px] mt-4 lg:mt-0"
        >
          <span className="block w-[10px] h-[10px] bg-white rounded-full"></span>
          <span className="bg-[#1BC5E3] text-black font-inter font-semibold text-[14px] tracking-[3px] uppercase px-[20px] py-[6px] rounded-full">
            LET’S WORK TOGETHER
          </span>
        </a>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-[40px] mt-[48px] relative">
        {/* Left Column - Image + Resume */}
        <div className="flex flex-col items-start lg:w-[48%]">
          {/* cropped image box */}
          <div className="w-full aspect-[3/3] overflow-hidden rounded-lg">
  <img
    src="/images/rachelcarr.jpg"
    alt="Rachel Carr"
    className="w-full h-full object-cover"
  />
</div>

          <a
            href="/resume.pdf"
            className="mt-[12px] inline-block border border-white text-white px-[12px] py-[4px] text-[11px] uppercase tracking-[0.5px] hover:bg-white hover:text-black transition"
          >
            Download Resume
          </a>
        </div>

        {/* Right Column - About Content */}
        <div className="flex flex-col gap-[32px] lg:w-[48%] relative pb-[40px]">
          {/* About Me */}
          <div>
            <h3 className="font-inter font-bold text-[14px] leading-[20px] tracking-[3px] uppercase mb-[6px]">
              [ About Me ]
            </h3>
            <p className="font-interTight font-normal text-[22px] leading-[29px] tracking-[0.2px]">
              I’m Rachel Carr, a software engineer with a passion for building intuitive, user-focused
              web applications. I specialize in full-stack development with Java, Spring Boot, Angular,
              and React, and I enjoy solving real-world problems with clean, maintainable code. With a
              strong foundation in both technology and business, I bring a thoughtful, practical approach
              to everything I build. I’m excited to contribute to meaningful projects and keep growing
              as a developer.
            </p>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-inter font-bold text-[14px] leading-[20px] tracking-[3px] uppercase mb-[6px]">
              Certifications
            </h3>
            <div className="flex flex-col border border-white">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className={`flex justify-between items-center px-[16px] py-[8px] border-b last:border-b-0 
                    ${i % 2 === 0 
                      ? "bg-white text-black border-gray-300" 
                      : "bg-black text-white border-white"
                    }`}
                >
                  <span className="font-inter font-bold text-[14px] leading-[20px] tracking-[-0.3px] uppercase">
                    {cert.name}
                  </span>
                  <span className="text-[14px] leading-[20px] font-bold">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* My Mission */}
          <div>
            <h3 className="font-inter font-bold text-[14px] leading-[20px] tracking-[3px] uppercase mb-[6px]">
              [ My Mission ]
            </h3>
            <p className="font-interTight font-normal text-[22px] leading-[29px] tracking-[0.2px]">
              To build scalable, impactful software while embracing a mindset of continuous improvement,
              mentorship, and lifelong learning in the ever-evolving tech landscape.
            </p>
          </div>

          {/* Footer - Right Aligned */}
          <div className="absolute bottom-0 right-0 text-[12px] leading-[20px] uppercase tracking-[0.5px]">
            [ Est. 2025 ]
          </div>
        </div>
      </div> <br></br>
            <TechStrip />
    </section>
  );
}
