'use client';

import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const EJS_SERVICE  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EJS_CONTACT  = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CONTACT;
const EJS_SIGNUP   = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_SIGNUP;
const EJS_KEY      = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

/* ─── brand tokens ───────────────────────────────────────────────────── */
const INK       = '#1A1A2E';
const PARCHMENT = '#EEF2F7';
const CREAM     = '#F6F8FA';
const GREEN     = '#00C896';
const GREEN_D   = '#009970';
const PURPLE    = '#7B5EA7';
const WHITE     = '#ffffff';
const NIGHT     = '#12172A';
const BORDER    = `3px solid #1A1A2E`;
const SHADOW    = `4px 4px 0 #1A1A2E`;
const SHADOW_SM = `3px 3px 0 #1A1A2E`;
const SHADOW_GN = `4px 4px 0 #009970`;

/* ─── SVG illustrations ──────────────────────────────────────────────── */

const MouseSvg = ({ size = 120 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="60" cy="78" rx="28" ry="22" stroke="#1A1A2E" strokeWidth="2.5" fill="#EEF2F7"/>
    <circle cx="60" cy="50" r="18" stroke="#1A1A2E" strokeWidth="2.5" fill="#F6F8FA"/>
    <circle cx="44" cy="36" r="10" stroke="#1A1A2E" strokeWidth="2.5" fill="#F6F8FA"/>
    <circle cx="44" cy="36" r="5.5" stroke="#1A1A2E" strokeWidth="1.5" fill="#EEF2F7"/>
    <circle cx="76" cy="36" r="10" stroke="#1A1A2E" strokeWidth="2.5" fill="#F6F8FA"/>
    <circle cx="76" cy="36" r="5.5" stroke="#1A1A2E" strokeWidth="1.5" fill="#EEF2F7"/>
    <circle cx="54" cy="48" r="2.5" fill="#1A1A2E"/>
    <circle cx="66" cy="48" r="2.5" fill="#1A1A2E"/>
    <ellipse cx="60" cy="55" rx="3" ry="2" fill="#00C896"/>
    <line x1="57" y1="54" x2="44" y2="52" stroke="#1A1A2E" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="57" y1="56" x2="44" y2="57" stroke="#1A1A2E" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="63" y1="54" x2="76" y2="52" stroke="#1A1A2E" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="63" y1="56" x2="76" y2="57" stroke="#1A1A2E" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M88 85 Q104 75 108 60 Q112 46 102 42" stroke="#00C896" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M38 78 Q30 88 34 96" stroke="#1A1A2E" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M82 78 Q90 88 86 96" stroke="#1A1A2E" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M38 78 Q60 90 82 78" stroke="#00C896" strokeWidth="3" fill="none" strokeLinecap="round"/>
  </svg>
);

const ElephantSvg = ({ size = 130 }) => (
  <svg width={size} height={size} viewBox="0 0 140 130" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="72" cy="85" rx="42" ry="32" stroke="#1A1A2E" strokeWidth="2.5" fill="#E8DFF5"/>
    <circle cx="72" cy="50" r="26" stroke="#1A1A2E" strokeWidth="2.5" fill="#EDE5F7"/>
    <ellipse cx="44" cy="52" rx="16" ry="20" stroke="#1A1A2E" strokeWidth="2.5" fill="#EDE5F7"/>
    <ellipse cx="44" cy="52" rx="10" ry="13" stroke="#7B5EA7" strokeWidth="1.5" fill="#E8DFF5"/>
    <ellipse cx="100" cy="52" rx="16" ry="20" stroke="#1A1A2E" strokeWidth="2.5" fill="#EDE5F7"/>
    <ellipse cx="100" cy="53" rx="10" ry="13" stroke="#7B5EA7" strokeWidth="1.5" fill="#E8DFF5"/>
    <path d="M64 68 Q55 80 58 96 Q60 106 68 104" stroke="#1A1A2E" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <circle cx="80" cy="46" r="3.5" fill="#1A1A2E"/>
    <circle cx="81" cy="45" r="1.2" fill="#ffffff"/>
    <rect x="44" y="110" width="14" height="18" rx="6" stroke="#1A1A2E" strokeWidth="2" fill="#E8DFF5"/>
    <rect x="62" y="110" width="14" height="18" rx="6" stroke="#1A1A2E" strokeWidth="2" fill="#E8DFF5"/>
    <rect x="80" y="110" width="14" height="18" rx="6" stroke="#1A1A2E" strokeWidth="2" fill="#E8DFF5"/>
    <path d="M114 82 Q122 76 120 68" stroke="#7B5EA7" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
  </svg>
);

const RelayDiagram = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '1rem 0', flexWrap: 'wrap' }}>
    <div style={{ textAlign: 'center' }}>
      <MouseSvg size={70} />
      <p style={{ fontSize: '0.8rem', fontFamily: "'Caveat', cursive", color: INK, marginTop: '0.2rem' }}>you</p>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', alignItems: 'center' }}>
      <svg width="28" height="14" viewBox="0 0 32 14" fill="none"><path d="M2 7 Q14 3 26 7" stroke="#00C896" strokeWidth="2.5" strokeLinecap="round"/><path d="M22 4 L26 7 L22 10" stroke="#00C896" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      <svg width="28" height="14" viewBox="0 0 32 14" fill="none"><path d="M26 7 Q14 11 2 7" stroke="#00CFFF" strokeWidth="2.5" strokeLinecap="round"/><path d="M6 10 L2 7 L6 4" stroke="#00CFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </div>
    <div style={{ textAlign: 'center' }}>
      <div style={{ border: BORDER, borderRadius: '12px', padding: '0.5rem 0.75rem', backgroundColor: CREAM, marginBottom: '0.4rem', boxShadow: SHADOW_GN }}>
        <p style={{ fontSize: '0.65rem', fontFamily: "'Caveat', cursive", color: INK, fontWeight: 700 }}>jane.s@</p>
        <p style={{ fontSize: '0.58rem', color: GREEN_D, fontFamily: "'Caveat', cursive", fontWeight: 600 }}>miceandelephants.com</p>
      </div>
      <p style={{ fontSize: '0.72rem', fontFamily: "'Caveat', cursive", color: GREEN_D }}>relay identity</p>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', alignItems: 'center' }}>
      <svg width="28" height="14" viewBox="0 0 32 14" fill="none"><path d="M2 7 Q14 3 26 7" stroke="#00C896" strokeWidth="2.5" strokeLinecap="round"/><path d="M22 4 L26 7 L22 10" stroke="#00C896" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      <svg width="28" height="14" viewBox="0 0 32 14" fill="none"><path d="M26 7 Q14 11 2 7" stroke="#00CFFF" strokeWidth="2.5" strokeLinecap="round"/><path d="M6 10 L2 7 L6 4" stroke="#00CFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </div>
    <div style={{ textAlign: 'center' }}>
      <ElephantSvg size={80} />
      <p style={{ fontSize: '0.8rem', fontFamily: "'Caveat', cursive", color: INK, marginTop: '0.2rem' }}>the market</p>
    </div>
  </div>
);

