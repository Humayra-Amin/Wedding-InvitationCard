import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: [0, 10, 0],
      }}
      transition={{
        delay: 2,
        duration: 2,
        repeat: Infinity,
      }}
      className="absolute bottom-10 left-1/2 z-50 -translate-x-1/2"
    >
      <div className="flex flex-col items-center">
        {/* Glass Background */}
        <div className="rounded-full border border-white/40 bg-white/20 px-6 py-4 shadow-2xl backdrop-blur-md">
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-[0.45em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,.9)]">
            Scroll
          </p>

          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="flex justify-center"
          >
            <FaChevronDown
              className="text-2xl text-[#D4AF37]"
              style={{
                filter: "drop-shadow(0 2px 10px rgba(0,0,0,.8))",
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;