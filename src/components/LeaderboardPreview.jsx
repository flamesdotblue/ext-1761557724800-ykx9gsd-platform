import React from 'react';

const sampleRows = [
  { rank: 1, name: 'Aarav K', state: 'MH', tests: 12, accuracy: 92, percentile: 99.8 },
  { rank: 2, name: 'Ishita S', state: 'DL', tests: 10, accuracy: 90, percentile: 99.6 },
  { rank: 3, name: 'Rahul P', state: 'KA', tests: 9, accuracy: 88, percentile: 99.2 },
  { rank: 4, name: 'Meera R', state: 'TN', tests: 8, accuracy: 87, percentile: 98.9 },
  { rank: 5, name: 'Zaid A', state: 'UP', tests: 11, accuracy: 86, percentile: 98.5 },
];

const LeaderboardPreview = () => {
  const [scope, setScope] = React.useState('All India');

  return (
    <section id="leaderboard" className="w-full py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Leaderboard Preview</h2>
            <p className="mt-2 text-slate-600">Real-time ranks with filters. Full leaderboard unlocks with a subscription.</p>
          </div>
          <div className="flex items-center gap-2">
            {['All India', 'My State', 'My Batch'].map((opt) => (
              <button
                key={opt}
                onClick={() => setScope(opt)}
                className={`px-3 py-2 text-sm rounded-lg border transition ${
                  scope === opt ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead className="bg-slate-50 text-slate-600 text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3">Rank</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">State</th>
                  <th className="px-4 py-3">Tests</th>
                  <th className="px-4 py-3">Accuracy</th>
                  <th className="px-4 py-3">Percentile</th>
                </tr>
              </thead>
              <tbody>
                {sampleRows.map((r, idx) => (
                  <tr key={r.rank} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                    <td className="px-4 py-3 font-semibold text-slate-900">{r.rank}</td>
                    <td className="px-4 py-3">{r.name}</td>
                    <td className="px-4 py-3">{r.state}</td>
                    <td className="px-4 py-3">{r.tests}</td>
                    <td className="px-4 py-3">{r.accuracy}%</td>
                    <td className="px-4 py-3">{r.percentile}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between p-4 bg-white border-t border-slate-200">
            <span className="text-sm text-slate-600">Scope: {scope}</span>
            <div className="flex gap-2">
              <button className="px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700">Export CSV</button>
              <button className="px-3 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700">See Full Leaderboard</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaderboardPreview;
