"use client";
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

export default function ARPFooter() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-yellow-400 mb-4">
              ARP INDIA
            </h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              Association of Responsible Professionals
            </p>
            <p className="text-xs text-gray-300">
              Empowering marginalized communities through education, health, and
              awareness since 2014.
            </p>
            <div className="pt-2">
              <p className="text-xs text-gray-300">Trust Reg: 2025/16/IV/344</p>
              <p className="text-xs text-gray-300">
                Darpan ID: DL/2025/0648357
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">
              Our Programs
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-yellow-300 cursor-pointer transition">
                Bachpan Ko Jeene Do
              </li>
              <li className="hover:text-yellow-300 cursor-pointer transition">
                Free Evening Class
              </li>
              <li className="hover:text-yellow-300 cursor-pointer transition">
                Skill Workshop
              </li>
              <li className="hover:text-yellow-300 cursor-pointer transition">
                RTI Ki Pathshala
              </li>
              <li className="hover:text-yellow-300 cursor-pointer transition">
                DU Admission Assistance
              </li>
              <li className="hover:text-yellow-300 cursor-pointer transition">
                Pad Bank Program
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">
              Contact Us
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-yellow-400" />
                <p className="text-gray-200">
                  RZ-44, Third Floor, Gali No 1, Geetanjali Park, West
                  Sagarpur-1, Delhi - 110046
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-yellow-400" />
                <div>
                  <p>+91-9523534038</p>
                  <p>+91-9560397873</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-yellow-400" />
                <a
                  href="mailto:info.arpindia@gmail.com"
                  className="hover:text-yellow-300 transition"
                >
                  info.arpindia@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Registration & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">
              Connect With Us
            </h3>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/arpindiaorg"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/arpindiaorg"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sky-500 hover:bg-sky-600 p-2 rounded-full transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/arpindiaorg"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 hover:bg-pink-700 p-2 rounded-full transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@arpindiaorg"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 p-2 rounded-full transition"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>

            {/* Registration Details */}
            <div className="pt-4 space-y-1 text-xs text-gray-300">
              <p>
                <span className="font-semibold text-yellow-400">PAN:</span>{" "}
                AALTA5718N
              </p>
              <p>
                <span className="font-semibold text-yellow-400">12A:</span>{" "}
                AALTA5718NE20251
              </p>
              <p>
                <span className="font-semibold text-yellow-400">80G:</span>{" "}
                AALTA5718NF20251
              </p>
            </div>

            {/* Website Link */}
            <div className="pt-2">
              <a
                href="https://www.arpindia.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-4 py-2 rounded transition"
              >
                Visit Our Website
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission Bar */}
      <div className="bg-blue-950 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-yellow-400 mb-2">VISION</h4>
              <p className="text-gray-300 text-xs leading-relaxed">
                "A society of peace, equity, participation, awareness and
                inclusive growth with access to education and health ensuring
                the livelihood of all"
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-400 mb-2">MISSION</h4>
              <p className="text-gray-300 text-xs leading-relaxed">
                "To bridge the social divide and empower the deprived,
                marginalized sections and women through mainstreaming access
                points"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-blue-950 border-t border-blue-800 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-400">
            <p>© 2025 ARP India. All Rights Reserved.</p>
            <p>Registered under Indian Trust Act, 1882 & IT Act, 1961</p>
            <div className="flex items-center gap-1">
              <span>Website by</span>
              <a
                href="https://www.web-developer-kp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 font-semibold transition"
              >
                क्रिएटिव सॉल्यूशंस
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
