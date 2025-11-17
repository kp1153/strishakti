import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MapPin, ChevronRight, Heart, Droplet } from "lucide-react";

export const metadata = {
  title: `Chennai Programs - Our Work - ${process.env.NEXT_PUBLIC_ORG_SHORT}`,
  description:
    "ARP India's disaster relief work - Rescue and Rehabilitation during Chennai Floods 2005",
  keywords:
    "Chennai flood relief, disaster management, NGO Chennai, 2005 floods rehabilitation",
};

export default function ChennaiWorkPage() {
  const program = {
    name: "Rescue and Rehabilitation in Chennai Flood in 2005",
    category: "Disaster Relief",
    icon: "🌊",
    year: "2005",
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-gray-400 mb-4">
            <a href="/work" className="hover:text-green-600 transition-colors">
              Our Work
            </a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-green-600">Chennai</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <MapPin className="w-12 h-12 text-green-600" />
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-green-600">
                Chennai
              </h1>
              <p className="text-xl text-gray-400">
                Disaster Relief & Rehabilitation
              </p>
            </div>
          </div>
          <p className="text-gray-300 max-w-3xl">
            Our humanitarian response during one of Chennai's most devastating
            natural disasters in 2005.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Historical Context */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg p-8 mb-8 border border-blue-600">
          <div className="flex items-start gap-4">
            <Droplet className="w-12 h-12 text-blue-200 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Chennai Floods 2005
              </h2>
              <div className="space-y-3 text-blue-50">
                <p>
                  In 2005, Chennai experienced severe flooding that affected
                  thousands of families and displaced numerous communities.
                  During this critical time, our team was on the ground
                  providing emergency relief and rehabilitation support.
                </p>
                <p>
                  This disaster relief work demonstrated our commitment to
                  serving communities in their most vulnerable moments,
                  regardless of geography.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Program Details */}
        <div>
          <h2 className="text-2xl font-bold text-green-600 mb-6">
            Our Disaster Relief Program
          </h2>
          <Card className="bg-zinc-800 border-zinc-700 hover:border-green-600 transition-all">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-green-600 rounded-lg">
                  <div className="text-5xl">{program.icon}</div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-xs text-green-600 font-semibold px-3 py-1 bg-green-950 rounded-full border border-green-600">
                      {program.category}
                    </div>
                    <div className="text-xs text-gray-400 px-3 py-1 bg-zinc-900 rounded-full border border-zinc-700">
                      {program.year}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-green-600">
                    {program.name}
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-700">
                  <h3 className="text-lg font-semibold text-gray-200 mb-4">
                    Our Response Activities
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">🚨</div>
                      <div>
                        <p className="font-semibold text-gray-300 text-sm mb-1">
                          Emergency Rescue
                        </p>
                        <p className="text-gray-400 text-sm">
                          Immediate response to rescue affected families from
                          flooded areas
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">🏥</div>
                      <div>
                        <p className="font-semibold text-gray-300 text-sm mb-1">
                          Medical Support
                        </p>
                        <p className="text-gray-400 text-sm">
                          Providing first aid and medical assistance to flood
                          victims
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">🍲</div>
                      <div>
                        <p className="font-semibold text-gray-300 text-sm mb-1">
                          Food & Supplies
                        </p>
                        <p className="text-gray-400 text-sm">
                          Distribution of food, clean water, and essential
                          supplies
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">🏠</div>
                      <div>
                        <p className="font-semibold text-gray-300 text-sm mb-1">
                          Rehabilitation
                        </p>
                        <p className="text-gray-400 text-sm">
                          Long-term support for affected families to rebuild
                          their lives
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Impact Areas */}
        <div className="mt-8 bg-zinc-800 rounded-lg p-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-600 mb-6">
            Areas of Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-4 bg-zinc-900 rounded-lg border border-zinc-700">
              <Heart className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-200 mb-2">
                  Humanitarian Relief
                </h3>
                <p className="text-sm text-gray-400">
                  Immediate emergency response providing shelter, food, medical
                  care, and emotional support to affected families
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-zinc-900 rounded-lg border border-zinc-700">
              <Heart className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-200 mb-2">
                  Rehabilitation Support
                </h3>
                <p className="text-sm text-gray-400">
                  Long-term assistance helping families rebuild and recover from
                  the devastating impact of the floods
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Commitment Section */}
        <div className="mt-8 bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-lg p-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-600 mb-4 text-center">
            Our Commitment to Disaster Relief
          </h2>
          <p className="text-gray-300 leading-relaxed text-center max-w-2xl mx-auto">
            The Chennai Floods relief work exemplifies our dedication to serving
            communities in crisis. While our primary focus is on long-term
            development through education, health, and awareness, we remain
            committed to responding to humanitarian emergencies whenever and
            wherever they occur.
          </p>
        </div>

        {/* Historical Significance */}
        <div className="mt-8 bg-zinc-800 rounded-lg p-6 border border-zinc-700">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-2xl">📅</div>
            <h3 className="text-lg font-bold text-green-600">
              Historical Record
            </h3>
          </div>
          <p className="text-gray-400 text-sm">
            This program represents one of our early disaster relief
            initiatives, demonstrating our organization's commitment to
            humanitarian service and emergency response capabilities. It remains
            an important part of our history and mission to serve communities in
            their time of greatest need.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-green-900 rounded-lg p-8 text-center border border-green-600">
          <h3 className="text-2xl font-bold text-white mb-3">
            Support Our Humanitarian Work
          </h3>
          <p className="text-green-100 mb-6">
            Help us be prepared to respond to emergencies and serve communities
            in crisis
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/get-involved/volunteer"
              className="px-6 py-3 bg-white text-green-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Join Our Team
            </a>
            <a
              href="/get-involved/donate"
              className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-500 transition-colors"
            >
              Donate Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
