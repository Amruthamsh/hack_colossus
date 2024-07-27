import { HashLink as Link } from "react-router-hash-link";
import MobileNavbar from "./mobileNavbar";
import drait from "@/assets/dr_ait_logo.svg";
import gdsc from "@/assets/gdsc_logo.svg";
import nglogo from "@/assets/nglogo.png";
import { navLinks } from "@/constants";

const Navbar = () => {
  return (
    <div className="mx-3 flex justify-center">
      <nav className="fixed z-[60] w-full bg-teal-700/60 bg-clip-padding px-5 py-2 backdrop-blur-lg backdrop-filter ">
        <div className="flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-4 lg:w-30 lg:h-30">
            <a
              href="https://www.drait.edu.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={drait} alt="Dr Ait" className="h-14 w-13" />
            </a>
            <a
              href="https://gdsc.rocks"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gdsc} alt="GDSC" className="h-14 w-auto" />
            </a>
            <a
              href="https://nanogramhub.wixsite.com/club"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={nglogo}
                alt="nglogo"
                className="h-12 w-auto"
                style={{ borderRadius: "50%" }}
              />
            </a>
          </div>

          <div className="hidden items-center space-x-8 lg:flex">
            {navLinks.map((link, index) => (
              <div key={index} className="group relative">
                <Link
                  to={link.url}
                  className="text-white text-xl hover:text-gray-300"
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
