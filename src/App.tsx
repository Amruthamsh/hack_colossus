import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage"; // Import the AboutPage component
import TracksPage from "./components/TracksPage";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Sponsors from "./components/Sponsors";
import StarBackground from "./components/StarBackground";

import bg from "./assets/background.svg";
//from-[#4B0550] to-[#1F1933]
const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 to-purple-950 text-white">
        <Navbar />
        <Hero />
        <AboutPage />
        <TracksPage />
        <Timeline />
        <Sponsors />
        <Faq />

        <Footer />
        <Contact />
        <StarBackground />
      </div>
    </Router>
  );
};

export default App;
