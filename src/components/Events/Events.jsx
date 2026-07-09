import { motion } from "framer-motion";
import EventCard from "./EventCard";
import LuxuryDecoration from "../Hero/LuxuryDecoration";
import { useScroll } from "../../context/ScrollContext";

const Events = () => {
  const { eventsRef } = useScroll();

  return (
    <section ref={eventsRef} className="bg-[#FFFDF8] py-28">
      <LuxuryDecoration />
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p
            className="uppercase tracking-[0.45em] text-sm"
            style={{ color: "#C9A227" }}
          >
            Celebrate With Us
          </p>

          <h2 className="mt-4 font-serif text-5xl text-[#2B2B35]">
            Wedding Events
          </h2>
        </motion.div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          <EventCard
            icon="💍"
            title="Nikah Ceremony"
            date="Saturday • 18 December 2027"
            time="6:00 PM"
            venue="Royal Grand Ballroom"
            address="Dhaka, Bangladesh"
          />

          <EventCard
            icon="🎉"
            title="Walima Ceremony"
            date="Sunday • 19 December 2027"
            time="7:00 PM"
            venue="Grand Palace Hall"
            address="Dhaka, Bangladesh"
          />

        </div>

      </div>
    </section>
  );
};

export default Events;