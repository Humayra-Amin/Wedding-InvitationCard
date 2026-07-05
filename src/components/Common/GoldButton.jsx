import { motion } from "framer-motion";

const GoldButton = ({ children }) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.04,
      }}
      whileTap={{
        scale: .98,
      }}
      className="
      relative
      overflow-hidden
      rounded-full
      px-10
      py-4
      font-semibold
      text-white
      "
      style={{
        background:
          "linear-gradient(90deg,#B8860B,#D4AF37,#B8860B)",
      }}
    >
      <span className="relative z-10">
        {children}
      </span>

      <motion.div
        animate={{
          x: ["-140%", "240%"],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        absolute
        inset-y-0
        w-20
        rotate-12
        bg-white/30
        blur-md
        "
      />
    </motion.button>
  );
};

export default GoldButton;