import { useState } from "react";
import { motion } from "framer-motion";
import GalleryImage from "./GalleryImage";
import ImageModal from "./ImageModal";
import { useScroll } from "../../context/ScrollContext";
import FloatingPetals from "../Hero/FloatingPetals";

const images = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200",
    title: "The Proposal",
    subtitle: "Where Forever Began",
    rotate: "-rotate-3",
  },
  {
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=1200",
    title: "Engagement",
    subtitle: "A Promise of Love",
    rotate: "rotate-2",
  },
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200",
    title: "Pre Wedding",
    subtitle: "Every Moment Matters",
    rotate: "-rotate-2",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200",
    title: "Wedding Day",
    subtitle: "The Beginning",
    rotate: "rotate-3",
  },
  {
    src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=1200",
    title: "Reception",
    subtitle: "Celebrate Love",
    rotate: "-rotate-1",
  },
  {
    src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=1200",
    title: "Together Forever",
    subtitle: "Our Story Continues",
    rotate: "rotate-1",
  },
];

const Gallery = () => {
  const { galleryRef } = useScroll();
  const [selected, setSelected] = useState(null);

  return (
    <section
      ref={galleryRef}
      className="relative overflow-hidden bg-[#FFFDF8] py-28"
    >
      {/* Floating Petals */}
      <FloatingPetals />

      {/* Gold Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF3710,transparent_70%)]" />

      {/* Decorative Circle */}
      <div className="absolute -top-52 -left-52 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/10 blur-[130px]" />
      <div className="absolute -bottom-52 -right-52 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="uppercase tracking-[0.45em] text-[#C9A227]">
            Captured Memories
          </p>

          <h2 className="mt-5 font-serif text-5xl text-[#2B2B35]">
            Our Love Story
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-500 leading-8">
            Every picture holds a memory,
            every smile tells a story,
            and every moment brings us
            one step closer to forever.
          </p>

          <div className="mt-8 flex justify-center items-center gap-4">

            <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#D4AF37]" />

            <span className="text-[#D4AF37] text-2xl">
              ❦
            </span>

            <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#D4AF37]" />

          </div>

        </motion.div>

        {/* Gallery */}

        <div className="mt-24 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
  {images.map((item, index) => (
    <GalleryImage
      key={index}
      image={item}
      onClick={() => setSelected(index)}
    />
  ))}
</div>

      </div>

      <ImageModal
        images={images}
        selected={selected}
        onClose={() => setSelected(null)}
        setSelected={setSelected}
      />

    </section>
  );
};

export default Gallery;