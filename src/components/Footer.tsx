const Footer = () => {
  return (
    <footer className="bg-[#271232] py-16">
      <div className="container mx-auto flex flex-col justify-between items-center space-y-4">
        <div className="flex flex-col items-center">
          <svg
            className="w-8 h-8 mb-2"
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
            <h2 className="text-xl font-bold">Date</h2>
            <p>30th Aug, 2024 | Friday</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <svg
            className="w-8 h-8 mb-2"
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
            <h2 className="text-xl font-bold">Venue</h2>
            <p>Dr. Amebedkar Institute Of Technology</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <svg
            className="w-8 h-8 mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.75 15.75l-3-3 3-3m-3 3h10.5m-10.5 0H9a9 9 0 0118 0v3a9 9 0 01-18 0v-3z"
            />
          </svg>
          <div>
            <h2 className="text-xl font-bold">Challenge</h2>
            <p>Non stop coding for 24 hours</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;