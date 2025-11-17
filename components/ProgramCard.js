"use client";

import Link from "next/link";
import Image from "next/image";

export default function ProgramCard({
  title,
  description,
  image,
  slug,
  state,
  category,
}) {
  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
            <span className="text-white text-4xl font-bold opacity-30">
              ARP
            </span>
          </div>
        )}

        {/* Category Badge */}
        {category && (
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-orange-600">
            {category}
          </div>
        )}

        {/* State Badge */}
        {state && (
          <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {state}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
          {title}
        </h3>

        {description && (
          <p className="text-gray-600 text-sm line-clamp-3 mb-4">
            {description}
          </p>
        )}

        {/* Read More Link */}
        {slug && (
          <Link
            href={`/work/${slug}`}
            className="inline-flex items-center text-orange-600 font-medium text-sm hover:text-orange-700 transition-colors"
          >
            Learn More
            <svg
              className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}
