"use client";

import Image from "next/image";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Asha Panday",
      role: "President",
      qualification: "B.A",
      email: "pandeyasha43@gmail.com",
      image: "/team/8.jpg",
    },
    {
      id: 2,
      name: "Snehlata Srivastav",
      role: "Director",
      qualification: "B.A Sociology",
      email: "mahila.arthik123@gmail.com",
      phone: "7800713173",
      image: "/team/1.jpg",
    },
    {
      id: 3,
      name: "Ranjana Vidyarthi",
      role: "Deputy Director",
      qualification: "B.A LLB",
      email: "v9721600@gmail.com",
      image: "/team/4.jpg",
    },
    {
      id: 4,
      name: "Sandeep Kumar Gautam",
      role: "Treasurer",
      qualification: "B.com",
      email: "mail2sandeepgautam@gmail.com",
      phone: "9553194302",
      image: "/team/2.jpg",
    },
    {
      id: 5,
      name: "Vikash Ratan Singh",
      role: "Board Member",
      qualification: "B.com",
      email: "vrss009898@gmail.com",
      phone: "7347846930",
      image: "/team/3.jpg",
    },
    {
      id: 6,
      name: "Santosh Chaudhari",
      role: "Board Member",
      qualification: "B.L LLB",
      email: "Santosh.chaudhri10@gmail.com",
      phone: "9473519361",
      image: "/team/5.jpg",
    },
    {
      id: 7,
      name: "Sujeet K Srivastav",
      role: "Board Member",
      qualification: "M.A (Sociology), MSW",
      email: "sujeetsri2020@gmail.com",
      phone: "8604165365",
      image: "/team/6.jpg",
    },
    {
      id: 8,
      name: "Joshika Sharma",
      role: "Board Member",
      qualification: "B.A",
      image: "/team/7.jpg",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Our Team
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Dedicated and experienced members committed to social service
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="flex items-center justify-center h-56 sm:h-64 bg-gradient-to-br from-purple-100 to-blue-100">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  width={250}
                  height={250}
                  className="object-contain rounded-lg"
                  priority={member.id <= 4}
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-purple-600 font-semibold text-sm mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {member.qualification}
                </p>

                {/* Contact Info */}
                <div className="space-y-2 text-sm">
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="block text-blue-600 hover:text-blue-800 break-words"
                      title={member.email}
                    >
                      {member.email}
                    </a>
                  )}
                  {member.phone && (
                    <a
                      href={`tel:+91${member.phone}`}
                      className="block text-green-600 hover:text-green-800"
                    >
                      +91 {member.phone}
                    </a>
                  )}
                  {!member.email && !member.phone && (
                    <p className="text-gray-400 text-xs italic">
                      Contact information not available
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
