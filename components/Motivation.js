// pages/motivation.js
export default function Motivation() {
  return (
    <div className="bg-black text-white">
      <section className="w-full min-h-screen px-12 md:px-24 py-20 bg-black text-white">
        <div className="flex flex-col gap-12 md:gap-20">
          {/* Top Row: Heading and Signature */}
          <div className="flex justify-between items-start w-full">
            {/* Left Title */}
            <div>
              <h2 className="font-inter font-bold text-[90px] leading-[87px] tracking-[-4.3px] uppercase">MOTIVATION</h2>
              <p className="mt-2 text-lg font-semibold uppercase tracking-wide">
                The journey of software inspiration
              </p>
            </div>

            {/* Right Signature */}
            <div className="ml-4">
              <img
                src="/images/signature.png"
                alt="Signature"
                className="h-[4rem] md:h-[9.5rem] w-auto object-contain"
              />
            </div>
          </div>

          {/* Paragraph Text */}
          <div className="text-center text-md md:text-lg leading-relaxed">
            <p>
              Problem-solving is the heartbeat of engineering. Every line of code you write, and every challenge you face,
              is a chance to learn, create, and make a difference. Remember: every bug is a lesson, every failure a step
              forward. Embrace the process. Trust your instincts. Stay curious.
            </p>
            <br />
            <p>
              Whether you're building tools that help others or solving problems behind the scenes, your work has the power
              to create real, lasting impact. Keep learning. Keep building. And stay true to the passion that brought you here.
            </p>
          </div>

          {/* Quote */}
          <div className="text-center mt-8">
            <p className="text-xl italic font-semibold">
              "The best way to predict the future is to invent it."
            </p>
            <p className="mt-2">— Alan Kay.</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center mt-8">
            <div>
              <p className="text-3xl font-bold">6+</p>
              <p className="uppercase text-sm mt-1">[ Projects ]</p>
            </div>
            <div>
              <p className="text-3xl font-bold">2</p>
              <p className="uppercase text-sm mt-1">[ Bachelors Degrees ]</p>
            </div>
            <div>
              <p className="text-3xl font-bold">1000+</p>
              <p className="uppercase text-sm mt-1">[ Hours Coding ]</p>
            </div>
            <div>
              <p className="text-3xl font-bold">100%</p>
              <p className="uppercase text-sm mt-1">[ Commitment ]</p>
            </div>
          </div>
        </div>
        <div className="mt-12 w-full h-[100vh] overflow-hidden rounded-lg">
       <img
          src="/images/tree.jpg"
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
      </div>
      </section>
    </div>
  );
}
