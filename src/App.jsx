import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import Programs from './pages/Programs';

function App() {
  return (
    <Router basename="/espacio-educa-web">
      <div className="flex flex-col min-h-screen bg-brand-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/programs" element={<Programs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;