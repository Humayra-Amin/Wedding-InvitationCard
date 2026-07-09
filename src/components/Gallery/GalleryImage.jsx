import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const GalleryImage = ({ image, onClick }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 120,
        rotate: -15,
        scale: 0.85,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotate: 0,
        scale: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        type: "spring",
        bounce: 0.35,
      }}
      whileHover={{
        y: -20,
        rotate: 0,
        scale: 1.04,
      }}
      onClick={onClick}
      className={`cursor-pointer ${image.rotate}`}
    >
      {/* Image */}

      <div className="relative overflow-hidden rounded-[22px]">

        <motion.img
          whileHover={{
            scale: 1.12,
          }}
          transition={{
            duration: .7,
          }}
          src={image.src}
          alt={image.title}
          className="h-[420px] w-full object-cover"
        />

        {/* Overlay */}

        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"
        />

        {/* Heart */}

        <motion.div
          whileHover={{ scale: 1.15 }}
          className="
              absolute
              right-5
              top-5
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-white/90
              text-[#D4AF37]
              shadow-lg
            "
        >
          <FaHeart />
        </motion.div>

      </div>

      {/* Caption */}

      <div className="pt-6 text-center">

        <motion.h3
          whileHover={{
            color: "#C9A227",
          }}
          className="font-serif text-2xl text-[#2B2B35]"
        >
          {image.title}
        </motion.h3>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 70 }}
          transition={{
            delay: .2,
          }}
          className="mx-auto my-3 h-[2px] bg-[#D4AF37]"
        />

        <p className="italic text-gray-500">
          {image.subtitle}
        </p>

      </div>

    </motion.div>
  );
};

export default GalleryImage;