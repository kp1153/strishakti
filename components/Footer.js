"use client";

const Footer = () => {
  return (
    <footer className="relative text-white">
      {/* Creative background (Peacock gradient) */}
      <div className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-6 py-10">
          {/* 3-Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Address */}
            <div>
              <h2 className="text-lg font-semibold mb-2 text-amber-100 after:block after:h-0.5 after:w-12 after:bg-amber-300 after:mt-1 after:mx-auto md:after:mx-0">
                Address
              </h2>
              <p>Shiv Vihar Colony, Sarang Talab, Panchkosi Marg</p>
              <p>Varanasi, Uttar Pradesh – 221007</p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-lg font-semibold mb-2 text-amber-100 after:block after:h-0.5 after:w-12 after:bg-amber-300 after:mt-1 after:mx-auto md:after:mx-0">
                Contact
              </h2>
              <p>
                Email:{" "}
                <a
                  href="mailto:mahila.arthik123@gmail.com"
                  className="underline text-amber-200 hover:text-amber-100 transition"
                >
                  mahila.arthik123@gmail.com
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:massorganization123@gmail.com"
                  className="underline text-amber-200 hover:text-amber-100 transition"
                >
                  massorganization123@gmail.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+919554570801"
                  className="underline text-amber-200 hover:text-amber-100 transition"
                >
                  +91 95545 70801
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+917800713173"
                  className="underline text-amber-200 hover:text-amber-100 transition"
                >
                  +91 78007 13173
                </a>
              </p>
            </div>

            {/* Developer Credit */}
            <div>
              <h2 className="text-lg font-semibold mb-2 text-amber-100 after:block after:h-0.5 after:w-12 after:bg-amber-300 after:mt-1 after:mx-auto md:after:mx-0">
                Crafted With Precision
              </h2>
              <p>
                Website developed by:{" "}
                <a
                  href="https://www.web-developer-kp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-amber-200 hover:text-amber-100 transition"
                >
                  www.web-developer-kp.com
                </a>
              </p>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="mt-8 text-center text-sm text-amber-100/90">
            © 2025. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
