import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { COLORS } from "../../constants/colors";

const EventCard = ({
  icon,
  title,
  date,
  time,
  venue,
  address,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .7 }}
      whileHover={{
        y: -10,
      }}
      className="rounded-[35px] border border-white/60 bg-white/75 p-10 backdrop-blur-xl"
      style={{
        boxShadow:
          "0 20px 60px rgba(0,0,0,.08),0 0 35px rgba(201,162,39,.15)",
      }}
    >
      <div
        className="flex h-20 w-20 items-center justify-center rounded-full text-4xl"
        style={{
          background: "#FFF8EA",
        }}
      >
        {icon}
      </div>

      <h3 className="mt-8 font-serif text-4xl text-[#2B2B35]">
        {title}
      </h3>

      <div className="mt-8 space-y-5">

        <div className="flex items-center gap-4">
          <FaCalendarAlt color="#C9A227" />
          <span>{date}</span>
        </div>

        <div className="flex items-center gap-4">
          <FaClock color="#C9A227" />
          <span>{time}</span>
        </div>

        <div className="flex items-start gap-4">
          <FaMapMarkerAlt
            color="#C9A227"
            className="mt-1"
          />

          <div>
            <p>{venue}</p>
            <p className="text-gray-500">
              {address}
            </p>
          </div>
        </div>

      </div>

      <button
        className="mt-10 rounded-full px-8 py-3 text-white transition hover:scale-105"
        style={{
                background: `linear-gradient(90deg,
                ${COLORS.gold},
                ${COLORS.goldLight},
                ${COLORS.gold})`,
                boxShadow: "0 15px 40px rgba(201,162,39,.35)",
              }}
      >
        View Location
      </button>
    </motion.div>
  );
};

export default EventCard;