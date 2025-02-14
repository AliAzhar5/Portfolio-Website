const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "HTML5",
        "JavaScript (ES6+)",
        "CSS3",
        "Redux/Toolkit",
        "React.js",
        "Tailwind CSS",
        "Vue.js",
        "Responsive Design",
      ],
    },
    {
      title: "Backend Development",
      skills: ["Python", "RESTful APIs", "Django", "PostgreSQL", "Fastapi"],
    },
    {
      title: "Tools & Technologies",
      skills: [
        "VS Code",
        "Git & GitHub",
        "Vercel",
        "Postman",
        "Swagger",
        "Jira",
      ],
    },
  ];

  return (
    <div className="min-h-[calc(100vh-5rem)] py-10">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-12 text-center">
        My Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold text-[#5361FF] mb-4">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="bg-gray-50 px-3 py-2 rounded text-gray-700 text-sm hover:bg-[#5361FF] hover:text-white transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
