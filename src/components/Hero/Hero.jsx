import { motion } from "framer-motion";
import FloatingPetals from "./FloatingPetals";
import HeroContent from "./HeroContent";
import ScrollIndicator from "./ScrollIndicator";
import FloralDecoration from "./FloralDecoration";
import LuxuryDecoration from "./LuxuryDecoration";
import { useScroll } from "../../context/ScrollContext";

const Hero = () => {
    const { heroRef } = useScroll();

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden">
      <LuxuryDecoration />
      {/* Animated Background */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2000&auto=format&fit=crop')",
        }}
      />

      {/* White Overlay */}
      <div className="absolute inset-0 bg-white/35 backdrop-blur-[2px]" />

      {/* Decorations */}
      <FloatingPetals />
      <FloralDecoration />

      {/* Gold Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/20 blur-3xl" />

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <HeroContent />
      </div>

      {/* Scroll */}
      <ScrollIndicator />
    </section>
  );
};

export default Hero;