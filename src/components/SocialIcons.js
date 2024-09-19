import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const SocialIcons = () => {
  return (
    <motion.div
      className="flex gap-4 z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1.25,
        delay: 6 / 2,
      }}
    >
      <motion.button whileHover={{ scale: 1.2 }}>
        <FaLinkedin className="text-orange-500 text-3xl" />
      </motion.button>
      <motion.button whileHover={{ scale: 1.2 }}>
        <FaGithub className="text-orange-500 text-3xl" />
      </motion.button>
    </motion.div>
  );
};

export default SocialIcons;
