import React from "react";
import { motion } from "framer-motion";
import love from "../assets/love.png";
import sword from "../assets/sword.png";
import treasure from "../assets/treasure.png";
import diamond from "../assets/diamond.png";

const Newsletter = () => {
  return (
    <section className="relative py-16 sm:py-20 px-4 text-gray-100 bg-[#111a2b] overflow-hidden">
      {/* Floating pixel/game icons */}
      <motion.div className="absolute inset-0 pointer-events-none">
        <motion.img
          src={love}
          className="absolute top-10 left-10 w-6 opacity-20"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <motion.img
          src={treasure}
          className="absolute top-32 right-16 w-8 opacity-15"
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.img
          src={sword}
          className="absolute bottom-20 left-20 w-5 opacity-10"
          animate={{ y: [0, -6, 0] }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <motion.img
          src={diamond}
          className="absolute bottom-10 right-32 w-7 opacity-20"
          animate={{ y: [0, -8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
            delay: 0.3,
          }}
        />
      </motion.div>

      <div className="relative max-w-xl mx-auto text-center space-y-6 sm:space-y-8">
        <motion.h2
          className="text-white text-2xl sm:text-4xl font-bold orbitron"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Join the XPulse Insider
        </motion.h2>

        <motion.p
          className="text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Get indie game updates, developer stories & early-access perks
          delivered straight to your inbox.
        </motion.p>

        <motion.form
          className="flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <input
            type="email"
            placeholder="Your email address"
            required
            className="input h-11 sm:h-12 input-bordered w-full sm:flex-1 bg-gray-800/60 border-gray-700 text-gray-100 placeholder-gray-400 backdrop-blur-sm focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
          />
          <button
            type="submit"
            className="w-full  cursor-pointer sm:w-auto px-6 py-2.5 sm:py-3 font-semibold rounded-md text-white
                       bg-gradient-to-r from-[#00A3FF] to-[#00FFC6]
                       hover:from-[#00FFC6] hover:to-[#00A3FF]
                       hover:shadow-lg hover:shadow-cyan-500/70
                       transition-all duration-500"
          >
            Subscribe
          </button>
        </motion.form>

        <motion.p
          className="text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          No spam. Unsubscribe anytime.
        </motion.p>
      </div>
    </section>
  );
};

export default Newsletter;
