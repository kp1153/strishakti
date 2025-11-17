import { BookOpen, GraduationCap, Users, School } from "lucide-react";

export const metadata = {
  title: `Education - Focus Areas - ${process.env.NEXT_PUBLIC_ORG_SHORT}`,
  description:
    "ARP India provides free education from Primary to Higher level for dropouts and marginalized students across Delhi slums",
  keywords:
    "free education, evening classes, primary education, dropout students, Delhi slums education",
};

export default function EducationPage() {
  const programs = [
    {
      title: "Primary Education",
      icon: School,
      description: "Helping students get enrolled in schools",
      details:
        "ARP India help to get enrolled a large number of students in school for primary education.",
    },
    {
      title: "Free Evening Classes",
      icon: BookOpen,
      description: "Teaching in 8 different slums of Delhi",
      details:
        "We are providing Free Evening Classes in eight different slums of Delhi, where our teachers teach them regularly.",
    },
    {
      title: "Custom Syllabus",
      icon: Users,
      description: "Designed for dropouts and not enrolled students",
      details:
        "We have our own syllabus which is primarily designed according to the requirement of dropped out and not enrolled students.",
    },
    {
      title: "Secondary & Senior Secondary",
      icon: GraduationCap,
      description: "Special classes with subject expertise",
      details:
        "We provide special classes for Secondary and Senior Secondary students and give them counselling as well as subject expertise.",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-4 bg-green-700 rounded-full mb-4">
            <BookOpen className="w-12 h-12 text-zinc-900" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-green-700 mb-4">
            Education
          </h1>
          <p className="text-xl text-gray-400">
            Empowering through knowledge - Primary to Higher Education
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Main Description */}
        <div className="bg-zinc-800 rounded-lg p-8 mb-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Our Approach to Education
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            In the field of education, we are focussing from Primary to Higher
            level education, specifically who are dropped out from schools or
            not enrolled. ARP India help to get enrolled a large number of
            students in school for primary education. We are providing Free
            Evening Classes in eight different slums of Delhi, where our
            teachers teach them regularly. We have our own syllabus which is
            primarily designed according to the requirement of dropped out and
            not enrolled students. We provide special classes for Secondary and
            Senior Secondary students and give them counselling as well as
            subject expertise. At College level, we are providing counselling
            and assistance in admission process for different universities.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 hover:border-green-700 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-700 rounded-lg">
                  <program.icon className="w-6 h-6 text-zinc-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-700 mb-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    {program.description}
                  </p>
                  <p className="text-gray-300 text-sm">{program.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Free Evening Classes Highlight */}
        <div className="bg-gradient-to-r from-green-900 to-green-800 rounded-lg p-8 mb-8 border border-green-700">
          <h2 className="text-2xl font-bold text-white mb-4">
            Free Evening Classes
          </h2>
          <div className="space-y-3 text-green-50">
            <p className="flex items-start gap-2">
              <span className="text-2xl">📍</span>
              <span>
                Operating in{" "}
                <span className="font-bold">8 different slums of Delhi</span>
              </span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-2xl">👨‍🏫</span>
              <span>Regular classes by dedicated teachers</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-2xl">📚</span>
              <span>Custom syllabus designed for dropouts</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-2xl">✨</span>
              <span>Completely free of cost</span>
            </p>
          </div>
        </div>

        {/* College Level Support */}
        <div className="bg-zinc-800 rounded-lg p-8 mb-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            College Level Support
          </h2>
          <p className="text-gray-300 leading-relaxed">
            At College level, we are providing counselling and assistance in
            admission process for different universities. We help students
            navigate the complex admission procedures and ensure they have
            access to higher education opportunities.
          </p>
        </div>

        {/* Target Beneficiaries */}
        <div className="bg-zinc-800 rounded-lg p-8 mb-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-700 mb-6">
            Who We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-6 bg-zinc-900 rounded-lg border border-zinc-700">
              <div className="text-3xl mb-2">🎒</div>
              <p className="text-gray-300 font-semibold">Dropout Students</p>
            </div>
            <div className="text-center p-6 bg-zinc-900 rounded-lg border border-zinc-700">
              <div className="text-3xl mb-2">📝</div>
              <p className="text-gray-300 font-semibold">
                Not Enrolled Children
              </p>
            </div>
            <div className="text-center p-6 bg-zinc-900 rounded-lg border border-zinc-700">
              <div className="text-3xl mb-2">🏚️</div>
              <p className="text-gray-300 font-semibold">Slum Residents</p>
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-lg p-8 text-center border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Our Impact in Education
          </h2>
          <div className="text-5xl font-black text-green-700 mb-2">
            {process.env.NEXT_PUBLIC_CHILDREN_IMPACTED}
          </div>
          <p className="text-gray-400 text-lg">
            Children Impacted Through Education Programs
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="/work/delhi"
            className="px-6 py-3 bg-green-700 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors"
          >
            View Education Programs
          </a>
          <a
            href="/get-involved/volunteer"
            className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-green-700 font-semibold rounded-lg border border-zinc-700 transition-colors"
          >
            Volunteer as Teacher
          </a>
        </div>
      </div>
    </div>
  );
}
