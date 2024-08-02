import { useState, useEffect } from "react";

const ProgressBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollPosition(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-12 sm:top-16 left-0 w-full bg-teal-700 h-1 sm:h-1.5 z-50">
      <div
        className="h-full bg-purple-500 transition-all duration-300"
        style={{ width: `${scrollPosition}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
