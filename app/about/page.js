import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { FileText, Target, BookOpen, User, Shield } from "lucide-react";

export const metadata = {
  title: `About Us - ${process.env.NEXT_PUBLIC_ORG_SHORT}`,
  description: `Learn about ${process.env.NEXT_PUBLIC_ORG_CURRENT_NAME}, our vision, mission, and the story of our founder Dr. Raza Quadir`,
  keywords:
    "ARP India, NGO, social work, education, health, awareness, Delhi NGO",
};

export default function AboutPage() {
  const sections = [
    {
      title: "Overview",
      description:
        "Learn about our organization, our roots, and our commitment to serve society",
      icon: FileText,
      href: "/about/overview",
      color: "text-green-700",
    },
    {
      title: "Vision & Mission",
      description:
        "Our guiding principles for creating an inclusive and equitable society",
      icon: Target,
      href: "/about/vision-mission",
      color: "text-green-600",
    },
    {
      title: "Our Story",
      description: "The Fight4Degree movement and how ARP India was born",
      icon: BookOpen,
      href: "/about/our-story",
      color: "text-green-700",
    },
    {
      title: "Our Founder",
      description:
        "Meet Dr. Raza Quadir - Legal Scholar, Educationist, and Social Entrepreneur",
      icon: User,
      href: "/about/founder",
      color: "text-green-600",
    },
    {
      title: "Registration Details",
      description: "Our legal registrations and certifications",
      icon: Shield,
      href: "/about/registration",
      color: "text-green-700",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-green-700 mb-4">
            About {process.env.NEXT_PUBLIC_ORG_SHORT}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {process.env.NEXT_PUBLIC_ORG_CURRENT_NAME}
          </p>
          <p className="text-lg text-gray-400 mt-2">
            Serving society since {process.env.NEXT_PUBLIC_FOUNDED_YEAR}
          </p>
        </div>
      </div>

      {/* Quick Intro */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-zinc-800 rounded-lg p-8 mb-12 border border-zinc-700">
          <p className="text-lg text-gray-300 leading-relaxed">
            ARP INDIA (Association of Responsible Professionals – Redg.) is a
            registered non-government and non-political organisation of young
            age group founded by Dr. Raza Quadir. This organization has its root
            connected with a student movement Fight4Degree against a famous
            management college in Odisha in the year of 2014.
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <Link key={index} href={section.href}>
              <Card className="h-full bg-zinc-800 border-zinc-700 hover:border-green-700 transition-all hover:shadow-lg hover:shadow-green-900/20">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <section.icon className={`w-8 h-8 ${section.color}`} />
                    <CardTitle className="text-xl text-green-700">
                      {section.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-gray-400">
                    {section.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>

        {/* Registration Info Banner */}
        <div className="mt-12 bg-zinc-800 rounded-lg p-6 border border-zinc-700">
          <p className="text-center text-gray-400">
            Registered under{" "}
            <span className="text-green-700 font-semibold">
              {process.env.NEXT_PUBLIC_REGISTERED_UNDER}
            </span>
          </p>
          <p className="text-center text-gray-500 text-sm mt-2">
            Trust Registration No: {process.env.NEXT_PUBLIC_TRUST_REG_NO}
          </p>
        </div>
      </div>
    </div>
  );
}
