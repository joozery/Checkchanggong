import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ReportScammer from './pages/ReportScammer';
import ScammerDetail from "./pages/ScammerDetail";
import TrustedDetailPage from './pages/TrustedDetailPage';


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<ReportScammer />} />
        <Route path="/scammer/:ref" element={<ScammerDetail />} />
        <Route path="/trusted/:id" element={<TrustedDetailPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
