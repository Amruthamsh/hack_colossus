import React, { useEffect, useState } from "react";
import hack_logo from "../assets/hackathon_logo.svg";
import bg from "../assets/background.svg";
import { FaClock } from "react-icons/fa";
import RegisterButton from "./RegisterButton";

// Define a type for the time left object
type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const calculateTimeLeft = (): TimeLeft | {} => {
  const difference =
    +new Date(`08/30/${new Date().getFullYear()}`) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | {}>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div
      className="flex flex-col items-center justify-center text-center bg-cover bg-center relative"
      id="home"
    >
      <div className="mb-4 relative mt-24 z-10">
        {Object.keys(timeLeft).length > 0 ? (
          <h2 className="text-xl md:text-2xl mt-3 rounded-lg text-white font-bold bg-purple-900 inline-flex items-center mx-2 p-3 px-6">
            <FaClock className="h-10 w-10 mr-2 text-white" />
            {timeLeft.hasOwnProperty("days") &&
              (timeLeft as TimeLeft).days}{" "}
            days{" "}
            {timeLeft.hasOwnProperty("hours") && (timeLeft as TimeLeft).hours}{" "}
            hours{" "}
            {timeLeft.hasOwnProperty("minutes") &&
              (timeLeft as TimeLeft).minutes}{" "}
            minutes{" "}
            {timeLeft.hasOwnProperty("seconds") &&
              (timeLeft as TimeLeft).seconds}{" "}
            seconds remaining
          </h2>
        ) : (
          <h2 className="text-2xl text-white">Time's up!</h2>
        )}
      </div>
      <div className="max-w-2xl mx-auto">
        <img
          src={hack_logo}
          alt="Hack Colossus Logo"
          className="mx-auto mb-2"
        />
        <h1 className="text-6xl font-bold leading-tight mb-4 text-white">
          HACK COLOSSUS
        </h1>
        <h3 className="text-3xl leading-tight text-white">
          Time To Create History !!
        </h3>
        <div className="flex flex-col justify-center items-center mt-2">
          <p className="text-xl font-bold text-teal-400">
            Prize Pool: Upto Rs. 1 Lakh
          </p>
          <RegisterButton />
        </div>
      </div>
    </div>
  );
};

export default Hero;
