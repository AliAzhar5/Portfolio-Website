const Experience = () => {
  const experiences = [
    {
      title: "Associate Software Engineer",
      company: "CoalDev",
      period: "June 2024 - Present",
      description: [
        "Crafting reusable components, managing state with Redux/Toolkit and optimizing rendering performance.",
        "Building interactive SPAs with Vuex for state management and Vue Router for seamless navigation.",
        "Developing Styled-components using Tailwind CSS and responsive design for pixel-perfect UIs.",
        "Developing REST APIs, integrating PostgreSQL and designing ORM models for complex data relationships.",
        "Optimizing SQL queries, managing migrations and leveraging Redis for real-time caching.",
      ],
    },
  ];

  return (
    <div className="min-h-[calc(100vh-5rem)] py-10">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-12 text-center">
        Experience
      </h2>

      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 pb-12">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 h-full w-0.5 bg-[#5361FF]"></div>

            {/* Timeline dot */}
            <div className="absolute left-[-6px] top-2 w-3 h-3 rounded-full bg-[#5361FF]"></div>

            <div className="bg-white rounded-lg shadow-lg p-6 ml-4">
              <h3 className="text-xl lg:text-3xl font-bold text-[#5361FF] mb-2">
                {exp.title}
              </h3>
              <div className="text-lg lg:text-xl font-bold text-gray-800 mb-2">
                {exp.company}
              </div>
              <div className="text-base lg:text-lg text-gray-800 mb-4">
                {exp.period}
              </div>

              <ul className="list-disc list-inside space-y-2 text-gray-700">
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
