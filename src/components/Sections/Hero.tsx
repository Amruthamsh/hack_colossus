import hack_logo from "../../assets/hackathon_logo2.svg";
import RegisterButton from "./../RegisterButton";
import Countdown from "../Countdown";

const Hero = () => {
  return (
    <div
      className="flex flex-col items-center justify-center text-center bg-cover bg-center relative"
      id="home"
    >
      <div className="mb-4 relative mt-20 z-10">
        <h1 className="text-white text-3xl pt-2">
          Dr. Ambedkar Institute of Technology
        </h1>
        <h1 className="text-white text-xl pt-2 text-nowrap">Presents</h1>
        <h1 className="text-teal-400 text-lg pt-4">
          A 24 Hour National Level Hackathon
        </h1>
        <Countdown />
      </div>
      <div className="max-w-2xl mx-auto my-12">
        <img
          src={hack_logo}
          alt="Hack Colossus Logo"
          className="mx-auto w-72 lg:w-96 h-auto mb-2"
        />
        <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-4 text-white">
          COLOSSUS
        </h1>
        <h3 className="text-3xl leading-tight text-white">
          Time To Create History !!
        </h3>
        <div className="flex flex-col justify-center items-center mt-2">
          <p className="text-xl font-bold text-teal-400">
            Prize Pool: Upto Rs. 1 Lakh
          </p>
          <RegisterButton name="Register Now" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
