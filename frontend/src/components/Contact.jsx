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
    <section className="min-h-screen bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={image2}
            alt="Contact Illustration"
            className="rounded-2xl shadow-lg max-w-md w-full hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

     
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white shadow-lg rounded-2xl p-8 md:p-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#2C3E50]">
            Contact Us
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Have questions or feedback? Fill out the form below and we’ll get in
            touch with you soon.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16A085]"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16A085]"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16A085]"
                placeholder="Write your message"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-[#16A085] text-white py-3 rounded-lg font-semibold hover:bg-[#13856E] transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
