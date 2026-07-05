import { motion } from "framer-motion";
import { GiRose, GiDiamondRing } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";

const iconMap = {
  flowers: <GiRose size={170} />,
  ring: <GiDiamondRing size={170} />,
  heart: <FaHeart size={150} />,
  wedding: <GiDiamondRing size={170} />,
};

const TimelineCard = ({
  title,
  date,
  year,
  description,
  quote,
  illustration,
  align,
}) => {
  const left = align === "left";

  return (
    <div className="relative grid items-center gap-12 lg:grid-cols-2">

      {/* LEFT SIDE */}

      {left ? (
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="relative"
        >
          <div
            className="absolute -top-10 left-0 text-[140px] font-bold opacity-5 select-none"
            style={{ color: "#C9A227" }}
          >
            {year}
          </div>

          <div
            className="absolute right-8 top-10 opacity-10"
            style={{ color: "#C9A227" }}
          >
            {iconMap[illustration]}
          </div>

          <div
            className="rounded-[32px] border border-white/70 bg-white/75 p-8 backdrop-blur-xl"
            style={{
              boxShadow:
                "0 20px 60px rgba(0,0,0,.08),0 0 35px rgba(201,162,39,.15)",
            }}
          >
            <h3 className="font-serif text-3xl text-[#2B2B35]">
              {title}
            </h3>

            <p
              className="mt-2 font-semibold"
              style={{ color: "#C9A227" }}
            >
              {date}
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              {description}
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex h-full flex-col items-center justify-center text-center"
        >
          <div
            className="text-[120px] font-bold opacity-5"
            style={{ color: "#C9A227" }}
          >
            {year}
          </div>

          <div
            className="mt-2 opacity-10"
            style={{ color: "#C9A227" }}
          >
            {iconMap[illustration]}
          </div>

          <p className="mt-6 max-w-xs italic text-gray-500 leading-8">
            "{quote}"
          </p>
        </motion.div>
      )}

      {/* RIGHT SIDE */}

      {!left ? (
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="relative"
        >
          <div
            className="rounded-[32px] border border-white/70 bg-white/75 p-8 backdrop-blur-xl"
            style={{
              boxShadow:
                "0 20px 60px rgba(0,0,0,.08),0 0 35px rgba(201,162,39,.15)",
            }}
          >
            <h3 className="font-serif text-3xl text-[#2B2B35]">
              {title}
            </h3>

            <p
              className="mt-2 font-semibold"
              style={{ color: "#C9A227" }}
            >
              {date}
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              {description}
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex h-full flex-col items-center justify-center text-center"
        >
          <div
            className="text-[120px] font-bold opacity-5"
            style={{ color: "#C9A227" }}
          >
            {year}
          </div>

          <div
            className="mt-2 opacity-10"
            style={{ color: "#C9A227" }}
          >
            {iconMap[illustration]}
          </div>

          <p className="mt-6 max-w-xs italic text-gray-500 leading-8">
            "{quote}"
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default TimelineCard;