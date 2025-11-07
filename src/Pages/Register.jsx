import React, { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";
const Register = () => {
  const { signUp, setUser, googleSignIn } = useContext(AuthContext);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  /* Password Validation */
  /*Keep password rules in an object */
  const passwordRules = {
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    length: password.length >= 8,
  };
  const allValid = Object.values(passwordRules).every(Boolean);
  const showRules = password.length > 0 && !allValid;

  const handleRegister = (e) => {
    setError("");
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;

    if (!allValid) {
      toast.error("Password doesn't meet all requirements");
      return;
    }

    console.log(name, photo, email, password);
    signUp(email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        navigate("/");
        console.log(userCredential.user);
      })
      .catch((error) => setError(error.message));
  };

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
      <div className="w-full max-w-md bg-[#111A2B] rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-[#00FFC6] text-center mb-6">
          Register
        </h2>

        <form className="space-y-4" onSubmit={handleRegister}>
          <div>
            <label className="block text-sm font-semibold text-gray-300">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              className="w-full px-4 py-2 mt-2 rounded-lg bg-[#19273A] text-white focus:outline-none focus:ring-2 focus:ring-[#00A3FF]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className="w-full px-4 py-2 mt-2 rounded-lg bg-[#19273A] text-white focus:outline-none focus:ring-2 focus:ring-[#00A3FF]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300">
              Photo URL
            </label>
            <input
              type="text"
              placeholder="Enter your photo URL"
              name="photo"
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
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-2 rounded-lg bg-[#19273A] text-white focus:outline-none focus:ring-2 focus:ring-[#00A3FF]"
            />
            <div className="mt-1 text-xs">
              {showRules && (
                <>
                  <p
                    className={
                      passwordRules.uppercase
                        ? "text-green-400"
                        : "text-red-400"
                    }
                  >
                    • Must include uppercase
                  </p>
                  <p
                    className={
                      passwordRules.lowercase
                        ? "text-green-400"
                        : "text-red-400"
                    }
                  >
                    • Must include lowercase
                  </p>
                  <p
                    className={
                      passwordRules.number ? "text-green-400" : "text-red-400"
                    }
                  >
                    • Must include number
                  </p>
                  <p
                    className={
                      passwordRules.special ? "text-green-400" : "text-red-400"
                    }
                  >
                    • Must include special character
                  </p>
                  <p
                    className={
                      passwordRules.length ? "text-green-400" : "text-red-400"
                    }
                  >
                    • Must be at least 8 characters
                  </p>
                </>
              )}
            </div>

            {error && <p className="text-sm text-red-400 mt-1">{error}</p>}
          </div>

          <button className="w-full cursor-pointer py-2 mt-4 rounded-lg bg-gradient-to-r from-[#00A3FF] to-[#00FFC6]  font-bold hover:brightness-110 transition">
            Register
          </button>

          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="w-full cursor-pointer py-2 mt-2 rounded-lg border border-[#00A3FF] text-[#00A3FF] font-bold hover:bg-[#00A3FF] hover:text-[#111A2B] transition flex items-center justify-center gap-2"
          >
            <FcGoogle className="w-6 h-6" /> Continue with Google
          </button>
        </form>

        <p className="mt-4 text-center text-gray-400">
          Already have an account?
          <a href="/login" className="text-[#00FFC6] hover:underline ml-1">
            Login
          </a>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
