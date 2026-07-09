import { motion } from "framer-motion";

const PersonCard = ({
  image,
  title,
  name,
  parents,
  side,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: side === "left" ? -80 : 80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.9,
      }}
      viewport={{ once: true }}
      className={`relative flex flex-col items-center ${
        side === "left"
          ? "lg:items-end lg:text-right"
          : "lg:items-start lg:text-left"
      }`}
    >
      {/* Gold Glow */}

      <div className="absolute top-10 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-[80px]" />

      {/* Decorative Watercolor Flower */}

      {/* <img
        src="/images/floral-watercolor.png"
        alt=""
        className="absolute top-4 h-72 w-72 opacity-10 object-contain pointer-events-none select-none"
      /> */}

      {/* Luxury Portrait */}

<motion.div
  whileHover={{
    y: -12,
    rotate: side === "left" ? -2 : 2,
    scale: 1.03,
  }}
  transition={{
    type: "spring",
    stiffness: 220,
  }}
  className="relative"
>
  {/* Gold Glow */}

  <div className="absolute -inset-10 rounded-full bg-[#D4AF37]/10 blur-[70px]" />

  {/* Outer Gold Frame */}

  <div className="relative rounded-[50%] border-[3px] border-[#D4AF37] bg-gradient-to-br from-[#FFF8E7] via-[#F8E8B5] to-[#D4AF37] p-3 shadow-[0_30px_80px_rgba(212,175,55,.35)]">

    {/* Inner Frame */}

    <div className="rounded-[50%] border-[3px] border-[#FFF5D5] p-3">

      {/* Portrait */}

      <img
        src={image}
        alt={name}
        className="h-72 w-60 rounded-[50%] object-cover"
      />

    </div>

  </div>

  {/* Floating Decoration */}

  <motion.div
    animate={{
      rotate: [0, 10, 0],
      y: [0, -6, 0],
    }}
    transition={{
      repeat: Infinity,
      duration: 5,
    }}
    className={`absolute ${
      side === "left"
        ? "-right-8 top-8"
        : "-left-8 top-8"
    } text-5xl text-[#D4AF37]/60`}
  >
    ❦
  </motion.div>
</motion.div>

      {/* Title */}

      <p className="mt-10 uppercase tracking-[0.45em] text-sm text-[#C9A227]">
        {title}
      </p>

      {/* Name */}

      <h2 className="mt-5 font-serif text-5xl tracking-wide text-[#2B2B35]">
        {name}
      </h2>

      <div className="my-8 flex items-center justify-center gap-4">

  <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#D4AF37]" />

  <span className="text-[#D4AF37] text-2xl">
    ❦
  </span>

  <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#D4AF37]" />

</div>

      {/* Parents */}

      <p className="max-w-sm whitespace-pre-line leading-8 text-gray-600">
        {parents}
      </p>

      <motion.p
  initial={{
    opacity: 0,
    y: 20,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    delay: 0.3,
  }}
  className="mt-8 max-w-sm italic leading-8 text-[#9E8D63]"
>
  "Love isn't finding someone to live with.
  It's finding someone you can't imagine living without."
</motion.p>
    </motion.div>
  );
};

export default PersonCard;