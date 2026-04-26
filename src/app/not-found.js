'use client';

import React from 'react';

export default function NotFound() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;700;800&family=Caveat:wght@400;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'DM Sans', sans-serif; background: #F6F8FA; }
      `}</style>
      <div style={{ minHeight: '100vh', backgroundColor: '#F6F8FA', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center' }}>

        {/* Logo */}
        <img src="/mne-logo.png" alt="Mice and Elephants" style={{ height: '90px', width: 'auto', marginBottom: '2rem' }} />

        {/* Big 404 */}
        <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '8rem', fontWeight: 700, color: '#1A1A2E', lineHeight: 1, marginBottom: '0.5rem', opacity: 0.08 }}>
          404
        </div>

        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '2.2rem', fontWeight: 700, color: '#1A1A2E', marginBottom: '1rem', marginTop: '-3rem' }}>
          This page went dark.
        </h1>

        <p style={{ fontSize: '1rem', color: '#4B587C', lineHeight: 1.75, maxWidth: '26rem', marginBottom: '2rem', fontFamily: "'DM Sans', sans-serif" }}>
          Like a relay identity after the deal is done — this page has been deactivated.
          Hard bounce. Clean break.
        </p>

        <a href="/" style={{ backgroundColor: '#1A1A2E', color: '#ffffff', padding: '0.85rem 2rem', borderRadius: '999px', fontWeight: 800, fontSize: '0.95rem', border: '3px solid #1A1A2E', textDecoration: 'none', display: 'inline-block', boxShadow: '4px 4px 0 #1A1A2E', fontFamily: "'DM Sans', sans-serif" }}>
          Back to home →
        </a>

        <p style={{ fontFamily: "'Caveat', cursive", fontSize: '1rem', color: '#C5CDD8', marginTop: '2rem' }}>
          your email is a private conversation, not a public lead.
        </p>
      </div>
    </>
  );
}
