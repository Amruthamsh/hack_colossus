import React, { useEffect, useState } from 'react';
import hack_logo from "../assets/hackathon_logo.svg";
import bg from '../assets/background.svg';

// Define a type for the time left object
type TimeLeft = {
  days: number;
  hours: number;
};

const calculateTimeLeft = (): TimeLeft | {} => {
  const difference = +new Date(`08/30/${new Date().getFullYear()}`) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
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
    <header
    className="flex flex-col items-center justify-center min-h-screen text-center bg-cover bg-center relative"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg})`
    }}
  >
      <div className="mb-4">
        {Object.keys(timeLeft).length > 0 ? (
          <h2 className="text-2xl text-white">
            {timeLeft.hasOwnProperty('days') && (timeLeft as TimeLeft).days} days {timeLeft.hasOwnProperty('hours') && (timeLeft as TimeLeft).hours} hours remaining
          </h2>
        ) : (
          <h2 className="text-2xl text-white">Time's up!</h2>
        )}
      </div>
      <div className="max-w-2xl mx-auto">
        <img src={hack_logo} alt="Hack Colossus Logo" className="mx-auto mb-8" />
        <h1 className="text-6xl font-bold leading-tight mb-4 text-white">HACK-COLOSSUS</h1>
        <h3 className="text-3xl leading-tight text-white">Hack The Universe</h3>
        <div className="flex justify-center items-center mt-2">
  <p className="text-xl text-yellow-300">Prize Pool: 2 Lakhs</p>
  <button className="ml-4 px-6 py-2 bg-purple-800 text-white font-bold rounded hover:bg-purple-900 transition duration-300">Register Now</button>
</div>
      </div>
    </header>
  );
};

export default Hero;