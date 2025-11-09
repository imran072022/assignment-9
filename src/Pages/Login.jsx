import React, { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
import Loading from "../Components/Loading";
const Login = () => {
  const [email, setEmail] = useState("");
  const { signIn, setUser, googleSignIn, loading } = useContext(AuthContext);
  const location = useLocation();
  const redirectFrom = location.state?.from;
  const message = location.state?.message;
  const navigate = useNavigate();
  if (loading) return <Loading></Loading>;
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    /*Email/Pass sign in */
    signIn(email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        navigate(`${location.state ? location.state : "/"}`);
        console.log(userCredential.user);
      })
      .catch((error) => console.log(error));
  };
  /*Google sign in */
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((userCredential) => {
        setUser(userCredential.user);
        navigate("/");
        console.log(userCredential.user);
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#002d48] via-[#00385a] to-[#00738a]">
      <title>XPulse | Login Now</title>

      <div className="w-full max-w-md bg-[#111A2B] rounded-2xl shadow-2xl p-8">
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 p-2 bg-yellow-400 text-black rounded-md text-center font-semibold"
          >
            {message}
          </motion.div>
        )}
        <h2 className="text-3xl font-bold text-[#00FFC6] text-center mb-6">
          Login
        </h2>

        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-semibold text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              name="password"
              className="w-full px-4 py-2 mt-2 rounded-lg bg-[#19273A] text-white focus:outline-none focus:ring-2 focus:ring-[#00A3FF]"
            />
          </div>
          <Link
            to="/forgot-password"
            state={{ email }}
            className="text-[#00FFC6] hover:underline mb-1.5 ml-1 inline-block"
          >
            Forget Password?
          </Link>
          <button className="w-full cursor-pointer py-2 rounded-lg font-bold btn-gradient-animate hover:brightness-110 transition-all">
            Login
          </button>

          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="w-full py-2 cursor-pointer  rounded-lg border border-[#00A3FF] text-[#00A3FF] font-bold hover:bg-[#00A3FF] hover:text-[#111A2B] transition flex items-center justify-center gap-2"
          >
            {/* You can add a Google Icon here */}
            <FcGoogle className="w-6 h-6" /> Continue with Google
          </button>
        </form>

        <p className="mt-4 text-center text-gray-400">
          Don't have an account?
          <Link to="/register" className="text-[#00FFC6] hover:underline ml-1">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
