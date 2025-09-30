"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function LivelihoodPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "/images/m1.jpg",
    "/images/m2.jpg",
    "/images/m3.jpg",
    "/images/m4.jpg",
    "/images/m5.jpg",
    "/images/m6.jpg",
    "/images/m7.jpg",
    "/images/m8.jpg",
    "/images/m9.jpg",
  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <main className="px-4 py-8 max-w-6xl mx-auto text-white">
        {/* Image Carousel Section */}
        <div className="mb-12 relative overflow-hidden rounded-2xl shadow-2xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 relative h-80 md:h-96"
              >
                <Image
                  src={image}
                  alt={`Livelihood Initiative ${index + 1}`}
                  fill
                  className="object-contain bg-white"
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-white scale-125 shadow-lg"
                    : "bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-gradient-to-r from-green-800/80 to-emerald-700/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/10">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent drop-shadow-lg">
            Seeds of Self-Reliance: A Livelihood Initiative
          </h1>

          <section className="space-y-6 text-lg leading-relaxed">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-gray-100 font-medium">
                In{" "}
                <span className="text-yellow-300 font-bold">
                  Varanasi district
                </span>{" "}
                of{" "}
                <span className="text-orange-300 font-bold">Uttar Pradesh</span>
                , Mahila Arthik, Sanskritik Evam Shaikshik Vikas Sansthan (MASS)
                is running a transformative livelihood program under the banner{" "}
                <span className="text-green-300 font-semibold">
                  &quot;Seeds of Self-Reliance: A Livelihood Initiative.&quot;
                </span>
                This program is specially designed to uplift poor women from SC,
                ST, OBC, and minority communities by equipping them with
                vocational training, organizational skills, and sustainable
                income opportunities.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-gray-100">
                The initiative organizes women&apos;s groups within their own
                community areas, enabling them to set up
                <span className="text-cyan-300 font-semibold">
                  {" "}
                  micro and home-based industries
                </span>
                . Training is provided in
                <span className="text-pink-300 font-semibold">
                  {" "}
                  pickle making, spice packing, candle making, toy making, and
                  handicrafts
                </span>
                , empowering women to convert their skills into sustainable
                livelihood sources.
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-gray-100">
                Today,{" "}
                <span className="text-yellow-300 font-bold text-xl">
                  more than 150 women
                </span>{" "}
                are actively engaged in this project. Through their collective
                efforts, they are not only earning a livelihood for themselves
                but are also supporting their families. By making{" "}
                <span className="text-green-300 font-semibold">
                  toys, handicraft items, and household products
                </span>
                , these women have found a way to turn creativity into income.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-600/40 to-teal-600/40 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/30">
              <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">
                The Impact of the Program
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <h3 className="font-bold text-yellow-300 mb-2">
                    Economic Empowerment:
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Women are earning independently, reducing financial
                    dependency.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <h3 className="font-bold text-orange-300 mb-2">
                    Social Dignity:
                  </h3>
                  <p className="text-gray-200 text-sm">
                    They are gaining respect and recognition within their
                    families and communities.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <h3 className="font-bold text-cyan-300 mb-2">
                    Community Development:
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Small groups are evolving into self-help units, fostering
                    solidarity and resilience.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-gray-100 text-center font-medium">
                This initiative has proven that with the right skills and
                opportunities, women from marginalized backgrounds can become
                the{" "}
                <span className="text-yellow-300 font-bold">
                  pillars of change
                </span>
                —ensuring a better livelihood for themselves, their children,
                and future generations.
              </p>
            </div>

            <div className="bg-gradient-to-r from-rose-600/40 to-pink-600/40 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <p className="text-gray-100 text-xl font-semibold">
                The story of these{" "}
                <span className="text-yellow-300 font-bold text-2xl">
                  150 women
                </span>{" "}
                is not just about income generation—it is about{" "}
                <span className="text-green-300 font-bold">self-reliance</span>,
                <span className="text-orange-300 font-bold"> dignity</span>, and
                <span className="text-cyan-300 font-bold">
                  {" "}
                  empowerment
                </span>{" "}
                through sustainable livelihood.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
