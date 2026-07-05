import { motion } from "framer-motion";

const InvitationCard = ({ onOpen }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="relative w-[92%] max-w-xl"
    >
      {/* Soft Glow */}
      <div className="absolute inset-0 rounded-[45px] bg-[#C9A227]/10 blur-3xl" />

      {/* Card */}
      <div
        className="
        relative
        overflow-hidden
        rounded-[40px]
        border
        border-[#E8D6A7]
        bg-white/80
        p-10
        shadow-[0_25px_80px_rgba(0,0,0,0.18)]
        backdrop-blur-xl
        md:p-16
      "
      >
        {/* Decorative Circles */}

        <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-pink-100/40 blur-3xl" />

        <div className="absolute -bottom-10 -right-10 h-36 w-36 rounded-full bg-amber-100/40 blur-3xl" />

        {/* Top Decoration */}

        <motion.div
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="text-center"
        >
          <div className="text-5xl text-[#C9A227]">
            ❦
          </div>
        </motion.div>

        {/* Invitation */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .4 }}
          className="mt-6 text-center text-xs uppercase tracking-[0.45em] text-[#9C7A17]"
        >
          Wedding Invitation
        </motion.p>

        {/* Couple */}

        <motion.h1
          initial={{
            opacity: 0,
            scale: .95,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: .5,
          }}
          className="mt-8 text-center font-serif text-5xl font-semibold text-[#2B2B35] md:text-6xl"
        >
          Emma

          <span className="mx-4 text-[#C9A227]">
            &
          </span>

          Daniel
        </motion.h1>

        {/* Divider */}

        <div className="my-8 flex items-center justify-center">

          <div className="h-px w-16 bg-[#C9A227]" />

          <div className="mx-4 text-xl text-[#C9A227]">
            ♥
          </div>

          <div className="h-px w-16 bg-[#C9A227]" />

        </div>

        {/* Message */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: .8,
          }}
          className="mx-auto max-w-sm text-center leading-8 text-gray-600"
        >
          Together with our families,

          <br />

          we joyfully invite you

          <br />

          to celebrate our wedding

          <br />

          and witness the beginning

          <br />

          of our forever.
        </motion.p>

        {/* Date */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1,
          }}
          className="mt-10 text-center"
        >
          <p className="uppercase tracking-[0.35em] text-gray-500">
            Save The Date
          </p>

          <h2 className="mt-3 font-serif text-4xl text-[#C9A227]">
            18 December 2027
          </h2>

          <p className="mt-2 text-gray-500">
            Saturday • 6:00 PM
          </p>
        </motion.div>

        {/* Button */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.3,
          }}
          className="mt-14 flex justify-center"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: .96,
            }}
            onClick={onOpen}
            className="
              rounded-full
              bg-gradient-to-r
              from-[#B8860B]
              via-[#D4AF37]
              to-[#B8860B]
              px-10
              py-4
              font-semibold
              tracking-wide
              text-white
              shadow-xl
            "
          >
            Open Invitation
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InvitationCard;