import { Target, Compass } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const metadata = {
  title: `Vision & Mission - About - ${process.env.NEXT_PUBLIC_ORG_SHORT}`,
  description:
    "Our vision for an equitable society and mission to empower marginalized communities through education, health, and awareness.",
  keywords:
    "ARP India vision, NGO mission, social empowerment, inclusive growth",
};

export default function VisionMissionPage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-green-700 mb-4">
            Vision & Mission
          </h1>
          <p className="text-xl text-gray-400">
            Our guiding principles for creating positive change
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vision Card */}
          <Card className="bg-zinc-800 border-zinc-700 hover:border-green-700 transition-all">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-green-700 rounded-lg">
                  <Target className="w-8 h-8 text-zinc-900" />
                </div>
                <CardTitle className="text-3xl text-green-700">
                  Vision
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-700">
                <p className="text-lg text-gray-300 leading-relaxed italic">
                  "{process.env.NEXT_PUBLIC_VISION}"
                </p>
              </div>

              {/* Vision Breakdown */}
              <div className="mt-6 space-y-3">
                <h3 className="text-lg font-semibold text-green-600 mb-4">
                  What We Envision:
                </h3>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-700 rounded-full mt-2"></div>
                  <p className="text-gray-400">
                    A society of{" "}
                    <span className="text-green-700 font-semibold">
                      peace and equity
                    </span>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-700 rounded-full mt-2"></div>
                  <p className="text-gray-400">
                    <span className="text-green-700 font-semibold">
                      Participation and awareness
                    </span>{" "}
                    at all levels
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-700 rounded-full mt-2"></div>
                  <p className="text-gray-400">
                    <span className="text-green-700 font-semibold">
                      Inclusive growth
                    </span>{" "}
                    for everyone
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-700 rounded-full mt-2"></div>
                  <p className="text-gray-400">
                    Universal access to{" "}
                    <span className="text-green-700 font-semibold">
                      education and health
                    </span>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-700 rounded-full mt-2"></div>
                  <p className="text-gray-400">
                    Ensuring{" "}
                    <span className="text-green-700 font-semibold">
                      livelihood for all
                    </span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mission Card */}
          <Card className="bg-zinc-800 border-zinc-700 hover:border-green-700 transition-all">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-green-700 rounded-lg">
                  <Compass className="w-8 h-8 text-zinc-900" />
                </div>
                <CardTitle className="text-3xl text-green-700">
                  Mission
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-700">
                <p className="text-lg text-gray-300 leading-relaxed italic">
                  "{process.env.NEXT_PUBLIC_MISSION}"
                </p>
              </div>

              {/* Mission Breakdown */}
              <div className="mt-6 space-y-3">
                <h3 className="text-lg font-semibold text-green-600 mb-4">
                  How We Work:
                </h3>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-700 rounded-full mt-2"></div>
                  <p className="text-gray-400">
                    <span className="text-green-700 font-semibold">
                      Bridge the social divide
                    </span>{" "}
                    between communities
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-700 rounded-full mt-2"></div>
                  <p className="text-gray-400">
                    <span className="text-green-700 font-semibold">
                      Empower the deprived
                    </span>{" "}
                    and marginalized sections
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-700 rounded-full mt-2"></div>
                  <p className="text-gray-400">
                    <span className="text-green-700 font-semibold">
                      Mainstream access points
                    </span>{" "}
                    for excluded communities
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-700 rounded-full mt-2"></div>
                  <p className="text-gray-400">
                    Open up{" "}
                    <span className="text-green-700 font-semibold">
                      new dimensions of engagement
                    </span>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-700 rounded-full mt-2"></div>
                  <p className="text-gray-400">
                    Special focus on{" "}
                    <span className="text-green-700 font-semibold">
                      women empowerment
                    </span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Our Approach */}
        <div className="mt-12 bg-zinc-800 rounded-lg p-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
            Our Three Pillars of Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-zinc-900 rounded-lg border border-zinc-700">
              <div className="text-4xl mb-3">📚</div>
              <h3 className="text-xl font-bold text-green-700 mb-2">
                Education
              </h3>
              <p className="text-gray-400 text-sm">
                Primary to Higher education for dropouts and marginalized
                students
              </p>
            </div>
            <div className="text-center p-6 bg-zinc-900 rounded-lg border border-zinc-700">
              <div className="text-4xl mb-3">🏥</div>
              <h3 className="text-xl font-bold text-green-700 mb-2">Health</h3>
              <p className="text-gray-400 text-sm">
                Awareness camps, hygiene programs, and healthcare access
              </p>
            </div>
            <div className="text-center p-6 bg-zinc-900 rounded-lg border border-zinc-700">
              <div className="text-4xl mb-3">📢</div>
              <h3 className="text-xl font-bold text-green-700 mb-2">
                Awareness
              </h3>
              <p className="text-gray-400 text-sm">
                Rights, duties, and social awareness through various activities
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-green-900 to-green-800 rounded-lg p-8 text-center border border-green-700">
          <h3 className="text-2xl font-bold text-white mb-3">
            Join Us in Our Mission
          </h3>
          <p className="text-green-100 mb-6">
            Together, we can create a more equitable and inclusive society
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/get-involved/volunteer"
              className="px-6 py-3 bg-white text-green-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Volunteer With Us
            </a>
            <a
              href="/get-involved/donate"
              className="px-6 py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
            >
              Support Our Work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
