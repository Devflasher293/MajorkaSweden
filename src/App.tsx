import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import Testimonials from './components/Testimonials';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Contact from './components/Contact/Contact';
import AdminDashboard from './components/Contact/AdminDashboard';

function App() {
  // Simple check if we're on the admin route
  const isAdminRoute = window.location.hash === '#admin';

  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
          {isAdminRoute ? (
            <AdminDashboard />
          ) : (
            <>
              <Navigation />
              <Hero />
              <Services />
              <Gallery />
              <About />
              <Contact />
              <Testimonials />
              <Footer />
              <BackToTop />
            </>
          )}
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;