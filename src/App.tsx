import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Legal from './components/Legal';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Contact />
    </>
  );
}

function App() {
  useEffect(() => {
    document.title = "SIONG'O Microfinance | Financial Solutions for Everyone";
  }, []);

  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;