/* ─── contact form ───────────────────────────────────────────────────── */
const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault(); setStatus('sending');
    try {
      await emailjs.send(EJS_SERVICE, EJS_CONTACT, { from_name: form.name, from_email: form.email, message: form.message, time: new Date().toLocaleString('en-HK', { timeZone: 'Asia/Hong_Kong' }) }, EJS_KEY);
      setStatus('sent'); setForm({ name: '', email: '', message: '' });
    } catch { setStatus('error'); }
  };
  const inp = { width: '100%', padding: '0.75rem 1rem', borderRadius: '12px', border: '3px solid rgba(200,208,224,0.4)', backgroundColor: 'rgba(255,255,255,0.07)', color: WHITE, fontSize: '0.9rem', outline: 'none', fontFamily: "'DM Sans', sans-serif", boxSizing: 'border-box' };
  if (status === 'sent') return (
    <div style={{ textAlign: 'center', padding: '2rem', border: `3px solid ${GREEN}`, borderRadius: '16px', backgroundColor: 'rgba(0,200,150,0.1)', boxShadow: SHADOW_GN }}>
      <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✓</div>
      <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.4rem', color: GREEN, marginBottom: '0.5rem' }}>Message received!</h3>
      <p style={{ color: '#C8D0E0', fontSize: '0.9rem', fontFamily: "'DM Sans', sans-serif" }}>We'll be in touch at <strong style={{ color: GREEN }}>{form.email || 'your email'}</strong> shortly.</p>
    </div>
  );
  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.72rem', color: '#C8D0E0', marginBottom: '0.35rem', fontFamily: "'DM Sans', sans-serif", fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Your name</label>
          <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Jane Smith" style={inp}/>
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '0.72rem', color: '#C8D0E0', marginBottom: '0.35rem', fontFamily: "'DM Sans', sans-serif", fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Your email</label>
          <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="jane@company.com" style={inp}/>
        </div>
      </div>
      <div>
        <label style={{ display: 'block', fontSize: '0.72rem', color: '#C8D0E0', marginBottom: '0.35rem', fontFamily: "'DM Sans', sans-serif", fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em' }}>How can we help?</label>
        <textarea name="message" required value={form.message} onChange={handleChange} rows={4} placeholder="Tell us about your platform or what you're looking to protect..." style={{ ...inp, resize: 'vertical' }}/>
      </div>
      {status === 'error' && <p style={{ color: '#FF6B6B', fontSize: '0.85rem', fontFamily: "'DM Sans', sans-serif" }}>Something went wrong — email us at contact@miceandelephants.com</p>}
      <button type="submit" disabled={status === 'sending'} style={{ backgroundColor: status === 'sending' ? '#3D5080' : GREEN, color: INK, padding: '0.85rem 2rem', borderRadius: '999px', fontWeight: 900, fontSize: '1rem', border: BORDER, cursor: 'pointer', alignSelf: 'flex-start', fontFamily: "'DM Sans', sans-serif", boxShadow: status === 'sending' ? 'none' : SHADOW_GN, letterSpacing: '0.02em' }}>
        {status === 'sending' ? 'Sending...' : 'Send message →'}
      </button>
    </form>
  );
};

