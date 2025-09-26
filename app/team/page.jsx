"use client";

import Image from "next/image";

const teamMembers = [
  {
    name: "Snehlata Srivastava",
    role: "Founder & Director",
    image: "/team/snehlata.jpg",
  },
  {
    name: "Sandeep Goutam",
    role: "Treasurer",
    image: "/team/sandeep.jpg",
  },
  {
    name: "Joshika Sharma",
    role: "Board Member",
    image: "/team/joshika.jpg",
  },
  {
    name: "Vikash Ratan Singh",
    role: "Board Member",
    image: "/team/vikash.jpg",
  },
  {
    name: "Ranjana Vidyarthi",
    role: "Deputy Director",
    image: "/team/ranjana.jpg",
  },
  {
    name: "Santosh Chaudhari",
    role: "Board Member",
    image: "/team/santosh.jpg",
  },
];

const TeamPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-purple-800 mb-8 text-center">
        Meet Our Team
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden text-center p-4 hover:shadow-xl transition"
          >
            <div className="w-32 h-32 mx-auto mb-4 relative">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h2 className="text-lg font-semibold text-purple-700">
              {member.name}
            </h2>
            <p className="text-sm text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
