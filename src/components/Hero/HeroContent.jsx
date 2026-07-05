import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import OpenInvitationButton from "./OpenInvitationButton";

const HeroContent = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mx-auto w-full max-w-3xl"
        >
            <div className="rounded-[42px] border border-white/60 bg-white/65 p-10 text-center backdrop-blur-2xl"
                style={{
                    boxShadow:
                        "0 30px 80px rgba(0,0,0,.12), 0 0 60px rgba(201,162,39,.12)",
                }}>
                {/* Small Heading */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.45em] text-amber-700 md:text-sm"
                >
                    Together With Their Families
                </motion.p>

                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mt-6 font-serif text-3xl lg:text-5xl font-semibold leading-tight text-gray-800 md:text-7xl"
                >
                    Emma
                    <span
                        className="mx-4"
                        style={{
                            color: "#C9A227",
                        }}
                    >
                        &
                    </span>
                    Daniel
                </motion.h1>

                {/* Divider */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="my-8 flex items-center justify-center gap-4"
                >
                    <div
                        className="h-px w-20 md:w-28"
                        style={{
                            background:
                                "linear-gradient(to right,transparent,#C9A227,transparent)",
                        }}
                    />

                    <FaHeart
                        size={14}
                        style={{
                            color: "#C9A227",
                        }}
                    />

                    <div
                        className="h-px w-20 md:w-28"
                        style={{
                            background:
                                "linear-gradient(to right,transparent,#C9A227,transparent)",
                        }}
                    />
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="mx-auto max-w-2xl text-base leading-8 text-gray-600 md:text-lg"
                >
                    Request the honour of your presence as we celebrate our wedding and
                    begin the next beautiful chapter of our lives together.
                </motion.p>

                {/* Date */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="mt-10"
                >
                    <p className="text-xs uppercase tracking-[0.35em] text-gray-500 md:text-sm">
                        Save The Date
                    </p>

                    <h2 className="mt-3 font-serif text-3xl font-semibold md:text-5xl"
                        style={{
                            color: "#B88A44",
                        }}>
                        18 December 2027
                    </h2>

                    <p className="mt-2 text-gray-500">
                        Saturday • 6:00 PM
                    </p>
                </motion.div>

                {/* Button */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="mt-12"
                >
                    <OpenInvitationButton />
                </motion.div> */}
            </div>
        </motion.div>
    );
};

export default HeroContent;