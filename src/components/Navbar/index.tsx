import { HashLink as Link } from "react-router-hash-link";
import MobileNavbar from "./mobileNavbar";
import drait from "@/assets/dr_ait_logo.svg";
import gdsc from "@/assets/gdsc_logo.svg";
import nglogo from "@/assets/nglogo.png";
import { navLinks } from "@/constants";

const Navbar = () => {
  return (
    <div className="mx-3 flex justify-center">
      <nav className="fixed z-[60] w-full bg-gray-800/80 bg-clip-padding px-1 lg:px-5 py-2 backdrop-blur-lg backdrop-filter ">
        <div className="flex h-9 sm:h-12 items-center justify-between">
          <div className="flex items-center space-x-2 lg:w-30 lg:h-30">
            <a
              href="https://www.drait.edu.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={drait}
                alt="Dr Ait"
                className="h-10 w-10 sm:h-14 sm:w-14"
              />
            </a>
            <h3 className="hidden sm:inline sm:text-xl md:text-2xl lg:text-2xl xl:3xl text-blue-500 font-semibold text-nowrap">
              Dr. Ambedkar Institute of Technology
            </h3>

            <a
              href="https://gdsc.rocks"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gdsc} alt="GDSC" className="h-10 w-auto sm:hidden" />
            </a>
            <a
              href="https://nanogramhub.wixsite.com/club"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={nglogo}
                alt="nglogo"
                className="h-9 w-auto sm:hidden"
                style={{ borderRadius: "50%" }}
              />
            </a>
          </div>

          <div className="hidden items-center space-x-4 lg:flex">
            {navLinks.map((link, index) => (
              <div key={index} className="group relative">
                <Link
                  to={link.url}
                  className="text-white text-lg hover:text-gray-300"
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </nav>
      <MobileNavbar />
    </div>
  );
};

export default Navbar;
