export default function Experience() {
  return (
    <div 
    id="experience"
    className="bg-black text-white w-full min-h-screen px-6 md:px-24 py-20">
      {/* Title */}
      <div className="mb-16">
        <h2 className="font-inter font-bold text-[90px] leading-[87px] tracking-[-4.3px] uppercase">EXPERIENCE</h2>
        <p className="mt-2 text-lg font-semibold uppercase tracking-wide">Showcasing my professional journey</p>
      </div>

      {/* Timeline and Job Cards */}
      <div className="relative border-l border-white/20 pl-8 pt-12">
        {/* Timeline Range Label */}
        <div className="absolute -top-6 left-0 flex items-center space-x-2">
          <span className="h-2 w-2 bg-white rounded-full"></span>
          <span className="text-xs bg-cyan-500 text-black font-semibold px-3 py-1 rounded-md tracking-wide">2018 - PRESENT</span>
        </div>

        {/* GuardTech */}
        <div className="mb-16 flex items-start space-x-4">
          <img src="/images/guardtech.png" alt="GuardTech Logo" className="w-10 h-10 object-contain" />
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-extrabold">GUARDTECH PEST MANAGEMENT</h3>
              <span className="text-sm font-semibold">[ 2021 - PRESENT ]</span>
            </div>
            <p className="font-semibold uppercase mt-1">Office/IT Manager</p>
            <p className="mt-2 text-sm md:text-base">
              Designed internal tools to automate billing, PTO tracking, and commissions. Managed IT systems,
              led staff training, and streamlined operations through custom software and data audits.
            </p>
          </div>
        </div>

        {/* HomeGoods */}
        <div className="mb-16 flex items-start space-x-4">
          <img src="/images/homegoods.png" alt="HomeGoods Logo" className="w-10 h-10 object-contain" />
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-extrabold">HOMEGOODS</h3>
              <span className="text-sm font-semibold">[ 2019 - 2021 ]</span>
            </div>
            <p className="font-semibold uppercase mt-1">
              Merch/Cash Office Associate, Shrink Awareness Mentor
            </p>
            <p className="mt-2 text-sm md:text-base">
              Trusted to make daily store deposits, train new employees, and lead shrink awareness meetings.
            </p>
          </div>
        </div>

        {/* McAlister's Deli */}
        <div className="mb-6 flex items-start space-x-4">
          <img src="/images/mcalisters.png" alt="McAlister's Deli Logo" className="w-10 h-10 object-contain" />
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-extrabold">MCALISTER'S DELI</h3>
              <span className="text-sm font-semibold">[ 2018 - 2019 ]</span>
            </div>
            <p className="font-semibold uppercase mt-1">Front of House Employee</p>
            <p className="mt-2 text-sm md:text-base">
              Trusted to independently bag and deliver catering orders.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 w-full h-[100vh] overflow-hidden rounded-lg">
       <img
          src="/images/creature.jpg"
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
