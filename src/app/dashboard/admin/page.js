'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function AdminDashboard() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('mne_token');
    const userData = localStorage.getItem('mne_user');
    if (!token) {
      router.push('/dashboard/login');
      return;
    }
    setUser(JSON.parse(userData));
    fetchLeads(token);
  }, []);

  async function fetchLeads(token) {
    try {
      const res = await fetch('http://localhost:1337/api/user-leads?populate=*&sort=createdAt:desc', {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      setLeads(data.data ?? []);
    } catch (e) {
      console.error('Failed to fetch leads', e);
    }
    setLoading(false);
  }

  function handleLogout() {
    localStorage.removeItem('mne_token');
    localStorage.removeItem('mne_user');
    router.push('/dashboard/login');
  }

  const filtered = filter === 'all' ? leads : leads.filter(l => l.attributes?.status === filter);

  const statusColor = {
    new: '#00C896',
    matched: '#00CFFF',
    quoted: '#F5E642',
    converted: '#4CAF50',
    closed: '#888888',
  };

  const counts = {
    all: leads.length,
    new: leads.filter(l => l.attributes?.status === 'new').length,
    matched: leads.filter(l => l.attributes?.status === 'matched').length,
    quoted: leads.filter(l => l.attributes?.status === 'quoted').length,
    converted: leads.filter(l => l.attributes?.status === 'converted').length,
  };

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#1A1A2E', color: '#ffffff' }}>

      {/* Navbar */}
      <nav style={{ backgroundColor: '#0D0D1F', borderBottom: '1px solid #333' }}
           className="px-8 py-4 flex items-center justify-between">
        <Image src="/mne-logo.png" alt="Mice and Elephants" width={140} height={48} />
        <div className="flex items-center gap-6">
          {user && (
            <span className="text-sm" style={{ color: '#AAAAAA' }}>
              {user.email}
            </span>
          )}
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-full text-sm font-bold hover:opacity-80 transition"
            style={{ border: '1px solid #FF4444', color: '#FF4444' }}>
            Logout
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-8 py-10">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-black mb-1">Lead Dashboard</h1>
          <p className="text-sm" style={{ color: '#AAAAAA' }}>
            All incoming leads across Electacar and HKIB
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
          {Object.entries(counts).map(([key, count]) => (
            <div key={key}
                 onClick={() => setFilter(key)}
                 className="rounded-xl p-4 text-center cursor-pointer hover:opacity-80 transition"
                 style={{
                   backgroundColor: filter === key ? '#7B2FBE' : '#0D0D1F',
                   border: `1px solid ${filter === key ? '#7B2FBE' : '#333'}`
                 }}>
              <div className="text-2xl font-black">{count}</div>
              <div className="text-xs uppercase tracking-wider mt-1"
                   style={{ color: filter === key ? '#fff' : '#AAAAAA' }}>
                {key}
              </div>
            </div>
          ))}
        </div>

        {/* Leads Table */}
        <div className="rounded-2xl overflow-hidden"
             style={{ backgroundColor: '#0D0D1F', border: '1px solid #333' }}>

          {/* Table Header */}
          <div className="grid grid-cols-6 px-6 py-3 text-xs font-bold uppercase tracking-wider"
               style={{ color: '#AAAAAA', borderBottom: '1px solid #333' }}>
            <div>Name</div>
            <div>Email</div>
            <div>Source</div>
            <div>Type</div>
            <div>Status</div>
            <div>Date</div>
          </div>

          {/* Table Body */}
          {loading ? (
            <div className="px-6 py-12 text-center" style={{ color: '#AAAAAA' }}>
              Loading leads...
            </div>
          ) : filtered.length === 0 ? (
            <div className="px-6 py-12 text-center" style={{ color: '#AAAAAA' }}>
              No leads found. Once Electacar or HKIB forms submit, they will appear here.
            </div>
          ) : (
            filtered.map((lead) => {
              const a = lead.attributes ?? {};
              return (
                <div key={lead.id}
                     className="grid grid-cols-6 px-6 py-4 hover:opacity-80 transition"
                     style={{ borderBottom: '1px solid #1A1A2E' }}>
                  <div className="font-medium">{a.full_name ?? '—'}</div>
                  <div className="text-sm" style={{ color: '#AAAAAA' }}>{a.email ?? '—'}</div>
                  <div>
                    <span className="text-xs px-2 py-1 rounded-full font-bold"
                          style={{
                            backgroundColor: a.source === 'electacar' ? '#4CAF5022' : '#00CFFF22',
                            color: a.source === 'electacar' ? '#4CAF50' : '#00CFFF'
                          }}>
                      {a.source ?? '—'}
                    </span>
                  </div>
                  <div className="text-sm capitalize">{a.lead_type ?? '—'}</div>
                  <div>
                    <span className="text-xs px-2 py-1 rounded-full font-bold capitalize"
                          style={{
                            backgroundColor: `${statusColor[a.status] ?? '#888'}22`,
                            color: statusColor[a.status] ?? '#888'
                          }}>
                      {a.status ?? '—'}
                    </span>
                  </div>
                  <div className="text-sm" style={{ color: '#AAAAAA' }}>
                    {a.createdAt ? new Date(a.createdAt).toLocaleDateString() : '—'}
                  </div>
                </div>
              );
            })
          )}
        </div>

      </div>
    </main>
  );
}
