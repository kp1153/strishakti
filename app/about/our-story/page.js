import { Calendar, MapPin, Users, Award } from "lucide-react";

export const metadata = {
  title: `Our Story - About - ${process.env.NEXT_PUBLIC_ORG_SHORT}`,
  description:
    "The inspiring story of Fight4Degree movement and how ARP India was born from an 84-day hunger strike in Odisha.",
  keywords:
    "Fight4Degree, ARP India story, student movement, Dr Raza Quadir, Odisha movement",
};

export default function OurStoryPage() {
  const timeline = [
    {
      year: "2012",
      title: "The Beginning",
      description:
        "Dr. Raza Quadir enrolled in MBA Program with intention to enter corporate world",
      icon: "🎓",
    },
    {
      year: "2012",
      title: "The Revelation",
      description:
        "Shocked to read news that college is not recognised by university, students not getting degrees since 2009",
      icon: "📰",
    },
    {
      year: "2012-2013",
      title: "Investigation",
      description:
        "Filed RTI to UGC, University, Odisha Education Department. Revealed college takes admission every year but university doesn't award degrees since 2009",
      icon: "🔍",
    },
    {
      year: "2013",
      title: "Mobilization",
      description:
        "Informed current and passed-out students, sent letters to concerned departments with 30-day warning",
      icon: "📢",
    },
    {
      year: "2014",
      title: "Press Conference",
      description:
        "Announced indefinite hunger strike as no response received in 30 days",
      icon: "🎤",
    },
    {
      year: "2014",
      title: "Fight4Degree Begins",
      description:
        "84-day hunger strike in Odisha, facing hardships and police lathicharge",
      icon: "✊",
    },
    {
      year: "2014",
      title: "High-Level Meetings",
      description:
        "Met Hon'ble Governor S.C. Jamir, Chief Minister Naveen Patnaik, Education Minister, and Vice Chancellor",
      icon: "🤝",
    },
    {
      year: "2014",
      title: "Victory",
      description:
        "University agreed to give degrees to all students. Over 1500 students got their degrees",
      icon: "🎉",
    },
    {
      year: "2014",
      title: "ARP India Born",
      description:
        "Combined Action for Progress founded, later renamed Association of Responsible Professionals",
      icon: "🌟",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-green-700 mb-4">
            Our Story
          </h1>
          <p className="text-xl text-gray-400">
            From {process.env.NEXT_PUBLIC_MOVEMENT_NAME} to{" "}
            {process.env.NEXT_PUBLIC_ORG_SHORT}
          </p>
        </div>
      </div>

      {/* Origin Story */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-zinc-800 rounded-lg p-6 text-center border border-zinc-700">
            <Calendar className="w-8 h-8 mx-auto mb-2 text-green-700" />
            <div className="text-2xl font-bold text-green-700">
              {process.env.NEXT_PUBLIC_MOVEMENT_YEAR}
            </div>
            <div className="text-sm text-gray-400">Year</div>
          </div>
          <div className="bg-zinc-800 rounded-lg p-6 text-center border border-zinc-700">
            <MapPin className="w-8 h-8 mx-auto mb-2 text-green-700" />
            <div className="text-2xl font-bold text-green-700">
              {process.env.NEXT_PUBLIC_MOVEMENT_LOCATION}
            </div>
            <div className="text-sm text-gray-400">Location</div>
          </div>
          <div className="bg-zinc-800 rounded-lg p-6 text-center border border-zinc-700">
            <Users className="w-8 h-8 mx-auto mb-2 text-green-700" />
            <div className="text-2xl font-bold text-green-700">
              {process.env.NEXT_PUBLIC_HUNGER_STRIKE_DAYS}
            </div>
            <div className="text-sm text-gray-400">Days Strike</div>
          </div>
          <div className="bg-zinc-800 rounded-lg p-6 text-center border border-zinc-700">
            <Award className="w-8 h-8 mx-auto mb-2 text-green-700" />
            <div className="text-2xl font-bold text-green-700">
              {process.env.NEXT_PUBLIC_STUDENTS_BENEFITED}
            </div>
            <div className="text-sm text-gray-400">Students</div>
          </div>
        </div>

        {/* Original Name */}
        <div className="bg-zinc-800 rounded-lg p-8 mb-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-700 mb-4">The Origin</h2>
          <p className="text-gray-300 leading-relaxed">
            ARP India was originally founded as{" "}
            <span className="text-green-700 font-semibold">
              "{process.env.NEXT_PUBLIC_ORG_ORIGINAL_NAME}"
            </span>{" "}
            in 2014, following the successful Fight4Degree movement. The
            organization was later renamed to{" "}
            <span className="text-green-700 font-semibold">
              {process.env.NEXT_PUBLIC_ORG_CURRENT_NAME}
            </span>{" "}
            to better reflect its expanded mission and inclusive approach to
            social work.
          </p>
        </div>

        {/* Fight4Degree Movement */}
        <div className="bg-zinc-800 rounded-lg p-8 mb-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            The Fight4Degree Movement
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Fight4Degree is a successful student movement led by Dr. Raza
              Quadir against a famous management college in Odisha in the year
              of 2014. This movement became the foundation upon which ARP India
              was built.
            </p>
            <p>
              The movement began when Dr. Quadir discovered through RTI filing
              that the college had been taking admissions every year since 2009,
              but the university was not awarding degrees due to an ongoing
              legal dispute. Hundreds of students had been deceived and left
              without their rightful degrees.
            </p>
          </div>
        </div>

        {/* The 84-Day Hunger Strike */}
        <div className="bg-gradient-to-r from-green-900 to-green-800 rounded-lg p-8 mb-8 border border-green-700">
          <h2 className="text-2xl font-bold text-white mb-4">
            The 84-Day Hunger Strike
          </h2>
          <div className="space-y-4 text-green-50 leading-relaxed">
            <p>
              When government departments failed to respond within the 30-day
              warning period, Dr. Raza Quadir called a press conference and
              announced an indefinite hunger strike. What followed was an
              extraordinary display of determination and courage.
            </p>
            <p>
              The hunger strike continued for{" "}
              <span className="text-white font-bold">84 days</span>, during
              which the students faced tremendous hardships, including{" "}
              <span className="text-white font-bold">police lathicharge</span>.
              Despite the physical and mental challenges, the movement remained
              peaceful and focused on its goal.
            </p>
            <p>
              During this period, the students met with Honourable Governor S.C.
              Jamir, Chief Minister Naveen Patnaik, the Minister of Education,
              and the Vice Chancellor, presenting their case and demanding
              justice.
            </p>
          </div>
        </div>

        {/* Victory */}
        <div className="bg-zinc-800 rounded-lg p-8 mb-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            The Victory
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              The result was historic. The university agreed to award degrees to
              all affected students. This victory ensured that over{" "}
              <span className="text-green-700 font-bold">1500 students</span>{" "}
              received their rightful degrees, changing their lives and futures
              forever.
            </p>
            <p>
              This success proved that determined, peaceful action could bring
              about significant change and justice for those who had been
              wronged.
            </p>
          </div>
        </div>

        {/* Birth of ARP India */}
        <div className="bg-zinc-800 rounded-lg p-8 mb-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Birth of ARP India
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              After this successful student movement, Dr. Raza Quadir had a
              profound realization:{" "}
              <span className="italic">
                "When we, being so educated and aware, were cheated, then what
                will be the condition of those people who are neither educated
                nor aware."
              </span>
            </p>
            <p>
              With this thought in mind, our founder dedicated an organization
              named{" "}
              <span className="text-green-700 font-semibold">
                "Combined Action for Progress"
              </span>{" "}
              to those sections of the society who are marginalized, which later
              came to be known as{" "}
              <span className="text-green-700 font-semibold">
                "Association of Responsible Professionals"
              </span>
              .
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-zinc-800 rounded-lg p-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-700 mb-8 text-center">
            Journey Timeline
          </h2>
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="w-1 h-full bg-green-700 rounded"></div>
                </div>
                <div className="flex-1 pb-8">
                  <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-700">
                    <div className="text-green-700 font-bold text-sm mb-1">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold text-gray-100 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legacy */}
        <div className="mt-12 bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-lg p-8 text-center border border-zinc-700">
          <h3 className="text-2xl font-bold text-green-700 mb-3">
            The Legacy Continues
          </h3>
          <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Today, ARP India continues the spirit of Fight4Degree, fighting for
            the rights and dignity of marginalized communities through
            education, health, and awareness programs. The courage and
            determination shown during those 84 days in Odisha remain the
            guiding light for all our work.
          </p>
        </div>
      </div>
    </div>
  );
}
