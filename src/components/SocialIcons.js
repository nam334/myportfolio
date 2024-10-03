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
      <motion.button
        // whileHover={{ scale: 1.2 }}
        whileHover={{ y: -10 }} // Bounces the button upward slightly on hover
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/namrata-das-915a51124/",
            "__blank"
          )
        }
      >
        <FaLinkedin className="text-orange-500 text-3xl" />
      </motion.button>
      <motion.button
        // whileHover={{ scale: 1.2 }}
        whileHover={{ y: -10 }} // Bounces the button upward slightly on hover
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        onClick={() => {
          window.open("https://github.com/nam334", "__blank");
        }}
      >
        <FaGithub className="text-orange-500 text-3xl" />
      </motion.button>
    </motion.div>
  );
};

export default SocialIcons;
