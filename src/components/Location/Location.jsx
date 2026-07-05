import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaClock,
  FaCalendarAlt,
  FaDirections,
} from "react-icons/fa";
import { COLORS } from "../../constants/colors";
import LuxuryDecoration from "../Hero/LuxuryDecoration";
import { useScroll } from "../../context/ScrollContext";


const Location = () => {
      const { locationRef } = useScroll();

  return (
    <section ref={locationRef} className="relative bg-white py-28 overflow-hidden">
      <LuxuryDecoration />
      {/* Background Glow */}
      <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-pink-100/40 blur-[120px]" />
      <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-amber-100/40 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.45em] text-sm text-amber-700">
            Wedding Venue
          </p>

          <h2 className="mt-4 font-serif text-5xl text-[#2B2B35]">
            Find Us Here
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-500">
            We would be delighted to celebrate this joyful occasion
            together with you.
          </p>

        </motion.div>

        {/* Two Columns */}

        <div className="mt-20 grid gap-14 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[35px] border border-white/60 bg-white/70 p-10 backdrop-blur-xl"
            style={{
              boxShadow:
                "0 20px 60px rgba(0,0,0,.08),0 0 40px rgba(201,162,39,.12)",
            }}
          >

            <div className="space-y-8">

              <div className="flex items-start gap-5">
                <FaMapMarkerAlt
                  size={24}
                  className="mt-1 text-amber-600"
                />

                <div>
                  <h3 className="font-serif text-3xl text-[#2B2B35]">
                    Royal Grand Ballroom
                  </h3>

                  <p className="mt-2 text-gray-600">
                    Gulshan Avenue,
                    Dhaka 1212,
                    Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaCalendarAlt className="text-amber-600" />

                <span className="text-gray-600">
                  Saturday, 18 December 2027
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaClock className="text-amber-600" />

                <span className="text-gray-600">
                  Ceremony Begins at 6:00 PM
                </span>
              </div>

              <div className="rounded-3xl bg-[#FFF8ED] p-6">

                <h4 className="font-semibold text-[#2B2B35]">
                  Parking & Arrival
                </h4>

                <p className="mt-3 leading-7 text-gray-600">
                  Complimentary parking is available.
                  Guests are kindly requested to arrive
                  at least 30 minutes before the ceremony.
                </p>

              </div>

              <button
                className="flex items-center gap-3 rounded-full px-8 py-4 text-white transition hover:scale-105"
                style={{
                  background: `linear-gradient(90deg,
                        ${COLORS.gold},
                        ${COLORS.goldLight},
                        ${COLORS.gold})`,
                  boxShadow: "0 15px 40px rgba(201,162,39,.35)",
                }}
              >
                <FaDirections />

                Open Google Maps
              </button>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[35px] border border-white/60 shadow-2xl"
          >

            <iframe
              title="Wedding Venue"
              src="https://www.google.com/maps?q=Dhaka&output=embed"
              className="h-[550px] w-full"
              loading="lazy"
            />

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Location;