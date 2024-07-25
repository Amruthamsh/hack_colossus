import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage"; // Import the AboutPage component
import TracksPage from './components/TracksPage';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Faq from './components/Faq';
import Sponsors from './components/Sponsors';


const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-[#4B0550] to-[#1F1933] text-white">
        <Navbar/>
        <Hero />
        <AboutPage />
        <TracksPage />
        <Timeline />
        <Sponsors />
        <Faq />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
