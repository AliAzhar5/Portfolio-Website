import { useState } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Project One",
      image: "project1.jpg",
      shortOverview: "A brief description of project one",
      detailedDescription:
        "Detailed explanation of project one, including technologies used, challenges faced, and solutions implemented.",
      videoDemo: "https://www.youtube.com/embed/your-video-id",
      projectLink: "https://github.com/your-username/project-one",
    },
    // Add more projects as needed
  ];

  return (
    <div className="min-h-[calc(100vh-5rem)] py-10">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-12 text-center">
        My Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.shortOverview}</p>
              <button
                onClick={() => setSelectedProject(project)}
                className="bg-[#5361FF] text-white px-4 py-2 rounded hover:bg-[#4351ee] transition-colors"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  {selectedProject.title}
                </h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  Close
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Overview
                  </h3>
                  <p className="text-gray-600">
                    {selectedProject.shortOverview}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Detailed Description
                  </h3>
                  <p className="text-gray-600">
                    {selectedProject.detailedDescription}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Video Demo
                  </h3>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src={selectedProject.videoDemo}
                      title="Project Demo"
                      allowFullScreen
                      className="w-full h-[400px] border-0"
                    ></iframe>
                  </div>
                </div>

                <div>
                  <a
                    href={selectedProject.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#5361FF] text-white px-6 py-2 rounded hover:bg-[#4351ee] transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
