import { FaInstagram, FaTumblr, FaPinterest, FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      className="flex items-center justify-center p-6 sm:p-10 bg-black"
      id="contacts"
    >
      <div className="w-full max-w-4xl text-white">
        <h1 className="text-xl font-bold mb-8 text-center text-white">
          CONTACT US
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Phone</h2>
            <p className="text-lg">
              Varun <span className="text-green-400 ml-2">+919353228225</span>
            </p>
            <p className="text-lg">
              Aniket <span className="text-green-400 ml-2">+917718411467</span>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Email</h2>
            <p className="text-lg">
              <a
                href="mailto:colossus@drait.edu.in"
                className="text-green-400 hover:underline"
              >
                colossus@drait.edu.in
              </a>
            </p>
            <p className="text-lg">
              <a
                href="mailto:hackcolossus@gmail.com"
                className="text-green-400 hover:underline"
              >
                hackcolossus@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Social</h2>
            <div className="flex justify-start space-x-6 text-2xl ">
              <a href="#" className="text-green-400 hover:text-pink-600">
                <FaInstagram />
              </a>
              <a href="#" className="text-green-400 hover:text-pink-600">
                <FaTumblr />
              </a>
              <a href="#" className="text-green-400 hover:text-pink-600">
                <FaPinterest />
              </a>
              <a href="#" className="text-green-400 hover:text-pink-600">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
