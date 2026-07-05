import { motion } from "framer-motion";
import { FaMusic, FaVolumeMute } from "react-icons/fa";
import { useMusic } from "../../context/MusicContext";

const MusicButton = () => {
  const { playing, toggleMusic } = useMusic();

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleMusic}
      className="fixed bottom-8 right-8 z-[999] flex h-16 w-16 items-center justify-center rounded-full border border-[#E6C65B] bg-white/80 backdrop-blur-xl shadow-[0_12px_35px_rgba(0,0,0,.18)]"
    >
      {playing && (
        <motion.div
          animate={{
            scale: [1, 1.45, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="absolute inset-0 rounded-full border-2 border-[#D4AF37]"
        />
      )}

      <motion.div
        animate={{
          rotate: playing ? 360 : 0,
        }}
        transition={{
          repeat: playing ? Infinity : 0,
          duration: 8,
          ease: "linear",
        }}
      >
        {playing ? (
          <FaMusic className="text-2xl text-[#C9A227]" />
        ) : (
          <FaVolumeMute className="text-2xl text-[#C9A227]" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default MusicButton;