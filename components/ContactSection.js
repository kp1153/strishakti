const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Address</h3>
            <p className="text-gray-700 mb-2">
              RZ-31 C, NEW NO – RZ-44, THIRD FLOOR,
              <br />
              GALI NO 1, KH NO – 281,
              <br />
              GEETANJLI PARK, WEST SAGARPUR-1,
              <br />
              DELHI – 110046 (INDIA)
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              Contact Information
            </h3>
            <p className="text-gray-700 mb-2">
              <strong>Mobile:</strong> +91-9523534038, 9560397873
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong> info.arpindia@gmail.com
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Website:</strong> www.arpindia.org
            </p>
            <div className="mt-4">
              <p className="text-gray-700 mb-2">
                <strong>Social Media:</strong>
              </p>
              <p className="text-gray-600 text-sm">
                YouTube, Facebook, Twitter, Instagram: @arpindiaorg
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
