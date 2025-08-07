export default function Hero() {
  return (
    <section
      id="home-hero"
      className="bg-black text-white max-w-[1920px] w-full px-[40px] pt-[148px] mx-auto"
    >
      {/* TOP ROW: Heading + Right Column */}
      <div className="flex flex-col lg:flex-row justify-between items-start">
        {/* LEFT COLUMN - HERO HEADING */}
        <div className="flex-1 leading-[135px]">
          <h1 className="font-inter font-bold text-[150px] tracking-[-7.5px] uppercase">
            SOFTWARE
            <br />
            <span className="whitespace-nowrap">
              ENGINEE
              <span className="relative inline-flex items-center justify-center min-w-[80px]">
                <span className="relative z-10">R</span>
                <span className="inline-block w-6 h-6 md:w-20 md:h-20 bg-cyan-500 rounded-full ml-2 align-middle"></span>
              </span>
            </span>
          </h1>
        </div>

        {/* RIGHT COLUMN - Paragraph + Link */}
        <div className="flex flex-col items-start gap-y-4 max-w-[472px] mt-8 lg:mt-0">
          <p className="font-inter font-semibold text-[16px] leading-[20px] uppercase max-w-[428px] text-left">
            ASPIRING SOFTWARE ENGINEER MOTIVATED TO CONTINUALLY LEARN AND IMPROVE. LET’S WORK TOGETHER.
          </p>
          <a
            href="#projects"
            className="text-[12px] uppercase tracking-wide text-white hover:underline"
          >
            SEE PROJECTS
          </a>
        </div>
      </div>

      {/* IMAGE BELOW BOTH COLUMNS */}
      <div className="mt-12 w-full h-[100vh] overflow-hidden rounded-lg">
       <img
          src="/images/pets.jpg"
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
