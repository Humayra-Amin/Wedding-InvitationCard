import { motion } from "framer-motion";
import PersonCard from "./PersonCard";
import CoupleDivider from "./CoupleDivider";
import LuxuryDecoration from "../Hero/LuxuryDecoration";

const BrideGroom = () => {
  return (
    <section className="relative overflow-hidden bg-[#FFFDF8] py-32">

      <LuxuryDecoration />

      {/* Background Glow */}

      <div className="absolute -left-44 top-20 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/10 blur-[120px]" />

      <div className="absolute -right-44 bottom-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >

          <p className="uppercase tracking-[0.45em] text-[#C9A227]">
            Together Forever
          </p>

          <h2 className="mt-5 font-serif text-5xl text-[#2B2B35]">
            Bride & Groom
          </h2>

          <div className="mt-7 flex items-center justify-center gap-5">

            <div className="h-px w-28 bg-gradient-to-r from-transparent to-[#D4AF37]" />

            <span className="text-2xl text-[#D4AF37]">
              ❦
            </span>

            <div className="h-px w-28 bg-gradient-to-l from-transparent to-[#D4AF37]" />

          </div>

        </motion.div>

        {/* Couple */}

        <div className="mt-24 grid items-center gap-16 lg:grid-cols-[1fr_auto_1fr]">

          <PersonCard
            side="left"
            image="https://i.ibb.co.com/m5tGJXhH/bride.jpg"
            title="The Bride"
            name="Emma Johnson"
            parents={`Daughter of

Mr. John Johnson
&
Mrs. Sarah Johnson`}
          />

          <CoupleDivider />

          <PersonCard
            side="right"
            image="https://i.ibb.co.com/PzT7xNwq/groom.jpg"
            title="The Groom"
            name="Daniel Smith"
            parents={`Son of

Mr. David Smith
&
Mrs. Mary Smith`}
          />

        </div>

      </div>

    </section>
  );
};

export default BrideGroom;