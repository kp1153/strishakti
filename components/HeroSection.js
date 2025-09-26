"use client";

import Image from "next/image";

const HeroPage = () => {
  return (
    <main className="w-full">
      {/* Hero Section (Only Image) */}
      <section className="relative w-full h-[80vh]">
        <Image
          src="/1.jpeg"
          alt="NGO Hero Image"
          fill
          priority
          className="object-cover brightness-90"
        />
      </section>

      {/* Decorated Content Section */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-lg leading-8 text-gray-800 space-y-6">
        <p>
          <span className="font-bold text-pink-600">
            Supporting women’s empowerment
          </span>{" "}
          <span className="italic text-blue-700">
            paves the way for progress towards harmony and prosperity
          </span>
          . At the heart of every thriving society lies the principle of{" "}
          <span className="font-semibold text-green-700">equality</span>,{" "}
          <span className="italic">justice</span>, and{" "}
          <span className="underline decoration-pink-500">empowerment</span>.
          Our organization was founded with a strong belief that true progress
          can only be achieved when marginalized voices are heard, supported,
          and uplifted.
        </p>

        <p>
          We are an NGO committed to creating opportunities for{" "}
          <span className="font-bold text-blue-700">
            underprivileged children
          </span>
          , <span className="italic text-pink-600">women</span>, and{" "}
          <span className="font-semibold text-green-700">
            tribal communities
          </span>{" "}
          who are often left behind. Our work is rooted in compassion and
          action. Education is the{" "}
          <span className="underline decoration-green-500">foundation</span> of
          empowerment, healthcare is the{" "}
          <span className="font-bold text-blue-700">pillar of well-being</span>,
          women’s empowerment is the{" "}
          <span className="italic text-pink-600">
            catalyst of social change
          </span>
          , and justice is the{" "}
          <span className="font-bold text-red-600">
            right of every human being
          </span>
          .
        </p>

        <p>
          Our mission is to{" "}
          <span className="font-semibold text-green-700">
            promote education among underprivileged children
          </span>{" "}
          and <span className="italic">tribal communities</span>, because
          education has the power to{" "}
          <span className="text-pink-600 font-bold">
            break cycles of poverty
          </span>{" "}
          and <span className="italic text-blue-700">ignorance</span>. We also
          ensure{" "}
          <span className="font-bold text-red-600">healthcare access</span> for
          women and children through{" "}
          <span className="underline decoration-pink-500">
            awareness programs
          </span>{" "}
          and health camps.
        </p>

        <p>
          We are committed to{" "}
          <span className="italic text-pink-600">empowering women</span> through{" "}
          <span className="font-bold text-green-700">skill-building</span>,
          awareness, and community support. By helping them access{" "}
          <span className="text-blue-700">microfinance</span> and livelihood
          opportunities, we promote{" "}
          <span className="font-bold text-pink-600">
            financial independence
          </span>
          . Awareness campaigns educate women about{" "}
          <span className="italic">their rights</span>,{" "}
          <span className="font-semibold text-green-700">health</span>, and{" "}
          <span className="text-blue-700 underline decoration-blue-400">
            leadership roles
          </span>
          .
        </p>

        <p>
          We also{" "}
          <span className="font-bold text-red-600">
            advocate for social justice
          </span>{" "}
          and <span className="italic">human rights</span> by raising our voice
          against inequality, injustice, and exploitation. From fighting against{" "}
          <span className="underline decoration-green-500">child labor</span> to
          advocating for{" "}
          <span className="font-bold text-pink-600">gender equality</span> and{" "}
          <span className="italic text-blue-700">tribal rights</span>, we stand
          firmly with those whose voices are silenced.
        </p>

        <p>
          Inequality, poverty, and injustice are deeply rooted challenges, but{" "}
          <span className="font-semibold text-green-700">
            change is possible when we act together
          </span>
          . By educating children, we are{" "}
          <span className="italic text-pink-600">shaping future leaders</span>.
          By ensuring healthcare, we are{" "}
          <span className="text-blue-700">protecting generations</span>. By
          empowering women, we are creating{" "}
          <span className="font-bold text-green-700">agents of change</span>.
          And by advocating for justice, we are laying the foundation for a
          society where fairness prevails.
        </p>

        <p>
          Change cannot happen in isolation—it needs{" "}
          <span className="font-bold text-pink-600">collective effort</span>.
          Every contribution, big or small, has the power to transform lives.
          Together, we can build a future where{" "}
          <span className="italic text-blue-700">harmony</span> and{" "}
          <span className="font-bold text-green-700">prosperity</span> are not
          dreams but realities. Our NGO stands committed to creating a world
          where every child{" "}
          <span className="underline decoration-pink-500">
            smiles with hope
          </span>
          , every woman{" "}
          <span className="italic text-green-700">walks with dignity</span>, and
          every community{" "}
          <span className="font-bold text-blue-700">
            thrives with opportunities
          </span>
          .
        </p>
      </section>
    </main>
  );
};

export default HeroPage;
