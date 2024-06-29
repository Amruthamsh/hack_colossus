import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-[#271232] md:px-12 lg:px-16">
      <div>
        <img src="/path-to-your-logo.png" alt="Logo" className="h-8 w-auto" />
      </div>
      <div className="hidden md:flex space-x-4">
        <Link to="/" className="text-pink-500 hover:text-pink-700">
          Home
        </Link>
        <Link to="/about" className="text-pink-500 hover:text-pink-700">
          About Us
        </Link>
        <Link to="/tracks" className="text-pink-500 hover:text-pink-700">
          Tracks
        </Link>
        <Link to="/timeline" className="text-pink-500 hover:text-pink-700">
          Timeline
        </Link>
        <Link to="/sponsors" className="text-pink-500 hover:text-pink-700">
          Sponsors
        </Link>
        <Link to="/faq" className="text-pink-500 hover:text-pink-700">
          FAQ
        </Link>
        <Link to="/teams" className="text-pink-500 hover:text-pink-700">
          Teams
        </Link>
        <Link to="/contacts" className="text-pink-500 hover:text-pink-700">
          Contacts
        </Link>
      </div>
      <div className="md:hidden">
        <button className="focus:outline-none" onClick={toggleMenu}>
          <svg
            className="h-6 w-6 text-gray-500 hover:text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-[#271232] flex flex-col items-center justify-center z-50">
          <button className="absolute top-4 right-4 focus:outline-none" onClick={toggleMenu}>
            <svg
              className="h-6 w-6 text-gray-500 hover:text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex flex-col items-center space-y-4">
            <Link to="/" className="text-pink-500 text-lg" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/about" className="text-pink-500 text-lg" onClick={toggleMenu}>
              About Us
            </Link>
            <Link to="/tracks" className="text-pink-500 text-lg" onClick={toggleMenu}>
              Tracks
            </Link>
            <Link to="/timeline" className="text-pink-500 text-lg" onClick={toggleMenu}>
              Timeline
            </Link>
            <Link to="/sponsors" className="text-pink-500 text-lg" onClick={toggleMenu}>
              Sponsors
            </Link>
            <Link to="/faq" className="text-pink-500 text-lg" onClick={toggleMenu}>
              FAQ
            </Link>
            <Link to="/teams" className="text-pink-500 text-lg" onClick={toggleMenu}>
              Teams
            </Link>
            <Link to="/contacts" className="text-pink-500 text-lg" onClick={toggleMenu}>
              Contacts
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
