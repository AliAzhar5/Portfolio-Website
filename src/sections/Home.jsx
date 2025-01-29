const Home = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 min-h-[calc(100vh-5rem)] py-10">
      <div className="flex-1 space-y-6">
        <h2 className="text-4xl lg:text-6xl font-extrabold text-gray-900">
          Hello, I'm <span className="text-[#5361FF]">ALI AZHAR</span>
        </h2>
        <h3 className="text-2xl lg:text-4xl text-gray-800 font-semibold">
          Full Stack Developer
        </h3>
        <p className="text-lg text-gray-700 max-w-xl text-justify">
          I have a knack for turning caffeine into clean code and bold ideas
          into blazing-fast applications. Whether it’s crafting pixel-perfect
          interfaces or engineering robust backends, I thrive on building
          solutions that users love and businesses need.
        </p>
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