/* ─── sign-up form ───────────────────────────────────────────────────── */
const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('idle');
  const handleSubmit = async (e) => {
    e.preventDefault(); setStatus('sending');
    try { await emailjs.send(EJS_SERVICE, EJS_SIGNUP, { name, email }, EJS_KEY); setStatus('sent'); setEmail(''); setName(''); }
    catch { setStatus('error'); }
  };
  const inp = { padding: '0.8rem 1.1rem', borderRadius: '12px', border: BORDER, backgroundColor: WHITE, fontSize: '0.9rem', color: INK, outline: 'none', fontFamily: "'DM Sans', sans-serif", boxShadow: SHADOW_SM };
  if (status === 'sent') return (
    <div style={{ textAlign: 'center', padding: '1.5rem', border: `3px solid ${GREEN}`, borderRadius: '16px', backgroundColor: '#E8FFF7', boxShadow: SHADOW_GN }}>
      <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.4rem', color: GREEN_D, marginBottom: '0.4rem' }}>You're on the list! 🎉</p>
      <p style={{ fontSize: '0.88rem', color: INK, fontFamily: "'DM Sans', sans-serif" }}>Check your inbox — welcome from noreply@miceandelephants.com</p>
    </div>
  );
  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Your name" style={{ ...inp, width: '100%', boxSizing: 'border-box' }}/>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="your@email.com" style={{ ...inp, flex: 1 }}/>
          <button type="submit" disabled={status === 'sending'} style={{ backgroundColor: status === 'sending' ? '#3D5080' : GREEN, color: INK, padding: '0.8rem 1.4rem', borderRadius: '999px', fontWeight: 900, fontSize: '0.88rem', border: BORDER, cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: "'DM Sans', sans-serif", boxShadow: status === 'sending' ? 'none' : SHADOW }}>
            {status === 'sending' ? '...' : 'Get early access →'}
          </button>
        </div>
        {status === 'error' && <p style={{ color: '#DC2626', fontSize: '0.82rem', fontFamily: "'DM Sans', sans-serif" }}>Something went wrong — please try again.</p>}
        <p style={{ fontSize: '0.78rem', color: '#6B7A99', lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif" }}>No spam. Your details will never be passed on. Unsubscribe any time.</p>
      </div>
    </form>
  );
};

/* ─── mobile nav ─────────────────────────────────────────────────────── */
const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="mobile-menu-btn" style={{ display: 'none', background: PARCHMENT, border: BORDER, borderRadius: '8px', cursor: 'pointer', padding: '0.4rem 0.6rem', boxShadow: SHADOW_SM }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          {open ? (<><line x1="5" y1="5" x2="19" y2="19" stroke={INK} strokeWidth="2.5" strokeLinecap="round"/><line x1="19" y1="5" x2="5" y2="19" stroke={INK} strokeWidth="2.5" strokeLinecap="round"/></>) : (<><line x1="4" y1="7" x2="20" y2="7" stroke={INK} strokeWidth="2.5" strokeLinecap="round"/><line x1="4" y1="12" x2="20" y2="12" stroke={INK} strokeWidth="2.5" strokeLinecap="round"/><line x1="4" y1="17" x2="20" y2="17" stroke={INK} strokeWidth="2.5" strokeLinecap="round"/></>)}
        </svg>
      </button>
      {open && (
        <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, backgroundColor: CREAM, borderBottom: BORDER, borderTop: `2px solid ${INK}`, padding: '1.25rem 2rem', display: 'flex', flexDirection: 'column', gap: '1rem', zIndex: 200 }}>
          {[['#how-it-works','How it works'],['#use-cases','Use cases'],['#signup','Sign up']].map(([href,label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} style={{ textDecoration: 'none', color: INK, fontWeight: 800, fontFamily: "'DM Sans', sans-serif" }}>{label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} style={{ textDecoration: 'none', color: INK, backgroundColor: GREEN, padding: '0.7rem 1.25rem', borderRadius: '999px', fontWeight: 900, fontFamily: "'DM Sans', sans-serif", fontWeight: 900, border: BORDER, boxShadow: SHADOW, textAlign: 'center' }}>Work with us</a>
        </div>
      )}
    </>
  );
};

