import { motion } from "framer-motion";
import PersonCard from "./PersonCard";
import LuxuryDecoration from "../Hero/LuxuryDecoration";

const BrideGroom = () => {
  return (
    <section className="bg-[#FFFDF8] py-28">
      <LuxuryDecoration />
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p
            className="uppercase tracking-[0.45em] text-sm"
            style={{ color: "#C9A227" }}
          >
            Meet The Couple
          </p>

          <h2 className="mt-4 font-serif text-5xl text-[#2B2B35]">
            Bride & Groom
          </h2>

          <div
            className="mx-auto mt-5 h-[2px] w-40"
            style={{
              background:
                "linear-gradient(to right,transparent,#C9A227,transparent)",
            }}
          />
        </motion.div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          <PersonCard
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800"
            title="The Bride"
            name="Emma Johnson"
            parents={`Daughter of

Mr. John Johnson
&
Mrs. Sarah Johnson`}
          />

          <PersonCard
            image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800"
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