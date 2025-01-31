const About = () => {
  const personalInfo = [
    { label: "Name", value: "Ali Azhar" },
    { label: "Dob", value: "June 09, 2000" },
    { label: "Phone", value: "+923486665515" },
    { label: "Email", value: "aalliiazhar@gmail.com" },
    { label: "Location", value: "Lahore, Pakistan" },
    { label: "Experience", value: "2+ Months" },
    { label: "Languages", value: "English, Urdu" },
  ];

  return (
    <div className="min-h-[calc(100vh-5rem)] py-10">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Column - About Text */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
            About Me
          </h2>
          <div className="space-y-4 text-gray-700 text-justify">
            <p className="text-lg leading-relaxed">
              With a strong foundation in both frontend and backend
              technologies, I enjoy tackling complex problems and turning them
              into simple, beautiful applications. I'm constantly learning and
              adapting to new technologies to stay at the forefront of web
              development.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge with
              the developer community. I believe in writing clean, maintainable
              code and creating user-friendly applications that solve real-world
              problems.
            </p>
          </div>
        </div>

        {/* Right Column - Personal Info */}
        <div className="lg:w-1/2">
          <div className="grid grid-cols-2 gap-6">
            {personalInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                  <span className="text-[#5361FF] font-medium whitespace-nowrap">
                    {info.label}:
                  </span>
                  <span className="text-gray-700 sm:text-right">
                    {info.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
