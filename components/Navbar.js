"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      {/* शीर्षक — हरे रंग में */}
      <div className="bg-green-600 text-white text-center font-semibold py-3">
        NGO of Esha Bhai
      </div>
      {/* मेन्यूज़ */}
      <nav aria-label="Main navigation" className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex flex-wrap justify-center gap-4 py-3">
            <li>
              <Link href="/about-us" className="hover:underline">
                ABOUT US
              </Link>
            </li>
            <li>
              <Link href="/vision-and-mission" className="hover:underline">
                VISION AND MISSION
              </Link>
            </li>
            <li>
              <Link href="/board" className="hover:underline">
                BOARD
              </Link>
            </li>
            <li>
              <Link href="/our-work" className="hover:underline">
                OUR WORK
              </Link>
            </li>
            <li>
              <Link href="/modern-slavery" className="hover:underline">
                MODERN SLAVERY
              </Link>
            </li>
            <li>
              <Link href="/genocide-re" className="hover:underline">
                GENOCIDE REPARATION
              </Link>
            </li>
            <li>
              <Link href="/our-approach" className="hover:underline">
                OUR APPROACH
              </Link>
            </li>
            <li>
              <Link href="/our-impact" className="hover:underline">
                OUR IMPACT
              </Link>
            </li>
            <li>
              <Link href="/justice" className="hover:underline">
                JUSTICE
              </Link>
            </li>
            <li>
              <Link
                href="/financial-accountability"
                className="hover:underline"
              >
                FINANCIAL ACCOUNTABILITY
              </Link>
            </li>
            <li>
              <Link href="/resources" className="hover:underline">
                RESOURCES
              </Link>
            </li>
            <li>
              <Link href="/survivors-story" className="hover:underline">
                SURVIVORS STORIES
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:underline">
                GALLERY
              </Link>
            </li>
            <li>
              <Link href="/publications" className="hover:underline">
                PUBLICATIONS
              </Link>
            </li>
            <li>
              <Link href="/volunteer" className="hover:underline">
                VOLUNTEER
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                CONTACT
              </Link>
            </li>
            <li>
              <Link href="/donate" className="hover:underline">
                DONATE
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
