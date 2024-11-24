"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const handleToggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed w-full bg-navy-800/90 backdrop-blur-sm z-50 transition-transform duration-300 border-b border-cyber-blue/20
        ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2"
            aria-label="Home"
          >
            <span className="text-xl font-bold text-white">Your Logo</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#services"
              className="text-gray-300 hover:text-cyber-blue transition-colors"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-gray-300 hover:text-cyber-blue transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-gray-300 hover:text-cyber-blue transition-colors"
            >
              Contact
            </Link>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="bg-cyber-blue text-black px-4 py-2 rounded-md 
                hover:bg-cyber-blue/80 transition-colors"
            >
              Book YOUR Call
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-white 
              hover:bg-navy-700 focus:outline-none"
            onClick={handleToggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-56 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="#services"
              className="block px-3 py-2 text-gray-300 hover:text-cyber-blue 
                transition-colors"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="block px-3 py-2 text-gray-300 hover:text-cyber-blue 
                transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 text-gray-300 hover:text-cyber-blue 
                transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
