"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Users,
  Heart,
  Lightbulb,
  Award,
  Mail,
  Phone,
  User,
} from "lucide-react";

export default function VolunteerPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    interest: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Volunteer Form Data:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        interest: "",
        message: "",
      });
    }, 3000);
  };

  const reasons = [
    {
      icon: Heart,
      title: "Make Real Impact",
      description:
        "Directly contribute to changing lives in marginalized communities",
    },
    {
      icon: Users,
      title: "Join a Movement",
      description:
        "Be part of a dedicated team working for social change since 2014",
    },
    {
      icon: Lightbulb,
      title: "Gain Experience",
      description:
        "Develop skills in social work, education, and community development",
    },
    {
      icon: Award,
      title: "Personal Growth",
      description:
        "Experience the fulfillment of serving society and making a difference",
    },
  ];

  const opportunities = [
    {
      area: "Education",
      roles: [
        "Teaching in evening classes",
        "Academic counseling",
        "College admission guidance",
        "Curriculum development",
      ],
      icon: "📚",
    },
    {
      area: "Health",
      roles: [
        "Awareness camp organization",
        "Health talk facilitation",
        "Hygiene drive support",
        "Medical camp coordination",
      ],
      icon: "🏥",
    },
    {
      area: "Awareness",
      roles: [
        "Community outreach",
        "Workshop organization",
        "Drama and skit performances",
        "Rights education",
      ],
      icon: "📢",
    },
    {
      area: "Administration",
      roles: [
        "Event management",
        "Social media",
        "Documentation",
        "Fundraising support",
      ],
      icon: "💼",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-green-700 mb-4">
            Volunteer With Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Join our mission to serve marginalized communities across India
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Why Volunteer */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
            Why Volunteer with ARP India?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <Card
                key={index}
                className="bg-zinc-800 border-zinc-700 hover:border-green-700 transition-all text-center"
              >
                <CardHeader>
                  <div className="inline-block p-3 bg-green-700 rounded-lg mb-4 mx-auto">
                    <reason.icon className="w-8 h-8 text-zinc-900" />
                  </div>
                  <CardTitle className="text-lg text-green-700">
                    {reason.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Volunteer Opportunities */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
            Volunteer Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {opportunities.map((opp, index) => (
              <Card key={index} className="bg-zinc-800 border-zinc-700">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-3xl">{opp.icon}</div>
                    <CardTitle className="text-xl text-green-700">
                      {opp.area}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {opp.roles.map((role, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-700 rounded-full"></div>
                        <p className="text-sm text-gray-400">{role}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Who Can Volunteer */}
        <div className="bg-zinc-800 rounded-lg p-8 mb-12 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
            Who Can Volunteer?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-zinc-900 rounded-lg border border-zinc-700">
              <div className="text-4xl mb-3">🎓</div>
              <h3 className="text-lg font-bold text-gray-200 mb-2">Students</h3>
              <p className="text-gray-400 text-sm">
                College and university students looking to gain social work
                experience
              </p>
            </div>
            <div className="text-center p-6 bg-zinc-900 rounded-lg border border-zinc-700">
              <div className="text-4xl mb-3">👨‍💼</div>
              <h3 className="text-lg font-bold text-gray-200 mb-2">
                Professionals
              </h3>
              <p className="text-gray-400 text-sm">
                Working professionals who want to give back to society
              </p>
            </div>
            <div className="text-center p-6 bg-zinc-900 rounded-lg border border-zinc-700">
              <div className="text-4xl mb-3">👵</div>
              <h3 className="text-lg font-bold text-gray-200 mb-2">Retirees</h3>
              <p className="text-gray-400 text-sm">
                Experienced individuals with time and expertise to share
              </p>
            </div>
          </div>
        </div>

        {/* Volunteer Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-zinc-800 border-zinc-700">
            <CardHeader>
              <CardTitle className="text-2xl text-green-700 text-center">
                Join Our Volunteer Team
              </CardTitle>
              <p className="text-gray-400 text-center">
                Fill out the form below and we'll get in touch with you
              </p>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="bg-green-900 border border-green-700 rounded-lg p-8 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Thank You!
                  </h3>
                  <p className="text-green-100">
                    We've received your application. Our team will contact you
                    soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                      <Input
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="pl-10 bg-zinc-900 border-zinc-700 text-gray-100"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        className="pl-10 bg-zinc-900 border-zinc-700 text-gray-100"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                      <Input
                        type="tel"
                        placeholder="+91 XXXXXXXXXX"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                        className="pl-10 bg-zinc-900 border-zinc-700 text-gray-100"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">
                      City *
                    </label>
                    <Input
                      placeholder="Your city"
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      required
                      className="bg-zinc-900 border-zinc-700 text-gray-100"
                    />
                  </div>

                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">
                      Area of Interest *
                    </label>
                    <Input
                      placeholder="e.g., Education, Health, Awareness"
                      value={formData.interest}
                      onChange={(e) =>
                        setFormData({ ...formData, interest: e.target.value })
                      }
                      required
                      className="bg-zinc-900 border-zinc-700 text-gray-100"
                    />
                  </div>

                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">
                      Why do you want to volunteer? *
                    </label>
                    <Textarea
                      placeholder="Tell us about your motivation and any relevant experience..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      rows={5}
                      className="bg-zinc-900 border-zinc-700 text-gray-100"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-green-700 hover:bg-green-600 text-white font-semibold py-6 text-lg"
                  >
                    Submit Application
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Contact Info */}
        <div className="mt-12 bg-zinc-800 rounded-lg p-8 border border-zinc-700 text-center">
          <h3 className="text-xl font-bold text-green-700 mb-4">
            Have Questions?
          </h3>
          <p className="text-gray-400 mb-4">
            Feel free to reach out to us directly
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
              className="flex items-center gap-2 text-gray-300 hover:text-green-700"
            >
              <Mail className="w-5 h-5" />
              <span>{process.env.NEXT_PUBLIC_EMAIL}</span>
            </a>
            <a
              href={`tel:${process.env.NEXT_PUBLIC_MOBILE_1}`}
              className="flex items-center gap-2 text-gray-300 hover:text-green-700"
            >
              <Phone className="w-5 h-5" />
              <span>{process.env.NEXT_PUBLIC_MOBILE_1}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
