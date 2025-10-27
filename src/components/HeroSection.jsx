import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[75vh] md:min-h-[82vh] overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-12 md:py-16">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            RankUp — AI-powered Mock Tests, Leaderboards, and Analytics
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-slate-700">
            For NEET & JEE aspirants and coaching institutes. Take timed MCQ tests, get All India Ranks, proctoring insights, and real-time analytics.
          </p>
          <div className="mt-6 md:mt-8 flex flex-wrap gap-3">
            <a href="#tests" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-blue-700 transition">
              Take a Demo Test
            </a>
            <a href="#leaderboard" className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-slate-800 font-semibold hover:bg-slate-50 transition">
              View Leaderboard
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-xs md:text-sm text-slate-600">
            <span>NEET • JEE Main • JEE Advanced</span>
            <span className="h-1 w-1 rounded-full bg-slate-400" />
            <span>PWA + Mobile App (Expo)</span>
            <span className="h-1 w-1 rounded-full bg-slate-400" />
            <span>Razorpay Payments</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
