import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import Lottie from "lottie-react";
import noDataFound from "../assets/lotties/noData.json"; // your Lottie file

const NoDataFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#002d48] via-[#00485e] to-[#00738a] px-4">
      {/* Center container with glow/focus */}
      <motion.div
        className="w-full max-w-md p-8 flex flex-col items-center text-center rounded-2xl
                   bg-gradient-to-b from-white/10 via-white/20 to-white/10
                   shadow-lg shadow-[#00A3FF]/20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Lottie animation */}
        <div className="w-64 md:w-96 mb-6">
          <Lottie animationData={noDataFound} loop={true} />
        </div>

        {/* Title */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          No Data Found
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-gray-200 mb-6 max-w-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          The item you are looking for does not exist or may have been deleted.
          Please check your selection or return to the home page.
        </motion.p>

        {/* Back to Home button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            to="/"
            className="bg-gradient-to-r from-[#00A3FF] to-[#00FFC6] text-black font-semibold py-2 px-6 rounded-lg hover:opacity-90 transition"
          >
            Go Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NoDataFound;
