import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Workshops from './pages/Workshops';
import Performances from './pages/Performances';
import Instructors from './pages/Instructors';
import Contact from './pages/Contact';
import Membership from './pages/Membership';
import Dashboard from './pages/Dashboard';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-dark text-light overflow-x-hidden">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/performances" element={<Performances />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
