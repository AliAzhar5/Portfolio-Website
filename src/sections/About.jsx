const About = () => {
  const personalInfo = [
    { label: "Name", value: "Ali Azhar" },
    { label: "Email", value: "aalliiazhar@example.com" },
    { label: "Phone", value: "+923486665515" },
    { label: "Location", value: "Lahore, Pakistan" },
    { label: "Education", value: "Bachelor's in Computer Science" },
    { label: "Experience", value: "8+ Months" },
    { label: "Languages", value: "English, Urdu" },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[calc(100vh-5rem)] py-10">
      <div className="hidden lg:flex flex-1 justify-center items-center">
        <div className="w-80 h-80 rounded-lg overflow-hidden">
          <img
            src="https://nicky-kosasih.netlify.app/assets/img/profile.png"
            alt="About Me"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex-1 space-y-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
          About Me
        </h2>

        <div className="grid grid-cols-1 gap-4">
          {personalInfo.map((info, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
            >
              <span className="text-[#5361FF] font-medium min-w-[100px]">
                {info.label}:
              </span>
              <span className="text-gray-700">{info.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
