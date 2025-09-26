"use client";

const About = () => {
  return (
    <section className="bg-green-700 py-16 px-6">
      <div className="max-w-5xl mx-auto text-white leading-relaxed space-y-10">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-yellow-200">
          About
        </h1>

        {/* Our Journey */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-yellow-300">
            Our Journey
          </h2>
          <p>
            In <strong>1981</strong>, Late Shri <strong>Mohan Lal</strong> laid
            the foundation of our mission by starting a non-formal school for
            underprivileged children in Tilamapur village, Varanasi district.
            This small step opened the doors of education to children who had
            never been to school.
          </p>
          <p>
            Two years later, the initiative shifted to its own building, where{" "}
            <strong>Smt. Snehalata Srivastava</strong> expanded the vision by
            starting a vocational training centre for women. The aim was to make
            women self-reliant through economic, cultural, and educational
            empowerment.
          </p>
          <p>
            Recognizing the need for a more organized effort, in{" "}
            <strong>1987</strong>, they, along with a group of committed social
            activists with a genuine approach, came together to form an
            association. This was registered under the name:
          </p>
          <p className="text-center text-xl font-bold text-yellow-200">
            Mahila Arthik, Sanskritik Evam Shaikshik Vikas Sansthan
          </p>
          <p>
            Since then, MASS has been actively engaged in animating, educating,
            organizing, and empowering the poor—especially women— to achieve
            integral growth and ensure their participation in the process of
            community development.
          </p>
        </div>

        {/* Vision */}
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-yellow-300"> Vision</h2>
          <p className="italic text-lg">
            To build an inclusive society where every woman and child,
            irrespective of their background, has access to quality education,
            healthcare, and opportunities for a dignified life.
          </p>
        </div>

        {/* Mission */}
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-yellow-300"> Mission</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>
              To promote education among underprivileged children and tribal
              communities.
            </li>
            <li>
              To ensure healthcare access for women and children through
              awareness, health camps, and partnerships.
            </li>
            <li>
              To empower women through skill-building, awareness, and community
              support.
            </li>
            <li>To advocate for social justice and human rights.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
