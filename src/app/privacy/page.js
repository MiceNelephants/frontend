'use client';

import React from 'react';

export default function PrivacyPolicy() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;700;800&family=Caveat:wght@400;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'DM Sans', sans-serif; background: #F6F8FA; }
        .prose h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.5rem; font-weight: 700; color: #1A1A2E; margin: 2.5rem 0 0.75rem; }
        .prose h3 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.15rem; font-weight: 600; color: #1A1A2E; margin: 1.75rem 0 0.5rem; }
        .prose p { font-size: 0.95rem; color: #3D4A6B; line-height: 1.85; margin-bottom: 1rem; }
        .prose ul { margin: 0.5rem 0 1rem 1.5rem; }
        .prose li { font-size: 0.95rem; color: #3D4A6B; line-height: 1.85; margin-bottom: 0.35rem; }
        .prose a { color: #009970; text-decoration: none; font-weight: 600; }
        .prose a:hover { text-decoration: underline; }
        .divider { border: none; border-top: 1px solid #E8EBF0; margin: 2rem 0; }
      `}</style>

      <div style={{ backgroundColor: '#F6F8FA', minHeight: '100vh' }}>

        {/* nav */}
        <header style={{ backgroundColor: '#F6F8FA', borderBottom: '3px solid #1A1A2E', padding: '0.6rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src="/mne-logo.png" alt="Mice and Elephants" style={{ height: '64px', width: 'auto' }} />
          </a>
          <a href="/" style={{ fontSize: '0.88rem', fontWeight: 700, color: '#1A1A2E', textDecoration: 'none', fontFamily: "'DM Sans', sans-serif", border: '3px solid #1A1A2E', padding: '0.5rem 1.25rem', borderRadius: '999px', boxShadow: '3px 3px 0 #1A1A2E' }}>
            ← Back to home
          </a>
        </header>

        {/* content */}
        <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '4rem 2rem 6rem' }}>

          <span style={{ fontFamily: "'Caveat', cursive", fontSize: '1rem', color: '#009970', display: 'block', marginBottom: '0.5rem' }}>— legal</span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '3rem', fontWeight: 700, color: '#1A1A2E', lineHeight: 1.15, marginBottom: '0.75rem' }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: '0.85rem', color: '#6B7A99', marginBottom: '2.5rem', fontFamily: "'DM Sans', sans-serif" }}>
            Last updated: {new Date().toLocaleDateString('en-HK', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          <div className="prose">

            <p>
              Mice &amp; Elephants ("we", "us", "our") operates miceandelephants.com. We are committed to protecting your personal data and your right to privacy. This policy explains what information we collect, how we use it, and your rights in relation to it.
            </p>
            <p>
              We comply with the <strong>Personal Data (Privacy) Ordinance (Cap. 486)</strong> (PDPO) of Hong Kong, and where applicable, the <strong>General Data Protection Regulation</strong> (GDPR) of the European Union.
            </p>

            <hr className="divider"/>

            <h2>1. Who we are</h2>
            <p>
              Mice &amp; Elephants is a privacy-first neutral relay platform based in Hong Kong. We act as a communications intermediary — allowing users to interact with brokers, insurers, and vendors without exposing their personal contact details.
            </p>
            <p>
              For data privacy enquiries, contact us at: <a href="mailto:contact@miceandelephants.com">contact@miceandelephants.com</a>
            </p>

            <h2>2. What data we collect</h2>
            <h3>a) Information you give us directly</h3>
            <ul>
              <li><strong>Contact form:</strong> your name, email address, and message content.</li>
              <li><strong>Early access sign-up:</strong> your name and email address.</li>
              <li><strong>Referral sign-up (e.g. via Electacar):</strong> your name and email address.</li>
            </ul>
            <h3>b) Information collected automatically</h3>
            <ul>
              <li>Basic server logs including IP address, browser type, and pages visited — retained for security purposes only.</li>
              <li>We do not currently use cookies or third-party analytics tracking.</li>
            </ul>
            <h3>c) Information we do NOT collect</h3>
            <ul>
              <li>We do not collect payment information.</li>
              <li>We do not build profiles of your browsing behaviour.</li>
              <li>We do not collect your phone number unless you provide it voluntarily in a message.</li>
            </ul>

            <h2>3. How we use your data</h2>
            <ul>
              <li>To respond to your enquiry or message.</li>
              <li>To send you early access communications you have signed up for.</li>
              <li>To operate and improve the relay platform.</li>
              <li>To comply with our legal obligations.</li>
            </ul>
            <p>We will never sell your personal data to third parties. We will never use your data for unsolicited marketing.</p>

            <h2>4. Legal basis for processing (GDPR)</h2>
            <p>Where GDPR applies, we process your personal data on the following lawful bases:</p>
            <ul>
              <li><strong>Consent</strong> — when you sign up for early access or submit a contact form.</li>
              <li><strong>Legitimate interests</strong> — for security logging and fraud prevention.</li>
              <li><strong>Legal obligation</strong> — where required by applicable law.</li>
            </ul>

            <h2>5. Data retention</h2>
            <ul>
              <li>Contact form submissions are retained for up to 24 months, then deleted.</li>
              <li>Early access sign-up data is retained until you unsubscribe or request deletion.</li>
              <li>Server logs are retained for up to 90 days for security purposes.</li>
            </ul>

            <h2>6. Who we share data with</h2>
            <p>We use the following third-party services to operate this website:</p>
            <ul>
              <li><strong>EmailJS</strong> — used to deliver contact and sign-up form emails. Your name and email are transmitted through their service. See <a href="https://www.emailjs.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">EmailJS Privacy Policy</a>.</li>
              <li><strong>Vercel</strong> — our website hosting provider. See <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel Privacy Policy</a>.</li>
            </ul>
            <p>We do not share your data with insurers, brokers, or any other third party without your explicit knowledge and consent.</p>

            <h2>7. Data masking and the relay</h2>
            <p>
              The core purpose of Mice &amp; Elephants is to protect your identity. When you use our relay service, your real contact details are never shared with the receiving party. They see only a temporary relay address. We retain the minimum data necessary to operate the relay and delete it when the relay is deactivated.
            </p>

            <h2>8. Your rights</h2>
            <p>Under PDPO and GDPR, you have the right to:</p>
            <ul>
              <li><strong>Access</strong> the personal data we hold about you.</li>
              <li><strong>Correct</strong> any inaccurate data.</li>
              <li><strong>Delete</strong> your data (right to erasure).</li>
              <li><strong>Withdraw consent</strong> at any time where consent is the basis for processing.</li>
              <li><strong>Object</strong> to processing based on legitimate interests.</li>
              <li><strong>Portability</strong> — receive your data in a portable format.</li>
            </ul>
            <p>
              To exercise any of these rights, email us at <a href="mailto:contact@miceandelephants.com">contact@miceandelephants.com</a>. We will respond within 30 days.
            </p>

            <h2>9. Cookies</h2>
            <p>
              This website currently does not use cookies for tracking or analytics. If we introduce cookies in future, we will update this policy and obtain your consent before doing so.
            </p>

            <h2>10. Security</h2>
            <p>
              We take appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or disclosure. All data is transmitted over HTTPS.
            </p>

            <h2>11. International transfers</h2>
            <p>
              Our email delivery service (EmailJS) may process data outside Hong Kong. Where this occurs, we ensure appropriate safeguards are in place in accordance with PDPO requirements.
            </p>

            <h2>12. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the date at the top of this page. Continued use of the site after changes constitutes acceptance of the updated policy.
            </p>

            <h2>13. Contact us</h2>
            <p>
              For any privacy-related questions or requests, please contact us at:<br/>
              <a href="mailto:contact@miceandelephants.com">contact@miceandelephants.com</a>
            </p>

            <hr className="divider"/>

            <p style={{ fontSize: '0.82rem', color: '#9BA8C0' }}>
              This policy applies to miceandelephants.com and all subdomains operated by Mice &amp; Elephants.
            </p>

          </div>
        </div>

        {/* footer */}
        <footer style={{ borderTop: '3px solid #1A1A2E', padding: '1.5rem 2rem', backgroundColor: '#F6F8FA' }}>
          <div style={{ maxWidth: '48rem', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.82rem', color: '#6B7A99', fontFamily: "'DM Sans', sans-serif" }}>{`© ${new Date().getFullYear()} Mice & Elephants. All rights reserved.`}</span>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="/privacy" style={{ fontSize: '0.82rem', color: '#1A1A2E', fontWeight: 700, textDecoration: 'none', fontFamily: "'DM Sans', sans-serif" }}>Privacy Policy</a>
              <a href="/terms" style={{ fontSize: '0.82rem', color: '#6B7A99', textDecoration: 'none', fontFamily: "'DM Sans', sans-serif" }}>Terms</a>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
