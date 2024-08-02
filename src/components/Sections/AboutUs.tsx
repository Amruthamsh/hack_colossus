import collegePhoto from "../../assets/collegeFinal.jpeg";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 pt-24" id="about">
      <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>

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
          <h2 className="text-4xl font-bold">5000+</h2>
          <p className="text-sm">REACH ON SOCIAL MEDIA</p>
        </div>
      </div>
      <div className="mb-8 max-w-4xl mx-auto text-xl space-y-6 text-center">
        <ul className=" list-inside space-y-4 text-left ">
          <li className="relative pl-6">
            <span className="absolute -left-2 -top-3 text-5xl">•</span>
            <span>
              Welcome to HackColossus, a premier 24-hour national-level
              hackathon hosted by Dr. Ambedkar Institute of Technology,
              Bengaluru.
            </span>
          </li>
          <li className="relative pl-6">
            <span className="absolute -left-2 -top-3 text-5xl">•</span>
            <span>
              In collaboration with our esteemed tech clubs, GDSC Dr. AIT and
              Nanogram - The Tech Hub, we bring together the brightest minds
              from across the country to innovate and compete in both hardware
              and software tracks.
            </span>
          </li>
          <li className="relative pl-6">
            <span className="absolute -left-2 -top-3 text-5xl">•</span>
            <span>
              Our event, scheduled for August 30-31, 2024, provides a dynamic
              platform for participants to showcase their skills, solve
              real-world problems, and collaborate with like-minded peers.
            </span>
          </li>
          <li className="relative pl-6">
            <span className="absolute -left-2 -top-3 text-5xl">•</span>
            <span>
              With an exciting prize pool of up to 1 lakh INR, HackColossus
              promises a thrilling and rewarding experience for all tech
              enthusiasts. Join us for an unforgettable journey of creativity,
              innovation, and excellence.
            </span>
          </li>
        </ul>
      </div>

      <img
        src={collegePhoto}
        className="w-full h-auto object-cover rounded-lg"
        alt="Hack Colossus Logo"
      />
    </div>
  );
};

export default AboutUs;
