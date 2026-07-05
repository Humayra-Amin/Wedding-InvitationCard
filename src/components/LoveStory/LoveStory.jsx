import { motion } from "framer-motion";
import TimelineCard from "./TimelineCard";
import LuxuryDecoration from "../Hero/LuxuryDecoration";
import { useScroll } from "../../context/ScrollContext";

const stories = [
    {
        title: "First Meeting",
        date: "12 March 2021",
        year: "2021",
        illustration: "flowers",
        quote: "Every love story begins with a single hello.",
        description:
            "Our journey started with an unexpected meeting that slowly turned into a beautiful friendship.",
    },
    {
        title: "Proposal",
        date: "18 June 2026",
        year: "2026",
        illustration: "ring",
        quote: "Forever begins with one simple question.",
        description:
            "Under a sky full of stars, one heartfelt question changed our lives forever.",
    },
    {
        title: "Engagement",
        date: "10 September 2026",
        year: "2026",
        illustration: "heart",
        quote: "Two families, one beautiful future.",
        description:
            "Our loved ones came together to celebrate our promise of forever.",
    },
    {
        title: "Wedding Day",
        date: "18 December 2027",
        year: "2027",
        illustration: "wedding",
        quote: "The best chapter is just beginning.",
        description:
            "Now we joyfully invite you to witness the start of our happily ever after.",
    },
];

const LoveStory = () => {
    const { storyRef } = useScroll();
    return (
        <section ref={storyRef} className="bg-white py-28">
            <LuxuryDecoration />
            <div className="mx-auto max-w-6xl px-6">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p
                        className="uppercase tracking-[0.45em] text-sm"
                        style={{ color: "#C9A227" }}
                    >
                        Our Journey
                    </p>

                    <h2 className="mt-4 font-serif text-5xl text-[#2B2B35]">
                        Love Story
                    </h2>
                </motion.div>

                <div className="relative mt-20">

                    <div
                        className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2"
                        style={{
                            background:
                                "linear-gradient(#C9A227,transparent,#C9A227)",
                        }}
                    />

                    <div className="space-y-16">

                        {stories.map((story, index) => (
                            <TimelineCard
                                key={index}
                                {...story}
                                align={index % 2 === 0 ? "left" : "right"}
                            />
                        ))}

                    </div>

                </div>
            </div>
        </section>
    );
};

export default LoveStory;