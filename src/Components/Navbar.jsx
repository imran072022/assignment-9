import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navlinks = [
    { name: "Home", to: "/" },
    { name: "Games", to: "/games" },
    { name: "Login", to: "/login" },
    { name: "Register", to: "/register" },
  ];

  return (
    <nav className="bg-[#19273A] shadow-sm px-4 py-2">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Link to="/">
            <img className="w-12 h-12" src={logo} alt="logo" />
          </Link>
          <Link to="/" className="text-white orbitron font-semibold text-2xl">
            XPulse
          </Link>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-4 text-white">
          {navlinks.map((link) => {
            const isButton = link.name === "Login" || link.name === "Register";
            return isButton ? (
              <NavLink
                key={link.name}
                to={link.to}
                className="bg-gradient-to-r from-[#00A3FF] to-[#00FFC6] px-6 py-2 rounded-md text-white font-medium hover:scale-105 transition-transform"
              >
                {link.name}
              </NavLink>
            ) : (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `font-medium text-base ${
                    isActive ? "text-[#00A3FF]" : "text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            );
          })}
        </ul>
      </div>

      {/* Mobile nav links */}
      {isOpen && (
        <ul className="flex flex-col gap-2 mt-2 text-white lg:hidden bg-[#1E314B] p-4 rounded-md">
          {navlinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) =>
                `font-medium text-base ${
                  isActive ? "text-[#00A3FF]" : "text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
