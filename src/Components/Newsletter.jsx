import React from "react";
import love from "../assets/love.png";
import sword from "../assets/sword.png";
import treasure from "../assets/treasure.png";
import diamond from "../assets/diamond.png";
const Newsletter = () => {
  return (
    <section className="relative py-20 px-4 text-gray-100 bg-[#111a2b] overflow-hidden">
      {/* Floating pixel/game icons */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={love}
          className="absolute top-10 left-10 w-6 animate-bounce-slow opacity-20"
        />
        <img
          src={treasure}
          className="absolute top-32 right-16 w-8 animate-bounce-slow opacity-15"
        />
        <img
          src={sword}
          className="absolute bottom-20 left-20 w-5 animate-bounce-slow opacity-10"
        />
        <img
          src={diamond}
          className="absolute bottom-10 right-32 w-7 animate-bounce-slow opacity-20"
        />
      </div>

      <div className="relative max-w-xl mx-auto text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Join the Gamehub Insider
        </h2>
        <p className="text-gray-300">
          Get indie game updates, developer stories & early-access perks
          delivered straight to your inbox.
        </p>

        <form className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Your email address"
            required
            className="input input-bordered w-full sm:flex-1 bg-gray-800/60 border-gray-700 text-gray-100 placeholder-gray-400 backdrop-blur-sm focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 font-semibold rounded-md text-white
                       bg-gradient-to-r from-[#00A3FF] to-[#00FFC6]
                       hover:from-[#00FFC6] hover:to-[#00A3FF]
                       hover:shadow-lg hover:shadow-cyan-500/70
                       animate-gradient-x transition-all duration-500"
          >
            Subscribe
          </button>
        </form>

        <p className="text-sm text-gray-400">No spam. Unsubscribe anytime.</p>
      </div>

      {/* Floating animation keyframes */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 6s infinite ease-in-out;
        }

        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s infinite linear;
        }
      `}</style>
    </section>
  );
};

export default Newsletter;
