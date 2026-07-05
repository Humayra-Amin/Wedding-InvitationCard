import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#FCF8F1] pt-28 pb-14">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF3712,transparent_70%)]" />

      {/* Decorative Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6">

        {/* Top Divider */}

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "220px" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mx-auto h-px bg-[#D4AF37]"
        />

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="uppercase tracking-[0.45em] text-[#C8A13A]">
            Thank You
          </p>

          {/* Decorative Ornament */}
          <div className="mt-5 flex justify-center text-4xl text-[#D4AF37]">
            ❦
          </div>

          <h2 className="mt-5 font-serif text-5xl text-[#2D2A32]">
            Emma
            <span className="mx-5 text-[#D4AF37]">&</span>
            Daniel
          </h2>

          {/* Gold Divider */}
          <div className="mx-auto mt-6 h-[2px] w-44 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          <p className="mx-auto mt-8 max-w-2xl leading-8 text-gray-600">
            Thank you for celebrating our special day with us.
            Your love, blessings and presence mean more than words
            can express.
          </p>

          {/* Quote */}
          <p className="mt-8 font-serif text-lg italic text-[#B8860B]">
            "A lifetime of love begins with a single moment."
          </p>
        </motion.div>

        {/* Wedding Date */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <motion.div
            whileHover={{
              y: -5,
              scale: 1.03,
            }}
            transition={{
              type: "spring",
              stiffness: 220,
            }}
            className="rounded-full border border-[#E8D6A7] bg-white px-10 py-5 shadow-xl"
          >
            <p className="font-serif text-3xl text-[#C89B2B]">
              18 December 2027
            </p>

            <p className="mt-2 text-center text-gray-500">
              Saturday • 6:00 PM
            </p>
          </motion.div>
        </motion.div>

        {/* Social */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-14 flex justify-center gap-5"
        >
          <a
            href="#"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37] bg-white text-[#C89B2B] shadow-md transition-all duration-300 hover:-translate-y-2 hover:rotate-12 hover:bg-[#D4AF37] hover:text-white"
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37] bg-white text-[#C89B2B] shadow-md transition-all duration-300 hover:-translate-y-2 hover:-rotate-12 hover:bg-[#D4AF37] hover:text-white"
          >
            <FaFacebookF />
          </a>
        </motion.div>

        {/* Bottom */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 border-t border-[#E8D6A7] pt-8 text-center"
        >
          <div className="mx-auto mb-8 h-px w-40 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          <p className="flex items-center justify-center gap-2 text-gray-500">
            Made with
            <FaHeart className="animate-pulse text-red-500" />
            for our family & friends
          </p>

          <p className="mt-4 text-sm text-gray-400">
            © 2027 Emma & Daniel. All Rights Reserved.
          </p>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;