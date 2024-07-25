import { FaInstagram, FaTumblr, FaPinterest, FaFacebook } from 'react-icons/fa';
import bg from '../assets/background.svg';

const Contact = () => {
  return (
    <div
      className="bg-gradient-to-b min-h-screen flex items-center justify-center p-6 sm:p-10"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg})`,
      }}
      id="contacts"
    >
      <div className="w-full max-w-4xl text-white">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8">CONTACT US</h1>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Phone</h2>
          <p className="text-lg">
            Varun <span className="text-pink-400 ml-2">+919353228225</span>
          </p>
          <p className="text-lg">
            Aniket <span className="text-pink-400 ml-2">+917718411467</span>
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Email</h2>
          <p className="text-lg">
            <a
              href="mailto:colossus@drait.edu.in"
              className="text-pink-400 hover:underline"
            >
              colossus@drait.edu.in
            </a>
          </p>
          <p className="text-lg">
            <a
              href="mailto:hackcolossus@gmail.com"
              className="text-pink-400 hover:underline"
            >
              hackcolossus@gmail.com
            </a>
          </p>
        </div>

        <div className="">
          <h2 className="text-xl font-semibold mb-4">Social</h2>
          <div className="inline-flex space-x-4 text-2xl border-2 border-white p-3">
            <a href="#" className="text-pink-400 hover:text-pink-600">
              <FaInstagram />
            </a>
            <a href="#" className="text-pink-400 hover:text-pink-600">
              <FaTumblr />
            </a>
            <a href="#" className="text-pink-400 hover:text-pink-600">
              <FaPinterest />
            </a>
            <a href="#" className="text-pink-400 hover:text-pink-600">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
