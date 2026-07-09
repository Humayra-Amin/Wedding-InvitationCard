import { motion } from "framer-motion";
import { GiRose, GiDiamondRing } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";

const icons = {
  flowers: <GiRose size={34} />,
  ring: <GiDiamondRing size={34} />,
  heart: <FaHeart size={30} />,
  wedding: <GiDiamondRing size={34} />,
};

const TimelineCard = ({
  title,
  date,
  year,
  description,
  quote,
  illustration,
  index,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
      }}
      className="relative flex gap-8"
    >
      {/* Timeline */}

      <div className="relative flex flex-col items-center">

        {/* Circle */}

        <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#D4AF37] bg-white text-[#C9A227] shadow-xl">
          {icons[illustration]}
        </div>

        {/* Line */}

        <div className="mt-2 h-full w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#E8D6A7] to-transparent" />
      </div>

      {/* Card */}

      <motion.div
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        transition={{
          type: "spring",
          stiffness: 220,
        }}
        className="relative flex-1 overflow-hidden rounded-[32px] border border-[#E8D6A7] bg-white/90 p-8 shadow-[0_20px_60px_rgba(0,0,0,.08)] backdrop-blur-xl"
      >
        {/* Year */}

        <h1 className="absolute right-6 top-4 font-serif text-7xl text-[#D4AF37]/10">
          {year}
        </h1>

        <p className="uppercase tracking-[0.3em] text-sm text-[#C9A227]">
          {date}
        </p>

        <h2 className="mt-3 font-serif text-3xl text-[#2B2B35]">
          {title}
        </h2>

        <div className="my-5 h-px w-24 bg-[#D4AF37]" />

        <p className="leading-8 text-gray-600">
          {description}
        </p>

        <div className="mt-8 rounded-2xl bg-[#FFF8EB] px-5 py-4 italic text-gray-500">
          "{quote}"
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TimelineCard;