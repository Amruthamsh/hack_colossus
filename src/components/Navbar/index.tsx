import { HashLink as Link } from "react-router-hash-link";
import MobileNavbar from "./mobileNavbar";
import drait from "@/assets/dr_ait_logo.svg";
import gdsc from "@/assets/gdsc_logo.svg";
import nglogo from "@/assets/nglogo.png";
import { navLinks } from "@/constants";

const Navbar = () => {
  return (
    <div className="mx-3 flex justify-center">
      <nav className="fixed z-[60] w-full bg-teal-800/80 bg-clip-padding px-5 py-2 backdrop-blur-lg backdrop-filter ">
        <div className="flex h-16 items-center justify-between px-4">
          <Link
            to={"/#home"}
            className="flex items-center gap-3 font-semibold text-white"
          >
            <div className="flex items-center space-x-4 lg:w-30 lg:h-30">
              <img src={drait} alt="Dr Ait" className="h-14 w-13" />
              <img src={gdsc} alt="GDSC" className="h-14 w-auto" />
              <img
                src={nglogo}
                alt="nglogo"
                className="h-12 w-auto"
                style={{ borderRadius: "50%" }}
              />
            </div>
          </Link>

          <div className="hidden items-center space-x-8 lg:flex">
            {navLinks.map((link, index) => (
              <div key={index} className="group relative">
                <Link
                  to={link.url}
                  className={`text-white text-xl hover:text-gray-300`}
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
