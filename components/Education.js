"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = ["a.jpg", "b.jpg", "c.jpg", "d.jpg", "e.jpg", "f.jpg", "g.jpg"];

export default function EducationPage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="px-4 py-8 max-w-6xl mx-auto text-gray-800">
      {/* 🖼️ Carousel */}
      <div className="relative w-full overflow-hidden rounded-lg shadow-lg mb-10 aspect-[16/9]">
        {images.map((img, index) => (
          <Image
            key={img}
            src={`/images/${img}`}
            alt={`Slide ${index + 1}`}
            fill
            className={`object-contain transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* 📚 Text Content */}
      <h1 className="text-3xl font-bold mb-6 text-blue-700">
        Nanhe Parindon Ki Pathshala
      </h1>

      <section className="space-y-4 text-lg leading-relaxed">
        <p>
          <strong>Nanhe Parindon Ki Pathshala</strong> is a specially designed
          early education program to meet the needs of children from
          underprivileged communities. It is a social initiative run entirely
          through the contributions and resources of our organization.
        </p>
        <p>
          We have kept our curriculum and approach flexible so that children can
          acquire the basic skills required to successfully enter and progress
          in the formal education system. Our primary objective is to bridge the
          educational gap and prepare children for enrollment in recognized
          schools in the future.
        </p>
        <p>
          We are committed to providing our students with a high-quality, safe,
          and nurturing learning environment. Our teaching methods integrate the
          best practices of early childhood education, and we continuously
          strive to improve the program to serve our community better.
        </p>
        <p>
          This program is not only a medium of education for children but also a
          reflection of our values, as we publicly share it to strengthen
          transparency and accountability.
        </p>
      </section>
    </main>
  );
}
