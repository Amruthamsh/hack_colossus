// App.js
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Sections/Hero";
import AboutPage from "./components/Sections/AboutUs"; // Import the AboutPage component
import TracksPage from "./components/Sections/TracksPage";
import Timeline from "./components/Sections/Timeline";
import Footer from "./components/Sections/Footer";
import Faq from "./components/Sections/Faq";
import Sponsors from "./components/Sections/Sponsors";
import StarsCanvas from "./components/StarBackground";
import BackToTopButton from "./components/BackToTopButton";
import ProgressBar from "./components/ProgressBar";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white relative z-10">
        <StarsCanvas />
        <ProgressBar />
        <div className="relative z-20">
          <Navbar />
          <Hero />
          <AboutPage />
          <TracksPage />
          <Timeline />
          <Sponsors />
          <Faq />
          <Footer />
          <BackToTopButton />
        </div>
      </div>
    </Router>
  );
};

export default App;
