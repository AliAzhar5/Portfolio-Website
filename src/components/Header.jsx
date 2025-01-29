"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navitems = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Experience", path: "experience" },
    { name: "Skills", path: "skills" },
    { name: "Projects", path: "projects" },
    { name: "Contact", path: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navitems.map((item) =>
        document.getElementById(item.path)
      );
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(navitems[index].path);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed w-full top-0 left-0 py-2 sm:py-4 shadow-md bg-[#5361FF] z-50">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        <div className="text-2xl sm:text-3xl font-bold text-white">
          Ali Azhar
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-white"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={`lg:flex items-center lg:justify-end flex-grow space-y-4 lg:space-y-0 lg:space-x-6 
            absolute lg:relative top-full left-0 right-0 lg:top-auto 
            bg-white lg:bg-transparent p-4 lg:p-0 lg:pr-16
            ${isMenuOpen ? "flex flex-col" : "hidden lg:flex"}`}
        >
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-8 font-sans text-base sm:text-lg md:text-lg text-gray-800 lg:text-white font-medium">
            {navitems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.path)}
                className={`transition-colors duration-300 cursor-pointer hover:font-semibold 
                  ${
                    activeSection === item.path
                      ? "underline underline-offset-4"
                      : ""
                  }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => scrollToSection("contact")}
          className="hidden lg:block bg-[#5361FF] text-white border border-white px-6 py-2 rounded-md font-medium hover:border-[#5361FF] hover:bg-white hover:text-[#5361FF] transition-colors"
        >
          Hire Me Now
        </button>
      </div>
    </header>
  );
};

export default Header;
