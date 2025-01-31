const Experience = () => {
  const experiences = [
    {
      title: "Associate Software Engineer-I",
      company: "CoalDev",
      period: "December 2024 - Present",
      description: [
        "Crafting reusable components and optimizing rendering performance.",
        "Building interactive SPAs with Vue Router for seamless navigation.",
        "Developing Styled-components using Tailwind CSS and responsive design.",
        "Developing REST APIs, integrating PostgreSQL and designing ORM models.",
        "Optimizing SQL queries and managing migrations.",
      ],
    },
  ];

  return (
    <div className="min-h-[calc(100vh-5rem)] py-10">
      <h2 className="text-3xl lg:text-4xl font-bold text-black mb-12 text-center">
        EXPERIENCE
      </h2>

      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-4">
            {/* Timeline line */}
            <div className="absolute left-0 top-2 h-[calc(100%-0.5rem)] w-0.5 bg-[#5361FF]"></div>

            {/* Timeline dot */}
            <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-[#5361FF]"></div>

            <div className="bg-white rounded-lg shadow-lg p-6 ml-4 mb-8">
              <h3 className="text-xl lg:text-3xl font-bold text-[#5361FF] mb-2">
                {exp.title}
              </h3>
              <div className="text-lg lg:text-xl font-bold text-black mb-2">
                {exp.company}
              </div>
              <div className="text-base lg:text-lg text-gray-900 mb-4">
                {exp.period}
              </div>

              <ul className="list-disc list-inside space-y-2 text-gray-900 text-sm sm:text-base">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
