import React, { useEffect, useState } from "react";
import hack_logo from "../assets/hackathon_logo2.svg";
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
        <h1 className="text-teal-400 text-lg lg:text-2xl pt-4">
          Coming soon...
        </h1>
        <h1 className="text-white text-xl lg:text-3xl pt-2">
          A 24 Hour National Level Hackathon
        </h1>
        {Object.keys(timeLeft).length > 0 ? (
          <div className="flex justify-center mt-3 space-x-4">
            <div className="text-center">
              <div className="bg-purple-900 text-white font-bold rounded-lg p-4 size-15 lg:size-20">
                <span className="text-2xl lg:text-4xl">
                  {timeLeft.hasOwnProperty("days") &&
                    (timeLeft as TimeLeft).days}
                </span>
              </div>
              <span className="block mt-2 text-md text-teal-400">Days</span>
            </div>
            <div className="text-center">
              <div className="bg-purple-900 text-white font-bold rounded-lg p-4 size-15 lg:size-20">
                <span className="text-2xl lg:text-4xl">
                  {timeLeft.hasOwnProperty("hours") &&
                    (timeLeft as TimeLeft).hours}
                </span>
              </div>
              <span className="block mt-2 text-md text-teal-400">Hours</span>
            </div>
            <div className="text-center">
              <div className="bg-purple-900 text-white font-bold rounded-lg p-4 size-15 lg:size-20">
                <span className="text-2xl lg:text-4xl">
                  {timeLeft.hasOwnProperty("minutes") &&
                    (timeLeft as TimeLeft).minutes}
                </span>
              </div>
              <span className="block mt-2 text-md text-teal-400">Minutes</span>
            </div>
            <div className="text-center">
              <div className="bg-purple-900 text-white font-bold rounded-lg p-4 size-15 lg:size-20">
                <span className="text-2xl lg:text-4xl">
                  {timeLeft.hasOwnProperty("seconds") &&
                    (timeLeft as TimeLeft).seconds}
                </span>
              </div>
              <span className="block mt-2 text-md text-teal-400">Seconds</span>
            </div>
          </div>
        ) : (
          <h2 className="text-2xl text-white">Time's up!</h2>
        )}
      </div>
      <div className="max-w-2xl mx-auto">
        <img
          src={hack_logo}
          alt="Hack Colossus Logo"
          className="mx-auto size-80 lg:size-96 h-auto mt-12 mb-4"
        />
        <h1 className="text-6xl font-bold leading-tight mb-4 text-white">
          COLOSSUS
        </h1>
        <h3 className="text-3xl leading-tight text-white">
          Time To Create History !!
        </h3>
        <div className="flex flex-col justify-center items-center mt-2">
          <p className="text-xl font-bold text-teal-400">
            Prize Pool: Upto Rs. 1 Lakh
          </p>
          <RegisterButton name="Register Now" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
