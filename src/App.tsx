import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FlightsPage from './pages/FlightsPage';
import ServicesPage from './pages/ServicesPage';
import ParkingPage from './pages/ParkingPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import AirlinesPage from './pages/AirlinesPage';
import ManagementPage from './pages/ManagementPage';
import VisitorsPage from './pages/VisitorsPage';
import FeedbackPage from './pages/FeedbackPage';
import LinksPage from './pages/LinksPage';
import AdminPage from './pages/admin/AdminPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="flex">
        <Navbar />
        <main className="flex-1 ml-64">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flights" element={<FlightsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/parking" element={<ParkingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/airlines" element={<AirlinesPage />} />
            <Route path="/management" element={<ManagementPage />} />
            <Route path="/visitors" element={<VisitorsPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/links" element={<LinksPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;