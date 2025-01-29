import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] py-10">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8 text-center">
          Get in Touch
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Have a question or want to work together? Feel free to reach out!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5361FF] focus:border-transparent outline-none"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5361FF] focus:border-transparent outline-none"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5361FF] focus:border-transparent outline-none resize-none"
              placeholder="Your message here..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#5361FF] text-white py-3 px-6 rounded-lg hover:bg-[#4351ee] transition-colors font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
