import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Componats/Sidebar.jsx';
import Home from './Padges/Home.jsx';
import TenantDashboard from './Padges/TenantDashboard.jsx';
import OfficeRental from './Padges/OfficeRental.jsx';
import StudioRental from './Padges/StudioRental.jsx';
import ContactUs from './Padges/ContactUs.jsx';
import Footer from './Componats/Footer.jsx';
import TransitionWrapper from './Componats/PageTransition.js'; // استيراد مكون الانتقال

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Sidebar />
        <div className="flex-1 p-4 ml-64">
          <Routes>
            <Route path="/" element={<TransitionWrapper><Home /></TransitionWrapper>} />
            <Route path="/tenant-dashboard" element={<TransitionWrapper><TenantDashboard /></TransitionWrapper>} />
            <Route path="/office-rental" element={<TransitionWrapper><OfficeRental /></TransitionWrapper>} />
            <Route path="/studio-rental" element={<TransitionWrapper><StudioRental /></TransitionWrapper>} />
            <Route path="/contact-us" element={<TransitionWrapper><ContactUs /></TransitionWrapper>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
