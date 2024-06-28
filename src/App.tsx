import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage"; // Import the AboutPage component
import TracksPage from './components/TracksPage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/tracks" element={<TracksPage />} />
          {/* Add other routes as needed */}
        </Routes>
        <Footer />     
      </div>
    </Router>
  );
}

export default App;