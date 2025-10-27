import React from 'react';

const features = [
  {
    title: 'Mock Test Engine',
    desc: 'Timed MCQs, autosave every 15s, subject/topic-wise tests with auto-submit and proctoring.',
  },
  {
    title: 'Leaderboards & Ranks',
    desc: 'Percentile-based All India Rank with filters by batch, state, and date ranges.',
  },
  {
    title: 'AI-lite Proctoring',
    desc: 'Tab-switch detection, optional snapshots, audio anomaly flags, and admin escalation.',
  },
  {
    title: 'Deep Analytics',
    desc: 'Subject/topic accuracy, time per question, trends, and parent-friendly insights.',
  },
  {
    title: 'Payments & Subscriptions',
    desc: 'Razorpay integration, free and paid tiers, GST invoices, institute bulk licensing.',
  },
  {
    title: 'Built to Scale',
    desc: 'PostgreSQL + Redis caching, WebSocket live updates, PWA + Expo wrapper, Sentry monitoring.',
  },
];

const FeaturesGrid = () => {
  return (
    <section id="tests" className="w-full py-12 md:py-16 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Why RankUp</h2>
          <p className="mt-2 text-slate-600">Designed for high-stakes exams with performance, compliance, and delightful UX.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-slate-200 bg-white p-5 hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
