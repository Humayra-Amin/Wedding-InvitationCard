import { motion } from "framer-motion";

const CountdownCard = ({ value, label }) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.05,
        rotateX: -5,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
      }}
      style={{
        transformStyle: "preserve-3d",
        boxShadow:
          "0 25px 70px rgba(0,0,0,.10),0 0 45px rgba(201,162,39,.18)",
      }}
      className="rounded-[30px] border border-white/70 bg-white/70 p-10 text-center backdrop-blur-xl"
    >
      <motion.h3
        key={value}
        initial={{
          scale: 0.6,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.35,
        }}
        className="font-serif text-6xl font-bold text-[#C9A227] md:text-7xl"
      >
        {String(value).padStart(2, "0")}
      </motion.h3>

      <p className="mt-5 uppercase tracking-[0.35em] text-sm text-gray-500">
        {label}
      </p>
    </motion.div>
  );
};

export default CountdownCard;