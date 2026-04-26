'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogin() {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ identifier: email, password }),
        }
      );
      const data = await res.json();
      if (data.jwt) {
        localStorage.setItem('mne_token', data.jwt);
        localStorage.setItem('mne_user', JSON.stringify(data.user));
        router.push('/dashboard/admin');
      } else {
        setError('Invalid email or password.');
      }
    } catch (e) {
      setError('Could not connect to server.');
    }
    setLoading(false);
  }

  return (
    <main className="min-h-screen flex items-center justify-center"
          style={{ backgroundColor: '#1A1A2E' }}>
      <div className="w-full max-w-md rounded-2xl p-10"
           style={{ backgroundColor: '#0D0D1F', border: '1px solid #333' }}>
        <div className="flex justify-center mb-8">
          <Image src="/mne-logo.png" alt="Mice and Elephants" width={160} height={55} />
        </div>
        <h1 className="text-2xl font-black text-white text-center mb-2">
          Partner Login
        </h1>
        <p className="text-center text-sm mb-8" style={{ color: '#AAAAAA' }}>
          Sign in to access your lead dashboard
        </p>
        {error && (
          <div className="mb-4 px-4 py-3 rounded-lg text-sm text-center"
               style={{ backgroundColor: '#FF444422', color: '#FF6666', border: '1px solid #FF4444' }}>
            {error}
          </div>
        )}
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" style={{ color: '#AAAAAA' }}>
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="w-full px-4 py-3 rounded-lg text-white outline-none"
            style={{ backgroundColor: '#1A1A2E', border: '1px solid #444' }}
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" style={{ color: '#AAAAAA' }}>
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full px-4 py-3 rounded-lg text-white outline-none"
            style={{ backgroundColor: '#1A1A2E', border: '1px solid #444' }}
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
          />
        </div>
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full py-3 rounded-full font-bold text-white transition hover:opacity-90"
          style={{ backgroundColor: '#7B2FBE' }}>
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </div>
    </main>
  );
}