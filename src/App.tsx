// App.js
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
import StarsCanvas from "./components/StarBackground";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 to-purple-950 text-white relative z-10">
        <StarsCanvas />
        <div className="relative z-20">
          <Navbar />
          <Hero />
          <AboutPage />
          <TracksPage />
          <Timeline />
          <Sponsors />
          <Faq />
          <Footer />
          <Contact />
        </div>
      </div>
    </Router>
  );
};

export default App;
