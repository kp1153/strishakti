import { Shield, FileText, CreditCard, CheckCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const metadata = {
  title: `Registration Details - About - ${process.env.NEXT_PUBLIC_ORG_SHORT}`,
  description:
    "ARP India's legal registrations including Trust Registration, Darpan ID, PAN, 12A, and 80G certifications",
  keywords:
    "ARP India registration, NGO Darpan, 80G certificate, 12A registration, trust registration",
};

export default function RegistrationPage() {
  const registrations = [
    {
      title: "Registered Under",
      value: process.env.NEXT_PUBLIC_REGISTERED_UNDER,
      icon: Shield,
      description: "Legal framework governing our organization",
      color: "text-green-700",
    },
    {
      title: "Trust Registration Number",
      value: process.env.NEXT_PUBLIC_TRUST_REG_NO,
      icon: FileText,
      description: "Official Trust Registration",
      color: "text-green-600",
    },
    {
      title: "Darpan ID",
      value: process.env.NEXT_PUBLIC_DARPAN_ID,
      icon: CheckCircle,
      description: "NGO Darpan Registration (NITI Aayog)",
      color: "text-green-700",
    },
    {
      title: "PAN Number",
      value: process.env.NEXT_PUBLIC_PAN_NO,
      icon: CreditCard,
      description: "Permanent Account Number",
      color: "text-green-600",
    },
    {
      title: "12A Registration",
      value: process.env.NEXT_PUBLIC_12A_REG,
      icon: FileText,
      description: "Income Tax Exemption under Section 12A",
      color: "text-green-700",
    },
    {
      title: "80G Registration",
      value: process.env.NEXT_PUBLIC_80G_REG,
      icon: CheckCircle,
      description: "Tax deduction benefit for donors under Section 80G",
      color: "text-green-600",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-green-700 mb-4">
            Registration Details
          </h1>
          <p className="text-xl text-gray-400">
            Legal certifications and compliance information
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="bg-zinc-800 rounded-lg p-8 mb-12 border border-zinc-700 text-center">
          <Shield className="w-16 h-16 mx-auto mb-4 text-green-700" />
          <h2 className="text-2xl font-bold text-green-700 mb-3">
            Legally Registered & Compliant
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {process.env.NEXT_PUBLIC_ORG_SHORT} is a fully registered and
            legally compliant non-governmental organization. We maintain all
            necessary certifications to ensure transparency and accountability
            in our operations.
          </p>
        </div>

        {/* Registration Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {registrations.map((reg, index) => (
            <Card
              key={index}
              className="bg-zinc-800 border-zinc-700 hover:border-green-700 transition-all"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-700">
                    <reg.icon className={`w-6 h-6 ${reg.color}`} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg text-gray-400 mb-2">
                      {reg.title}
                    </CardTitle>
                    <div className="text-2xl font-bold text-green-700 mb-2 break-all">
                      {reg.value}
                    </div>
                    <p className="text-sm text-gray-500">{reg.description}</p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* What These Mean Section */}
        <div className="bg-zinc-800 rounded-lg p-8 mb-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-700 mb-6">
            What These Registrations Mean
          </h2>

          <div className="space-y-6">
            {/* Trust Registration */}
            <div className="border-l-4 border-green-700 pl-6">
              <h3 className="text-xl font-semibold text-gray-200 mb-2">
                Trust Registration
              </h3>
              <p className="text-gray-400">
                Our organization is registered as a Trust under the Indian Trust
                Act, 1882, providing legal recognition and establishing our
                commitment to serving society with transparency and
                accountability.
              </p>
            </div>

            {/* Darpan ID */}
            <div className="border-l-4 border-green-700 pl-6">
              <h3 className="text-xl font-semibold text-gray-200 mb-2">
                NGO Darpan Registration
              </h3>
              <p className="text-gray-400">
                Registered with NITI Aayog's NGO Darpan portal, which is a
                centralized platform that maintains a repository of all NGOs/VOs
                in India. This enables us to collaborate with government schemes
                and programs.
              </p>
            </div>

            {/* 12A */}
            <div className="border-l-4 border-green-700 pl-6">
              <h3 className="text-xl font-semibold text-gray-200 mb-2">
                12A Registration
              </h3>
              <p className="text-gray-400">
                Section 12A registration under the Income Tax Act, 1961 provides
                tax exemption to our organization on the surplus income
                generated from our charitable activities, ensuring more
                resources go directly to our beneficiaries.
              </p>
            </div>

            {/* 80G */}
            <div className="border-l-4 border-green-700 pl-6">
              <h3 className="text-xl font-semibold text-gray-200 mb-2">
                80G Registration
              </h3>
              <p className="text-gray-400">
                Section 80G certification allows donors to claim tax deductions
                on their donations to ARP India. Individuals and organizations
                donating to us can avail tax benefits, making it easier for
                supporters to contribute to our cause.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits for Donors */}
        <div className="bg-gradient-to-r from-green-900 to-green-800 rounded-lg p-8 mb-8 border border-green-700">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">
            Benefits for Donors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-950 rounded-lg p-6 border border-green-700">
              <h3 className="text-lg font-semibold text-green-200 mb-2">
                80G Tax Benefits
              </h3>
              <p className="text-green-100 text-sm">
                Your donations to ARP India are eligible for tax deductions
                under Section 80G of the Income Tax Act. We provide official
                receipts for all donations.
              </p>
            </div>
            <div className="bg-green-950 rounded-lg p-6 border border-green-700">
              <h3 className="text-lg font-semibold text-green-200 mb-2">
                Transparent Operations
              </h3>
              <p className="text-green-100 text-sm">
                Our registrations ensure we maintain high standards of
                transparency and accountability in all our operations and fund
                utilization.
              </p>
            </div>
          </div>
        </div>

        {/* Verification Section */}
        <div className="bg-zinc-800 rounded-lg p-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
            Verify Our Credentials
          </h2>
          <p className="text-gray-400 text-center mb-6">
            You can verify our registrations through the respective government
            portals
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <a
              href="https://ngodarpan.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900 hover:bg-zinc-700 transition-colors p-4 rounded-lg border border-zinc-700 text-center"
            >
              <p className="text-green-700 font-semibold mb-1">
                NGO Darpan Portal
              </p>
              <p className="text-gray-500 text-sm">NITI Aayog</p>
            </a>
            <a
              href="https://incometaxindia.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900 hover:bg-zinc-700 transition-colors p-4 rounded-lg border border-zinc-700 text-center"
            >
              <p className="text-green-700 font-semibold mb-1">
                Income Tax Portal
              </p>
              <p className="text-gray-500 text-sm">
                For 12A & 80G verification
              </p>
            </a>
          </div>
        </div>

        {/* Contact for More Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            For any queries regarding our registrations or to request official
            documents
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-green-700 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
