"use client";

import { useState } from "react";
import {
  Handshake,
  Building2,
  Target,
  Users,
  Mail,
  Phone,
  User,
  Briefcase,
} from "lucide-react";

export default function PartnerPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    partnershipType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Partnership Form Data:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        partnershipType: "",
        message: "",
      });
    }, 3000);
  };

  const partnershipTypes = [
    {
      icon: Building2,
      title: "Corporate Partnership",
      description:
        "CSR initiatives, employee engagement programs, and long-term collaboration",
      benefits: [
        "Brand visibility",
        "Employee engagement",
        "Social impact reporting",
        "Tax benefits",
      ],
    },
    {
      icon: Target,
      title: "Program Partnership",
      description:
        "Co-create and implement specific programs in education, health, or awareness",
      benefits: [
        "Joint program design",
        "Shared resources",
        "Impact measurement",
        "Community reach",
      ],
    },
    {
      icon: Users,
      title: "Resource Partnership",
      description:
        "Provide expertise, infrastructure, or in-kind support for our initiatives",
      benefits: [
        "Skill sharing",
        "Infrastructure support",
        "Pro-bono services",
        "Material support",
      ],
    },
    {
      icon: Handshake,
      title: "Institutional Partnership",
      description:
        "Collaborate with educational institutions, hospitals, and government bodies",
      benefits: [
        "Joint initiatives",
        "Knowledge sharing",
        "Capacity building",
        "Policy advocacy",
      ],
    },
  ];

  const csrAreas = [
    {
      icon: "📚",
      area: "Education",
      description:
        "Support free evening classes, skill workshops, and admission assistance programs",
    },
    {
      icon: "🏥",
      area: "Health",
      description:
        "Fund health camps, awareness programs, and hygiene drives in marginalized communities",
    },
    {
      icon: "📢",
      area: "Awareness",
      description:
        "Sponsor rights education, community awareness programs, and expert talk series",
    },
    {
      icon: "👩",
      area: "Women Empowerment",
      description:
        "Support programs like Pad Bank and women-focused skill development initiatives",
    },
  ];

  const whyPartner = [
    {
      title: "Proven Track Record",
      description:
        "Since 2014, impacting 10,000+ children, 2000+ women, 900+ youth",
      icon: "🏆",
    },
    {
      title: "80G & 12A Certified",
      description: "Tax benefits for corporate contributions under Section 80G",
      icon: "📃",
    },
    {
      title: "Transparent Operations",
      description:
        "Complete transparency in fund utilization and impact reporting",
      icon: "📊",
    },
    {
      title: "Multi-State Presence",
      description: "Programs across Delhi, Odisha, Bihar, and Chennai",
      icon: "🗺️",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Handshake className="w-16 h-16 mx-auto mb-4 text-green-700" />
          <h1 className="text-4xl md:text-6xl font-black text-green-700 mb-4">
            Partner With Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Join hands to create lasting social impact
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Why Partner */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
            Why Partner with ARP India?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyPartner.map((reason, index) => (
              <div
                key={index}
                className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 hover:border-green-700 transition-all text-center"
              >
                <div className="text-5xl mb-4">{reason.icon}</div>
                <h3 className="text-lg text-green-700 mb-2 font-bold">
                  {reason.title}
                </h3>
                <p className="text-gray-400 text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Types */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
            Partnership Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnershipTypes.map((type, index) => (
              <div
                key={index}
                className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 hover:border-green-700 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-green-700 rounded-lg">
                    <type.icon className="w-8 h-8 text-zinc-900" />
                  </div>
                  <h3 className="text-xl text-green-700 font-bold">
                    {type.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">{type.description}</p>
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 font-semibold mb-2">
                    Benefits:
                  </p>
                  {type.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-700 rounded-full"></div>
                      <p className="text-sm text-gray-400">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CSR Focus Areas */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
            CSR Collaboration Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {csrAreas.map((area, index) => (
              <div
                key={index}
                className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 text-center"
              >
                <div className="text-5xl mb-3">{area.icon}</div>
                <h3 className="text-lg text-green-700 font-bold mb-2">
                  {area.area}
                </h3>
                <p className="text-gray-400 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Reach */}
        <div className="mb-12 bg-zinc-800 rounded-lg p-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
            Our Reach & Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-zinc-900 rounded-lg border border-zinc-700">
              <div className="text-3xl font-black text-green-700 mb-2">
                {process.env.NEXT_PUBLIC_CHILDREN_IMPACTED}
              </div>
              <div className="text-gray-400 text-sm">Children Impacted</div>
            </div>
            <div className="text-center p-6 bg-zinc-900 rounded-lg border border-zinc-700">
              <div className="text-3xl font-black text-green-700 mb-2">
                {process.env.NEXT_PUBLIC_WOMEN_IMPACTED}
              </div>
              <div className="text-gray-400 text-sm">Women Empowered</div>
            </div>
            <div className="text-center p-6 bg-zinc-900 rounded-lg border border-zinc-700">
              <div className="text-3xl font-black text-green-700 mb-2">
                {process.env.NEXT_PUBLIC_YOUTH_IMPACTED}
              </div>
              <div className="text-gray-400 text-sm">Youth Engaged</div>
            </div>
            <div className="text-center p-6 bg-zinc-900 rounded-lg border border-zinc-700">
              <div className="text-3xl font-black text-green-700 mb-2">4</div>
              <div className="text-gray-400 text-sm">States Active</div>
            </div>
          </div>
        </div>

        {/* Partnership Process */}
        <div className="mb-12 bg-zinc-800 rounded-lg p-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-700 mb-8 text-center">
            Partnership Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-green-700 rounded-full flex items-center justify-center text-zinc-900 font-bold text-xl">
                1
              </div>
              <h3 className="font-semibold text-gray-200 mb-2">
                Initial Discussion
              </h3>
              <p className="text-sm text-gray-400">
                Submit inquiry and schedule a meeting with our team
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-green-700 rounded-full flex items-center justify-center text-zinc-900 font-bold text-xl">
                2
              </div>
              <h3 className="font-semibold text-gray-200 mb-2">
                Proposal Development
              </h3>
              <p className="text-sm text-gray-400">
                Co-create a partnership proposal aligned with goals
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-green-700 rounded-full flex items-center justify-center text-zinc-900 font-bold text-xl">
                3
              </div>
              <h3 className="font-semibold text-gray-200 mb-2">
                Agreement & Launch
              </h3>
              <p className="text-sm text-gray-400">
                Formalize partnership and launch joint initiatives
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-green-700 rounded-full flex items-center justify-center text-zinc-900 font-bold text-xl">
                4
              </div>
              <h3 className="font-semibold text-gray-200 mb-2">
                Impact Reporting
              </h3>
              <p className="text-sm text-gray-400">
                Regular updates and transparent impact measurement
              </p>
            </div>
          </div>
        </div>

        {/* Partnership Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6">
            <div className="mb-6">
              <h2 className="text-2xl text-green-700 text-center font-bold mb-2">
                Let's Collaborate
              </h2>
              <p className="text-gray-400 text-center">
                Fill out the form and we'll get back to you within 48 hours
              </p>
            </div>
            <div>
              {submitted ? (
                <div className="bg-green-900 border border-green-700 rounded-lg p-8 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Thank You!
                  </h3>
                  <p className="text-green-100">
                    We've received your partnership inquiry. Our team will
                    contact you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">
                      Your Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                      <input
                        type="text"
                        placeholder="Full name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="w-full pl-10 bg-zinc-900 border border-zinc-700 text-gray-100 rounded-md px-3 py-2"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                      <input
                        type="email"
                        placeholder="your.email@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        className="w-full pl-10 bg-zinc-900 border border-zinc-700 text-gray-100 rounded-md px-3 py-2"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                      <input
                        type="tel"
                        placeholder="+91 XXXXXXXXXX"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                        className="w-full pl-10 bg-zinc-900 border border-zinc-700 text-gray-100 rounded-md px-3 py-2"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">
                      Organization Name *
                    </label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                      <input
                        type="text"
                        placeholder="Your company/organization name"
                        value={formData.organization}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            organization: e.target.value,
                          })
                        }
                        required
                        className="w-full pl-10 bg-zinc-900 border border-zinc-700 text-gray-100 rounded-md px-3 py-2"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">
                      Partnership Type *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., CSR Partnership, Program Collaboration"
                      value={formData.partnershipType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          partnershipType: e.target.value,
                        })
                      }
                      required
                      className="w-full bg-zinc-900 border border-zinc-700 text-gray-100 rounded-md px-3 py-2"
                    />
                  </div>

                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">
                      Message *
                    </label>
                    <textarea
                      placeholder="Tell us about your organization and partnership interests..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      rows={5}
                      className="w-full bg-zinc-900 border border-zinc-700 text-gray-100 rounded-md px-3 py-2"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-700 hover:bg-green-600 text-white font-semibold py-3 text-lg rounded-md transition-colors"
                  >
                    Submit Partnership Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 bg-zinc-800 rounded-lg p-8 border border-zinc-700 text-center">
          <h3 className="text-xl font-bold text-green-700 mb-4">
            Get in Touch Directly
          </h3>
          <p className="text-gray-400 mb-4">
            For immediate partnership discussions
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a // <-- यहां a टैग जोड़ा गया
              href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
              className="flex items-center gap-2 text-gray-300 hover:text-green-700"
            >
              <Mail className="w-5 h-5" />
              <span>{process.env.NEXT_PUBLIC_EMAIL}</span>
            </a>{" "}
            {/* <-- यहां a टैग बंद किया गया */}
            <a // <-- यहां a टैग जोड़ा गया
              href={`tel:${process.env.NEXT_PUBLIC_MOBILE_1}`}
              className="flex items-center gap-2 text-gray-300 hover:text-green-700"
            >
              <Phone className="w-5 h-5" />
              <span>{process.env.NEXT_PUBLIC_MOBILE_1}</span>
            </a>{" "}
            {/* <-- यहां a टैग बंद किया गया */}
          </div>
        </div>
      </div>
    </div>
  );
}
