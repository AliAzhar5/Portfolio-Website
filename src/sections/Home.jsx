import { useState, useEffect } from "react";

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const texts = ["SOFTWARE ENGINEER", "WEB DEVELOPER"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const text = texts[currentTextIndex];
    const typeSpeed = isDeleting ? 100 : 200; // Faster when deleting

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === text) {
        // Start deleting after a pause
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentTextIndex((current) => (current + 1) % texts.length);
      } else if (isDeleting) {
        setDisplayText(text.substring(0, displayText.length - 1));
      } else {
        setDisplayText(text.substring(0, displayText.length + 1));
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex]);

  const handleDownloadCV = () => {
    // The CV file should be placed in the public folder
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "AliAzhar-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 min-h-[calc(100vh-5rem)] py-10">
      <div className="flex-1 space-y-6">
        <h2 className="text-4xl lg:text-6xl font-extrabold text-gray-900">
          Hello, I'm
        </h2>
        <h2 className="text-4xl lg:text-6xl font-extrabold text-[#5361FF]">
          ALI AZHAR
        </h2>
        <h3 className="text-lg font-bold text-gray-900">
          I'm passionate{"  "}
          <span className="text-[#5361FF] text-2xl min-w-[12ch] inline-block">
            {displayText}
          </span>
        </h3>
        <div className="flex gap-4">
          <button
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="border border-[#5361FF] bg-[#5361FF] text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#5361FF] hover:border-[#5361FF] transition-colors"
          >
            Get in Touch
          </button>
          <button
            onClick={handleDownloadCV}
            className="border border-[#5361FF] text-white bg-[#5361FF] px-8 py-3 rounded-lg hover:text-[#5361FF] hover:bg-white hover:border-[#5361FF] transition-colors"
          >
            Download CV
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-opacity-10 flex items-center justify-center">
          <img
            src="https://nicky-kosasih.netlify.app/assets/img/profile.png"
            alt="Ali Azhar"
            className="w-56 h-56 lg:w-120 lg:h-120 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
