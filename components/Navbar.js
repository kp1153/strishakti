// components/Navbar.js
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Programs", href: "#programs" },
    { title: "Impact", href: "#impact" },
    { title: "Contact", href: "#contact" },
  ];

  const handleClick = (href) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="#home"
            onClick={() => handleClick("#home")}
            className="flex items-center"
          >
            <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">ARP</span>
            </div>
            <span className="ml-2 text-blue-900 font-bold">ARP India</span>
          </Link>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-blue-900 hover:bg-gray-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="bg-white border-t border-gray-200">
            <div className="py-2 space-y-1">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleClick(item.href)}
                  className="block w-full text-left px-4 py-3 text-blue-900 hover:bg-blue-50 font-medium"
                >
                  {item.title}
                </button>
              ))}
              <button
                onClick={() => handleClick("#donate")}
                className="block w-full mx-4 my-2 bg-yellow-500 text-blue-900 text-center px-4 py-3 rounded-full font-bold hover:bg-yellow-600"
              >
                Donate Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
