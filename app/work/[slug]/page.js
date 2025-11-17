import {
  fetchStoryblokStories,
  generateStoryblokParams,
} from "@/lib/storyblok";
import { notFound } from "next/navigation";
import { Calendar, MapPin, Users, Target } from "lucide-react";

// Generate static params for all program pages
export async function generateStaticParams() {
  return await generateStoryblokParams("work");
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const story = await fetchStoryblokStories(`work/${slug}`);

  if (!story) {
    return {
      title: "Program Not Found - ARP INDIA",
      description: "The requested program could not be found.",
    };
  }

  const { content, name } = story.story;

  return {
    title: `${name} - ${process.env.NEXT_PUBLIC_ORG_SHORT}`,
    description:
      content.description || `Learn about ${name}, a program by ARP India`,
    keywords: `${name}, ARP India, ${
      content.state || ""
    }, NGO, social work, education, health`,
    openGraph: {
      title: `${name} - ${process.env.NEXT_PUBLIC_ORG_SHORT}`,
      description: content.description || `Learn about ${name}`,
      images: content.images?.[0]?.filename ? [content.images[0].filename] : [],
    },
  };
}

export default async function ProgramDetailPage({ params }) {
  const { slug } = await params;
  const story = await fetchStoryblokStories(`work/${slug}`);

  // If story not found, show 404
  if (!story) {
    notFound();
  }

  const { content, name } = story.story;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {content.state && (
            <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {content.state}
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{name}</h1>
          {content.description && (
            <p className="text-xl text-blue-100 max-w-3xl">
              {content.description}
            </p>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Program Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {content.state && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <MapPin className="w-8 h-8 text-blue-600 mb-3" />
              <div className="text-sm text-gray-600 mb-1">Location</div>
              <div className="text-lg font-semibold text-gray-900">
                {content.state}
              </div>
            </div>
          )}

          {content.start_date && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <Calendar className="w-8 h-8 text-green-600 mb-3" />
              <div className="text-sm text-gray-600 mb-1">Started</div>
              <div className="text-lg font-semibold text-gray-900">
                {new Date(content.start_date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                })}
              </div>
            </div>
          )}

          {content.beneficiaries_count && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <Users className="w-8 h-8 text-purple-600 mb-3" />
              <div className="text-sm text-gray-600 mb-1">Beneficiaries</div>
              <div className="text-lg font-semibold text-gray-900">
                {content.beneficiaries_count.toLocaleString()}+
              </div>
            </div>
          )}

          {content.status && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <Target className="w-8 h-8 text-orange-600 mb-3" />
              <div className="text-sm text-gray-600 mb-1">Status</div>
              <div
                className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                  content.status === "Active"
                    ? "bg-green-100 text-green-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {content.status}
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Image */}
            {content.images && content.images.length > 0 && (
              <div className="mb-8">
                <img
                  src={content.images[0].filename}
                  alt={content.images[0].alt || name}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            )}

            {/* Full Content */}
            {content.full_content && (
              <div className="bg-white rounded-lg shadow-md p-8 prose prose-lg max-w-none">
                <div
                  dangerouslySetInnerHTML={{ __html: content.full_content }}
                  className="text-gray-700 leading-relaxed"
                />
              </div>
            )}

            {/* Image Gallery */}
            {content.images && content.images.length > 1 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Program Gallery
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {content.images.slice(1).map((image, index) => (
                    <div key={index} className="aspect-square">
                      <img
                        src={image.filename}
                        alt={image.alt || `${name} - Image ${index + 2}`}
                        className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Get Involved CTA */}
            <div className="bg-gradient-to-br from-green-600 to-blue-600 text-white rounded-lg shadow-lg p-8 mb-6">
              <h3 className="text-2xl font-bold mb-4">Support This Program</h3>
              <p className="text-green-100 mb-6">
                Your contribution can make a real difference in the lives of
                those we serve.
              </p>
              <div className="space-y-3">
                <a
                  href="/get-involved/donate"
                  className="block w-full bg-white text-green-600 text-center py-3 px-6 rounded-lg font-semibold hover:bg-green-50 transition"
                >
                  Donate Now
                </a>
                <a
                  href="/get-involved/volunteer"
                  className="block w-full bg-green-800 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-green-900 transition"
                >
                  Volunteer
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Contact Us
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-600 mb-1">Email</p>
                  <a
                    href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                    className="text-blue-600 hover:underline"
                  >
                    {process.env.NEXT_PUBLIC_EMAIL}
                  </a>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Phone</p>
                  <a
                    href={`tel:${process.env.NEXT_PUBLIC_MOBILE_1}`}
                    className="text-blue-600 hover:underline block"
                  >
                    {process.env.NEXT_PUBLIC_MOBILE_1}
                  </a>
                  <a
                    href={`tel:${process.env.NEXT_PUBLIC_MOBILE_2}`}
                    className="text-blue-600 hover:underline block"
                  >
                    {process.env.NEXT_PUBLIC_MOBILE_2}
                  </a>
                </div>
              </div>
            </div>

            {/* Other Programs Link */}
            <div className="mt-6">
              <a
                href="/work"
                className="block text-center bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition"
              >
                ← View All Programs
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
