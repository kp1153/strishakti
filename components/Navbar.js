// components/Navbar.js
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = [
    { title: "Home", href: "/" },
    {
      title: "About Us",
      href: "/about",
      submenu: [
        { title: "Overview", href: "/about/overview" },
        { title: "Vision & Mission", href: "/about/vision-mission" },
        { title: "Our Story", href: "/about/our-story" },
        { title: "Founder Profile", href: "/about/founder" },
        { title: "Registration Details", href: "/about/registration" },
      ],
    },
    {
      title: "Our Work",
      href: "/work",
      submenu: [
        { title: "Delhi Programs", href: "/work/delhi" },
        { title: "Odisha Programs", href: "/work/odisha" },
        { title: "Bihar Programs", href: "/work/bihar" },
        { title: "Chennai Programs", href: "/work/chennai" },
      ],
    },
    {
      title: "Focus Areas",
      href: "/focus",
      submenu: [
        { title: "Education", href: "/focus/education" },
        { title: "Health", href: "/focus/health" },
        { title: "Awareness", href: "/focus/awareness" },
      ],
    },
    { title: "Impact", href: "/impact" },
    {
      title: "Get Involved",
      href: "/get-involved",
      submenu: [
        { title: "Volunteer", href: "/get-involved/volunteer" },
        { title: "Donate", href: "/get-involved/donate" },
        { title: "Partner With Us", href: "/get-involved/partner" },
      ],
    },
    { title: "Media", href: "/media" },
    { title: "Contact", href: "/contact" },
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <nav className="bg-zinc-900 text-green-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-14 h-14 bg-green-700 rounded-full flex items-center justify-center">
              <span className="text-zinc-900 font-bold text-xl">ARP</span>
            </div>
            <div>
              <div className="text-base font-black text-green-700">
                {process.env.NEXT_PUBLIC_ORG_SHORT}
              </div>
              <div className="text-xs text-green-600">
                Since {process.env.NEXT_PUBLIC_ORG_FOUNDED_YEAR}
              </div>
            </div>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-green-700 hover:bg-zinc-800 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="bg-zinc-900 border-t border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 py-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {menuItems.map((item, index) => (
              <div key={index} className="mb-2">
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="w-full flex items-center justify-between px-4 py-3 text-green-700 hover:bg-zinc-800 rounded-lg transition-colors"
                    >
                      <span className="font-medium">{item.title}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                          openDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === index && (
                      <div className="mt-1 ml-4 space-y-1">
                        {item.submenu.map((subitem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subitem.href}
                            className="block px-4 py-2 text-sm text-green-600 hover:text-green-500 hover:bg-zinc-800 rounded-lg transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {subitem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-green-700 hover:bg-zinc-800 rounded-lg transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/get-involved/donate"
              className="block w-full mt-4 px-6 py-3 bg-green-700 text-zinc-900 text-center font-bold rounded-lg hover:bg-green-600 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
