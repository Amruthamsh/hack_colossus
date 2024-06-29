
const Sponsors = () => {
  return (
    
    
    <div className="min-h-screen flex flex-col items-center justify-center ">
        

      <h1 className="text-4xl text-white font-bold mb-8">We are looking for Sponsors </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Example Sponsor Logos */}
        <div className="bg-white p-4 rounded-lg flex items-center justify-center">
          <img src="/path-to-sponsor-logo1.png" alt="Sponsor Logo 1" className="h-12 w-auto"/>
        </div>
        <div className="bg-white p-4 rounded-lg flex items-center justify-center">
          <img src="/path-to-sponsor-logo2.png" alt="Sponsor Logo 2" className="h-12 w-auto"/>
        </div>
        <div className="bg-white p-4 rounded-lg flex items-center justify-center">
          <img src="/path-to-sponsor-logo3.png" alt="Sponsor Logo 3" className="h-12 w-auto"/>
        </div>
        <div className="bg-white p-4 rounded-lg flex items-center justify-center">
          <img src="/path-to-sponsor-logo4.png" alt="Sponsor Logo 4" className="h-12 w-auto"/>
        </div>
        {/* Add more sponsors as needed */}
      </div>
    </div>
  );
};

export default Sponsors;