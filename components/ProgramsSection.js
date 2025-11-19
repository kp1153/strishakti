"use client";
const ProgramsSection = () => {
  const statePrograms = [
    {
      state: "Delhi",
      programs: [
        "Bachpan Ko Jeene Do",
        "Free Evening Class",
        "Skill Workshop",
        "RTI Ki Pathshala",
        "Educational Tour",
        "Hum Seekhenge Aage Badhenge",
        "Hum Bhi Bachhe Hain",
        "DU Admission Assistance",
        "Yoga workshop",
        "Awareness Rallies",
        "National Festival Celebration",
        "Pad Bank Program",
        "ARP Centre",
      ],
    },
    {
      state: "Odisha",
      programs: ["Bachpan Ki Shiksha"],
    },
    {
      state: "Bihar",
      programs: ["Panchayat Raj Awakening", "MGNAREGA Awareness", "SJTPL"],
    },
    {
      state: "Chennai",
      programs: ["Rescue & Rehabilitation (2005 Floods)"],
    },
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">
          Our Work Across States
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {statePrograms.map((state, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-900 mb-4 border-b pb-2">
                {state.state}
              </h3>
              <ul className="space-y-2">
                {state.programs.map((program, progIndex) => (
                  <li key={progIndex} className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span className="text-gray-700">{program}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProgramsSection;
