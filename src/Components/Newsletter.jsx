import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-gray-900 text-gray-100 py-16 px-4">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold text-white">
          Join the Gamehub Insider
        </h2>
        <p className="text-gray-400">
          Get indie game updates, developer stories & early-access perks
          delivered straight to your inbox.
        </p>

        <form className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Your email address"
            required
            className="input input-bordered w-full sm:flex-1 bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400"
          />
          <button type="submit" className="btn btn-primary w-full sm:w-auto">
            Subscribe
          </button>
        </form>

        <p className="text-sm text-gray-500">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
};

export default Newsletter;
