import { FaInstagram, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col bg-black">
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

export default Contact;
