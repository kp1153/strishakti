import { Users, Heart, BookOpen } from "lucide-react";

export const metadata = {
  title: `Overview - About - ${process.env.NEXT_PUBLIC_ORG_SHORT}`,
  description:
    "Learn about ARP India's mission, work in education, health, and awareness. Serving marginalized communities since 2014.",
  keywords:
    "ARP India overview, NGO Delhi, social work, education NGO, health awareness",
};

export default function OverviewPage() {
  const impactStats = [
    {
      icon: Users,
      number: process.env.NEXT_PUBLIC_CHILDREN_IMPACTED,
      label: "Children Impacted",
      color: "text-green-700",
    },
    {
      icon: Heart,
      number: process.env.NEXT_PUBLIC_WOMEN_IMPACTED,
      label: "Women Empowered",
      color: "text-green-600",
    },
    {
      icon: BookOpen,
      number: process.env.NEXT_PUBLIC_YOUTH_IMPACTED,
      label: "Youth Engaged",
      color: "text-green-700",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-green-700 mb-4">
            Organization Overview
          </h1>
          <p className="text-xl text-gray-400">
            Understanding {process.env.NEXT_PUBLIC_ORG_SHORT}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="bg-zinc-800 rounded-lg p-8 mb-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Who We Are</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              ARP INDIA (Association of Responsible Professionals – Redg.) is a
              registered non-government and non-political organisation of young
              age group founded by Dr. Raza Quadir. This organization has its
              root connected with a student movement Fight4Degree (Fight4Degree
              is a successful student movement led by Dr. Raza Quadir against a
              famous management college in Odisha in the year of 2014).
            </p>
            <p>
              ARP family have zeal to serve the society in inclusive manner and
              welcome everyone to put their initiative in combined manner for
              progressive society irrespective to cast, creeds, religion and
              gender etc.
            </p>
            <p>
              ARP India is not an organization only it is the endeavour of
              energetic youth, students and social activists collectively to
              promote peace, equity, participation, awareness, good governance
              and inclusive growth.
            </p>
          </div>
        </div>

        {/* Our Journey */}
        <div className="bg-zinc-800 rounded-lg p-8 mb-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Our Journey Since 2014
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We are dedicated for the welfare of the society since 2014, working
            in the field of education, health and awareness. We are working for
            the people who live in the last edge of society. Our projects are
            specially designed for those who are not a part of main stream.
          </p>
        </div>

        {/* Education Section */}
        <div className="bg-zinc-800 rounded-lg p-8 mb-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Education</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              In the field of education, we are focussing from Primary to Higher
              level education, specifically who are dropped out from schools or
              not enrolled. ARP India help to get enrolled a large number of
              students in school for primary education. We are providing Free
              Evening Classes in eight different slums of Delhi, where our
              teachers teach them regularly. We have our own syllabus which is
              primarily designed according to the requirement of dropped out and
              not enrolled students. We provide special classes for Secondary
              and Senior Secondary students and give them counselling as well as
              subject expertise. At College level, we are providing counselling
              and assistance in admission process for different universities.
            </p>
          </div>
        </div>

        {/* Health Section */}
        <div className="bg-zinc-800 rounded-lg p-8 mb-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Health</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              In the field of health, we do activities, talk, awareness program
              in association with different government and non-government
              institutions like MCD, Health department, government and private
              hospitals, medical colleges etc. We organize awareness camp and
              rallies for health, hygiene and sanitation.
            </p>
          </div>
        </div>

        {/* Awareness Section */}
        <div className="bg-zinc-800 rounded-lg p-8 mb-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Awareness</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Awareness is one of the focus areas of ARP India along with
              education and health. Various awareness programme are organized
              time to time. Experts of different fields provide their valuable
              suggestions. They motivate the people and aware them about their
              basic rights, duties through different talks, activities, dramas,
              skits etc.
            </p>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-lg p-8 mb-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-zinc-900 rounded-lg border border-zinc-700"
              >
                <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                <div className="text-3xl font-bold text-green-700 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-zinc-800 rounded-lg p-8 border border-zinc-700">
          <p className="text-gray-300 leading-relaxed text-center">
            Overall, ARP India has worked with more than 10,000 children,
            approximately 2000 women and 900 youths till date through various
            programmes and activities. All the efforts of ARP India are for
            quality education, better health facilities for all, aware society
            and equal access for livelihood. ARP India is moving ahead with
            strict determination, hard work and with focussed view to achieve
            its vision.
          </p>
        </div>
      </div>
    </div>
  );
}
