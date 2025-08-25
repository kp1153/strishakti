"use client";

import Link from "next/link";
import { useState } from "react";

// Language Switcher Component
const LanguageSwitcher = () => {
  const [currentLang, setCurrentLang] = useState("hi");

  const languages = [
    { code: "hi", name: "हिंदी", flag: "🇮🇳" },
    { code: "en", name: "English", flag: "🇺🇸" },
  ];

  return (
    <div className="group relative">
      <div className="text-xs text-pink-200 mb-1">Language</div>
      <button className="flex items-center gap-2 px-3 py-1 rounded hover:bg-pink-600 transition">
        <span>{languages.find((lang) => lang.code === currentLang)?.flag}</span>
        <span className="text-sm">
          {languages.find((lang) => lang.code === currentLang)?.name}
        </span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div className="absolute right-0 mt-2 hidden group-hover:block bg-white text-black shadow-lg rounded-lg py-1 w-32 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setCurrentLang(lang.code)}
            className={`w-full text-left px-3 py-2 hover:bg-pink-50 flex items-center gap-2 ${
              currentLang === lang.code ? "bg-pink-100 text-pink-700" : ""
            }`}
          >
            <span>{lang.flag}</span>
            <span className="text-sm">{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

// Dropdown Menu Component
const DropdownMenu = ({ title, href, items }) => (
  <li className="group relative">
    <Link href={href} className="hover:text-yellow-200 transition">
      {title}
    </Link>
    <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white text-black shadow-lg rounded-lg p-2 w-56 z-50">
      {items.map((item, index) => (
        <li key={index}>
          <Link
            href={item.href}
            className="block px-3 py-2 hover:text-pink-600 hover:bg-pink-50 rounded transition"
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  </li>
);

// Main Navbar Component
const Navbar = () => {
  // Dropdown menu data
  const ourWorkItems = [
    { title: "Women Empowerment", href: "/work/women-empowerment" },
    { title: "Education & Skill Training", href: "/work/education-skill" },
    { title: "Health & Safety", href: "/work/health-safety" },
    { title: "Legal Awareness", href: "/work/legal-awareness" },
  ];

  const resourcesItems = [
    { title: "Articles", href: "/resources/articles" },
    { title: "Reports & Research", href: "/resources/reports" },
    { title: "Helplines", href: "/resources/helplines" },
  ];

  const getInvolvedItems = [
    { title: "Volunteer", href: "/get-involved/volunteer" },
    { title: "Partner with Us", href: "/get-involved/partner" },
    { title: "Careers / Internship", href: "/get-involved/careers" },
  ];

  return (
    <>
      {/* Top Banner with NGO Name */}
      <div className="w-full bg-purple-700 text-white text-center py-4 px-4 text-lg sm:text-xl font-semibold tracking-wide">
        Women's Institute for Economic, Cultural and Educational Development
      </div>

      {/* Navigation Menu */}
      <nav className="sticky top-0 z-40 bg-pink-500 text-white border-0 outline-none">
        <div className="max-w-7xl mx-auto px-4 py-3 border-0">
          <div className="flex items-center justify-between">
            {/* Navigation Links */}
            <ul className="flex flex-wrap gap-6 text-sm sm:text-base">
              {/* Home */}
              <li>
                <Link href="/" className="hover:text-yellow-200 transition">
                  Home
                </Link>
              </li>

              {/* About Us */}
              <li>
                <Link
                  href="/about"
                  className="hover:text-yellow-200 transition"
                >
                  About Us
                </Link>
              </li>

              {/* Our Work Dropdown */}
              <DropdownMenu
                title="Our Work / Initiatives"
                href="/work"
                items={ourWorkItems}
              />

              {/* Stories */}
              <li>
                <Link
                  href="/stories"
                  className="hover:text-yellow-200 transition"
                >
                  Stories / Voices
                </Link>
              </li>

              {/* Resources Dropdown */}
              <DropdownMenu
                title="Resources"
                href="/resources"
                items={resourcesItems}
              />

              {/* Get Involved Dropdown */}
              <DropdownMenu
                title="Get Involved"
                href="/get-involved"
                items={getInvolvedItems}
              />

              {/* Donate */}
              <li>
                <Link
                  href="/donate"
                  className="hover:text-yellow-200 transition font-semibold bg-yellow-500 text-pink-800 px-3 py-1 rounded"
                >
                  Donate
                </Link>
              </li>

              {/* Contact Us */}
              <li>
                <Link
                  href="/contact"
                  className="hover:text-yellow-200 transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Language Switcher */}
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
