"use client";

const HeroSection = () => {
  return (
    <section className="w-full bg-pink-50 py-20 mt-16 text-center px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-pink-700 leading-tight">
        Women's Institute for Economic, Cultural and Educational Development
      </h1>
      <p className="mt-6 text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
        Educate. Empower. Elevate. Building a brighter future for women.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition text-base font-medium">
          Get Involved
        </button>
        <button className="bg-white border border-pink-600 text-pink-600 px-6 py-3 rounded-lg hover:bg-pink-100 transition text-base font-medium">
          Donate
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