/* ─── referral modal ─────────────────────────────────────────────────── */
const ReferralModal = ({ source, onClose }) => {
  const [step, setStep] = useState('learn');
  const [form, setForm] = useState({ name: '', email: '' });
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => { document.body.style.overflow = 'hidden'; return () => { document.body.style.overflow = ''; }; }, []);
  const handleSignUp = async (e) => {
    e.preventDefault(); setSending(true); setError('');
    try { await emailjs.send(EJS_SERVICE, EJS_SIGNUP, { name: form.name, email: form.email }, EJS_KEY); setStep('done'); }
    catch { setError('Something went wrong — please try again.'); }
    finally { setSending(false); }
  };
  const sourceNames = { electacar: 'Electacar' };
  const sourceName = sourceNames[source] || 'one of our partners';
  const inp = { width: '100%', padding: '0.75rem 1rem', borderRadius: '12px', border: BORDER, backgroundColor: CREAM, fontSize: '0.9rem', color: INK, outline: 'none', fontFamily: "'DM Sans', sans-serif", boxShadow: SHADOW_SM, boxSizing: 'border-box' };
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 500, backgroundColor: 'rgba(26,26,46,0.88)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
      <div onClick={(e) => e.stopPropagation()} style={{ backgroundColor: CREAM, borderRadius: '20px', border: `4px solid ${INK}`, maxWidth: '520px', width: '100%', maxHeight: '90vh', overflowY: 'auto', boxShadow: `6px 6px 0 ${INK}` }}>
        <div style={{ backgroundColor: NIGHT, borderRadius: '16px 16px 0 0', padding: '1.75rem 2rem 1.5rem', position: 'relative', borderBottom: `3px solid ${INK}` }}>
          <button onClick={onClose} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', cursor: 'pointer', color: '#C8D0E0', fontSize: '1.2rem' }}>✕</button>
          <span style={{ fontFamily: "'Caveat', cursive", fontSize: '1rem', color: GREEN, display: 'block', marginBottom: '0.4rem' }}>— you were sent here by {sourceName}</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.75rem', color: WHITE, lineHeight: 1.2, margin: 0 }}>Meet the relay behind your privacy.</h2>
        </div>
        <div style={{ padding: '2rem' }}>
          {step === 'learn' && (<>
            <p style={{ fontSize: '0.95rem', color: INK, lineHeight: 1.8, marginBottom: '1.5rem', fontFamily: "'DM Sans', sans-serif" }}>When you compare quotes through {sourceName}, your real email never reaches a broker. Mice &amp; Elephants generates a temporary relay identity — all communication flows through that instead.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
              {[{n:'01',title:'You make an enquiry',desc:`${sourceName} passes it through our relay — not your real inbox.`},{n:'02',title:'Brokers see a relay address',desc:'They respond to it. You receive the reply. They never get your real details.'},{n:'03',title:'Deal done — kill the relay',desc:'One click and the address goes dark. No more follow-ups. Ever.'}].map((s) => (
                <div key={s.n} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
                  <div style={{ flexShrink: 0, width: '34px', height: '34px', borderRadius: '50%', backgroundColor: GREEN, border: `3px solid ${INK}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Caveat', cursive", fontSize: '1rem', color: INK, boxShadow: SHADOW_SM }}>{s.n}</div>
                  <div>
                    <p style={{ fontWeight: 800, fontSize: '0.9rem', color: INK, margin: '0 0 0.2rem', fontFamily: "'DM Sans', sans-serif" }}>{s.title}</p>
                    <p style={{ fontSize: '0.84rem', color: '#4B587C', lineHeight: 1.6, margin: 0, fontFamily: "'DM Sans', sans-serif" }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button onClick={() => setStep('signup')} style={{ backgroundColor: GREEN, color: INK, padding: '0.8rem 1.75rem', borderRadius: '999px', fontWeight: 900, fontSize: '0.95rem', border: BORDER, cursor: 'pointer', flex: 1, fontFamily: "'DM Sans', sans-serif", fontWeight: 900, boxShadow: SHADOW }}>Get my own relay identity →</button>
              <button onClick={onClose} style={{ backgroundColor: CREAM, color: INK, padding: '0.8rem 1.25rem', borderRadius: '999px', fontWeight: 700, fontSize: '0.88rem', border: BORDER, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>Maybe later</button>
            </div>
          </>)}
          {step === 'signup' && (<>
            <p style={{ fontSize: '0.92rem', color: INK, lineHeight: 1.7, marginBottom: '1.5rem', fontFamily: "'DM Sans', sans-serif" }}>Sign up and we'll assign you a relay identity when we open access. Confirmation from <strong>noreply@miceandelephants.com</strong></p>
            <form onSubmit={handleSignUp} style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <div><label style={{ display: 'block', fontSize: '0.72rem', color: '#4B587C', marginBottom: '0.35rem', fontWeight: 800, fontFamily: "'DM Sans', sans-serif", textTransform: 'uppercase', letterSpacing: '0.06em' }}>Your name</label><input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Jane Smith" style={inp}/></div>
              <div><label style={{ display: 'block', fontSize: '0.72rem', color: '#4B587C', marginBottom: '0.35rem', fontWeight: 800, fontFamily: "'DM Sans', sans-serif", textTransform: 'uppercase', letterSpacing: '0.06em' }}>Your email</label><input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="jane@youremail.com" style={inp}/></div>
              {error && <p style={{ color: '#DC2626', fontSize: '0.82rem', fontFamily: "'DM Sans', sans-serif" }}>{error}</p>}
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.25rem' }}>
                <button type="submit" disabled={sending} style={{ backgroundColor: sending ? '#3D5080' : GREEN, color: INK, padding: '0.8rem 1.75rem', borderRadius: '999px', fontWeight: 900, fontSize: '0.95rem', border: BORDER, cursor: 'pointer', flex: 1, fontFamily: "'DM Sans', sans-serif", fontWeight: 900, boxShadow: sending ? 'none' : SHADOW }}>{sending ? 'Signing up...' : 'Reserve my relay identity →'}</button>
                <button type="button" onClick={() => setStep('learn')} style={{ backgroundColor: CREAM, color: INK, padding: '0.8rem 1rem', borderRadius: '999px', fontWeight: 700, fontSize: '0.88rem', border: BORDER, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>← Back</button>
              </div>
              <p style={{ fontSize: '0.75rem', color: '#6B7A99', lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif" }}>No spam. Your details will never be passed on. Unsubscribe any time.</p>
            </form>
          </>)}
          {step === 'done' && (
            <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>🎉</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.75rem', color: GREEN_D, marginBottom: '0.5rem' }}>You're on the list!</h3>
              <p style={{ fontSize: '0.92rem', color: INK, lineHeight: 1.7, marginBottom: '1.5rem', fontFamily: "'DM Sans', sans-serif" }}>Check your inbox — a welcome from <strong style={{ color: GREEN_D }}>noreply@miceandelephants.com</strong> is on its way.</p>
              <button onClick={onClose} style={{ backgroundColor: NIGHT, color: WHITE, padding: '0.8rem 2rem', borderRadius: '999px', fontWeight: 900, fontSize: '0.9rem', border: BORDER, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", fontWeight: 900, boxShadow: SHADOW }}>Back to Mice &amp; Elephants</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* ─── page ───────────────────────────────────────────────────────────── */
export default function HomePage() {
  const [referralModal, setReferralModal] = useState(null);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get('ref');
    if (ref) setReferralModal(ref.toLowerCase());
  }, []);

  return (
    <>
      {referralModal && <ReferralModal source={referralModal} onClose={() => setReferralModal(null)} />}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@400;500;700;800&family=Caveat:wght@400;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'DM Sans', sans-serif; background: #F6F8FA; -webkit-font-smoothing: antialiased; }
        .sketch-card { border-radius: 16px; border: 3px solid #1A1A2E; background: #F6F8FA; padding: 1.5rem; box-shadow: 4px 4px 0 #1A1A2E; transition: transform 0.15s, box-shadow 0.15s; }
        .sketch-card:hover { transform: translate(-2px,-2px); box-shadow: 6px 6px 0 #1A1A2E; }
        .step-card { border-radius: 16px; border: 3px solid #1A1A2E; background: #F6F8FA; padding: 1.75rem 1.5rem 1.5rem; position: relative; box-shadow: 4px 4px 0 #1A1A2E; transition: transform 0.15s, box-shadow 0.15s; }
        .step-card:hover { transform: translate(-2px,-2px); box-shadow: 6px 6px 0 #1A1A2E; }
        .step-number { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 3.5rem; letter-spacing: -0.01em; line-height: 1; color: rgba(26,26,46,0.07); position: absolute; top: 0.75rem; right: 1rem; }
        .tag { display: inline-block; font-family: 'Cormorant Garamond', Georgia, serif; font-size: 0.9rem; padding: 0.2rem 0.875rem; border-radius: 999px; border: 2.5px solid currentColor; box-shadow: 2px 2px 0 #1A1A2E; }
        .section-label { font-family: 'Caveat', cursive; font-size: 1.1rem; display: block; margin-bottom: 0.5rem; letter-spacing: 0.02em; }
        .dotgrid { background-image: radial-gradient(circle, rgba(26,26,46,0.13) 1.5px, transparent 1.5px); background-size: 22px 22px; }
        .dark-section { background: #12172A; }
        .dark-inner { border: 2px dashed rgba(200,208,224,0.22); border-radius: 20px; padding: 3rem; margin: 0 auto; max-width: 72rem; position: relative; }
        .dark-inner::before { content: '✦'; position: absolute; top: -12px; left: 50%; transform: translateX(-50%); color: #00C896; background: #12172A; padding: 0 8px; font-size: 14px; }
        .cta-btn-primary { background: #1A1A2E; color: #ffffff; padding: 0.85rem 2rem; border-radius: 999px; font-weight: 900; font-size: 0.95rem; border: 3px solid #1A1A2E; cursor: pointer; font-family: 'DM Sans', sans-serif; box-shadow: 4px 4px 0 #1A1A2E; text-decoration: none; display: inline-block; letter-spacing: 0.02em; transition: transform 0.1s; }
        .cta-btn-primary:hover { transform: translate(-1px,-1px); box-shadow: 5px 5px 0 #1A1A2E; }
        .cta-btn-secondary { background: #F6F8FA; color: #1A1A2E; padding: 0.85rem 2rem; border-radius: 999px; font-weight: 900; font-size: 0.95rem; border: 3px solid #1A1A2E; cursor: pointer; font-family: 'DM Sans', sans-serif; box-shadow: 4px 4px 0 #1A1A2E; text-decoration: none; display: inline-block; letter-spacing: 0.02em; transition: transform 0.1s; }
        .cta-btn-secondary:hover { transform: translate(-1px,-1px); box-shadow: 5px 5px 0 #1A1A2E; }
        .cta-btn-green { background: #00C896; color: #1A1A2E; padding: 0.85rem 2rem; border-radius: 999px; font-weight: 900; font-size: 0.95rem; border: 3px solid #1A1A2E; cursor: pointer; font-family: 'DM Sans', sans-serif; box-shadow: 4px 4px 0 #1A1A2E; text-decoration: none; display: inline-block; letter-spacing: 0.02em; transition: transform 0.1s; }
        .cta-btn-green:hover { transform: translate(-1px,-1px); box-shadow: 5px 5px 0 #009970; }
        input::placeholder, textarea::placeholder { color: #9BA8C0; opacity: 1; }
        input:focus, textarea:focus { border-color: #00C896 !important; outline: none; }
        @media (max-width: 768px) {
          .hero-grid, .two-col, .contact-grid, .signup-inner { grid-template-columns: 1fr !important; }
          .four-col { grid-template-columns: 1fr 1fr !important; }
          .three-col { grid-template-columns: 1fr !important; }
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .dark-inner { padding: 1.5rem; }
        }
      `}</style>

      <div style={{ fontFamily: "'DM Sans', sans-serif", color: INK, backgroundColor: CREAM }}>

        {/* top bar */}
        <div style={{ backgroundColor: NIGHT, color: '#C8D0E0', fontSize: '0.78rem', padding: '0.45rem 2rem', textAlign: 'center', letterSpacing: '0.03em', fontFamily: "'DM Sans', sans-serif", borderBottom: `2px solid ${GREEN}` }}>
          <span style={{ opacity: 0.75 }}>Privacy-first neutral relay · </span>
          <span style={{ color: GREEN, fontWeight: 800 }}>Now live in Hong Kong</span>
          <span style={{ opacity: 0.75 }}> · Your identity, your control</span>
        </div>

        {/* nav */}
        <header style={{ backgroundColor: CREAM, borderBottom: BORDER, position: 'sticky', top: 0, zIndex: 100 }}>
          <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0.5rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
            <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <img src="/mne-logo.png" alt="Mice and Elephants" style={{ height: '72px', width: 'auto' }} />
            </a>
            <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2rem', fontSize: '0.95rem', fontWeight: 800, fontFamily: "'DM Sans', sans-serif" }}>
              <a href="#how-it-works" style={{ textDecoration: 'none', color: INK }}>How it works</a>
              <a href="#use-cases" style={{ textDecoration: 'none', color: INK }}>Use cases</a>
              <a href="#signup" style={{ textDecoration: 'none', color: INK }}>Sign up</a>
              <a href="#contact" className="cta-btn-green" style={{ padding: '0.5rem 1.25rem', fontSize: '0.88rem' }}>Work with us</a>
            </nav>
            <MobileNav />
          </div>
        </header>

        {/* hero */}
        <section style={{ backgroundColor: CREAM, padding: '4.5rem 2rem 4rem' }}>
          <div className="hero-grid" style={{ maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className="section-label" style={{ color: GREEN_D }}>— a new kind of shield</span>
              <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '3.2rem', lineHeight: 1.1, color: NIGHT, marginBottom: '1.25rem' }}>
                Your email address is a private conversation.<br/>
                <span style={{ color: GREEN_D }}>Not a public lead.</span>
              </h1>
              <p style={{ fontSize: '1.02rem', color: '#3D4A6B', lineHeight: 1.75, maxWidth: '30rem', marginBottom: '2rem', fontFamily: "'DM Sans', sans-serif" }}>
                Mice &amp; Elephants gives individuals and businesses a digital shield — a temporary,
                masked identity to navigate the marketplace, gather intelligence, and deal with
                the big players without leaving a permanent trail.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#how-it-works" className="cta-btn-primary">See how the relay works</a>
                <a href="#signup" className="cta-btn-secondary">Get early access</a>
              </div>
            </div>
            <div className="dotgrid" style={{ borderRadius: '20px', border: BORDER, backgroundColor: PARCHMENT, padding: '1.5rem 1rem 1rem', boxShadow: SHADOW }}>
              <p style={{ fontFamily: "'Caveat', cursive", fontSize: '1.1rem', color: '#6B7A99', textAlign: 'center', marginBottom: '0.25rem' }}>the relay in action ↓</p>
              <RelayDiagram />
              <div style={{ borderRadius: '12px', border: `2.5px dashed ${GREEN}`, backgroundColor: CREAM, padding: '0.9rem 1rem', marginTop: '0.5rem', boxShadow: SHADOW_GN }}>
                <p style={{ fontFamily: "'Caveat', cursive", fontSize: '1.15rem', color: NIGHT, textAlign: 'center', lineHeight: 1.5 }}>
                  "They see a relay address.<br/>They never see <span style={{ color: GREEN_D }}>you</span>."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* rationale */}
        <section id="rationale" className="dark-section" style={{ padding: '5.5rem 2rem' }}>
          <div className="dark-inner two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            <div>
              <span className="section-label" style={{ color: GREEN }}>— why we exist</span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '2.4rem', color: WHITE, lineHeight: 1.2, marginBottom: '1.5rem' }}>
                In every market, there are Elephants and there are Mice.
              </h2>
              <p style={{ color: '#C8D0E0', fontSize: '0.96rem', lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif" }}>
                The Elephants — large insurers, brokers, enterprise vendors — are powerful and essential.
                But they have thick skin. Once they have your contact details, they don't let go.
                Their automated systems and aggressive sales teams can turn a simple enquiry into months of unwanted follow-ups.
              </p>
            </div>
            <div style={{ paddingTop: '3.5rem' }}>
              <p style={{ color: '#C8D0E0', fontSize: '0.96rem', lineHeight: 1.8, marginBottom: '1.75rem', fontFamily: "'DM Sans', sans-serif" }}>
                The Mice — small businesses, startups, independent individuals — are agile and smart, but vulnerable.
                Giving away your primary email just to see a price should not mean losing control of your inbox forever.
              </p>
              <div style={{ border: `2.5px dashed rgba(0,200,150,0.45)`, borderRadius: '16px', padding: '1.25rem 1.5rem', boxShadow: `4px 4px 0 rgba(0,200,150,0.25)` }}>
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.1rem', color: WHITE, lineHeight: 1.6 }}>
                  "Mice &amp; Elephants was founded to give us mice a digital shield — so we can navigate the marketplace without leaving a permanent trail."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* how it works */}
        <section id="how-it-works" className="dotgrid" style={{ backgroundColor: PARCHMENT, padding: '5rem 2rem 4rem', borderTop: BORDER, borderBottom: BORDER }}>
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <span className="section-label" style={{ color: GREEN_D, textAlign: 'center', display: 'block' }}>— the neutral relay</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '2.6rem', color: NIGHT, textAlign: 'center', marginBottom: '0.75rem' }}>Your shield. Four layers.</h2>
            <p style={{ color: '#3D4A6B', textAlign: 'center', fontSize: '0.98rem', maxWidth: '36rem', margin: '0 auto 3rem', lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif" }}>
              A sophisticated, temporary gateway between you and the market — that you control entirely.
            </p>
            <div className="four-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }}>
              {[
                { n: '01', tag: 'Ghost Domain', tagColor: GREEN_D, title: 'Identity masking', desc: 'We generate a unique Relay Identity — e.g. jane.s@miceandelephants.com. That\'s the only address the Elephant ever sees.' },
                { n: '02', tag: 'Glass Pipe', tagColor: PURPLE, title: 'Peer-to-peer routing', desc: 'We\'re a Smart Router, not a data warehouse. Messages forward in milliseconds, buffers purge on delivery. We don\'t sell data.' },
                { n: '03', tag: 'SMS Ping', tagColor: GREEN_D, title: 'Real-time alerts', desc: 'The moment a reply arrives, we ping your phone. You stay responsive without handing your number to any vendor. Coming soon.' },
                { n: '04', tag: 'Kill Switch', tagColor: PURPLE, title: 'One-click exit', desc: 'Deal done? Deactivate the relay with one click. The address enters a blackhole state — hard server reject. Every time. Coming soon.' },
              ].map((s) => (
                <div key={s.n} className="step-card">
                  <span className="step-number">{s.n}</span>
                  <span className="tag" style={{ color: s.tagColor, borderColor: s.tagColor, backgroundColor: s.tagColor + '18', marginBottom: '0.75rem', display: 'inline-block' }}>{s.tag}</span>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.1rem', color: NIGHT, marginBottom: '0.5rem' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#3D4A6B', lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif" }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* use cases */}
        <section id="use-cases" style={{ backgroundColor: CREAM, padding: '5rem 2rem 4.5rem', borderBottom: BORDER }}>
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <span className="section-label" style={{ color: GREEN_D, textAlign: 'center', display: 'block' }}>— universal utility</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '2.6rem', color: NIGHT, textAlign: 'center', marginBottom: '0.75rem' }}>Wherever the Elephants roam.</h2>
            <p style={{ color: '#3D4A6B', textAlign: 'center', fontSize: '0.98rem', maxWidth: '36rem', margin: '0 auto 3rem', lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif" }}>
              Mice &amp; Elephants isn't industry-specific. Anywhere you need to gather intelligence, compare offers, or negotiate — without handing over your identity.
            </p>
            <div className="three-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
              {[
                { tag: 'EV & Car Buying', color: GREEN_D, desc: 'Compare insurance quotes and vehicle offers from multiple brokers and dealers — without being hunted by their sales teams for twelve months. Kill the relay the moment you sign.' },
                { tag: 'Corporate Procurement', color: PURPLE, desc: 'Run the 500-laptop test or large SaaS RFPs through a relay. Gather competitive bids without handing your inbox to ten vendors and their automated dialers.' },
                { tag: 'HR & Executive Search', color: GREEN_D, desc: 'Benchmark salaries or quietly scout specialist talent without leaking corporate intent or drowning your primary inbox in agency follow-ups.' },
                { tag: 'High-Value Purchases', color: PURPLE, desc: 'Shopping for a yacht, jet, or luxury property? Your contact details are a high-value target. Negotiate across multiple vendors through a Relay Identity and kill the connection when the deal is done.' },
                { tag: 'Whistleblowing & Reporting', color: GREEN_D, desc: 'Truth-telling shouldn\'t be career-ending. Our relay supports two-way masked dialogue with regulators, journalists, or HR — provide evidence while your real identity stays behind the Ghost Domain.' },
                { tag: 'Any Market. Any Deal.', color: PURPLE, desc: 'Real estate, financial products, B2B scouting, insurance. If there\'s a marketplace with Elephants who want your data — Mice & Elephants is your shield.' },
              ].map((uc) => (
                <div key={uc.tag} className="sketch-card">
                  <span className="tag" style={{ color: uc.color, borderColor: uc.color, backgroundColor: uc.color + '18', marginBottom: '0.75rem', display: 'inline-block' }}>{uc.tag}</span>
                  <p style={{ fontSize: '0.88rem', color: '#3D4A6B', lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif" }}>{uc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* embed */}
        <section className="dotgrid" style={{ backgroundColor: PARCHMENT, padding: '5rem 2rem', borderBottom: BORDER }}>
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <span className="section-label" style={{ color: GREEN_D, textAlign: 'center', display: 'block' }}>— built for platforms</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '2.4rem', color: NIGHT, textAlign: 'center', marginBottom: '0.75rem' }}>Embed the relay into your platform.</h2>
            <p style={{ color: '#3D4A6B', textAlign: 'center', fontSize: '0.98rem', maxWidth: '40rem', margin: '0 auto 3.5rem', lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif" }}>
              Consumer-facing brands embed Mice &amp; Elephants as their neutral communications layer — protecting their users' identities while keeping every lead inside their own platform. White-label. Fully managed. PDPO and GDPR compliant by design.
            </p>
            <div className="three-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
              {[
                { icon: '🛡', title: 'Your users stay protected', desc: 'Every enquiry they make goes through a masked relay identity. Their real email never reaches a vendor. Your brand earns their trust.' },
                { icon: '📊', title: 'Your leads stay yours', desc: 'Brokers and vendors only ever see a relay address. Every response comes back to you. No data leakage, no lead poaching.' },
                { icon: '⚡', title: 'One integration, any market', desc: 'Insurance, financial products, property, procurement. If your users compare and negotiate, the relay fits. We handle the infrastructure.' },
              ].map((card) => (
                <div key={card.title} className="sketch-card">
                  <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem', lineHeight: 1 }}>{card.icon}</div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.1rem', color: NIGHT, marginBottom: '0.5rem' }}>{card.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: '#3D4A6B', lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif" }}>{card.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center' }}>
              <a href="#contact" className="cta-btn-primary">Talk to us about embedding the relay →</a>
            </div>
          </div>
        </section>

        {/* sign up */}
        <section id="signup" style={{ backgroundColor: CREAM, padding: '5rem 2rem', borderBottom: BORDER }}>
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <div className="signup-inner" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
              <div>
                <span className="section-label" style={{ color: GREEN_D }}>— get early access</span>
                <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '2.4rem', color: NIGHT, lineHeight: 1.2, marginBottom: '1rem' }}>Be the first to get your relay identity.</h2>
                <p style={{ fontSize: '0.96rem', color: '#3D4A6B', lineHeight: 1.8, marginBottom: '1.25rem', fontFamily: "'DM Sans', sans-serif" }}>
                  Sign up and we'll assign you a Mice &amp; Elephants relay address the moment we open access. No spam. No sales calls. Just your shield, ready when you need it.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {['Your real email stays private — always', 'One-click kill switch to shut down the relay', 'Works for insurance, property, procurement and more'].map((pt) => (
                    <div key={pt} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: GREEN, border: `2.5px solid ${INK}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '2px 2px 0 ' + INK }}>
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6L5 9L10 3" stroke={INK} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <span style={{ fontSize: '0.88rem', color: '#3D4A6B', fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ backgroundColor: PARCHMENT, borderRadius: '20px', border: BORDER, padding: '2rem', boxShadow: SHADOW }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.4rem', color: NIGHT, marginBottom: '0.4rem' }}>Reserve your relay identity</h3>
                <p style={{ fontSize: '0.85rem', color: '#3D4A6B', marginBottom: '1.25rem', fontFamily: "'DM Sans', sans-serif" }}>A welcome email will arrive from <strong>noreply@miceandelephants.com</strong></p>
                <SignUpForm />
              </div>
            </div>
          </div>
        </section>

        {/* contact */}
        <section id="contact" className="dark-section" style={{ padding: '6rem 2rem' }}>
          <div className="contact-grid dark-inner" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            <div>
              <div style={{ marginBottom: '1.5rem' }}>
                <img src="/mne-logo.png" alt="Mice and Elephants" style={{ height: '90px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
              </div>
              <span className="section-label" style={{ color: GREEN }}>— work with us</span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '2.6rem', color: WHITE, lineHeight: 1.2, marginBottom: '1rem', marginTop: '0.5rem' }}>Your attention is your most valuable asset.</h2>
              <p style={{ color: '#C8D0E0', fontSize: '0.96rem', lineHeight: 1.8, marginBottom: '1.5rem', fontFamily: "'DM Sans', sans-serif" }}>
                Whether you're a consumer-facing platform, a business that negotiates at scale, or an individual tired of inbox pollution — Mice &amp; Elephants was built to give you the same leverage the big players have always had.
              </p>
              <p style={{ fontSize: '0.88rem', color: '#C8D0E0', fontFamily: "'DM Sans', sans-serif" }}>
                Or email us directly at{' '}
                <a href="mailto:contact@miceandelephants.com" style={{ color: GREEN, textDecoration: 'none', fontWeight: 800 }}>contact@miceandelephants.com</a>
              </p>
            </div>
            <div>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '20px', border: `3px solid rgba(200,208,224,0.28)`, padding: '2rem', boxShadow: `4px 4px 0 rgba(0,200,150,0.28)` }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.4rem', color: WHITE, marginBottom: '0.4rem' }}>Send us a message</h3>
                <p style={{ fontSize: '0.85rem', color: '#C8D0E0', marginBottom: '1.5rem', fontFamily: "'DM Sans', sans-serif" }}>We'll respond within one business day.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* footer */}
        <footer style={{ borderTop: BORDER, padding: '1.75rem 2rem', backgroundColor: CREAM }}>
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '0.82rem', color: '#6B7A99', fontFamily: "'DM Sans', sans-serif" }}>{`© ${new Date().getFullYear()} Mice & Elephants. All rights reserved.`}</span>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <a href="mailto:contact@miceandelephants.com" style={{ fontSize: '0.82rem', color: '#6B7A99', textDecoration: 'none', fontFamily: "'DM Sans', sans-serif" }}>contact@miceandelephants.com</a>
                <a href="/privacy" style={{ fontSize: '0.82rem', color: '#6B7A99', textDecoration: 'none', fontFamily: "'DM Sans', sans-serif" }}>Privacy Policy</a>
                <a href="/terms" style={{ fontSize: '0.82rem', color: '#6B7A99', textDecoration: 'none', fontFamily: "'DM Sans', sans-serif" }}>Terms</a>
              </div>
            </div>
            <div style={{ borderTop: '1px solid #E8EBF0', paddingTop: '0.75rem' }}>
              <span style={{ fontFamily: "'Caveat', cursive", fontSize: '1rem', color: '#C5CDD8' }}>your email is a private conversation, not a public lead.</span>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}