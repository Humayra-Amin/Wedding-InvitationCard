import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const PersonCard = ({
  image,
  title,
  name,
  parents,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
      }}
      className="rounded-[40px] border border-white/60 bg-white/70 p-10 text-center backdrop-blur-xl"
      style={{
        boxShadow:
          "0 20px 60px rgba(0,0,0,.08),0 0 40px rgba(201,162,39,.12)",
      }}
    >
      <img
        src={image}
        alt={name}
        className="mx-auto h-56 w-56 rounded-full border-[8px] object-cover"
        style={{
          borderColor: "#E5C76B",
        }}
      />

      <p
        className="mt-8 uppercase tracking-[0.4em] text-sm"
        style={{
          color: "#C9A227",
        }}
      >
        {title}
      </p>

      <h2 className="mt-4 font-serif text-4xl text-[#2B2B35]">
        {name}
      </h2>

      <div className="my-6 flex items-center justify-center gap-4">
        <div
          className="h-px w-20"
          style={{
            background:
              "linear-gradient(to right,transparent,#C9A227,transparent)",
          }}
        />

        <FaHeart
          size={14}
          color="#C9A227"
        />

        <div
          className="h-px w-20"
          style={{
            background:
              "linear-gradient(to right,transparent,#C9A227,transparent)",
          }}
        />
      </div>

      <p className="leading-8 text-gray-600 whitespace-pre-line">
        {parents}
      </p>
    </motion.div>
  );
};

export default PersonCard;