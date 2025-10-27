import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-slate-900">RankUp</p>
            <p className="text-xs text-slate-600">© {new Date().getFullYear()} RankUp Technologies. All rights reserved.</p>
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-700">
            <a href="#tests" className="hover:text-slate-900">Mock Tests</a>
            <a href="#leaderboard" className="hover:text-slate-900">Leaderboard</a>
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
