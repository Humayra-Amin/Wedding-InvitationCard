import { useState } from "react";
import { motion } from "framer-motion";
import GalleryImage from "./GalleryImage";
import ImageModal from "./ImageModal";
import { useScroll } from "../../context/ScrollContext";

const images = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=1200",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200",
  "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=1200",
  "https://images.unsplash.com/photo-1529636798458-92182e662485?w=1200",
];

const Gallery = () => {
      const { galleryRef } = useScroll();

  const [selected, setSelected] = useState(null);

  return (
    <section ref={galleryRef} className="bg-white py-28">

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
            Beautiful Moments
          </p>

          <h2 className="mt-4 font-serif text-5xl text-[#2B2B35]">
            Our Gallery
          </h2>

        </motion.div>

        <div className="mt-20 columns-1 gap-6 md:columns-2 lg:columns-3">

          {images.map((image, index) => (
            <div key={index} className="mb-6 break-inside-avoid">
              <GalleryImage
                image={image}
                onClick={() => setSelected(image)}
              />
            </div>
          ))}

        </div>

      </div>

      <ImageModal
        image={selected}
        onClose={() => setSelected(null)}
      />

    </section>
  );
};

export default Gallery;