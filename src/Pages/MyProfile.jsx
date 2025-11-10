import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className=" my-24 flex justify-center items-center px-2.5">
      <title>My Profile</title>

      <div className="relative bg-[#19273A]/80 p-8 rounded-2xl shadow-lg w-full max-w-md text-white flex flex-col items-center gap-4">
        {/* 🔙 Back Button (Top Left) */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-sm text-gray-200 transition"
        >
          ← Back
        </button>

        <img
          src={user?.photoURL || "/default-avatar.png"}
          alt="Profile"
          className="w-24 h-24 rounded-full border-2 border-[#00FFC6] mt-8"
        />
        <h2 className="text-2xl font-bold">{user?.displayName || "Gamer"}</h2>
        <p>Email: {user?.email}</p>

        <Link
          to="/update-profile"
          className="mt-4 bg-gradient-to-r from-[#00A3FF] to-[#00FFC6] text-black cursor-pointer font-semibold py-2 px-6 rounded-lg hover:opacity-90 transition"
        >
          Update Information
        </Link>
      </div>
    </div>
  );
};

export default MyProfile;
