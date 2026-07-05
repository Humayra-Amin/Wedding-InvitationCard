import { motion } from "framer-motion";

const petals = Array.from({ length: 20 });

const colors = [
    "#FFD7E6",
    "#FFC5D9",
    "#FFE8F0",
    "#FAD6E5",
];

const FloatingPetals = () => {
    return (
        <>
            {petals.map((_, i) => {
                const size = 18 + Math.random() * 35;

                return (
                    <motion.div
                        key={i}
                        initial={{
                            y: -200,
                            x: `${Math.random() * 100}vw`,
                            rotate: Math.random() * 360,
                        }}
                        animate={{
                            y: "120vh",
                            rotate: [0, 180, 360],
                            x: [
                                `${Math.random() * 100}vw`,
                                `${Math.random() * 100}vw`,
                                `${Math.random() * 100}vw`,
                            ],
                        }}
                        transition={{
                            duration: 12 + Math.random() * 8,
                            repeat: Infinity,
                            delay: Math.random() * 8,
                            ease: "linear",
                        }}
                        className="absolute z-[2]"
                    >
                        <div
                            style={{
                                width: size,
                                height: size * 0.75,
                                background:
                                    colors[Math.floor(Math.random() * colors.length)],
                                borderRadius: "65% 35% 65% 35%",
                                transform: "rotate(45deg)",
                                filter: "blur(.3px)",
                                opacity: 0.8,
                                boxShadow: "0 6px 12px rgba(255,182,193,.25)",
                            }}
                        />
                    </motion.div>
                );
            })}
        </>
    );
};

export default FloatingPetals;