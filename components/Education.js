// pages/education.js
export default function Education() {
  return (
    <section className="bg-black text-white px-6 md:px-12 lg:px-20 py-20">
      {/* Title */}
      <div className="text-center mb-16">
        <p className="text-sm uppercase tracking-widest text-gray-400">The Journey</p>
        <h2 className="font-inter font-bold text-[90px] leading-[87px] tracking-[-4.3px] uppercase">Education</h2>
        <p className="text-sm uppercase tracking-widest text-gray-400 mt-4">
          [ © Crafting Reliable, Scalable, and Human-Centered Software Solutions ]
        </p>
      </div>

      {/* Education Items */}
      <div className="space-y-20 max-w-7xl mx-auto">
        {/* First Degree */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div>
            <img
              src="/images/education-wgu.png"
              alt="WGU Degree"
              className="w-full max-w-xs md:max-w-sm h-auto object-contain mx-auto"
            />
          </div>

          {/* Right - Text */}
          <div>
            <p className="text-sm font-bold text-gray-400 mb-2">[ 01 ]</p>
            <h3 className="text-xl font-bold uppercase">BS - Software Engineering</h3>
            <h3 className="text-l font-bold uppercase">Western Governors University</h3>
            <p className="mt-4 text-gray-300">
              Completed a rigorous, project-based curriculum focused on full-stack development,
              software design, and agile methodologies. Gained hands-on experience with
              real-world applications, emphasizing clean code, scalability, and user-centered design.
            </p>
            <ul className="mt-4 space-y-2 text-gray-300 list-disc list-inside">
              <li>Built full-stack apps using Java, Spring Boot, and Angular</li>
              <li>Practiced agile workflows, version control, and testing</li>
              <li>Focused on clean code, scalability, and user-centered design</li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800" />

        {/* Second Degree */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div>
            <img
              src="/images/education-lamar.png"
              alt="LU Degree"
              className="w-full max-w-xs md:max-w-sm h-auto object-contain mx-auto"
            />
          </div>

          {/* Right - Text */}
          <div>
            <p className="text-sm font-bold text-gray-400 mb-2">[ 02 ]</p>
            <h3 className="text-xl font-bold uppercase">BBA - Management</h3>
            <h3 className="text-l font-bold uppercase">Lamar University</h3>
            <p className="mt-4 text-gray-300">
              Studied core business disciplines with an emphasis on leadership, strategic planning,
              and organizational operations. Developed strong analytical, communication, and project
              management skills.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 w-full h-[100vh] overflow-hidden rounded-lg">
       <img
          src="/images/water.jpg"
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
      </div>

    </section>
  );
}
