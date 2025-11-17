import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MapPin, ChevronRight } from "lucide-react";

export const metadata = {
  title: `Bihar Programs - Our Work - ${process.env.NEXT_PUBLIC_ORG_SHORT}`,
  description:
    "ARP India's governance and rural empowerment programs in Bihar including Panchayat Raj awareness and MGNREGA drives",
  keywords:
    "Bihar NGO, Panchayat Raj, MGNREGA, rural empowerment Bihar, governance awareness",
};

export default function BiharWorkPage() {
  const programs = [
    {
      name: "Panchayat Raj Awakening Programme",
      category: "Governance Awareness",
      icon: "🏛️",
      description:
        "Empowering rural communities with knowledge about Panchayati Raj system and local governance",
      focus: [
        "Local governance awareness",
        "Rights and responsibilities",
        "Democratic participation",
      ],
    },
    {
      name: "MGNAREGA awareness drive",
      category: "Employment Rights",
      icon: "👷",
      description:
        "Creating awareness about MGNREGA (Mahatma Gandhi National Rural Employment Guarantee Act) rights and benefits",
      focus: [
        "Employment guarantee scheme",
        "Rural livelihood",
        "Workers' rights",
      ],
    },
    {
      name: "SJTPL",
      category: "Special Program",
      icon: "🎯",
      description:
        "Specialized program for community development and empowerment",
      focus: [
        "Community development",
        "Targeted intervention",
        "Social welfare",
      ],
    },
  ];

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
            <span className="text-green-700">Bihar</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <MapPin className="w-12 h-12 text-green-700" />
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-green-700">
                Bihar
              </h1>
              <p className="text-xl text-gray-400">
                Rural Empowerment & Governance
              </p>
            </div>
          </div>
          <p className="text-gray-300 max-w-3xl">
            Focusing on governance awareness and rural empowerment through
            targeted programs that educate communities about their rights and
            entitlements.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-zinc-800 rounded-lg p-6 text-center border border-zinc-700">
            <div className="text-3xl font-black text-green-700">3</div>
            <div className="text-sm text-gray-400">Programs</div>
          </div>
          <div className="bg-zinc-800 rounded-lg p-6 text-center border border-zinc-700">
            <div className="text-3xl font-black text-green-700">2</div>
            <div className="text-sm text-gray-400">Focus Areas</div>
          </div>
          <div className="bg-zinc-800 rounded-lg p-6 text-center border border-zinc-700">
            <div className="text-3xl">🏛️</div>
            <div className="text-sm text-gray-400">Governance</div>
          </div>
          <div className="bg-zinc-800 rounded-lg p-6 text-center border border-zinc-700">
            <div className="text-3xl">👷</div>
            <div className="text-sm text-gray-400">Employment</div>
          </div>
        </div>

        {/* Focus Areas */}
        <div className="bg-zinc-800 rounded-lg p-8 mb-12 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-700 mb-6">
            Our Focus in Bihar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-4 bg-zinc-900 rounded-lg border border-zinc-700">
              <div className="text-3xl">🏛️</div>
              <div>
                <h3 className="font-bold text-gray-200 mb-2">
                  Governance Awareness
                </h3>
                <p className="text-sm text-gray-400">
                  Educating rural communities about Panchayati Raj system, local
                  governance structures, and their role in democratic processes
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-zinc-900 rounded-lg border border-zinc-700">
              <div className="text-3xl">👷</div>
              <div>
                <h3 className="font-bold text-gray-200 mb-2">
                  Employment Rights
                </h3>
                <p className="text-sm text-gray-400">
                  Creating awareness about MGNREGA and other employment
                  guarantee schemes to ensure rural workers know their rights
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Programs */}
        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-6">
            Our Programs in Bihar
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="bg-zinc-800 border-zinc-700 hover:border-green-700 transition-all"
              >
                <CardHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-green-700 rounded-lg">
                      <div className="text-3xl">{program.icon}</div>
                    </div>
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
                <CardContent>
                  <p className="text-gray-400 text-sm mb-4">
                    {program.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-xs text-gray-500 font-semibold">
                      Key Focus:
                    </p>
                    {program.focus.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-700 rounded-full"></div>
                        <p className="text-sm text-gray-400">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Panchayat Raj Highlight */}
        <div className="mt-12 bg-gradient-to-r from-green-900 to-green-800 rounded-lg p-8 border border-green-700">
          <h2 className="text-2xl font-bold text-white mb-4">
            Panchayat Raj Awakening Programme
          </h2>
          <div className="space-y-3 text-green-50">
            <p>
              Our flagship governance awareness program in Bihar focuses on
              empowering rural communities with knowledge about the Panchayati
              Raj system.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-green-950 rounded-lg p-4 border border-green-700">
                <div className="text-2xl mb-2">📚</div>
                <p className="text-green-200 font-semibold text-sm">
                  Education
                </p>
                <p className="text-green-100 text-xs">
                  Understanding local governance
                </p>
              </div>
              <div className="bg-green-950 rounded-lg p-4 border border-green-700">
                <div className="text-2xl mb-2">🗳️</div>
                <p className="text-green-200 font-semibold text-sm">
                  Participation
                </p>
                <p className="text-green-100 text-xs">
                  Active democratic engagement
                </p>
              </div>
              <div className="bg-green-950 rounded-lg p-4 border border-green-700">
                <div className="text-2xl mb-2">⚖️</div>
                <p className="text-green-200 font-semibold text-sm">Rights</p>
                <p className="text-green-100 text-xs">
                  Awareness of entitlements
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MGNREGA Highlight */}
        <div className="mt-8 bg-zinc-800 rounded-lg p-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            MGNREGA Awareness Drive
          </h2>
          <p className="text-gray-300 mb-6">
            Creating awareness about the Mahatma Gandhi National Rural
            Employment Guarantee Act (MGNREGA) - one of the world's largest
            employment guarantee programs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 bg-zinc-900 rounded-lg border border-zinc-700">
              <div className="text-xl">✓</div>
              <div>
                <p className="text-gray-200 font-semibold text-sm mb-1">
                  100 Days Employment
                </p>
                <p className="text-gray-400 text-xs">
                  Information about guaranteed employment rights
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-zinc-900 rounded-lg border border-zinc-700">
              <div className="text-xl">✓</div>
              <div>
                <p className="text-gray-200 font-semibold text-sm mb-1">
                  Wage Rights
                </p>
                <p className="text-gray-400 text-xs">
                  Awareness about minimum wages and timely payment
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-zinc-900 rounded-lg border border-zinc-700">
              <div className="text-xl">✓</div>
              <div>
                <p className="text-gray-200 font-semibold text-sm mb-1">
                  Application Process
                </p>
                <p className="text-gray-400 text-xs">
                  Guidance on how to apply and get job cards
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-zinc-900 rounded-lg border border-zinc-700">
              <div className="text-xl">✓</div>
              <div>
                <p className="text-gray-200 font-semibold text-sm mb-1">
                  Grievance Redressal
                </p>
                <p className="text-gray-400 text-xs">
                  Support in addressing issues and complaints
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-green-900 rounded-lg p-8 text-center border border-green-700">
          <h3 className="text-2xl font-bold text-white mb-3">
            Support Our Bihar Programs
          </h3>
          <p className="text-green-100 mb-6">
            Help us empower rural communities with knowledge and rights
            awareness
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
