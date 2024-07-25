import { HashLink as Link } from "react-router-hash-link";
import MobileNavbar from "./mobileNavbar";
import drait from "@/assets/dr_ait_logo.svg";
import gdsc from "@/assets/gdsc_logo.svg";
import nglogo from "@/assets/nglogo.png";
import { navLinks } from "@/constants";

const Navbar = () => {

  return (
    <div className="mx-3 flex justify-center">
      <nav className="fixed z-[60] mt-3 w-full max-w-6xl rounded-full border  border-white/30 bg-white/5 bg-clip-padding px-5 backdrop-blur-lg backdrop-filter sm:mt-5">
        <div className="flex h-16 items-center justify-between px-4">
          <Link
            to={"/#home"}
            className="flex items-center gap-3 font-semibold text-white"
          >
            <div className="flex items-center space-x-4 lg:w-30 lg:h-30">
              <img src={drait} alt="Dr Ait" className="h-12 w-13" />
              <img src={gdsc} alt="GDSC" className="h-12 w-auto" />
              <img
                src={nglogo}
                alt="nglogo"
                className="h-10 w-auto"
                style={{ borderRadius: "50%" }}
              />
            </div>
          </Link>

          <div className="hidden items-center space-x-8 lg:flex">
            {navLinks.map((link, index) => (
              <div key={index} className="group relative">
                <Link
                  to={link.url}
                  className={`text-white hover:text-gray-300`}
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
    // <nav className="flex justify-between items-center py-4 px-6 bg-[#271232] md:px-12 lg:px-16">
    //   <div className="flex items-center space-x-4">
    //     <img src={drait} alt="Dr Ait" className="h-12 w-13" />
    //     <img src={gdsc} alt="GDSC" className="h-12 w-auto" />
    //     <img
    //       src={nglogo}
    //       alt="nglogo"
    //       className="h-10 w-auto"
    //       style={{ borderRadius: "50%" }}
    //     />
    //   </div>
    //   <div className="hidden md:flex space-x-4">
    //     <Link
    //       to="/"
    //       className="text-white hover:text-pink-600 focus:text-pink-600"
    //     >
    //       Home
    //     </Link>
    //     <Link
    //       to="/about"
    //       className="text-white hover:text-pink-600 focus:text-pink-600"
    //     >
    //       About Us
    //     </Link>
    //     <Link
    //       to="/tracks"
    //       className="text-white hover:text-pink-600 focus:text-pink-600"
    //     >
    //       Tracks
    //     </Link>
    //     <Link
    //       to="/timeline"
    //       className="text-white hover:text-pink-600 focus:text-pink-600"
    //     >
    //       Timeline
    //     </Link>
    //     <Link
    //       to="/sponsors"
    //       className="text-white hover:text-pink-600 focus:text-pink-600"
    //     >
    //       Sponsors
    //     </Link>
    //     <Link
    //       to="/faq"
    //       className="text-white hover:text-pink-600 focus:text-pink-600"
    //     >
    //       FAQ
    //     </Link>

    //     <Link
    //       to="/contacts"
    //       className="text-white hover:text-pink-600 focus:text-pink-600"
    //     >
    //       Contacts
    //     </Link>
    //   </div>
    //   <div className="md:hidden">
    //     <button className="focus:outline-none" onClick={toggleMenu}>
    //       <svg
    //         className="h-6 w-6 text-gray-500 hover:text-pink-500"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth={2}
    //           d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
    //         />
    //       </svg>
    //     </button>
    //   </div>
    //   {isOpen && (
    //     <div className="fixed inset-0 bg-[#271232] flex flex-col items-center justify-center z-50">
    //       <button
    //         className="absolute top-4 right-4 focus:outline-none"
    //         onClick={toggleMenu}
    //       >
    //         <svg
    //           className="h-6 w-6 text-gray-500 hover:text-pink-500"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth={2}
    //             d="M6 18L18 6M6 6l12 12"
    //           />
    //         </svg>
    //       </button>
    //       <div className="flex flex-col items-center space-y-4">
    //         <Link to="/" className="text-pink-500 text-lg" onClick={toggleMenu}>
    //           Home
    //         </Link>
    //         <Link
    //           to="/about"
    //           className="text-pink-500 text-lg"
    //           onClick={toggleMenu}
    //         >
    //           About Us
    //         </Link>
    //         <Link
    //           to="/tracks"
    //           className="text-pink-500 text-lg"
    //           onClick={toggleMenu}
    //         >
    //           Tracks
    //         </Link>
    //         <Link
    //           to="/timeline"
    //           className="text-pink-500 text-lg"
    //           onClick={toggleMenu}
    //         >
    //           Timeline
    //         </Link>
    //         <Link
    //           to="/sponsors"
    //           className="text-pink-500 text-lg"
    //           onClick={toggleMenu}
    //         >
    //           Sponsors
    //         </Link>
    //         <Link
    //           to="/faq"
    //           className="text-pink-500 text-lg"
    //           onClick={toggleMenu}
    //         >
    //           FAQ
    //         </Link>
    //         <Link
    //           to="/contacts"
    //           className="text-pink-500 text-lg"
    //           onClick={toggleMenu}
    //         >
    //           Contacts
    //         </Link>
    //       </div>
    //     </div>
    //   )}
    // </nav>
  );
};

export default Navbar;
