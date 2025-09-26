"use client";

import { useEffect, useState } from "react";

const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

function OldAgeHomePage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="px-4 py-8 max-w-6xl mx-auto text-gray-800">
      {/* 🖼️ Carousel */}
      <div className="relative w-full overflow-hidden rounded-lg shadow-lg mb-10 aspect-[16/9]">
        {images.map((img, index) => (
          <img
            key={img}
            src={`/images/${img}`}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* 📚 Text Content */}
      <h1 className="text-3xl font-bold mb-6 text-blue-700">
        Shri Shyam Old Age Home: A Haven of Care and Dignity
      </h1>

      <section className="space-y-4 text-lg leading-relaxed">
        <p>
          The Shri Shyam Old Age Home, located in Ghaziabad district, is
          dedicated to providing a safe and compassionate environment for the
          elderly. At present, 13 senior citizens reside in the ashram, where
          they are not only cared for but are also given the dignity and respect
          they truly deserve.
        </p>

        <ul className="list-disc list-inside space-y-2">
          <li>Nutritious food and comfortable accommodation</li>
          <li>Regular medical care and essential medicines</li>
          <li>Clothing and personal necessities</li>
          <li>Means of entertainment for mental well-being</li>
          <li>Access to religious books and a place of worship</li>
          <li>An open and healthy environment for peaceful living</li>
        </ul>

        <p>
          Every service is provided completely free of cost, with the sole aim
          of supporting elderly individuals who may not have anyone else to rely
          on. Beyond material support, the ashram nurtures a sense of belonging,
          spiritual growth, and community, making it a true haven for its
          residents.
        </p>

        <p>
          The Shri Shyam Old Age Home stands as a symbol of compassion and
          accountability—demonstrating how collective efforts can bring comfort
          and dignity to those in the twilight years of their lives.
        </p>
      </section>
    </main>
  );
}

export default OldAgeHomePage;
