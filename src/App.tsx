import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ToastProvider } from './components/ui/toast-provider';
import { trackPageView } from './lib/api';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import CompanyRegistration from './pages/services/CompanyRegistration';
import LLPRegistration from './pages/services/LLPRegistration';
import GSTServices from './pages/services/GSTServices';
import IncomeTaxServices from './pages/services/IncomeTaxServices';
import MSMEServices from './pages/services/MSMEServices';
import PartnershipServices from './pages/services/PartnershipServices';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import About from './pages/About';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';

// Analytics component to track page views
const Analytics: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Only track page views for non-admin routes
    if (!location.pathname.startsWith('/admin')) {
      trackPageView(location.pathname);
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <ToastProvider />
        <Analytics />
        
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          
          {/* Public Routes */}
          <Route path="/*" element={
            <>
              <Header />
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/services/company-registration" element={<CompanyRegistration />} />
                  <Route path="/services/llp-registration" element={<LLPRegistration />} />
                  <Route path="/services/gst-services" element={<GSTServices />} />
                  <Route path="/services/income-tax" element={<IncomeTaxServices />} />
                  <Route path="/services/msme-services" element={<MSMEServices />} />
                  <Route path="/services/partnership-proprietorship" element={<PartnershipServices />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/about" element={<About />} />
                </Routes>
              </AnimatePresence>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;