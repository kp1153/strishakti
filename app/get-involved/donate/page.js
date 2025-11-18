"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Heart, CreditCard, CheckCircle, Copy, Shield } from "lucide-react";

export default function DonatePage() {
  const impacts = [
    {
      icon: "📚",
      amount: "₹500",
      impact: "Provides study materials for 5 students",
    },
    {
      icon: "👨‍🏫",
      amount: "₹2,000",
      impact: "Supports one month of evening classes",
    },
    {
      icon: "🏥",
      amount: "₹5,000",
      impact: "Organizes a health awareness camp",
    },
    {
      icon: "🎓",
      amount: "₹10,000",
      impact: "Funds college admission guidance for 20 students",
    },
  ];

  const bankDetails = [
    {
      label: "Account Number",
      value: process.env.NEXT_PUBLIC_BANK_ACCOUNT_NUMBER,
      icon: CreditCard,
    },
    {
      label: "Account Name",
      value: process.env.NEXT_PUBLIC_BANK_ACCOUNT_NAME,
      icon: Shield,
    },
    {
      label: "Bank Name",
      value: process.env.NEXT_PUBLIC_BANK_NAME,
      icon: Shield,
    },
    {
      label: "IFSC Code",
      value: process.env.NEXT_PUBLIC_BANK_IFSC,
      icon: CheckCircle,
    },
  ];

  const benefits = [
    {
      title: "Tax Benefits",
      description: "Eligible for 50% tax deduction under Section 80G",
      icon: "💰",
    },
    {
      title: "Official Receipt",
      description: "All donors receive an official 80G certificate",
      icon: "📃",
    },
    {
      title: "Transparency",
      description: "Clear and transparent reporting of fund usage",
      icon: "🔍",
    },
    {
      title: "Direct Impact",
      description: "Your support directly helps beneficiaries",
      icon: "🎯",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <div className="bg-green-50 border-b border-gray-300 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Heart className="w-16 h-16 mx-auto mb-4 text-green-700" />
          <h1 className="text-4xl md:text-6xl font-black text-green-700 mb-4">
            Support Our Work
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Your donation creates lasting change in marginalized communities
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Why Donate */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
            Why Your Support Matters
          </h2>

          <div className="bg-gray-100 rounded-lg p-8 border border-gray-300 text-center">
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
              Since {process.env.NEXT_PUBLIC_FOUNDED_YEAR}, ARP India has been
              working for education, health and awareness in marginalized
              communities. Your support helps us continue building an equitable
              future.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white rounded-lg p-6 border border-gray-300">
                <div className="text-3xl font-black text-green-700 mb-2">
                  {process.env.NEXT_PUBLIC_CHILDREN_IMPACTED}
                </div>
                <div className="text-gray-600">Children Impacted</div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-300">
                <div className="text-3xl font-black text-green-700 mb-2">
                  {process.env.NEXT_PUBLIC_WOMEN_IMPACTED}
                </div>
                <div className="text-gray-600">Women Empowered</div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-300">
                <div className="text-3xl font-black text-green-700 mb-2">
                  {process.env.NEXT_PUBLIC_YOUTH_IMPACTED}
                </div>
                <div className="text-gray-600">Youth Engaged</div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Cards */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
            Impact of Your Donation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impacts.map((item, idx) => (
              <Card
                key={idx}
                className="bg-white border-gray-300 hover:border-green-700 transition-all"
              >
                <CardHeader>
                  <div className="text-5xl text-center mb-4">{item.icon}</div>
                  <CardTitle className="text-2xl text-green-700 text-center">
                    {item.amount}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm text-center">
                    {item.impact}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bank Details */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
            Bank Details for Donation
          </h2>

          <div className="max-w-3xl mx-auto">
            <Card className="bg-white border-gray-300">
              <CardHeader>
                <CardTitle className="text-2xl text-green-700 text-center">
                  Direct Bank Transfer
                </CardTitle>
                <p className="text-gray-700 text-center">
                  Use the following details for NEFT/RTGS/IMPS transfer
                </p>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  {bankDetails.map((detail, i) => (
                    <div
                      key={i}
                      className="bg-gray-50 rounded-lg p-4 border border-gray-300"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 flex-1">
                          <detail.icon className="w-5 h-5 text-green-700" />
                          <div>
                            <p className="text-sm text-gray-600 mb-1">
                              {detail.label}
                            </p>
                            <p className="text-lg font-semibold text-black">
                              {detail.value}
                            </p>
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(detail.value);
                            alert(`${detail.label} copied to clipboard!`);
                          }}
                          className="p-2 hover:bg-gray-200 rounded transition-colors"
                        >
                          <Copy className="w-5 h-5 text-gray-600 hover:text-green-700" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* QR Placeholder */}
                <div className="mt-6 bg-gray-50 rounded-lg p-6 border border-gray-300 text-center">
                  <p className="text-gray-600 mb-4">
                    UPI Payment (Coming Soon)
                  </p>
                  <div className="w-48 h-48 mx-auto bg-white border border-gray-300 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">
                      QR Code
                      <br />
                      Placeholder
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Donor Benefits */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
            Why Donate to ARP India?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <Card key={i} className="bg-white border-gray-300 text-center">
                <CardHeader>
                  <div className="text-4xl mb-3">{benefit.icon}</div>
                  <CardTitle className="text-lg text-green-700">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
