"use client";
const FounderSection = () => {
  return (
    <section id="founder" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">
          Our Founder
        </h2>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            Dr. Raza Quadir
          </h3>
          <p className="text-gray-700 mb-4">
            Indian Legal Scholar, Educationist and Social entrepreneur known for
            his diverse professional background and social work.
          </p>

          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
            <h4 className="text-lg font-bold text-blue-900 mb-3">
              The Fight4Degree Movement
            </h4>
            <p className="text-gray-700 mb-3">
              In 2014, Dr. Quadir led a successful student movement against a
              management college in Odisha that was not recognized by the
              university. Students were not getting degree certificates since
              2009.
            </p>
            <p className="text-gray-700 mb-3">
              After filing RTIs and gathering evidence, he organized students
              for an <strong>84-day hunger strike</strong>, facing police
              lathicharge and numerous hardships.
            </p>
            <p className="text-gray-700">
              The result: the university agreed to award degrees to all 1500+
              affected students.
            </p>
          </div>

          <p className="text-gray-700 mt-6 italic">
            "When we, being so educated and aware, were cheated, then what will
            be the condition of those people who are neither educated nor
            aware."
          </p>
        </div>
      </div>
    </section>
  );
};
export default FounderSection;
