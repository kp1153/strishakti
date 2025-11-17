"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Heart, CreditCard, CheckCircle, Copy, Shield } from "lucide-react";

// *** 'metadata' ब्लॉक यहाँ से हटा दिया गया है, क्योंकि यह क्लाइंट कंपोनेंट में मान्य नहीं है। ***

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
      description:
        "All donations are eligible for 50% tax deduction under Section 80G",
      icon: "💰",
    },
    {
      title: "Official Receipt",
      description: "We provide official 80G certificates for all donations",
      icon: "📃",
    },
    {
      title: "Transparency",
      description:
        "Complete transparency in fund utilization and impact reporting",
      icon: "🔍",
    },
    {
      title: "Direct Impact",
      description:
        "Your contribution directly reaches beneficiaries in our programs",
      icon: "🎯",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-100">
            {/* Hero Section */}     {" "}
      <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 py-16 px-4">
               {" "}
        <div className="max-w-7xl mx-auto text-center">
                    <Heart className="w-16 h-16 mx-auto mb-4 text-green-700" /> 
                 {" "}
          <h1 className="text-4xl md:text-6xl font-black text-green-700 mb-4">
                        Support Our Work          {" "}
          </h1>
                   {" "}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                        Your donation creates lasting change in marginalized
            communities          {" "}
          </p>
                 {" "}
        </div>
               {" "}
        {/* Note: Metadata (title/description) should be defined in a separate layout.js or a Server Component page.js */}
             {" "}
      </div>
            {/* Content */}     {" "}
      <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Why Donate */}       {" "}
        <div className="mb-12">
                   {" "}
          <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
                        Why Your Support Matters          {" "}
          </h2>
                   {" "}
          <div className="bg-zinc-800 rounded-lg p-8 border border-zinc-700 text-center">
                       {" "}
            <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto mb-6">
                            Since {process.env.NEXT_PUBLIC_FOUNDED_YEAR}, ARP
              India has been               working for the welfare of
              marginalized communities in the field               of education,
              health, and awareness. Your generous support enables              
              us to continue our mission of empowering the deprived sections of
                            society and creating an inclusive, equitable future.
                         {" "}
            </p>
                       {" "}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                           {" "}
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-700">
                               {" "}
                <div className="text-3xl font-black text-green-700 mb-2">
                                    {process.env.NEXT_PUBLIC_CHILDREN_IMPACTED} 
                               {" "}
                </div>
                               {" "}
                <div className="text-gray-400">Children Impacted</div>         
                   {" "}
              </div>
                           {" "}
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-700">
                               {" "}
                <div className="text-3xl font-black text-green-700 mb-2">
                                    {process.env.NEXT_PUBLIC_WOMEN_IMPACTED}   
                             {" "}
                </div>
                               {" "}
                <div className="text-gray-400">Women Empowered</div>           
                 {" "}
              </div>
                           {" "}
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-700">
                               {" "}
                <div className="text-3xl font-black text-green-700 mb-2">
                                    {process.env.NEXT_PUBLIC_YOUTH_IMPACTED}   
                             {" "}
                </div>
                               {" "}
                <div className="text-gray-400">Youth Engaged</div>             {" "}
              </div>
                         {" "}
            </div>
                     {" "}
          </div>
                 {" "}
        </div>
                {/* Impact of Your Donation */}       {" "}
        <div className="mb-12">
                   {" "}
          <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
                        Impact of Your Donation          {" "}
          </h2>
                   {" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                       {" "}
            {impacts.map((item, index) => (
              <Card
                key={index}
                className="bg-zinc-800 border-zinc-700 hover:border-green-700 transition-all"
              >
                               {" "}
                <CardHeader>
                                   {" "}
                  <div className="text-5xl text-center mb-4">{item.icon}</div> 
                                 {" "}
                  <CardTitle className="text-2xl text-green-700 text-center">
                                        {item.amount}                 {" "}
                  </CardTitle>
                                 {" "}
                </CardHeader>
                               {" "}
                <CardContent>
                                   {" "}
                  <p className="text-gray-400 text-sm text-center">
                                        {item.impact}                 {" "}
                  </p>
                                 {" "}
                </CardContent>
                             {" "}
              </Card>
            ))}
                     {" "}
          </div>
                 {" "}
        </div>
                {/* Bank Details */}       {" "}
        <div className="mb-12">
                   {" "}
          <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
                        Bank Details for Donation          {" "}
          </h2>
                   {" "}
          <div className="max-w-3xl mx-auto">
                       {" "}
            <Card className="bg-zinc-800 border-zinc-700">
                           {" "}
              <CardHeader>
                               {" "}
                <CardTitle className="text-2xl text-green-700 text-center">
                                    Direct Bank Transfer                {" "}
                </CardTitle>
                               {" "}
                <p className="text-gray-400 text-center">
                                    Use the following details for NEFT/RTGS/IMPS
                  transfer                {" "}
                </p>
                             {" "}
              </CardHeader>
                           {" "}
              <CardContent>
                               {" "}
                <div className="space-y-4">
                                   {" "}
                  {bankDetails.map((detail, index) => (
                    <div
                      key={index}
                      className="bg-zinc-900 rounded-lg p-4 border border-zinc-700"
                    >
                                           {" "}
                      <div className="flex items-center justify-between">
                                               {" "}
                        <div className="flex items-center gap-3 flex-1">
                                                   {" "}
                          <detail.icon className="w-5 h-5 text-green-700" />   
                                               {" "}
                          <div>
                                                       {" "}
                            <p className="text-sm text-gray-500 mb-1">
                                                            {detail.label}     
                                                   {" "}
                            </p>
                                                       {" "}
                            <p className="text-lg font-semibold text-gray-200">
                                                            {detail.value}     
                                                   {" "}
                            </p>
                                                     {" "}
                          </div>
                                                 {" "}
                        </div>
                                               {" "}
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(detail.value);
                            alert(`${detail.label} copied to clipboard!`);
                          }}
                          className="p-2 hover:bg-zinc-800 rounded transition-colors"
                          title="Copy to clipboard"
                        >
                                                   {" "}
                          <Copy className="w-5 h-5 text-gray-400 hover:text-green-700" />
                                                 {" "}
                        </button>
                                             {" "}
                      </div>
                                         {" "}
                    </div>
                  ))}
                                 {" "}
                </div>
                                {/* QR Code Placeholder */}               {" "}
                <div className="mt-6 bg-zinc-900 rounded-lg p-6 border border-zinc-700 text-center">
                                   {" "}
                  <p className="text-gray-400 mb-4">
                                        UPI Payment (Coming Soon)              
                       {" "}
                  </p>
                                   {" "}
                  <div className="w-48 h-48 mx-auto bg-zinc-800 rounded-lg border border-zinc-700 flex items-center justify-center">
                                       {" "}
                    <p className="text-gray-600">
                                            QR Code                       <br />
                                            Placeholder                    {" "}
                    </p>
                                     {" "}
                  </div>
                                 {" "}
                </div>
                             {" "}
              </CardContent>
                         {" "}
            </Card>
                     {" "}
          </div>
                 {" "}
        </div>
                {/* 80G Information */}       {" "}
        <div className="mb-12">
                   {" "}
          <Card className="bg-gradient-to-r from-green-900 to-green-800 border-green-700">
                       {" "}
            <CardHeader>
                           {" "}
              <div className="text-center">
                               {" "}
                <Shield className="w-12 h-12 mx-auto mb-4 text-white" />       
                       {" "}
                <CardTitle className="text-2xl text-white">
                                    80G Tax Benefits                {" "}
                </CardTitle>
                             {" "}
              </div>
                         {" "}
            </CardHeader>
                       {" "}
            <CardContent>
                           {" "}
              <div className="space-y-4 text-green-50">
                               {" "}
                <p className="text-center text-lg">
                                    ARP India is registered under              
                      <span className="font-bold">Section 80G</span> of the
                  Income                   Tax Act                {" "}
                </p>
                               {" "}
                <div className="bg-green-950 rounded-lg p-6 border border-green-700">
                                   {" "}
                  <p className="text-sm text-green-200 mb-2">
                                        80G Registration Number:                
                     {" "}
                  </p>
                                   {" "}
                  <p className="text-xl font-bold text-white">
                                        {process.env.NEXT_PUBLIC_80G_REG}       
                             {" "}
                  </p>
                                 {" "}
                </div>
                               {" "}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                   {" "}
                  <div className="bg-green-950 rounded-lg p-4 border border-green-700">
                                        <div className="text-3xl mb-2">✅</div> 
                                     {" "}
                    <h3 className="font-bold text-white mb-2">
                                            50% Tax Deduction                  
                       {" "}
                    </h3>
                                       {" "}
                    <p className="text-sm text-green-100">
                                            Eligible for 50% tax deduction on
                      your donation amount                    {" "}
                    </p>
                                     {" "}
                  </div>
                                   {" "}
                  <div className="bg-green-950 rounded-lg p-4 border border-green-700">
                                        <div className="text-3xl mb-2">📃</div> 
                                     {" "}
                    <h3 className="font-bold text-white mb-2">
                                            Official Certificate                
                         {" "}
                    </h3>
                                       {" "}
                    <p className="text-sm text-green-100">
                                            We provide official 80G certificate
                      for all donations                    {" "}
                    </p>
                                     {" "}
                  </div>
                                 {" "}
                </div>
                             {" "}
              </div>
                         {" "}
            </CardContent>
                     {" "}
          </Card>
                 {" "}
        </div>
                {/* Donor Benefits */}       {" "}
        <div className="mb-12">
                   {" "}
          <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
                        Why Donate to ARP India?          {" "}
          </h2>
                   {" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                       {" "}
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-zinc-800 border-zinc-700 text-center"
              >
                               {" "}
                <CardHeader>
                                   {" "}
                  <div className="text-4xl mb-3">{benefit.icon}</div>           
                       {" "}
                  <CardTitle className="text-lg text-green-700">
                                        {benefit.title}                 {" "}
                  </CardTitle>
                                 {" "}
                </CardHeader>
                               {" "}
                <CardContent>
                                   {" "}
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                                 {" "}
                </CardContent>
                             {" "}
              </Card>
            ))}
                     {" "}
          </div>
                 {" "}
        </div>
                {/* After Donation */}       {" "}
        <div className="bg-zinc-800 rounded-lg p-8 border border-zinc-700">
                   {" "}
          <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
                        After You Donate          {" "}
          </h2>
                   {" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                       {" "}
            <div className="text-center">
                           {" "}
              <div className="w-12 h-12 mx-auto mb-3 bg-green-700 rounded-full flex items-center justify-center text-zinc-900 font-bold">
                                1              {" "}
              </div>
                           {" "}
              <h3 className="font-semibold text-gray-200 mb-2">
                                Send Transaction Details              {" "}
              </h3>
                           {" "}
              <p className="text-sm text-gray-400">
                                Email us your transaction details at            
                    {process.env.NEXT_PUBLIC_EMAIL}             {" "}
              </p>
                         {" "}
            </div>
                       {" "}
            <div className="text-center">
                           {" "}
              <div className="w-12 h-12 mx-auto mb-3 bg-green-700 rounded-full flex items-center justify-center text-zinc-900 font-bold">
                                2              {" "}
              </div>
                           {" "}
              <h3 className="font-semibold text-gray-200 mb-2">
                                Receive Confirmation              {" "}
              </h3>
                           {" "}
              <p className="text-sm text-gray-400">
                                We'll acknowledge your donation within 48 hours
                             {" "}
              </p>
                         {" "}
            </div>
                       {" "}
            <div className="text-center">
                           {" "}
              <div className="w-12 h-12 mx-auto mb-3 bg-green-700 rounded-full flex items-center justify-center text-zinc-900 font-bold">
                                3              {" "}
              </div>
                           {" "}
              <h3 className="font-semibold text-gray-200 mb-2">
                                Get 80G Certificate              {" "}
              </h3>
                           {" "}
              <p className="text-sm text-gray-400">
                                Official 80G certificate will be sent for tax
                benefits              {" "}
              </p>
                         {" "}
            </div>
                     {" "}
          </div>
                 {" "}
        </div>
                {/* Contact */}       {" "}
        <div className="mt-12 text-center">
                   {" "}
          <p className="text-gray-400 mb-4">
                        For any queries regarding donations, please contact us:
                     {" "}
          </p>
                   {" "}
          <div className="flex flex-wrap justify-center gap-6">
                       {" "}
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
              className="text-green-700 hover:text-green-600 font-semibold"
            >
                            {process.env.NEXT_PUBLIC_EMAIL}           {" "}
            </a>
                       {" "}
            <a
              href={`tel:${process.env.NEXT_PUBLIC_MOBILE_1}`}
              className="text-green-700 hover:text-green-600 font-semibold"
            >
                            {process.env.NEXT_PUBLIC_MOBILE_1}           {" "}
            </a>
                     {" "}
          </div>
                 {" "}
        </div>
             {" "}
      </div>
         {" "}
    </div>
  );
}
