import { motion } from "framer-motion";

const FloralDecoration = () => {
  return (
    <>
      {/* Top Left Decoration */}
      <motion.div
        initial={{ opacity: 0, x: -60, y: -60 }}
        animate={{ opacity: 0.18, x: 0, y: 0 }}
        transition={{ duration: 1.2 }}
        className="absolute top-0 left-0 z-0"
      >
        <svg
          width="280"
          height="280"
          viewBox="0 0 280 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M60 240C60 170 120 120 190 120"
            stroke="#C8A14A"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <path
            d="M75 220L90 200"
            stroke="#C8A14A"
            strokeWidth="2"
          />

          <path
            d="M95 190L115 170"
            stroke="#C8A14A"
            strokeWidth="2"
          />

          <circle cx="90" cy="200" r="7" fill="#D6B65C" />
          <circle cx="115" cy="170" r="6" fill="#D6B65C" />
          <circle cx="190" cy="120" r="8" fill="#D6B65C" />
        </svg>
      </motion.div>

      {/* Bottom Right Decoration */}
      <motion.div
        initial={{ opacity: 0, x: 60, y: 60 }}
        animate={{ opacity: 0.18, x: 0, y: 0 }}
        transition={{ duration: 1.2 }}
        className="absolute bottom-0 right-0 rotate-180 z-0"
      >
        <svg
          width="280"
          height="280"
          viewBox="0 0 280 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M60 240C60 170 120 120 190 120"
            stroke="#C8A14A"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <path
            d="M75 220L90 200"
            stroke="#C8A14A"
            strokeWidth="2"
          />

          <path
            d="M95 190L115 170"
            stroke="#C8A14A"
            strokeWidth="2"
          />

          <circle cx="90" cy="200" r="7" fill="#D6B65C" />
          <circle cx="115" cy="170" r="6" fill="#D6B65C" />
          <circle cx="190" cy="120" r="8" fill="#D6B65C" />
        </svg>
      </motion.div>
    </>
  );
};

export default FloralDecoration;