import { Heart, Hospital, Users, Activity } from "lucide-react";

export const metadata = {
  title: `Health - Focus Areas - ${process.env.NEXT_PUBLIC_ORG_SHORT}`,
  description:
    "ARP India conducts health awareness programs, hygiene camps, and sanitation rallies in partnership with government and private institutions",
  keywords:
    "health awareness, hygiene camps, sanitation programs, MCD health, Delhi health NGO",
};

export default function HealthPage() {
  const activities = [
    {
      title: "Awareness Programs",
      icon: Activity,
      description: "Educational talks and activities on health topics",
    },
    {
      title: "Health Camps",
      icon: Hospital,
      description: "Organized awareness camps for communities",
    },
    {
      title: "Hygiene Rallies",
      icon: Users,
      description: "Community rallies for health and sanitation",
    },
  ];

  const partners = [
    { name: "MCD", type: "Municipal Corporation" },
    { name: "Health Department", type: "Government" },
    { name: "Government Hospitals", type: "Public Healthcare" },
    { name: "Private Hospitals", type: "Private Healthcare" },
    { name: "Medical Colleges", type: "Educational Institutions" },
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-4 bg-green-600 rounded-full mb-4">
            <Heart className="w-12 h-12 text-zinc-900" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-green-600 mb-4">
            Health
          </h1>
          <p className="text-xl text-gray-400">
            Promoting health, hygiene, and sanitation awareness
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Main Description */}
        <div className="bg-zinc-800 rounded-lg p-8 mb-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            Our Health Initiatives
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            In the field of health, we do activities, talk, awareness program in
            association with different government and non-government
            institutions like MCD, Health department, government and private
            hospitals, medical colleges etc. We organize awareness camp and
            rallies for health, hygiene and sanitation.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 hover:border-green-600 transition-all text-center"
            >
              <div className="inline-block p-3 bg-green-600 rounded-lg mb-4">
                <activity.icon className="w-8 h-8 text-zinc-900" />
              </div>
              <h3 className="text-xl font-bold text-green-600 mb-2">
                {activity.title}
              </h3>
              <p className="text-gray-400 text-sm">{activity.description}</p>
            </div>
          ))}
        </div>

        {/* Key Focus Areas */}
        <div className="bg-gradient-to-r from-green-900 to-green-800 rounded-lg p-8 mb-8 border border-green-600">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            What We Focus On
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-green-950 rounded-lg border border-green-700">
              <div className="text-4xl mb-3">🏥</div>
              <h3 className="text-lg font-bold text-green-200 mb-2">Health</h3>
              <p className="text-green-100 text-sm">
                General health awareness and preventive care
              </p>
            </div>
            <div className="text-center p-6 bg-green-950 rounded-lg border border-green-700">
              <div className="text-4xl mb-3">🧼</div>
              <h3 className="text-lg font-bold text-green-200 mb-2">Hygiene</h3>
              <p className="text-green-100 text-sm">
                Personal and community hygiene practices
              </p>
            </div>
            <div className="text-center p-6 bg-green-950 rounded-lg border border-green-700">
              <div className="text-4xl mb-3">🚰</div>
              <h3 className="text-lg font-bold text-green-200 mb-2">
                Sanitation
              </h3>
              <p className="text-green-100 text-sm">
                Clean environment and sanitation drives
              </p>
            </div>
          </div>
        </div>

        {/* Our Partners */}
        <div className="bg-zinc-800 rounded-lg p-8 mb-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-600 mb-6">
            Our Partners & Collaborators
          </h2>
          <p className="text-gray-400 mb-6">
            We work in association with various government and non-government
            institutions:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-zinc-900 rounded-lg border border-zinc-700"
              >
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <div>
                  <p className="text-gray-200 font-semibold">{partner.name}</p>
                  <p className="text-gray-500 text-sm">{partner.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Programs Format */}
        <div className="bg-zinc-800 rounded-lg p-8 mb-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-600 mb-6">
            How We Conduct Programs
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-zinc-900 rounded-lg border border-zinc-700">
              <div className="text-2xl">💬</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-1">
                  Awareness Talks
                </h3>
                <p className="text-gray-400 text-sm">
                  Educational sessions on health topics and preventive care
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-zinc-900 rounded-lg border border-zinc-700">
              <div className="text-2xl">🎪</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-1">
                  Health Camps
                </h3>
                <p className="text-gray-400 text-sm">
                  On-ground camps for direct community engagement
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-zinc-900 rounded-lg border border-zinc-700">
              <div className="text-2xl">🚶‍♀️</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-1">
                  Awareness Rallies
                </h3>
                <p className="text-gray-400 text-sm">
                  Community rallies to spread awareness on hygiene and
                  sanitation
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-lg p-8 text-center border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            Our Impact in Health
          </h2>
          <div className="text-5xl font-black text-green-600 mb-2">
            {process.env.NEXT_PUBLIC_WOMEN_IMPACTED}
          </div>
          <p className="text-gray-400 text-lg">
            Women Empowered Through Health Programs
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="/work/delhi"
            className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg transition-colors"
          >
            View Health Programs
          </a>
          <a
            href="/get-involved/volunteer"
            className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-green-600 font-semibold rounded-lg border border-zinc-700 transition-colors"
          >
            Join Health Drives
          </a>
        </div>
      </div>
    </div>
  );
}
