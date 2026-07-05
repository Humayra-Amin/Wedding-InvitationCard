import { motion } from "framer-motion";
import RSVPForm from "./RSVPForm";
import { FaHeart } from "react-icons/fa";
import LuxuryDecoration from "../Hero/LuxuryDecoration";
import { useScroll } from "../../context/ScrollContext";

const RSVP = () => {
  const { rsvpRef } = useScroll();
  return (
    <section ref={rsvpRef} className="relative overflow-hidden bg-[#FFFDF8] py-28">
      <LuxuryDecoration />
      {/* Soft glowing background */}
      <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-pink-100/40 blur-[120px]" />
      <div className="absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-amber-100/40 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.45em] text-sm text-amber-700">
            Kindly Respond
          </p>

          <h2 className="mt-4 font-serif text-5xl text-[#2B2B35]">
            RSVP
          </h2>
        </motion.div>

        {/* 2 Column Layout */}
        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT SIDE - Romantic Message */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative text-center lg:text-left"
          >

            {/* Decorative glow circle */}
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-200/20 blur-3xl lg:left-0" />

            <div className="relative space-y-6">

              <FaHeart className="mx-auto text-3xl text-amber-500 lg:mx-0" />

              <h3 className="font-serif text-4xl text-[#2B2B35]">
                We can’t wait to celebrate with you
              </h3>

              <p className="leading-8 text-gray-600">
                Your presence means more to us than words can express.
                This day is special because of the people we love — and
                that includes you.
              </p>

              {/* Decorative quote style block */}
              <div className="mx-auto max-w-md rounded-[30px] border border-white/60 bg-white/60 p-6 backdrop-blur-xl lg:mx-0">
                <p className="italic text-gray-500 leading-7">
                  “Love is not about how many days we spend together,
                  but how deeply we cherish each moment.”
                </p>
              </div>

            </div>
          </motion.div>

          {/* RIGHT SIDE - FORM */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <RSVPForm />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default RSVP;