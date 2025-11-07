import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import { AuthContext } from "../Contexts/AuthProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  return (
    <nav className="bg-[#19273A] shadow-sm px-4 py-2">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo + Site Name */}
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
              className="h-7 w-7"
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

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-5 text-white">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium text-base ${
                  isActive ? "text-[#00A3FF]" : "text-white"
                }`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/games"
              className={({ isActive }) =>
                `font-medium text-base ${
                  isActive ? "text-[#00A3FF]" : "text-white"
                }`
              }
            >
              Games
            </NavLink>
          </li>

          {/* Conditional auth links */}
          {!user ? (
            <>
              <li>
                <NavLink
                  to="/login"
                  className="bg-gradient-to-r from-[#00A3FF] to-[#00FFC6] px-6 py-2 rounded-md text-white font-medium hover:scale-105 transition-transform"
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className="bg-gradient-to-r from-[#00A3FF] to-[#00FFC6] px-6 py-2 rounded-md text-white font-medium hover:scale-105 transition-transform"
                >
                  Register
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <button
                  onClick={logOut}
                  className="bg-gradient-to-r from-[#00A3FF] to-[#00FFC6] px-6 py-2 rounded-md text-white font-medium hover:scale-105 transition-transform"
                >
                  Sign Out
                </button>
              </li>
              <li>
                <Link to="/profile">
                  <img
                    src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                    alt="Profile"
                    className="w-10 h-10 rounded-full border-2 border-[#00FFC6]"
                  />
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <ul className="flex flex-col gap-3 mt-3 text-white lg:hidden bg-[#1E314B] p-4 rounded-md">
          {user && (
            <li className="flex justify-center mb-2">
              <Link to="/profile" onClick={() => setIsOpen(false)}>
                <img
                  src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                  alt="Profile"
                  className="w-16 h-16 rounded-full border-2 border-[#00FFC6]"
                />
              </Link>
            </li>
          )}

          <li>
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `font-medium text-base block text-center ${
                  isActive ? "text-[#00A3FF]" : "text-white"
                }`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/games"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `font-medium text-base block text-center ${
                  isActive ? "text-[#00A3FF]" : "text-white"
                }`
              }
            >
              Games
            </NavLink>
          </li>

          {!user ? (
            <>
              <li>
                <NavLink
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="bg-gradient-to-r from-[#00A3FF] to-[#00FFC6] px-6 py-2 rounded-md text-white font-medium hover:scale-105 transition-transform block text-center"
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="bg-gradient-to-r from-[#00A3FF] to-[#00FFC6] px-6 py-2 rounded-md text-white font-medium hover:scale-105 transition-transform block text-center"
                >
                  Register
                </NavLink>
              </li>
            </>
          ) : (
            <li>
              <button
                onClick={() => {
                  logOut();
                  setIsOpen(false);
                }}
                className="bg-gradient-to-r from-[#00A3FF] to-[#00FFC6] px-6 py-2 rounded-md text-white font-medium hover:scale-105 transition-transform block text-center cursor-pointer w-full"
              >
                Sign Out
              </button>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
