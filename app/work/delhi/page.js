import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MapPin, ChevronRight } from "lucide-react";

export const metadata = {
  title: `Delhi Programs - Our Work - ${process.env.NEXT_PUBLIC_ORG_SHORT}`,
  description:
    "ARP India's 13 programs in Delhi including Free Evening Classes, Skill Workshops, and DU Admission Assistance",
  keywords:
    "Delhi NGO programs, free education Delhi, slum education, Delhi social work",
};

export default function DelhiWorkPage() {
  const programs = [
    {
      name: "Bachpan Ko Jeene Do",
      category: "Child Welfare",
      icon: "👶",
    },
    {
      name: "Free Evening Class",
      category: "Education",
      icon: "📚",
    },
    {
      name: "Skill Workshop",
      category: "Skill Development",
      icon: "🛠️",
    },
    {
      name: "RTI Ki Pathshala",
      category: "Awareness",
      icon: "📋",
    },
    {
      name: "Educational Tour",
      category: "Education",
      icon: "🚌",
    },
    {
      name: "Hum Seekhenge Aage Badhenge",
      category: "Education",
      icon: "📖",
    },
    {
      name: "Hum Bhi Bachhe Hain",
      category: "Child Rights",
      icon: "🎈",
    },
    {
      name: "DU Admission Assistance",
      category: "Higher Education",
      icon: "🎓",
    },
    {
      name: "Yoga workshop",
      category: "Health & Wellness",
      icon: "🧘",
    },
    {
      name: "Awareness Rallies",
      category: "Awareness",
      icon: "📢",
    },
    {
      name: "National Festival Celebration",
      category: "Cultural",
      icon: "🇮🇳",
    },
    {
      name: "Pad Bank Program",
      category: "Women Empowerment",
      icon: "🩸",
    },
    {
      name: "ARP centre",
      category: "Infrastructure",
      icon: "🏢",
    },
  ];

  const categories = [...new Set(programs.map((p) => p.category))];

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-gray-400 mb-4">
            <a href="/work" className="hover:text-green-700 transition-colors">
              Our Work
            </a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-green-700">Delhi</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <MapPin className="w-12 h-12 text-green-700" />
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-green-700">
                Delhi
              </h1>
              <p className="text-xl text-gray-400">13 Active Programs</p>
            </div>
          </div>
          <p className="text-gray-300 max-w-3xl">
            Our most extensive operations serving communities across Delhi slums
            through education, health, awareness, and empowerment programs.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-zinc-800 rounded-lg p-6 text-center border border-zinc-700">
            <div className="text-3xl font-black text-green-700">13</div>
            <div className="text-sm text-gray-400">Programs</div>
          </div>
          <div className="bg-zinc-800 rounded-lg p-6 text-center border border-zinc-700">
            <div className="text-3xl font-black text-green-700">8</div>
            <div className="text-sm text-gray-400">Slum Areas</div>
          </div>
          <div className="bg-zinc-800 rounded-lg p-6 text-center border border-zinc-700">
            <div className="text-3xl font-black text-green-700">
              {categories.length}
            </div>
            <div className="text-sm text-gray-400">Categories</div>
          </div>
          <div className="bg-zinc-800 rounded-lg p-6 text-center border border-zinc-700">
            <div className="text-3xl font-black text-green-700">1000s</div>
            <div className="text-sm text-gray-400">Beneficiaries</div>
          </div>
        </div>

        {/* Program Highlights */}
        <div className="bg-zinc-800 rounded-lg p-8 mb-12 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-700 mb-6">
            Program Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 bg-zinc-900 rounded-lg border border-zinc-700">
              <div className="text-2xl">📚</div>
              <div>
                <h3 className="font-semibold text-gray-200 mb-1">
                  Free Evening Classes
                </h3>
                <p className="text-sm text-gray-400">
                  Operating in 8 different slums with dedicated teachers and
                  custom syllabus
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-zinc-900 rounded-lg border border-zinc-700">
              <div className="text-2xl">🎓</div>
              <div>
                <h3 className="font-semibold text-gray-200 mb-1">
                  DU Admission Assistance
                </h3>
                <p className="text-sm text-gray-400">
                  Helping students navigate college admissions and secure higher
                  education
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-zinc-900 rounded-lg border border-zinc-700">
              <div className="text-2xl">🛠️</div>
              <div>
                <h3 className="font-semibold text-gray-200 mb-1">
                  Skill Workshops
                </h3>
                <p className="text-sm text-gray-400">
                  Vocational training for youth empowerment and livelihood
                  opportunities
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-zinc-900 rounded-lg border border-zinc-700">
              <div className="text-2xl">🩸</div>
              <div>
                <h3 className="font-semibold text-gray-200 mb-1">
                  Pad Bank Program
                </h3>
                <p className="text-sm text-gray-400">
                  Women's health and menstrual hygiene awareness initiative
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* All Programs List */}
        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-6">
            All Programs in Delhi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="bg-zinc-800 border-zinc-700 hover:border-green-700 transition-all"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{program.icon}</div>
                    <div className="flex-1">
                      <div className="text-xs text-green-700 font-semibold mb-1">
                        {program.category}
                      </div>
                      <CardTitle className="text-lg text-gray-200">
                        {program.name}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Categories Summary */}
        <div className="mt-12 bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-lg p-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
            Program Categories
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-zinc-900 rounded-full border border-zinc-700"
              >
                <span className="text-gray-300 text-sm">{category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-green-900 rounded-lg p-8 text-center border border-green-700">
          <h3 className="text-2xl font-bold text-white mb-3">
            Join Our Delhi Programs
          </h3>
          <p className="text-green-100 mb-6">
            Be a part of our mission to serve Delhi's marginalized communities
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/get-involved/volunteer"
              className="px-6 py-3 bg-white text-green-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Volunteer
            </a>
            <a
              href="/get-involved/donate"
              className="px-6 py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
            >
              Donate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
