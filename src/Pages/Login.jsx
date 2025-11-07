import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#002d48] via-[#00385a] to-[#00738a]">
      <div className="w-full max-w-md bg-[#111A2B] rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-[#00FFC6] text-center mb-6">
          Login
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 rounded-lg bg-[#19273A] text-white focus:outline-none focus:ring-2 focus:ring-[#00A3FF]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-2 rounded-lg bg-[#19273A] text-white focus:outline-none focus:ring-2 focus:ring-[#00A3FF]"
            />
          </div>

          <button className="w-full py-2 mt-4 rounded-lg bg-gradient-to-r from-[#00A3FF] to-[#00FFC6] text-white font-bold hover:brightness-110 transition">
            Login
          </button>

          <button className="w-full py-2 mt-2 rounded-lg border border-[#00A3FF] text-[#00A3FF] font-bold hover:bg-[#00A3FF] hover:text-[#111A2B] transition flex items-center justify-center gap-2">
            {/* You can add a Google Icon here */}
            Login with Google
          </button>
        </form>

        <p className="mt-4 text-center text-gray-400">
          Don't have an account?
          <a href="/register" className="text-[#00FFC6] hover:underline ml-1">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
