import { useState } from 'react';
import { Link } from 'react-router-dom';
import drait from '../assets/dr_ait_logo.svg';
import gdsc from '../assets/gdsc_logo.svg';
import nglogo from '../assets/nglogo.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-[#271232] md:px-12 lg:px-16">
 <div className="flex items-center space-x-4">
 <img src={drait} alt="Dr Ait" className="h-12 w-13" />
<img src={gdsc} alt="GDSC" className="h-12 w-auto" />
<img src={nglogo} alt="nglogo" className="h-10 w-auto" style={{ borderRadius: '50%' }} />
  </div>
      <div className="hidden md:flex space-x-4">
  <Link to="/" className="text-purple-500 hover:text-pink-600 focus:text-pink-600">
    Home
  </Link>
  <Link to="/about" className="text-white hover:text-pink-600 focus:text-pink-600">
    About Us
  </Link>
  <Link to="/tracks" className="text-white hover:text-pink-600 focus:text-pink-600">
    Tracks
  </Link>
  <Link to="/timeline" className="text-white hover:text-pink-600 focus:text-pink-600">
    Timeline
  </Link>
  <Link to="/sponsors" className="text-white hover:text-pink-600 focus:text-pink-600">
    Sponsors
  </Link>
  <Link to="/faq" className="text-white hover:text-pink-600 focus:text-pink-600">
    FAQ
  </Link>
  
  <Link to="/contacts" className="text-white hover:text-pink-600 focus:text-pink-600">
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
