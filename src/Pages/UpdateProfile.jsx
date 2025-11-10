import React, { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const UpdateProfile = () => {
  const { updateProfileInfo, user, setUser } = useContext(AuthContext);
  const [updating, setUpdating] = useState(false);
  const navigate = useNavigate();

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const photoURL = e.target.photo.value;
    const displayName = e.target.name.value;
    setUpdating(true);
    updateProfileInfo(photoURL, displayName)
      .then(() => {
        setUser({ ...user, photoURL, displayName });
        setUpdating(false);
        toast.success("Profile updated successfully.");
      })
      .catch(() => {});
  };

  return (
    <div className="px-2.5 my-24 flex justify-center items-center ">
      <title>Update Profile</title>
      <div className="relative bg-[#19273A]/80 p-8 rounded-2xl shadow-lg w-full max-w-md text-white flex flex-col gap-4">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-sm text-gray-200 transition"
        >
          ← Back
        </button>
        <h2 className="text-2xl font-bold text-center mb-4 mt-8">
          Update Profile
        </h2>
        <form className="flex flex-col gap-4" onSubmit={handleUpdateProfile}>
          <label className="text-gray-300 text-sm">Photo URL</label>
          <input
            type="text"
            placeholder="Enter new photo URL"
            name="photo"
            className="input input-bordered w-full bg-[#0E1B2A] text-white"
          />
          <label className="text-gray-300 text-sm">Name</label>
          <input
            type="text"
            placeholder="Enter new display name"
            name="name"
            className="input input-bordered w-full bg-[#0E1B2A] text-white"
          />
          <button
            type="submit"
            disabled={updating}
            className="mt-4 cursor-pointer bg-gradient-to-r from-[#00A3FF] to-[#00FFC6] text-black font-semibold py-2 rounded-lg hover:opacity-90 transition"
          >
            {updating ? "Updating..." : "Update Information"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
