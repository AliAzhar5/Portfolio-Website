const Footer = () => {
  const skills = [
    "React.js",
    "Vuex",
    "JavaScript",
    "TypeScript",
    "PostgreSQL",
    "HTML/CSS",
    "Tailwind CSS",
    "Git/GitHub",
    "RESTful APIs",
  ];

  const links = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Experience", path: "experience" },
    { name: "Skills", path: "skills" },
    { name: "Projects", path: "projects" },
    { name: "Contact", path: "contact" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">About</h3>
            <p className="text-gray-400 leading-relaxed">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="flex space-x-4 pt-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#5361FF] transition-colors"
              >
                <i className="fab fa-twitter text-white"></i>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#5361FF] transition-colors"
              >
                <i className="fab fa-facebook-f text-white"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#5361FF] transition-colors"
              >
                <i className="fab fa-instagram text-white"></i>
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.path)}
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <span className="mr-2">→</span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <span className="mr-2">→</span>
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Questions Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-3 mt-1">📍</span>
                <span className="text-gray-400">Lahore, Pakistan</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3">📞</span>
                <a
                  href="tel:+923486665515"
                  className="text-gray-400 hover:text-white"
                >
                  +92 348 6665515
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-3">✉️</span>
                <a
                  href="mailto:info@yourdomain.com"
                  className="text-gray-400 hover:text-white"
                >
                  aalliiazhar@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 mt-16 pt-8 border-t border-gray-800">
          <p>Copyright ©{new Date().getFullYear()} All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
