"use client";
const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-r from-blue-900 to-blue-700 text-white flex items-center justify-center"
    >
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">ARP India</h1>
        <p className="text-xl md:text-2xl mb-8">
          Empowering Lives, Building Futures
        </p>
        <button
          onClick={() =>
            document
              .querySelector("#donate")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-600"
        >
          Donate Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
