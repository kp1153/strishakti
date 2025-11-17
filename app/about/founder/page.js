import { GraduationCap, Briefcase, Heart, Award } from "lucide-react";

export const metadata = {
  title: `Our Founder - About - ${process.env.NEXT_PUBLIC_ORG_SHORT}`,
  description: `Meet Dr. Raza Quadir, founder of ARP India - Legal Scholar, Educationist, and Social Entrepreneur`,
  keywords:
    "Dr Raza Quadir, ARP India founder, social entrepreneur, Fight4Degree leader",
};

export default function FounderPage() {
  const roles = [
    {
      title: process.env.NEXT_PUBLIC_FOUNDER_TITLE_1,
      icon: GraduationCap,
      description: "Deep expertise in legal frameworks and social justice",
    },
    {
      title: process.env.NEXT_PUBLIC_FOUNDER_TITLE_2,
      icon: Briefcase,
      description:
        "Committed to transforming education for marginalized communities",
    },
    {
      title: process.env.NEXT_PUBLIC_FOUNDER_TITLE_3,
      icon: Heart,
      description:
        "Creating sustainable social impact through innovative solutions",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-green-700 mb-4">
            Our Founder
          </h1>
          <p className="text-3xl text-gray-300 mb-2">
            {process.env.NEXT_PUBLIC_FOUNDER_NAME}
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-gray-400">
            <span>{process.env.NEXT_PUBLIC_FOUNDER_TITLE_1}</span>
            <span>•</span>
            <span>{process.env.NEXT_PUBLIC_FOUNDER_TITLE_2}</span>
            <span>•</span>
            <span>{process.env.NEXT_PUBLIC_FOUNDER_TITLE_3}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="bg-zinc-800 rounded-lg p-8 mb-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            About Dr. Raza Quadir
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Dr Raza Quadir is an Indian Legal Scholar, Educationist and Social
            entrepreneur known for his diverse professional background and
            social work. He holds a blend of academic qualification and held
            directorship in several organizations.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {roles.map((role, index) => (
            <div
              key={index}
              className="bg-zinc-800 rounded-lg p-6 text-center border border-zinc-700 hover:border-green-700 transition-all"
            >
              <role.icon className="w-12 h-12 mx-auto mb-4 text-green-700" />
              <h3 className="text-xl font-bold text-green-700 mb-2">
                {role.title}
              </h3>
              <p className="text-gray-400 text-sm">{role.description}</p>
            </div>
          ))}
        </div>

        {/* Journey as Social Activist */}
        <div className="bg-zinc-800 rounded-lg p-8 mb-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Journey as a Socialitician
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Beyond his corporate and academic pursuits, Dr Quadir is an active
            socialitician and has been involved in socio political activities
            since 2007.
          </p>
        </div>

        {/* The Turning Point - 2012 */}
        <div className="bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-lg p-8 mb-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            The Turning Point - 2012
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              In 2012 he enrolled in MBA Program with intention to enter in
              corporate world but he shocked to read a news about his college in
              newspaper and that news was{" "}
              <span className="text-green-700 font-semibold">
                "College is not recognised by university, students are not
                getting their degree certificate since 2009"
              </span>
              .
            </p>
          </div>
        </div>

        {/* Investigation Phase */}
        <div className="bg-zinc-800 rounded-lg p-8 mb-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Investigation Through RTI
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              He started enquiring about it, filed RTI to UGC, University,
              Odisha Education Department and seeking information. In response
              to the RTI, it was revealed that a case is going on in the court
              between the college and the university.
            </p>
            <p>
              Digging deeper, it is revealed that the college takes admission
              every year but the university does not award degrees; this process
              has been going on since 2009. After collecting all the documents,
              Dr. Quadir informed the current students about it and also
              contacted the passed-out students.
            </p>
          </div>
        </div>

        {/* The Warning */}
        <div className="bg-zinc-800 rounded-lg p-8 mb-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            The 30-Day Warning
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Taking all the students along, Dr. Quadir informed all the
              concerned departments through a letter and warned that if the
              issue is not resolved within 30 days, the students will go on an
              indefinite hunger strike.
            </p>
            <p>
              There was no response in 30 days by any of the government organs,
              then a press conference was called by Dr Quadir in which, taking
              all the students along, it was announced that they would go on an
              indefinite strike from tomorrow.
            </p>
          </div>
        </div>

        {/* The Hunger Strike */}
        <div className="bg-gradient-to-r from-green-900 to-green-800 rounded-lg p-8 mb-8 border border-green-700">
          <h2 className="text-2xl font-bold text-white mb-4">
            The 84-Day Hunger Strike
          </h2>
          <div className="space-y-4 text-green-50 leading-relaxed">
            <p>
              The hunger strike continued for{" "}
              <span className="text-white font-bold">84 days</span>, facing a
              lot of hardships and facing{" "}
              <span className="text-white font-bold">police lathicharge</span>.
            </p>
            <p>
              During this period, the students also met the{" "}
              <span className="text-white font-semibold">
                Honourable Governor S.C. Jamir
              </span>
              ,{" "}
              <span className="text-white font-semibold">
                Chief Minister Naveen Patnaik
              </span>
              ,{" "}
              <span className="text-white font-semibold">
                Minister of Education
              </span>{" "}
              and{" "}
              <span className="text-white font-semibold">Vice Chancellor</span>.
            </p>
          </div>
        </div>

        {/* The Victory */}
        <div className="bg-zinc-800 rounded-lg p-8 mb-8 border border-zinc-700">
          <div className="flex items-start gap-4">
            <Award className="w-12 h-12 text-green-700 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-green-700 mb-4">
                The Historic Victory
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  The result was that the university was ready to give degrees
                  to all the students. This insured degrees to over{" "}
                  <span className="text-green-700 font-bold">
                    1500 students
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Realization */}
        <div className="bg-zinc-800 rounded-lg p-8 mb-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            The Life-Changing Realization
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              After this successful student movement, Dr. Raza Quadir has
              thought that{" "}
              <span className="italic text-green-700">
                "when we, being so educated and aware, were cheated, then what
                will be the condition of those people who are neither educated
                nor aware."
              </span>
            </p>
          </div>
        </div>

        {/* Birth of ARP India */}
        <div className="bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-lg p-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Founding ARP India
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              With this thought in mind, our founder dedicated an organization
              named{" "}
              <span className="text-green-700 font-semibold">
                "Combined Action for Progress"
              </span>{" "}
              to those sections of the society who are marginalized, Which later
              came to be known as{" "}
              <span className="text-green-700 font-semibold">
                "Association of Responsible Professionals"
              </span>
              .
            </p>
            <p>
              Since {process.env.NEXT_PUBLIC_FOUNDED_YEAR}, under Dr. Raza
              Quadir's leadership, ARP India has been working tirelessly in the
              fields of education, health, and awareness, serving over 10,000
              children, 2000 women, and 900 youth across multiple states in
              India.
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-12 bg-green-900 rounded-lg p-8 text-center border border-green-700">
          <p className="text-xl text-green-50 italic mb-4">
            "When we, being so educated and aware, were cheated, then what will
            be the condition of those people who are neither educated nor
            aware."
          </p>
          <p className="text-green-200 font-semibold">
            — {process.env.NEXT_PUBLIC_FOUNDER_NAME}
          </p>
          <p className="text-green-300 text-sm mt-2">
            Founder, {process.env.NEXT_PUBLIC_ORG_SHORT}
          </p>
        </div>
      </div>
    </div>
  );
}
