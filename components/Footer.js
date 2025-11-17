// components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <p className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} {process.env.NEXT_PUBLIC_ORG_SHORT} - All
          Rights Reserved | Trust Reg: {process.env.NEXT_PUBLIC_TRUST_REG_NO} |
          80G: {process.env.NEXT_PUBLIC_80G_REG} | Email:{" "}
          {process.env.NEXT_PUBLIC_EMAIL} | Phone:{" "}
          {process.env.NEXT_PUBLIC_MOBILE_1}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
