import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthProvider";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || "");
  const [sending, setSending] = useState(false);
  const navigate = useNavigate();
  const { forgotPassword } = useContext(AuthContext);

  const handleReset = (e) => {
    e.preventDefault();
    setSending(true);
    const email = e.target.email.value;
    forgotPassword(email)
      .then(() => {
        toast.success("Password reset email sent! Check your inbox.");
        setTimeout(() => {
          window.open("https://mail.google.com/", "_blank");
        }, 2000);
      })
      .catch(() => {})
      .finally(() => setSending(false));
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#002d48] via-[#00485e] to-[#00738a]">
      <title>Reset Password</title>
      <div className="bg-[#19273A]/80 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Reset Your Password
        </h2>
        <form onSubmit={handleReset} className="flex flex-col gap-4">
          <label className="text-gray-300 text-sm">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full bg-[#0E1B2A] text-white"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            disabled={sending}
            className="mt-4 cursor-pointer bg-gradient-to-r from-[#00A3FF] to-[#00FFC6] text-black font-semibold py-2 rounded-lg hover:opacity-90 transition"
          >
            {sending ? "Sending..." : "Reset Password"}
          </button>
        </form>

        <p
          className="text-center text-sm text-[#00FFC6] mt-6 cursor-pointer hover:underline"
          onClick={() => navigate("/login")}
        >
          Back to Login
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
