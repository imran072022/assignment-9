import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Contexts/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className="bg-[#19273A]/80 p-8 rounded-2xl shadow-lg w-full max-w-md text-white flex flex-col items-center gap-4">
        <img
          src={user.photoURL || "/default-avatar.png"}
          alt="Profile"
          className="w-24 h-24 rounded-full border-2 border-[#00FFC6]"
        />
        <h2 className="text-2xl font-bold">{user.displayName || "Gamer"}</h2>
        <p>Email: {user.email}</p>
        <p className="text-gray-300"></p>

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
