const Footer = () => {
  return (
    <footer className="bg-black py-12 mt-6">
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between space-y-6 lg:space-y-0">
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
            <p className="text-lg">30th and 31st Aug, 2024 | Friday-Saturday</p>
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
    </footer>
  );
};

export default Footer;
