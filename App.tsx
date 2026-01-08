import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import ReferenceLinks from './components/ReferenceLinks';
import SOPGuide from './components/SOPGuide';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Navbar />
      <div className="flex flex-col">
        <Hero />
        <Portfolio />
        <ReferenceLinks />
        <SOPGuide />
      </div>
      <Footer />
    </div>
  );
}

export default App;
