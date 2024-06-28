import  { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-transparent md:px-12 lg:px-16">
      <div>
        <img src="/path-to-your-logo.png" alt="Logo" className="h-8 w-auto" />
      </div>
      <div
        className={`space-x-4 ${
          isOpen ? 'flex flex-col items-end space-y-4 mt-4 md:flex-row md:space-y-0' : 'hidden md:flex'
        }`}
      >
        <Link to="/" className="text-pink-500">
          Home
        </Link>
        <Link to="/about" className="hover:text-pink-500">
          About Us
        </Link>
        <Link to="/tracks" className="hover:text-pink-500">
          Tracks
        </Link>
        <Link to="/timeline" className="hover:text-pink-500">
          Timeline
        </Link>
        <Link to="/sponsors" className="hover:text-pink-500">
          Sponsors
        </Link>
        <Link to="/faq" className="hover:text-pink-500">
          FAQ
        </Link>
        <Link to="/teams" className="hover:text-pink-500">
          Teams
        </Link>
        <Link to="/contacts" className="hover:text-pink-500">
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
    </nav>
  );
};

export default Navbar;