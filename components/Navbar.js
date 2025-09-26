"use client";

import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full bg-purple-700 text-white py-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Logo and NGO Name */}
        <div className="flex items-center gap-4 mb-4">
          <Image
            src="/Logo.png"
            alt="MASS Logo"
            width={60}
            height={60}
            className="object-contain"
          />
          <h1 className="text-lg sm:text-xl font-semibold tracking-wide">
            MAHILA ARTHIK SANSKRITIK EVAM SHAIKSHIK VIKAS SANSTHAN
          </h1>
        </div>

        {/* Navigation Menu Below NGO Name */}
        <nav>
          <ul className="flex gap-6 text-sm xl:text-base">
            <li>
              <Link href="/" className="hover:text-yellow-200 transition">
                होम
              </Link>
            </li>
            <li>
              <Link
                href="/aayojan"
                className="hover:text-yellow-200 transition"
              >
                आयोजन
              </Link>
            </li>
            <li>
              <Link
                href="/gatividhi"
                className="hover:text-yellow-200 transition"
              >
                गतिविधि
              </Link>
            </li>
            <li>
              <Link href="/vividh" className="hover:text-yellow-200 transition">
                विविध
              </Link>
            </li>
            <li>
              <Link
                href="/dekhabhaal"
                className="hover:text-yellow-200 transition"
              >
                देखभाल
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
