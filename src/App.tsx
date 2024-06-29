import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage"; // Import the AboutPage component
import TracksPage from './components/TracksPage';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Faq from './components/Faq';


const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-[#4B0550] to-[#1F1933] text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/tracks" element={<TracksPage />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          {/* Add other routes as needed */}
        </Routes>
        <Footer />     
      </div>
    </Router>
  );
}

export default App;
