import React from "react";
import { FaFacebook, FaInstagram, FaTripadvisor } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2c2c2c] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Footer Top Section */}
        <div className="grid md:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-3xl font-bold text-[#f4e1d2] mb-4">About Us</h3>
            <p className="text-lg text-gray-300">
              We are a leading company providing top-notch services for your
              needs. Our mission is to deliver excellence through innovation.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-3xl font-bold text-[#f4e1d2] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-lg hover:text-[#f4e1d2] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-lg hover:text-[#f4e1d2] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-lg hover:text-[#f4e1d2] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-lg hover:text-[#f4e1d2] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription Section */}
          <div>
            <h3 className="text-3xl font-bold text-[#f4e1d2] mb-4">
              Subscribe
            </h3>
            <p className="text-lg text-gray-300 mb-4">
              Get the latest updates and news delivered to your inbox.
            </p>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 rounded-md text-gray-800 focus:outline-none"
              />
              <button
                type="submit"
                className="p-3 bg-[#906d40] text-white rounded-md hover:bg-[#6e4f31] transition-colors"
              >
                Subscribe Now
              </button>
            </form>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-3xl font-bold text-[#f4e1d2] mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-white hover:text-[#f4e1d2] transition-colors"
              >
                <FaFacebook size={30} />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#f4e1d2] transition-colors"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#f4e1d2] transition-colors"
              >
                <FaTripadvisor size={30} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 text-center text-lg">
          <p>&copy; {new Date().getFullYear()} MyLogo. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
