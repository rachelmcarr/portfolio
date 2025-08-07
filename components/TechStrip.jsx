// components/TechStrip.jsx
export default function TechStrip() {
  const techLogos = [
    "/images/java.png",
    "/images/python.png",
    "/images/angular.png",,
    "/images/intellij.png",,
    "/images/mysql.png",
    "/images/react.png",
    "/images/vscode.png",
    // duplicate for seamless loop
    "/images/java.png",
    "/images/python.png",
    "/images/angular.png",,
    "/images/intellij.png",,
    "/images/mysql.png",
    "/images/react.png",
    "/images/vscode.png",
  ];

  return (
    <div className="w-full overflow-hidden bg-black py-4">
      <div className="animate-scroll flex whitespace-nowrap gap-[250px] px-[20px]">
        {techLogos.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="Tech Logo"
            className="h-[40px] w-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
}
