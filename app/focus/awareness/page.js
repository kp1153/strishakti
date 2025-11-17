import { Megaphone, Users, MessageSquare, Lightbulb } from "lucide-react";

export const metadata = {
  title: `Awareness - Focus Areas - ${process.env.NEXT_PUBLIC_ORG_SHORT}`,
  description:
    "ARP India conducts awareness programs on rights, duties, and social responsibilities through expert talks, dramas, and community activities",
  keywords:
    "social awareness, rights education, community awareness, Delhi NGO, social responsibility",
};

export default function AwarenessPage() {
  const methods = [
    {
      title: "Expert Talks",
      icon: MessageSquare,
      description:
        "Experts from different fields provide valuable suggestions and insights",
    },
    {
      title: "Interactive Activities",
      icon: Users,
      description:
        "Engaging community activities to promote awareness and participation",
    },
    {
      title: "Drama & Skits",
      icon: Lightbulb,
      description:
        "Creative performances to educate about rights and social issues",
    },
  ];

  const topics = [
    {
      icon: "⚖️",
      title: "Basic Rights",
      description: "Understanding fundamental rights and entitlements",
    },
    {
      icon: "📜",
      title: "Duties & Responsibilities",
      description: "Learning about civic duties and social responsibilities",
    },
    {
      icon: "🤝",
      title: "Social Issues",
      description: "Awareness on contemporary social challenges",
    },
    {
      icon: "🎯",
      title: "Community Development",
      description: "Collective growth and inclusive participation",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-4 bg-green-700 rounded-full mb-4">
            <Megaphone className="w-12 h-12 text-zinc-900" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-green-700 mb-4">
            Awareness
          </h1>
          <p className="text-xl text-gray-400">
            Empowering communities with knowledge of rights and responsibilities
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Main Description */}
        <div className="bg-zinc-800 rounded-lg p-8 mb-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Why Awareness Matters
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Awareness is one of the focus areas of ARP India along with
            education and health. Various awareness programme are organized time
            to time. Experts of different fields provide their valuable
            suggestions. They motivate the people and aware them about their
            basic rights, duties through different talks, activities, dramas,
            skits etc.
          </p>
        </div>

        {/* Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {methods.map((method, index) => (
            <div
              key={index}
              className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 hover:border-green-700 transition-all text-center"
            >
              <div className="inline-block p-3 bg-green-700 rounded-lg mb-4">
                <method.icon className="w-8 h-8 text-zinc-900" />
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-2">
                {method.title}
              </h3>
              <p className="text-gray-400 text-sm">{method.description}</p>
            </div>
          ))}
        </div>

        {/* What We Cover */}
        <div className="bg-zinc-800 rounded-lg p-8 mb-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-700 mb-6">
            Topics We Cover
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-zinc-900 rounded-lg border border-zinc-700"
              >
                <div className="text-3xl">{topic.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-1">
                    {topic.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{topic.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Program Formats */}
        <div className="bg-gradient-to-r from-green-900 to-green-800 rounded-lg p-8 mb-8 border border-green-700">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            How We Conduct Awareness Programs
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-green-950 rounded-lg border border-green-700">
              <div className="text-2xl">🎤</div>
              <div>
                <h3 className="text-lg font-semibold text-green-200 mb-1">
                  Expert Talks
                </h3>
                <p className="text-green-100 text-sm">
                  Experts from different fields provide their valuable
                  suggestions and motivate people
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-green-950 rounded-lg border border-green-700">
              <div className="text-2xl">🎭</div>
              <div>
                <h3 className="text-lg font-semibold text-green-200 mb-1">
                  Dramas & Skits
                </h3>
                <p className="text-green-100 text-sm">
                  Creative performances to educate about rights, duties, and
                  social issues
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-green-950 rounded-lg border border-green-700">
              <div className="text-2xl">🎯</div>
              <div>
                <h3 className="text-lg font-semibold text-green-200 mb-1">
                  Interactive Activities
                </h3>
                <p className="text-green-100 text-sm">
                  Engaging community activities to promote active participation
                  and learning
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Expert Involvement */}
        <div className="bg-zinc-800 rounded-lg p-8 mb-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Expert Participation
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Experts of different fields provide their valuable suggestions. They
            motivate the people and aware them about their basic rights, duties
            through different talks, activities, dramas, skits etc.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-zinc-900 rounded-lg border border-zinc-700">
              <div className="text-3xl mb-2">👨‍⚖️</div>
              <p className="text-gray-300 text-sm">Legal Experts</p>
            </div>
            <div className="text-center p-4 bg-zinc-900 rounded-lg border border-zinc-700">
              <div className="text-3xl mb-2">👨‍🏫</div>
              <p className="text-gray-300 text-sm">Social Workers</p>
            </div>
            <div className="text-center p-4 bg-zinc-900 rounded-lg border border-zinc-700">
              <div className="text-3xl mb-2">👩‍💼</div>
              <p className="text-gray-300 text-sm">Field Experts</p>
            </div>
            <div className="text-center p-4 bg-zinc-900 rounded-lg border border-zinc-700">
              <div className="text-3xl mb-2">🎓</div>
              <p className="text-gray-300 text-sm">Educators</p>
            </div>
          </div>
        </div>

        {/* Regular Programs */}
        <div className="bg-zinc-800 rounded-lg p-8 mb-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Regular Programs
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Various awareness programme are organized time to time. We ensure
            continuous engagement with communities through regular sessions,
            workshops, and interactive programs throughout the year.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-lg p-8 text-center border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Our Impact in Awareness
          </h2>
          <div className="text-5xl font-black text-green-700 mb-2">
            {process.env.NEXT_PUBLIC_YOUTH_IMPACTED}
          </div>
          <p className="text-gray-400 text-lg">
            Youth Engaged Through Awareness Programs
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="/work/delhi"
            className="px-6 py-3 bg-green-700 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors"
          >
            View Awareness Programs
          </a>
          <a
            href="/get-involved/volunteer"
            className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-green-700 font-semibold rounded-lg border border-zinc-700 transition-colors"
          >
            Join Our Initiatives
          </a>
        </div>
      </div>
    </div>
  );
}
