import { motion } from "framer-motion";

const HeroIntro = () => {
  return (
    <section className="relative text-center py-12 sm:py-16 overflow-hidden max-w-7xl mx-auto">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a1a2f]/50 to-transparent blur-3xl pointer-events-none" />

      <motion.h2
        className="relative text-3xl md:text-5xl font-bold orbitron text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-500 to-emerald-400 animate-gradient-headers drop-shadow-[0_0_15px_rgba(0,255,255,0.35)]"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Your Gaming Universe Awaits
      </motion.h2>

      <motion.p
        className="relative text-gray-200 text-lg sm:text-xl mt-4 mb-9 md:mb-12 max-w-2xl mx-auto sm:leading-relaxed opacity-90"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Dive into popular games, connect with players worldwide, and level up
        your journey — XPulse is where gamers rise together.
      </motion.p>

      {/* Decorative accent line */}
      <motion.div
        className="mx-auto w-28 sm:w-32 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-[0_0_15px_rgba(0,255,198,0.5)]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />
    </section>
  );
};

export default HeroIntro;
