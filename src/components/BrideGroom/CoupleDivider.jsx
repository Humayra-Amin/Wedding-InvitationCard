import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";


const CoupleDivider = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center py-12"
    >
      {/* Top Line */}

      <div className="h-24 w-px bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent" />

      {/* Large & */}

      <motion.h1
        animate={{
          scale: [1, 1.04, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
        }}
        className="my-4 font-serif text-[110px] leading-none text-[#D4AF37]/15 select-none"
      >
        &
      </motion.h1>

      {/* Heart */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
        }}
        className="rounded-full border border-[#E8D6A7] bg-white p-4 shadow-lg"
      >
        <FaHeart className="text-[#D4AF37]" size={22} />
      </motion.div>

      {/* Quote */}

      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.4,
        }}
        viewport={{ once: true }}
        className="mt-8 max-w-[240px] text-center font-serif text-xl italic leading-9 text-gray-500"
      >
        Two hearts,
        <br />
        One beautiful
        <br />
        Forever.
      </motion.p>

      {/* Bottom Line */}

      <div className="mt-8 h-24 w-px bg-gradient-to-b from-[#D4AF37] via-[#E8D6A7] to-transparent" />
    </motion.div>
  );
};

export default CoupleDivider;