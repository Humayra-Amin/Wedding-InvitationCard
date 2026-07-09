import { motion } from "framer-motion";
import LuxuryDecoration from "../Hero/LuxuryDecoration";
import TimelineCard from "./TimelineCard";
import { useScroll } from "../../context/ScrollContext";
import FloatingPetals from "../Hero/FloatingPetals";

const stories = [
  {
    title: "First Meeting",
    date: "12 March 2021",
    year: "2021",
    illustration: "flowers",
    quote: "Every love story begins with a single hello.",
    description:
      "Our journey started with an unexpected meeting that slowly turned into a beautiful friendship.",
  },
  {
    title: "Proposal",
    date: "18 June 2026",
    year: "2026",
    illustration: "ring",
    quote: "Forever begins with one simple question.",
    description:
      "Under a sky full of stars, one heartfelt question changed our lives forever.",
  },
  {
    title: "Engagement",
    date: "10 September 2026",
    year: "2026",
    illustration: "heart",
    quote: "Two families, one beautiful future.",
    description:
      "Our loved ones came together to celebrate our promise of forever.",
  },
  {
    title: "Wedding Day",
    date: "18 December 2027",
    year: "2027",
    illustration: "wedding",
    quote: "The best chapter is just beginning.",
    description:
      "Now we joyfully invite you to witness the start of our happily ever after.",
  },
];

const LoveStory = () => {
  const { storyRef } = useScroll();

  return (
    <section
      ref={storyRef}
      className="relative overflow-hidden bg-[#FFFDF8] py-28"
    >
      <LuxuryDecoration />
      <FloatingPetals />

      {/* Gold Glow */}
      <div className="absolute -left-48 top-20 h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[140px]" />
      <div className="absolute -right-48 bottom-20 h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-5xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.45em] text-[#C9A227]">
            Our Journey
          </p>

          <h2 className="mt-5 font-serif text-5xl text-[#2B2B35]">
            Love Story
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-500">
            Every chapter of our story brought us closer together,
            creating memories that will last a lifetime.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#D4AF37]" />

            <span className="text-2xl text-[#D4AF37]">
              ❦
            </span>

            <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>
        </motion.div>

        {/* Timeline */}

        <div className="mt-24 space-y-16">

          {stories.map((story, index) => (
            <TimelineCard
              key={index}
              {...story}
              index={index}
            />
          ))}

        </div>
      </div>
    </section>
  );
};

export default LoveStory;