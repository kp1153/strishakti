// components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {" "}
        {/* 'py-4' को 'py-8' में बदला गया है, फुटर को चौड़ा करने के लिए आप इसे और बढ़ा सकते हैं */}
        <p className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} {process.env.NEXT_PUBLIC_ORG_SHORT} - All
          Rights Reserved | Trust Reg: {process.env.NEXT_PUBLIC_TRUST_REG_NO} |
          80G: {process.env.NEXT_PUBLIC_80G_REG} | Email:{" "}
          {process.env.NEXT_PUBLIC_EMAIL} | Phone:{" "}
          {process.env.NEXT_PUBLIC_MOBILE_1}
          <br /> {/* जानकारी को अगली पंक्ति में ले जाने के लिए */}
          Developed by:{" "}
          <a
            href="https://www.web-developer-kp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-pink-600 hover:text-blue-700 transition duration-300" // गुलाबी रंग और बोल्ड
          >
            वेब डेवलपर क्रिएटिव सॉल्यूशंस
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
