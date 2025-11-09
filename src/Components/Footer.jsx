import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#19273A] text-gray-200 py-12 relative overflow-hidden">
      {/* Neon glow top line */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 opacity-50"
        animate={{ x: [0, 300, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "linear" }}
      />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + tagline */}
        <div className="space-y-4">
          <motion.h2
            className="text-2xl font-bold orbitron text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            XPulse
          </motion.h2>
          <p className="text-gray-400 text-sm">
            Next-Level Gaming Hub. Discover, play, and connect with the global
            gaming community.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-300 mt-2">
            <div className="flex items-center gap-1">
              🎮 <span>1000+ Games</span>
            </div>
            <div className="flex items-center gap-1">
              👾 <span>50k Players</span>
            </div>
            <div className="flex items-center gap-1">
              🏆 <span>Weekly Tournaments</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-cyan-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/games" className="hover:text-cyan-400 transition">
                Games
              </Link>
            </li>
            <li>
              <Link to="/my-profile" className="hover:text-cyan-400 transition">
                My Profile
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-cyan-400 transition">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-cyan-400 transition">
                Register
              </Link>
            </li>
          </ul>
        </div>

        {/* Site Map / Resources */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:text-cyan-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-cyan-400 transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-cyan-400 transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-cyan-400 transition">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Connect</h3>
          <div className="flex space-x-4 mb-4 text-2xl">
            <Link to="#" className="hover:text-cyan-400 transition">
              🐦
            </Link>
            <Link to="#" className="hover:text-cyan-400 transition">
              📘
            </Link>
            <Link to="#" className="hover:text-cyan-400 transition">
              🎮
            </Link>
            <Link to="#" className="hover:text-cyan-400 transition">
              💬
            </Link>
          </div>
          <p className="text-gray-400 text-sm">
            Join 50k+ gamers — stay updated with news and tournaments!
          </p>
        </div>
      </div>

      <p className="text-center text-gray-500 text-sm mt-10">
        &copy; {new Date().getFullYear()} XPulse. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
