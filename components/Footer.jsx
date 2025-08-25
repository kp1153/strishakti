const Footer = () => (
  <footer className="bg-gray-100 text-gray-700 py-6 mt-10 border-t">
    <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
      <p className="mb-2 sm:mb-0">
        © {new Date().getFullYear()} Woman Empowerment. All rights reserved.
      </p>
      <p>
        Website developed by{" "}
        <a
          href="https://www.web-developer-kp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 hover:underline font-medium"
        >
          www.web-developer-kp.com
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
