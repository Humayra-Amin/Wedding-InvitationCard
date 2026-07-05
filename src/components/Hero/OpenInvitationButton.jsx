import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { COLORS } from "../../constants/colors";

const OpenInvitationButton = () => {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        y: -2,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
      }}
      className="group mt-12 inline-flex items-center gap-3 rounded-full px-10 py-4 font-semibold text-white shadow-2xl"
      style={{
        background: `linear-gradient(90deg,
        ${COLORS.gold},
        ${COLORS.goldLight},
        ${COLORS.gold})`,
        boxShadow: "0 15px 40px rgba(201,162,39,.35)",
      }}
    >
      Open Invitation

      <motion.div
        animate={{
          x: [0, 5, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
      >
        <FaArrowRight />
      </motion.div>
    </motion.button>
  );
};

export default OpenInvitationButton;