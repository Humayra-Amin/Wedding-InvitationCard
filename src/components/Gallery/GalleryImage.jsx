import { motion } from "framer-motion";

const GalleryImage = ({ image, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer overflow-hidden rounded-[30px]"
      onClick={onClick}
    >
      <div className="relative">

        <img
          src={image}
          alt=""
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

      </div>
    </motion.div>
  );
};

export default GalleryImage;