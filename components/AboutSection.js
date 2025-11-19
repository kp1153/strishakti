"use client";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">
          About Us
        </h2>

        {/* Registration Details */}
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">
            Registration Details
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Trust Registration No:</strong> 2025/16/IV/344
            </div>
            <div>
              <strong>Darpan ID:</strong> DL/2025/0648357
            </div>
            <div>
              <strong>PAN No:</strong> AALTA5718N
            </div>
            <div>
              <strong>12A Registration:</strong> AALTA5718NE20251
            </div>
            <div>
              <strong>80G Registration:</strong> AALTA5718NF20251
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Vision</h3>
            <p className="text-gray-600 italic">
              "A society of peace, equity, participation, awareness and
              inclusive growth with access to education and health ensuring the
              livelihood of all."
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Mission</h3>
            <p className="text-gray-600 italic">
              "The mission is to bridge the social divide and to empower the
              deprived, marginalized sections and the women through
              mainstreaming access points and opening up new dimensions of
              engagement."
            </p>
          </div>
        </div>

        <p className="text-center text-gray-700">
          Registered under Indian Trust Act, 1882 & IT Act, 1961
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
