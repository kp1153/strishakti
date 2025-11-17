"use client";

import { useEffect, useState, useRef } from "react";

export default function ImpactStats({ stats }) {
  // Default data from PDF - can be overridden via props
  const defaultStats = [
    { number: 10000, label: "Children Impacted", suffix: "+" },
    { number: 2000, label: "Women Empowered", suffix: "" },
    { number: 900, label: "Youth Engaged", suffix: "" },
  ];

  const displayStats = stats || defaultStats;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-gradient-to-br from-orange-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {displayStats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
              suffix={stat.suffix || ""}
              isVisible={isVisible}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ number, label, suffix, isVisible, delay }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = number / steps;
      let current = 0;

      const counter = setInterval(() => {
        current += increment;
        if (current >= number) {
          setCount(number);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, number, delay]);

  return (
    <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="text-5xl font-bold text-orange-600 mb-2">
        {count.toLocaleString("en-IN")}
        {suffix}
      </div>
      <div className="text-gray-700 text-lg font-medium">{label}</div>
    </div>
  );
}
