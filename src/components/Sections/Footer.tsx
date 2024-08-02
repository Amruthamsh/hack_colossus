import { FaInstagram, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col bg-black">
      <div className="bg-black py-12 mt-6">
        <div className="mx-6 flex flex-col lg:flex-row lg:justify-between space-y-6 lg:space-y-0">
          <div className="flex items-center text-white">
            <svg
              className="w-12 h-12 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3M16 7V3M3 13h18M5 21h14M10 17h4"
              />
            </svg>
            <div>
              <h2 className="text-2xl font-bold">Date</h2>
              <p className="text-lg">
                30th and 31st Aug, 2024 | Friday-Saturday
              </p>
            </div>
          </div>

          <div className="flex items-center text-white">
            <svg
              className="w-12 h-12 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 20h5V9a2 2 0 00-2-2h-4l-4-4-4 4H4a2 2 0 00-2 2v11h5m0 0h6m-6 0V10h6v10z"
              />
            </svg>
            <div>
              <h2 className="text-2xl font-bold">Venue</h2>
              <p className="text-lg">
                Dr. Ambedkar Institute Of Technology, Bengaluru
              </p>
            </div>
          </div>

          <div className="flex items-center text-white">
            <svg
              className="w-12 h-12 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3M16 7V3M3 13h18M5 21h14M10 17h4"
              />
            </svg>
            <div>
              <h2 className="text-2xl font-bold">Challenge</h2>
              <p className="text-lg">Non-stop coding for 24 hours</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex items-center justify-center p-6 sm:p-10"
        id="contacts"
      >
        <div className="w-full max-w-4xl text-white">
          <h1 className="text-4xl font-bold mb-8 text-center text-white">
            Contact us
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h2 className="text-xl font-bold mb-4">Phone</h2>
              <p className="text-lg">
                Varun <span className="text-green-400 ml-2">+919353228225</span>
              </p>
              <p className="text-lg">
                Aniket{" "}
                <span className="text-green-400 ml-2">+917718411467</span>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Email</h2>
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
              <h2 className="text-xl font-bold mb-4">Social</h2>
              <div className="flex justify-start space-x-6 text-2xl ">
                <button
                  className="text-green-400 hover:text-purple-600"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/hackcolossus/",
                      "_blank"
                    )
                  }
                >
                  <FaInstagram />
                </button>
                <button
                  className="text-green-400 hover:text-purple-600"
                  onClick={() =>
                    window.open("https://x.com/hackcolossus", "_blank")
                  }
                >
                  <FaTwitter />
                </button>

                <button
                  className="text-green-400 hover:text-purple-600"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/company/hackcolossus",
                      "_blank"
                    )
                  }
                >
                  <FaLinkedin />
                </button>

                <button
                  className="text-green-400 hover:text-purple-600"
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/channel/UCP4VgBr2hBXLdGRY_kT6X-Q",
                      "_blank"
                    )
                  }
                >
                  <FaYoutube />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="flex items-center justify-center p-1">
        Made with ❤️ by Colossus Team
      </p>
    </div>
  );
};

export default Footer;
