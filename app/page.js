// app/page.js
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Heart,
  Target,
  Award,
  Phone,
  Mail,
} from "lucide-react";

export default function Home() {
  const impactStats = [
    {
      icon: Users,
      number: process.env.NEXT_PUBLIC_CHILDREN_IMPACTED,
      label: "Children Impacted",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Heart,
      number: process.env.NEXT_PUBLIC_WOMEN_IMPACTED,
      label: "Women Empowered",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: Target,
      number: process.env.NEXT_PUBLIC_YOUTH_IMPACTED,
      label: "Youth Engaged",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Award,
      number: process.env.NEXT_PUBLIC_MOVEMENT_YEAR,
      label: "Years of Service",
      color: "from-green-500 to-green-600",
    },
  ];

  const focusAreas = [
    {
      title: "Education",
      description:
        "From primary to higher education, we focus on dropout re-enrollment and providing free evening classes across 8 slums in Delhi.",
      icon: "📚",
      link: "/focus/education",
    },
    {
      title: "Health",
      description:
        "Organizing health camps, awareness programs in partnership with government and private hospitals for better community health.",
      icon: "🏥",
      link: "/focus/health",
    },
    {
      title: "Awareness",
      description:
        "Empowering communities through awareness programs on rights, duties, and social issues via talks, dramas, and activities.",
      icon: "💡",
      link: "/focus/awareness",
    },
  ];

  const featuredPrograms = [
    { title: "Bachpan Ko Jeene Do", state: "Delhi", link: "/work/delhi" },
    { title: "Free Evening Class", state: "Delhi", link: "/work/delhi" },
    { title: "Skill Workshop", state: "Delhi", link: "/work/delhi" },
    { title: "RTI Ki Pathshala", state: "Delhi", link: "/work/delhi" },
    { title: "DU Admission Assistance", state: "Delhi", link: "/work/delhi" },
    { title: "Bachpan Ki Shiksha", state: "Odisha", link: "/work/odisha" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {process.env.NEXT_PUBLIC_ORG_CURRENT_NAME}
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-blue-100">
              {process.env.NEXT_PUBLIC_VISION}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/get-involved/donate"
                className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Donate Now <Heart className="w-5 h-5" />
              </Link>
              <Link
                href="/get-involved/volunteer"
                className="px-8 py-4 bg-blue-800/50 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-lg hover:bg-blue-800 transition-all flex items-center gap-2"
              >
                Volunteer With Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {process.env.NEXT_PUBLIC_MISSION}
            </p>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Focus Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Working towards inclusive growth through education, health, and
              awareness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4">{area.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {area.description}
                </p>
                <Link
                  href={area.link}
                  className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Featured Programs
            </h2>
            <p className="text-lg text-gray-600">
              Making a difference across multiple states
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPrograms.map((program, index) => (
              <Link
                key={index}
                href={program.link}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 hover:shadow-lg transition-all border border-blue-200 group"
              >
                <div className="text-sm text-blue-600 font-semibold mb-2">
                  {program.state}
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                  {program.title}
                </h3>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Programs <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Founder Story CTA */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              The Fight4Degree Movement
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Founded by {process.env.NEXT_PUBLIC_FOUNDER_NAME},{" "}
              {process.env.NEXT_PUBLIC_ORG_SHORT} emerged from an{" "}
              {process.env.NEXT_PUBLIC_HUNGER_STRIKE_DAYS}-day hunger strike
              that secured degrees for{" "}
              {process.env.NEXT_PUBLIC_STUDENTS_BENEFITED} students in Odisha.
            </p>
            <Link
              href="/about/our-story"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Read Our Story <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join us in creating a society of peace, equity, and inclusive
              growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${process.env.NEXT_PUBLIC_MOBILE_1}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                <Phone className="w-5 h-5" /> {process.env.NEXT_PUBLIC_MOBILE_1}
              </a>
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
              >
                <Mail className="w-5 h-5" /> {process.env.NEXT_PUBLIC_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
