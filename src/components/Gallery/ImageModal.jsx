import { AnimatePresence, motion } from "framer-motion";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useEffect } from "react";

const ImageModal = ({
  images,
  selected,
  onClose,
  setSelected,
}) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (selected === null) return;

      if (e.key === "Escape") {
        onClose();
      }

      if (e.key === "ArrowRight") {
        setSelected((selected + 1) % images.length);
      }

      if (e.key === "ArrowLeft") {
        setSelected(
          (selected - 1 + images.length) % images.length
        );
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [selected, images.length, onClose, setSelected]);

  if (selected === null) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-6"
      >
        {/* Close */}

        <button
          onClick={onClose}
          className="absolute right-8 top-8 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#C9A227] shadow-xl transition hover:scale-110"
        >
          <FaTimes />
        </button>

        {/* Previous */}

        <button
          onClick={(e) => {
            e.stopPropagation();
            setSelected(
              (selected - 1 + images.length) % images.length
            );
          }}
          className="absolute left-8 top-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#C9A227] shadow-xl transition hover:scale-110"
        >
          <FaChevronLeft />
        </button>

        {/* Next */}

        <button
          onClick={(e) => {
            e.stopPropagation();
            setSelected(
              (selected + 1) % images.length
            );
          }}
          className="absolute right-8 top-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#C9A227] shadow-xl transition hover:scale-110"
        >
          <FaChevronRight />
        </button>

        {/* Image */}

        <motion.img
          key={images[selected].src}
          initial={{
            opacity: 0,
            scale: 0.85,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.85,
          }}
          transition={{
            duration: 0.4,
          }}
          src={images[selected].src}
          alt=""
          onClick={(e) => e.stopPropagation()}
          className="max-h-[82vh] max-w-[90vw] rounded-[30px] border-[10px] border-white shadow-[0_40px_120px_rgba(0,0,0,.45)]"
        />

        {/* Bottom */}

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute bottom-10 text-center text-white"
        >
          <h3 className="font-serif text-3xl">
            {images[selected].title}
          </h3>

          <p className="mt-2 uppercase tracking-[0.3em] text-sm text-[#D4AF37]">
            {selected + 1} / {images.length}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageModal;