import { motion, AnimatePresence } from "framer-motion";

const ImageModal = ({ image, onClose }) => {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-6"
        >
          <motion.img
            initial={{ scale: .8 }}
            animate={{ scale: 1 }}
            exit={{ scale: .8 }}
            src={image}
            className="max-h-[90vh] rounded-3xl"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;