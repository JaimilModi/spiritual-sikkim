import React, { useState } from "react";
import { motion } from "framer-motion";
import image2 from "../assets/image2.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We’ll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Official Illustration */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.img
            src={image2}
            alt="Official Contact Illustration"
            className="rounded-2xl shadow-2xl max-w-md w-full"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white shadow-2xl rounded-3xl p-10 md:p-14"
        >
          {/* Header */}
          <h1 className="text-4xl font-bold mb-4 text-center text-[#2C3E50]">
            Contact Us
          </h1>
          <p className="text-center text-gray-600 mb-12 max-w-md mx-auto">
            Reach out to the Spiritual Sikkim team for any queries, feedback, or
            partnership inquiries. As an official initiative under Sikkim
            Tourism, your input is highly valued.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div whileFocus={{ scale: 1.02 }}>
              <label className="block text-gray-700 mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16A085] shadow-sm"
                placeholder="Enter your name"
              />
            </motion.div>

            <motion.div whileFocus={{ scale: 1.02 }}>
              <label className="block text-gray-700 mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16A085] shadow-sm"
                placeholder="Enter your email"
              />
            </motion.div>

            <motion.div whileFocus={{ scale: 1.02 }}>
              <label className="block text-gray-700 mb-2 font-medium">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16A085] shadow-sm"
                placeholder="Write your message"
              ></textarea>
            </motion.div>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(22,160,133,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-[#16A085] text-white py-3 rounded-lg font-semibold cursor-pointer hover:bg-[#13856E] transition-all"
            >
              Send Message
            </motion.button>
          </form>

          {/* Official Info Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 border-t pt-8 text-gray-700"
          >
            <h2 className="text-xl font-semibold mb-3 text-[#2C3E50]">
              Official Contact
            </h2>
            <p className="mb-1">
              <strong>Address:</strong> Sikkim Tourism Office, Gangtok, Sikkim,
              India
            </p>
            <p className="mb-1">
              <strong>Email:</strong> support@spiritualsikkim.gov.in
            </p>
            <p className="mb-1">
              <strong>Phone:</strong> +91 98765 43210
            </p>
            <p className="mb-1">
              <strong>Office Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM
            </p>
          </motion.div>

          {/* Footer Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-6 text-center text-gray-500 text-sm"
          >
            Spiritual Sikkim is an official digital heritage initiative under
            Sikkim Tourism.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
