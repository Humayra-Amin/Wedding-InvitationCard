import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CountdownCard from "./CountdownCard";
import LuxuryDecoration from "../Hero/LuxuryDecoration";

const weddingDate = new Date("2027-12-18T18:00:00").getTime();

const Countdown = () => {
  const getTimeRemaining = () => {
    const now = new Date().getTime();
    const difference = weddingDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FFFDF8] py-28">
      <LuxuryDecoration />

      {/* Gold Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.45em] text-[#C9A227]">
            Save Our Date
          </p>

          <h2 className="mt-5 font-serif text-5xl font-semibold text-[#2B2B35] md:text-6xl">
            Our Forever Begins In
          </h2>

          <div className="mx-auto mt-5 h-[2px] w-40 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-500">
            Every second brings us closer to the moment we begin our forever
            together.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4">
          {items.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
              viewport={{ once: true }}
            >
              <CountdownCard
                value={item.value}
                label={item.label}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="mx-auto mb-6 h-px w-56 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />

          <p className="font-serif text-2xl text-[#C9A227] md:text-3xl">
            Until We Say "Qubool"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Countdown;