import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Approach from './pages/Approach';
import About from './pages/About';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYou';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions.html" element={<Solutions />} />
          <Route path="/approach.html" element={<Approach />} />
          <Route path="/about.html" element={<About />} />
          <Route path="/contact.html" element={<Contact />} />
          <Route path="/thank-you.html" element={<ThankYou />} />
          {/* Also support clean URLs for modern SPAs */}
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;