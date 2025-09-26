"use client";

import Link from "next/link";

const DonatePage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-purple-800 mb-4 text-center">
        Your Support Can Change Lives 💜
      </h1>
      <p className="text-center text-gray-700 mb-8">
        Every contribution goes directly towards empowering women, educating
        children, and supporting the elderly. We ensure your donation reaches
        those who need it most.
      </p>

      {/* FCRA Account */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-purple-700 mb-2">
          FCRA Account (International Donors)
        </h2>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>
            <strong>Account Name:</strong> Mahila Arthik Sanskritik Evam
            Shaikshik Vikas Sansthan
          </li>
          <li>
            <strong>Bank Name:</strong> State Bank of India
          </li>
          <li>
            <strong>Account Number:</strong> 40228650442
          </li>
          <li>
            <strong>IFSC:</strong> SBIN0000691
          </li>
          <li>
            <strong>SWIFT:</strong> SBININBB104
          </li>
          <li>
            <strong>Branch:</strong> Main Branch, New Delhi (INDIA)
          </li>
        </ul>
      </div>

      {/* Local Account */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-purple-700 mb-2">
          Local Account (Indian Donors)
        </h2>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>
            <strong>Account Name:</strong> Mahila Arthik Sanskritik Evam
            Shaikshik Vikas Sansthan
          </li>
          <li>
            <strong>Bank Name:</strong> State Bank of India
          </li>
          <li>
            <strong>Account Number:</strong> 43402858453
          </li>
          <li>
            <strong>IFSC:</strong> SBIN0002598
          </li>
          <li>
            <strong>Branch:</strong> Phariya, Varanasi (UP)
          </li>
        </ul>
      </div>

      {/* PayPal CTA */}
      <div className="text-center mt-8">
        <Link
          href="https://www.paypal.com"
          target="_blank"
          className="inline-block bg-yellow-500 text-purple-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition"
        >
          💰 Donate via PayPal
        </Link>
        <p className="text-xs text-gray-500 mt-2">
          *Access to the donation form is free and simple.
        </p>
      </div>
    </div>
  );
};

export default DonatePage;
