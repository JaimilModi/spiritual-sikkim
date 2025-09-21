import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#3AAFA9]/10 via-[#FF6F61]/10 to-[#3AAFA9]/10 text-gray-900 py-10">
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
        {/* Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Links</h3>
          <ul>
            <li className="mb-2 hover:text-white cursor-pointer">Destinations</li>
            <li className="mb-2 hover:text-white cursor-pointer">Packages</li>
            <li className="mb-2 hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            {/* Globe / Website */}
            <a href="#" className="hover:text-white transition">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm6.364 6H15.1a15.122 15.122 0 0 0-3.1-4.9 8.05 8.05 0 0 1 6.364 4.9zM12 4.062a13.11 13.11 0 0 1 2.578 4.938H9.422A13.11 13.11 0 0 1 12 4.062zM4.062 12c0-.698.1-1.375.288-2H8.9a16.11 16.11 0 0 0 0 4H4.35A7.94 7.94 0 0 1 4.062 12zm1.666 4h3.438a15.122 15.122 0 0 0 3.1 4.9A8.05 8.05 0 0 1 5.728 16zm6.6 4.938a13.11 13.11 0 0 1-2.578-4.938h5.156a13.11 13.11 0 0 1-2.578 4.938zM16.938 12a7.94 7.94 0 0 1-.288 2h-4.55a16.11 16.11 0 0 0 0-4h4.55c.187.625.288 1.302.288 2zm-.667-4h-3.438a15.122 15.122 0 0 0-3.1-4.9 8.05 8.05 0 0 1 6.538 4.9z" />
              </svg>
            </a>

            {/* Instagram */}
            <a href="#" className="hover:text-white transition">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2h8.5C19.097 2 22 4.903 22 8.25v7.5C22 19.097 19.097 22 16.25 22h-8.5C4.903 22 2 19.097 2 16.25v-7.5C2 4.903 4.903 2 7.75 2zm0 2C5.679 4 4 5.679 4 7.75v8.5C4 18.321 5.679 20 7.75 20h8.5c2.071 0 3.75-1.679 3.75-3.75v-8.5C20 5.679 18.321 4 16.25 4h-8.5zm8.75 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 1.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5zm0 2a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5z" />
              </svg>
            </a>

            {/* Twitter */}
            <a href="#" className="hover:text-white transition">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.73 1.04 4.28 4.28 0 0 0-7.3 3.9 12.14 12.14 0 0 1-8.8-4.46 4.28 4.28 0 0 0 1.32 5.71 4.27 4.27 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.2 4.3 4.3 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.97A8.6 8.6 0 0 1 2 19.54a12.12 12.12 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.38-.02-.57A8.72 8.72 0 0 0 22.46 6z" />
              </svg>
            </a>

            {/* Facebook */}
            <a href="#" className="hover:text-white transition">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.876v-6.987h-2.54V12h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.26c-1.242 0-1.63.772-1.63 1.562V12h2.773l-.443 2.889h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <p className="text-center text-gray-500 mt-12">
        &copy; 2025 Explore Sikkim. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
