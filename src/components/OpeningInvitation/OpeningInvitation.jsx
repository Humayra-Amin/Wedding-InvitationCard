import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import InvitationCard from "./InvitationCard";
import Envelope from "./Envelope";

const OpeningInvitation = ({ children }) => {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);

    // Unlock page scrolling
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {!opened && (
          <motion.div
            key="opening"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.05,
              transition: {
                duration: 0.8,
              },
            }}
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FFFDF8] via-[#FFFBF5] to-[#FFFDF8]"
          >
            <Envelope onOpen={handleOpen}/>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: opened ? 1 : 0,
        }}
        transition={{
          duration: 1,
          delay: 0.3,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default OpeningInvitation;