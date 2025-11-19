const ImpactSection = () => {
  const stats = [
    { number: "10,000+", label: "Children Helped" },
    { number: "2,000+", label: "Women Empowered" },
    { number: "900+", label: "Youth Trained" },
    { number: "10+", label: "Years of Service" },
  ];

  return (
    <section id="impact" className="py-20 bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
