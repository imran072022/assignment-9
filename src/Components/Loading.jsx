import React from "react";
import Lottie from "lottie-react";
import loader from "../assets/lotties/rocketLaunch.json";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#111A2B]">
      <Lottie animationData={loader} loop={true} style={{ width: 250 }} />
    </div>
  );
};

export default Loading;
