import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#3AAFA9]/10 via-[#FF6F61]/10 to-[#3AAFA9]/10 text-gray-900 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h2 className="text-2xl font-bold text-[#3AAFA9]">Sikkim Trails</h2>
          <p className="text-gray-700 text-sm text-center md:text-left">
            Discover the spiritual and pristine beauty of Sikkim.
          </p>
        </div>

        <div className="flex gap-8">
          <a href="#home" className="hover:text-[#FF6F61] transition-colors">
            Home
          </a>
          <a
            href="#destinations"
            className="hover:text-[#FF6F61] transition-colors"
          >
            Destinations
          </a>
          <a href="#about" className="hover:text-[#FF6F61] transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-[#FF6F61] transition-colors">
            Contact
          </a>
        </div>

        <div className="flex gap-4 text-gray-700 text-lg">
          <a href="#" className="hover:text-[#3AAFA9] transition-colors">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-[#3AAFA9] transition-colors">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-[#3AAFA9] transition-colors">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-[#3AAFA9] transition-colors">
            <FaYoutube />
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-600 text-sm">
        &copy; 2025 Sikkim Trails. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
