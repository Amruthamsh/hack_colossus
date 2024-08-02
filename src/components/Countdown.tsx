import { useEffect, useState } from "react";

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

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | {}>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });
  return (
    <div>
      {Object.keys(timeLeft).length > 0 ? (
        <div className="flex justify-center mt-3 space-x-4">
          <div className="text-center">
            <div className="bg-purple-900 text-white font-bold rounded-lg p-4 size-15 lg:size-20">
              <span className="text-2xl lg:text-4xl">
                {timeLeft.hasOwnProperty("days") && (timeLeft as TimeLeft).days}
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
  );
};

export default Countdown;
