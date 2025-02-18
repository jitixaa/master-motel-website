import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // Menu icons for mobile
import { FaFacebook, FaInstagram, FaTripadvisor } from "react-icons/fa"; // Social media icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gradient-to-l from-[#906d40] via-[#6e4f31] to-[#f4e1d2] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl sm:max-w-6xl md:max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#906d40] hover:text-[#6b4f2d] transition-colors">
          <a href="#">MyLogo</a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm sm:text-base md:text-lg font-medium">
          <a
            href="#"
            className="text-white hover:text-[#906d40] transition-colors transform hover:scale-105"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-white hover:text-[#906d40] transition-colors transform hover:scale-105"
          >
            Services
          </a>
          <a
            href="#about"
            className="text-white hover:text-[#906d40] transition-colors transform hover:scale-105"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-white hover:text-[#906d40] transition-colors transform hover:scale-105"
          >
            Contact
          </a>
        </nav>

        {/* Social Media Icons */}
        <div className="hidden md:flex space-x-6 items-center text-sm sm:text-base md:text-lg">
          <a
            href="#"
            className="text-white hover:text-[#906d40] transition-colors"
          >
            <FaFacebook size={28} />
          </a>
          <a
            href="#"
            className="text-white hover:text-[#906d40] transition-colors"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="#"
            className="text-white hover:text-[#906d40] transition-colors"
          >
            <FaTripadvisor size={28} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          {isOpen ? (
            <HiX size={32} className="text-white" />
          ) : (
            <HiMenu size={32} className="text-white" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#906d40] text-white py-6 px-8 absolute w-full top-full left-0 transition-transform transform duration-300 ${
          isOpen ? "translate-y-0" : "translate-y-[-100%]"
        } shadow-lg rounded-lg`}
      >
        <nav className="space-y-6">
          <a
            href="#"
            className="block text-xl hover:text-[#6b4f2d] transition-colors"
            onClick={() => setIsOpen(false)} // Close the menu when clicked
          >
            Home
          </a>
          <a
            href="#services"
            className="block text-xl hover:text-[#6b4f2d] transition-colors"
            onClick={() => setIsOpen(false)} // Close the menu when clicked
          >
            Services
          </a>
          <a
            href="#about"
            className="block text-xl hover:text-[#6b4f2d] transition-colors"
            onClick={() => setIsOpen(false)} // Close the menu when clicked
          >
            About
          </a>
          <a
            href="#contact"
            className="block text-xl hover:text-[#6b4f2d] transition-colors"
            onClick={() => setIsOpen(false)} // Close the menu when clicked
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
