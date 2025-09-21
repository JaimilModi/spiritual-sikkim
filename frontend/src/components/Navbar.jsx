import React from "react";
import {
  SignInButton,
  UserButton,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Monasteries", path: "/monasteries" },
    { name: "Events", path: "/events" },
    { name: "Trip", path: "/trip" },
    { name: "Contact", path: "/contact" },
  ];

  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50
        ${
          isScrolled
            ? "backdrop-blur-md shadow-md bg-white/30"
            : "bg-transparent"
        }
      `}
    >
      <a
        href="/"
        className="text-2xl font-bold tracking-wide flex items-center gap-2 py-4 md:py-6 text-[#2C3E50]"
      >
        <span className="text-[#3AAFA9]">Spiritual</span>
        <span>Sikkim</span>
      </a>

      <div className="hidden md:flex items-center gap-6 lg:gap-10">
        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.path}
            className="group flex flex-col gap-0.5 text-[#211c17]"
          >
            {link.name}
            <div className="bg-[#FF6F61] h-0.5 w-0 group-hover:w-full transition-all duration-300" />
          </a>
        ))}
      </div>

      <div className="hidden md:flex items-center gap-4">
        <SignedOut>
          <SignInButton mode="modal">
            <button className="px-6 py-2.5 rounded-full ml-4 font-medium bg-[#3AAFA9] text-white transition-all duration-500 hover:bg-[#FF6F61]">
              Get Started
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>

      <div className="flex items-center gap-3 md:hidden">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <svg
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="h-7 w-7 cursor-pointer text-[#2C3E50]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#ECECEC] text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-[#2C3E50] transition-all duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.path}
            onClick={() => setIsMenuOpen(false)}
            className="text-lg hover:text-[#3AAFA9] transition-colors duration-300"
          >
            {link.name}
          </a>
        ))}

        <SignedOut>
          <SignInButton mode="modal">
            <button className="bg-[#3AAFA9] text-white px-8 py-2.5 rounded-full font-medium hover:bg-[#FF6F61] transition-all duration-300">
              Get Started
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;
