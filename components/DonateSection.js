"use client";

const DonateSection = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <section id="donate" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-6">
          Support Our Cause
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          Your donation can transform lives and create lasting impact
        </p>

        {/* Bank Details */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md text-left mb-8">
          <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">
            Bank Transfer Details
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Account Name
              </label>
              <div className="flex items-center justify-between bg-white p-3 rounded border">
                <span className="text-gray-900">
                  Association of Responsible Professionals
                </span>
                <button
                  onClick={() =>
                    copyToClipboard("Association of Responsible Professionals")
                  }
                  className="text-blue-900 hover:text-blue-700 text-sm font-medium"
                >
                  Copy
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Account Number
              </label>
              <div className="flex items-center justify-between bg-white p-3 rounded border">
                <span className="text-gray-900">44138625146</span>
                <button
                  onClick={() => copyToClipboard("44138625146")}
                  className="text-blue-900 hover:text-blue-700 text-sm font-medium"
                >
                  Copy
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bank Name
              </label>
              <div className="flex items-center justify-between bg-white p-3 rounded border">
                <span className="text-gray-900">State Bank Of India</span>
                <button
                  onClick={() => copyToClipboard("State Bank Of India")}
                  className="text-blue-900 hover:text-blue-700 text-sm font-medium"
                >
                  Copy
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                IFSC Code
              </label>
              <div className="flex items-center justify-between bg-white p-3 rounded border">
                <span className="text-gray-900">SBIN0000733</span>
                <button
                  onClick={() => copyToClipboard("SBIN0000733")}
                  className="text-blue-900 hover:text-blue-700 text-sm font-medium"
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-600 mb-6">
          After transferring, please email the transaction details to
          info.arpindia@gmail.com
        </p>

        <button className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-600">
          Donate Now
        </button>
      </div>
    </section>
  );
};

export default DonateSection;
