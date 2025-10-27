import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturesGrid from './components/FeaturesGrid';
import LeaderboardPreview from './components/LeaderboardPreview';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <HeroSection />
      <main className="flex-1">
        <FeaturesGrid />
        <LeaderboardPreview />
      </main>
      <Footer />
    </div>
  );
}

export default App;
