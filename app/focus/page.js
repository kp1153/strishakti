import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { BookOpen, Heart, Megaphone } from "lucide-react";

export const metadata = {
  title: `Our Focus Areas - ${process.env.NEXT_PUBLIC_ORG_SHORT}`,
  description:
    "ARP India works in three key focus areas: Education, Health, and Awareness to empower marginalized communities",
  keywords:
    "ARP India focus, education NGO, health awareness, social awareness, community development",
};

export default function FocusPage() {
  const focusAreas = [
    {
      title: "Education",
      icon: BookOpen,
      color: "text-green-700",
      bgColor: "bg-green-700",
      description:
        "From Primary to Higher education, empowering dropouts and marginalized students",
      highlights: [
        "Free Evening Classes in 8 Delhi slums",
        "Primary to Higher education support",
        "Custom syllabus for dropouts",
        "College admission assistance",
      ],
      href: "/focus/education",
      stats: "10,000+ Children Impacted",
    },
    {
      title: "Health",
      icon: Heart,
      color: "text-green-600",
      bgColor: "bg-green-600",
      description:
        "Health awareness, hygiene camps, and sanitation programs in collaboration with government institutions",
      highlights: [
        "Health awareness camps",
        "Hygiene and sanitation rallies",
        "Partnership with hospitals",
        "Medical college collaborations",
      ],
      href: "/focus/health",
      stats: "2,000+ Women Empowered",
    },
    {
      title: "Awareness",
      icon: Megaphone,
      color: "text-green-700",
      bgColor: "bg-green-700",
      description:
        "Empowering people with knowledge of their basic rights, duties, and social responsibilities",
      highlights: [
        "Expert talks and workshops",
        "Rights and duties education",
        "Drama and skits programs",
        "Community awareness drives",
      ],
      href: "/focus/awareness",
      stats: "900+ Youth Engaged",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-green-700 mb-4">
            Our Focus Areas
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Three pillars of social transformation
          </p>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Working for people who live in the last edge of society, with
            projects specially designed for those who are not part of the
            mainstream
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="bg-zinc-800 rounded-lg p-8 mb-12 border border-zinc-700 text-center">
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Since {process.env.NEXT_PUBLIC_FOUNDED_YEAR}, we have been dedicated
            to the welfare of society, working in the field of{" "}
            <span className="text-green-700 font-semibold">education</span>,{" "}
            <span className="text-green-600 font-semibold">health</span>, and{" "}
            <span className="text-green-700 font-semibold">awareness</span>. We
            serve the people who live at the last edge of society with projects
            specially designed for those who are not part of the mainstream.
          </p>
        </div>

        {/* Focus Areas Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {focusAreas.map((area, index) => (
            <Card
              key={index}
              className="bg-zinc-800 border-zinc-700 hover:border-green-700 transition-all group"
            >
              <CardHeader>
                <div className="flex items-center justify-center mb-6">
                  <div
                    className={`p-4 ${area.bgColor} rounded-full group-hover:scale-110 transition-transform`}
                  >
                    <area.icon className="w-12 h-12 text-zinc-900" />
                  </div>
                </div>
                <CardTitle
                  className={`text-2xl text-center mb-3 ${area.color}`}
                >
                  {area.title}
                </CardTitle>
                <CardDescription className="text-gray-400 text-center">
                  {area.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {area.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div
                        className={`w-1.5 h-1.5 ${area.bgColor} rounded-full mt-2 flex-shrink-0`}
                      ></div>
                      <p className="text-sm text-gray-400">{highlight}</p>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="bg-zinc-900 rounded-lg p-4 mb-4 border border-zinc-700 text-center">
                  <p className={`text-lg font-bold ${area.color}`}>
                    {area.stats}
                  </p>
                </div>

                {/* CTA Button */}
                <Link href={area.href}>
                  <button
                    className={`w-full py-3 ${area.bgColor} hover:opacity-90 text-white font-semibold rounded-lg transition-all`}
                  >
                    Learn More
                  </button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Summary */}
        <div className="bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-lg p-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
            Our Combined Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-zinc-900 rounded-lg border border-zinc-700">
              <div className="text-3xl font-black text-green-700 mb-2">
                {process.env.NEXT_PUBLIC_CHILDREN_IMPACTED}
              </div>
              <div className="text-gray-400">Children Impacted</div>
            </div>
            <div className="text-center p-6 bg-zinc-900 rounded-lg border border-zinc-700">
              <div className="text-3xl font-black text-green-600 mb-2">
                {process.env.NEXT_PUBLIC_WOMEN_IMPACTED}
              </div>
              <div className="text-gray-400">Women Empowered</div>
            </div>
            <div className="text-center p-6 bg-zinc-900 rounded-lg border border-zinc-700">
              <div className="text-3xl font-black text-green-700 mb-2">
                {process.env.NEXT_PUBLIC_YOUTH_IMPACTED}
              </div>
              <div className="text-gray-400">Youth Engaged</div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-12 bg-green-900 rounded-lg p-8 text-center border border-green-700">
          <p className="text-xl text-green-50 italic mb-2">
            "All the efforts of ARP India are for quality education, better
            health facilities for all, aware society and equal access for
            livelihood."
          </p>
          <p className="text-green-200 text-sm mt-4">
            ARP India is moving ahead with strict determination, hard work and
            with focussed view to achieve its vision.
          </p>
        </div>
      </div>
    </div>
  );
}
