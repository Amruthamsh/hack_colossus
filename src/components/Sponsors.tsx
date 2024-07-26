const Sponsors = () => {
  return (
    <div
      className="flex flex-col items-center justify-center pt-24"
      id="sponsors"
    >
      <h1 className="text-4xl text-white font-bold mb-8">
        We are looking for Sponsors!
      </h1>
      {/* Example Sponsor Logos 
        <div className="bg-white p-4 rounded-lg flex items-center justify-center">
          <img
            src="/path-to-sponsor-logo1.png"
            alt="Sponsor Logo 1"
            className="h-12 w-auto"
          />
        </div>
        <div className="bg-white p-4 rounded-lg flex items-center justify-center">
          <img
            src="/path-to-sponsor-logo2.png"
            alt="Sponsor Logo 2"
            className="h-12 w-auto"
          />
        </div>
        <div className="bg-white p-4 rounded-lg flex items-center justify-center">
          <img
            src="/path-to-sponsor-logo3.png"
            alt="Sponsor Logo 3"
            className="h-12 w-auto"
          />
        </div>
        <div className="bg-white p-4 rounded-lg flex items-center justify-center">
          <img
            src="/path-to-sponsor-logo4.png"
            alt="Sponsor Logo 4"
            className="h-12 w-auto"
          />
        </div>
        Add more sponsors as needed */}
      <div className="text-center">
        <p className="text-2xl pb-2">If interested, please contact: </p>

        <p className="text-xl ">
          Varun Raj: <span className="text-green-400 ml-2">+919353228225</span>
        </p>
        <p className="text-xl">
          Aniket Rai: <span className="text-green-400 ml-2">+917718411467</span>
        </p>
      </div>
    </div>
  );
};

export default Sponsors;
