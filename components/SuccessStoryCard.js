"use client";

import Link from "next/link";
import Image from "next/image";

export default function SuccessStoryCard({
  name,
  story,
  image,
  slug,
  program,
  location,
  year,
}) {
  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden">
      <div className="md:flex">
        {/* Image Section */}
        <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
              <svg
                className="w-20 h-20 text-white opacity-30"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          )}

          {/* Year Badge */}
          {year && (
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
              {year}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="md:w-3/5 p-6">
          {/* Program Badge */}
          {program && (
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
              {program}
            </span>
          )}

          {/* Name */}
          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
            {name}
          </h3>

          {/* Location */}
          {location && (
            <div className="flex items-center text-gray-500 text-sm mb-4">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              {location}
            </div>
          )}

          {/* Story Excerpt */}
          {story && (
            <p className="text-gray-600 text-sm line-clamp-4 mb-4 leading-relaxed">
              {story}
            </p>
          )}

          {/* Read More Link */}
          {slug && (
            <Link
              href={`/impact/${slug}`}
              className="inline-flex items-center text-orange-600 font-medium text-sm hover:text-orange-700 transition-colors"
            >
              Read Full Story
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
    </div>
  );
}
