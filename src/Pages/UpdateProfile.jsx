import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  const { updateProfileInfo } = useContext(AuthContext);
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const photoURL = e.target.photo.value;
    const displayName = e.target.name.value;
    updateProfileInfo(photoURL, displayName)
      .then(() => toast.success("Profile updated successfully."))
      .catch((error) => console.log(error));
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#002d48] via-[#00485e] to-[#00738a]">
      <div className="bg-[#19273A]/80 p-8 rounded-2xl shadow-lg w-full max-w-md text-white flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center mb-4">Update Profile</h2>

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
            className="mt-4 cursor-pointer bg-gradient-to-r from-[#00A3FF] to-[#00FFC6] text-black font-semibold py-2 rounded-lg hover:opacity-90 transition"
          >
            Update Information
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
