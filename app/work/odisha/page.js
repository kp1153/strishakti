import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MapPin, ChevronRight, Heart } from "lucide-react";

export const metadata = {
  title: `Odisha Programs - Our Work - ${process.env.NEXT_PUBLIC_ORG_SHORT}`,
  description:
    "ARP India's work in Odisha - the birthplace of Fight4Degree movement and our organization",
  keywords: "Odisha NGO, Fight4Degree, Bachpan Ki Shiksha, Odisha education",
};

export default function OdishaWorkPage() {
  const program = {
    name: "Bachpan Ki Shiksha",
    category: "Primary Education",
    icon: "📚",
    description: "Primary education program for children in Odisha",
    impact: "Continuing the legacy of Fight4Degree movement",
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
            <span className="text-green-600">Odisha</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <MapPin className="w-12 h-12 text-green-600" />
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-green-600">
                Odisha
              </h1>
              <p className="text-xl text-gray-400">Where It All Began</p>
            </div>
          </div>
          <p className="text-gray-300 max-w-3xl">
            Odisha holds special significance for ARP India - this is where the
            Fight4Degree movement was born in 2014, leading to the foundation of
            our organization.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Historical Significance */}
        <div className="bg-gradient-to-r from-green-900 to-green-800 rounded-lg p-8 mb-8 border border-green-600">
          <div className="flex items-start gap-4">
            <Heart className="w-12 h-12 text-white flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                The Birthplace of Our Movement
              </h2>
              <div className="space-y-3 text-green-50">
                <p>
                  In {process.env.NEXT_PUBLIC_MOVEMENT_YEAR}, Odisha witnessed
                  the historic{" "}
                  <span className="font-bold">Fight4Degree movement</span> - an
                  84-day hunger strike that fought for the rights of over 1500
                  students.
                </p>
                <p>
                  This successful movement led by Dr. Raza Quadir became the
                  foundation of ARP India, inspiring us to serve marginalized
                  communities across the country.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-zinc-800 rounded-lg p-6 text-center border border-zinc-700">
            <div className="text-3xl font-black text-green-600">
              {process.env.NEXT_PUBLIC_MOVEMENT_YEAR}
            </div>
            <div className="text-sm text-gray-400">Movement Year</div>
          </div>
          <div className="bg-zinc-800 rounded-lg p-6 text-center border border-zinc-700">
            <div className="text-3xl font-black text-green-600">
              {process.env.NEXT_PUBLIC_HUNGER_STRIKE_DAYS}
            </div>
            <div className="text-sm text-gray-400">Days of Strike</div>
          </div>
          <div className="bg-zinc-800 rounded-lg p-6 text-center border border-zinc-700 md:col-span-1 col-span-2">
            <div className="text-3xl font-black text-green-600">
              {process.env.NEXT_PUBLIC_STUDENTS_BENEFITED}
            </div>
            <div className="text-sm text-gray-400">Students Benefited</div>
          </div>
        </div>

        {/* Current Program */}
        <div>
          <h2 className="text-2xl font-bold text-green-600 mb-6">
            Current Program in Odisha
          </h2>
          <Card className="bg-zinc-800 border-zinc-700 hover:border-green-600 transition-all">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-green-600 rounded-lg">
                  <div className="text-4xl">{program.icon}</div>
                </div>
                <div className="flex-1">
                  <div className="text-xs text-green-600 font-semibold mb-1">
                    {program.category}
                  </div>
                  <CardTitle className="text-2xl text-green-600">
                    {program.name}
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">{program.description}</p>
              <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-700">
                <p className="text-green-600 font-semibold text-sm mb-1">
                  Impact
                </p>
                <p className="text-gray-400 text-sm">{program.impact}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Legacy Section */}
        <div className="mt-8 bg-zinc-800 rounded-lg p-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            Continuing the Legacy
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Through{" "}
              <span className="text-green-600 font-semibold">
                Bachpan Ki Shiksha
              </span>
              , we continue our commitment to education in Odisha, ensuring that
              children from marginalized communities have access to quality
              primary education.
            </p>
            <p>
              This program embodies the same spirit that drove the Fight4Degree
              movement - ensuring that no child is denied their right to
              education.
            </p>
          </div>
        </div>

        {/* Timeline Reference */}
        <div className="mt-8 bg-zinc-800 rounded-lg p-6 border border-zinc-700">
          <p className="text-gray-400 text-center">
            <span className="text-green-600 font-semibold">
              Want to learn more about our Odisha journey?
            </span>
            <br />
            <a
              href="/about/our-story"
              className="text-green-600 hover:text-green-500 underline mt-2 inline-block"
            >
              Read the complete Fight4Degree story →
            </a>
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-green-900 rounded-lg p-8 text-center border border-green-600">
          <h3 className="text-2xl font-bold text-white mb-3">
            Support Education in Odisha
          </h3>
          <p className="text-green-100 mb-6">
            Help us continue the legacy of Fight4Degree
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
              className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-500 transition-colors"
            >
              Donate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
