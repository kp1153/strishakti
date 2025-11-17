import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MapPin, Users } from "lucide-react";

export const metadata = {
  title: `Our Work - ${process.env.NEXT_PUBLIC_ORG_SHORT}`,
  description:
    "ARP India's programs and activities across Delhi, Odisha, Bihar, and Chennai serving marginalized communities",
  keywords:
    "ARP India programs, Delhi NGO programs, social work India, community development",
};

export default function WorkPage() {
  const states = [
    {
      name: "Delhi",
      slug: "delhi",
      programCount: 13,
      color: "text-green-700",
      bgColor: "bg-green-700",
      description:
        "Comprehensive education, health, and awareness programs across Delhi slums",
      highlights: [
        "Free Evening Classes",
        "Skill Workshops",
        "Health Awareness",
        "DU Admission Support",
      ],
    },
    {
      name: "Odisha",
      slug: "odisha",
      programCount: 1,
      color: "text-green-600",
      bgColor: "bg-green-600",
      description:
        "Where it all began - continuing the legacy of Fight4Degree movement",
      highlights: ["Bachpan Ki Shiksha"],
    },
    {
      name: "Bihar",
      slug: "bihar",
      programCount: 3,
      color: "text-green-700",
      bgColor: "bg-green-700",
      description: "Governance awareness and rural empowerment programs",
      highlights: ["Panchayat Raj Awareness", "MGNREGA Drives", "SJTPL"],
    },
    {
      name: "Chennai",
      slug: "chennai",
      programCount: 1,
      color: "text-green-600",
      bgColor: "bg-green-600",
      description: "Disaster response and rehabilitation work",
      highlights: ["Flood Relief 2005"],
    },
  ];

  const totalPrograms = states.reduce(
    (sum, state) => sum + state.programCount,
    0
  );

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-green-700 mb-4">
            Our Work Across India
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-6">
            Serving marginalized communities since{" "}
            {process.env.NEXT_PUBLIC_FOUNDED_YEAR}
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-center">
            <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
              <div className="text-3xl font-black text-green-700">
                {states.length}
              </div>
              <div className="text-gray-400">States</div>
            </div>
            <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700">
              <div className="text-3xl font-black text-green-700">
                {totalPrograms}
              </div>
              <div className="text-gray-400">Programs</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="bg-zinc-800 rounded-lg p-8 mb-12 border border-zinc-700 text-center">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Making a Difference Where It Matters
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto">
            We are working for the people who live in the last edge of society.
            Our projects are specially designed for those who are not a part of
            main stream. Through targeted programs in education, health, and
            awareness, we create lasting impact in communities across India.
          </p>
        </div>

        {/* States Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {states.map((state, index) => (
            <Link key={index} href={`/work/${state.slug}`}>
              <Card className="h-full bg-zinc-800 border-zinc-700 hover:border-green-700 transition-all hover:shadow-lg hover:shadow-green-900/20">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <MapPin className={`w-8 h-8 ${state.color}`} />
                      <CardTitle className={`text-3xl ${state.color}`}>
                        {state.name}
                      </CardTitle>
                    </div>
                    <div className={`px-4 py-2 ${state.bgColor} rounded-full`}>
                      <span className="text-zinc-900 font-bold">
                        {state.programCount} Programs
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4">{state.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500 font-semibold mb-2">
                      Key Programs:
                    </p>
                    {state.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div
                          className={`w-1.5 h-1.5 ${state.bgColor} rounded-full`}
                        ></div>
                        <p className="text-sm text-gray-400">{highlight}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <div
                      className={`inline-flex items-center gap-2 ${state.color} font-semibold hover:gap-3 transition-all`}
                    >
                      <span>View All Programs</span>
                      <span>→</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="mt-12 bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-lg p-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
            Our Combined Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-zinc-900 rounded-lg border border-zinc-700">
              <Users className="w-12 h-12 mx-auto mb-4 text-green-700" />
              <div className="text-3xl font-black text-green-700 mb-2">
                {process.env.NEXT_PUBLIC_CHILDREN_IMPACTED}
              </div>
              <div className="text-gray-400">Children Impacted</div>
            </div>
            <div className="text-center p-6 bg-zinc-900 rounded-lg border border-zinc-700">
              <Users className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <div className="text-3xl font-black text-green-600 mb-2">
                {process.env.NEXT_PUBLIC_WOMEN_IMPACTED}
              </div>
              <div className="text-gray-400">Women Empowered</div>
            </div>
            <div className="text-center p-6 bg-zinc-900 rounded-lg border border-zinc-700">
              <Users className="w-12 h-12 mx-auto mb-4 text-green-700" />
              <div className="text-3xl font-black text-green-700 mb-2">
                {process.env.NEXT_PUBLIC_YOUTH_IMPACTED}
              </div>
              <div className="text-gray-400">Youth Engaged</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-green-700 mb-4">
            Want to Make a Difference?
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/get-involved/volunteer"
              className="px-8 py-3 bg-green-700 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors"
            >
              Volunteer With Us
            </a>
            <a
              href="/get-involved/donate"
              className="px-8 py-3 bg-zinc-800 hover:bg-zinc-700 text-green-700 font-semibold rounded-lg border border-zinc-700 transition-colors"
            >
              Support Our Work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
