import { useState } from "react";
import { motion } from "framer-motion";
import { useMusic } from "../../context/MusicContext";

const Envelope = ({ onOpen }) => {
    const [opened, setOpened] = useState(false);
    const { playMusic } = useMusic();

    const handleOpen = () => {
    playMusic();      // Start music immediately
    setOpened(true);

    setTimeout(() => {
        onOpen();
    }, 1400);
};
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{
                opacity: opened ? 0 : 1,
                scale: opened ? 0.92 : 1,
                y: opened ? -40 : [0, -8, 0],
            }}
            transition={{
                duration: opened ? 1.2 : 1,
                y: opened
                    ? {}
                    : {
                        repeat: Infinity,
                        duration: 5,
                        ease: "easeInOut",
                    },
            }}
            className="relative h-[550px] w-[95vw] max-w-[850px]"
        >


            {/* Soft Glow */}
            <div className="absolute inset-0 rounded-[60px] bg-[#D4AF37]/15 blur-[100px]" />

            {opened && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute left-1/2 top-1/2 z-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/15 blur-[120px]"
                />
            )}

            {/* ================= ENVELOPE ================= */}

            <motion.div
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1,
                }}
                className="absolute bottom-0 h-[380px] w-full overflow-hidden rounded-b-[45px] border-2 border-[#D4AF37] bg-gradient-to-b from-[#FFFDF8] via-[#FBF6EC] to-[#F3E9D4] shadow-[0_35px_90px_rgba(0,0,0,.20)]"
            >

                <div className="absolute inset-4 rounded-[30px] border border-[#E6C65B]/70" />

                <div className="absolute left-8 top-8 text-5xl opacity-20">❀</div>
                <div className="absolute right-8 top-8 rotate-90 text-5xl opacity-20">
                    ❀
                </div>
                <div className="absolute bottom-8 left-8 -rotate-90 text-5xl opacity-20">
                    ❀
                </div>
                <div className="absolute bottom-8 right-8 rotate-180 text-5xl opacity-20">
                    ❀
                </div>

                <div className="absolute bottom-20 w-full text-center">
                    <p className="text-xl uppercase tracking-[0.45em] text-[#B8860B]">
                        Wedding Invitation
                    </p>

                    <div className="mx-auto mt-4 h-[2px] w-44 bg-[#D4AF37]" />
                </div>
            </motion.div>


            <motion.div
                className="absolute bottom-0 left-0 z-30 h-[260px] w-full overflow-hidden"
            >
                {/* Left Pocket */}
                <div
                    className="absolute left-0 bottom-0 h-full w-1/2 border-r border-[#E5D5A4] bg-[#FBF6EC]"
                    style={{
                        clipPath: "polygon(0 0,100% 100%,0 100%)",
                    }}
                />

                {/* Right Pocket */}
                <div
                    className="absolute right-0 bottom-0 h-full w-1/2 border-l border-[#E5D5A4] bg-[#FBF6EC]"
                    style={{
                        clipPath: "polygon(100% 0,100% 100%,0 100%)",
                    }}
                />
            </motion.div>


            {/* TOP FLAP */}

            <motion.div
                animate={{
                    rotateX: opened ? -180 : 0,
                }}
                transition={{
                    duration: 0.9,
                    ease: "easeInOut",
                }}
                className="absolute top-0 z-40 h-[250px] w-full origin-top border-2 border-[#D4AF37] bg-gradient-to-b from-[#FFFDF8] to-[#F7F0DF] shadow-xl"
                style={{
                    clipPath: "polygon(0 0,100% 0,50% 100%)",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                }}
            />

            {/* WAX SEAL */}

            <motion.div
                animate={{
                    scale: opened ? 0 : 1,
                    opacity: opened ? 0 : 1,
                }}
                transition={{
                    duration: 0.45,
                }}
                whileHover={{
                    scale: 1.08,
                }}
                whileTap={{
                    scale: 0.94,
                }}
                onClick={handleOpen}
                className="absolute left-1/2 top-[175px] z-50 flex h-28 w-28 -translate-x-1/2 cursor-pointer items-center justify-center rounded-full shadow-[0_12px_35px_rgba(0,0,0,.35)]"
                style={{
                    background:
                        "radial-gradient(circle at 30% 30%, #D64B4B, #9C1111 70%)",
                }}
            >
                <div className="absolute left-5 top-4 h-4 w-10 rounded-full bg-white/30 blur-sm" />

                <span className="font-serif text-4xl text-white">
                    ED
                </span>
            </motion.div>

            {/* SPARKLES */}
            <motion.p
                animate={{
                    opacity: [0.4, 1, 0.4],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 2,
                }}
                className="absolute -bottom-16 left-1/2 -translate-x-1/2 uppercase tracking-[0.35em] text-[#C9A227]"
            >
                Click the Wax Seal
            </motion.p>

            <motion.div
                animate={{
                    opacity: [0.3, 1, 0.3],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 2,
                }}
                className="absolute left-20 top-12 text-3xl text-[#D4AF37]"
            >
                ✦
            </motion.div>

            <motion.div
                animate={{
                    opacity: [1, 0.3, 1],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 3,
                }}
                className="absolute right-20 top-20 text-2xl text-[#D4AF37]"
            >
                ✧
            </motion.div>
        </motion.div>

    );
};

export default Envelope;