

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8" id="about">
      <h1 className="text-4xl font-bold text-center mb-12">ABOUT US</h1>

      <div className="flex justify-between mb-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold">150+</h2>
          <p className="text-sm">ON-CAMPUS PARTICIPANTS</p>
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-bold">1560+</h2>
          <p className="text-sm">APPLICATION RECEIVED</p>
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-bold">1000+</h2>
          <p className="text-sm">REACH ON SOCIAL MEDIA</p>
        </div>
      </div>

      <p className="mb-8 text-center max-w-3xl mx-auto">
        Welcome to HackColossus, a premier 24-hour national-level hackathon
        hosted by Dr. Ambedkar Institute of Technology, Bengaluru. In
        collaboration with our esteemed tech clubs, GDSC Dr. AIT and Nanogram,
        we bring together the brightest minds from across the country to
        innovate and compete in both hardware and software tracks. Our event,
        scheduled for August 30-31, 2024, provides a dynamic platform for
        participants to showcase their skills, solve real-world problems, and
        collaborate with like-minded peers. With an exciting prize pool of up to
        1 lakh INR, HackColossus promises a thrilling and rewarding experience
        for all tech enthusiasts. Join us for an unforgettable journey of
        creativity, innovation, and excellence.
      </p>

      <div className="bg-white w-full h-64 flex items-center justify-center">
        <span className="text-gray-400">Image Placeholder</span>
      </div>
    </div>
  );
};

export default AboutPage;