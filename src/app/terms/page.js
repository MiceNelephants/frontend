'use client';

import React from 'react';

export default function Terms() {
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
            Terms of Service
          </h1>
          <p style={{ fontSize: '0.85rem', color: '#6B7A99', marginBottom: '2.5rem', fontFamily: "'DM Sans', sans-serif" }}>
            Last updated: {new Date().toLocaleDateString('en-HK', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          <div className="prose">

            <p>
              Please read these Terms of Service carefully before using miceandelephants.com (the "Site") operated by Mice &amp; Elephants ("we", "us", "our"). By accessing or using the Site, you agree to be bound by these terms.
            </p>

            <hr className="divider"/>

            <h2>1. About Mice &amp; Elephants</h2>
            <p>
              Mice &amp; Elephants is a privacy-first neutral relay platform. We provide a communications intermediary service that allows users to interact with third parties — including insurance brokers, insurers, and vendors — without revealing their personal contact details.
            </p>
            <p>
              The relay service is currently in early access. Features described on this site may be in development and subject to change.
            </p>

            <h2>2. Use of the site</h2>
            <p>By using this site, you agree that you will:</p>
            <ul>
              <li>Provide accurate and truthful information in any forms you submit.</li>
              <li>Not use the site for any unlawful purpose.</li>
              <li>Not attempt to gain unauthorised access to any part of the site or its systems.</li>
              <li>Not use the relay service to send spam, fraudulent communications, or content that violates any applicable law.</li>
              <li>Not impersonate any person or entity.</li>
            </ul>

            <h2>3. The relay service</h2>
            <p>
              The Mice &amp; Elephants relay service generates a temporary email identity that forwards communications between you and a third party. You understand and agree that:
            </p>
            <ul>
              <li>The relay is a communications tool only — we are not a party to any agreement, transaction, or contract you enter into with a third party.</li>
              <li>We are not responsible for the actions, representations, or conduct of any broker, insurer, or vendor you interact with through the relay.</li>
              <li>We do not endorse any specific broker, insurer, or vendor listed or accessible through our platform.</li>
              <li>The relay service may be interrupted, modified, or discontinued at any time. We will endeavour to provide notice where possible.</li>
            </ul>

            <h2>4. Insurance and financial services</h2>
            <p>
              Mice &amp; Elephants is not an insurance broker, insurer, or financial adviser. We do not provide insurance products, financial advice, or recommendations. Any insurance products you purchase through a broker you connect with via our platform are subject to that broker's own terms and conditions.
            </p>
            <p>
              Navigator Insurance Brokers, where referenced on affiliated platforms, is a licensed insurance broker operating independently of Mice &amp; Elephants.
            </p>

            <h2>5. Intellectual property</h2>
            <p>
              All content on this site — including text, graphics, logos, illustrations, and the relay system design — is the property of Mice &amp; Elephants and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.
            </p>

            <h2>6. Disclaimer of warranties</h2>
            <p>
              The site and relay service are provided "as is" and "as available" without warranties of any kind, express or implied. We do not warrant that the site will be uninterrupted, error-free, or free of viruses or other harmful components.
            </p>

            <h2>7. Limitation of liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Mice &amp; Elephants shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the site or relay service, including but not limited to loss of data, loss of revenue, or loss of business opportunity.
            </p>
            <p>
              Our total liability to you for any claim arising from use of the site shall not exceed the amount you paid us in the twelve months preceding the claim (which, for a free service, is zero).
            </p>

            <h2>8. Third-party links and services</h2>
            <p>
              Our site may contain links to third-party websites or services. These are provided for convenience only. We have no control over third-party content and accept no responsibility for it. Visiting third-party links is at your own risk.
            </p>

            <h2>9. Privacy</h2>
            <p>
              Your use of this site is also governed by our <a href="/privacy">Privacy Policy</a>, which is incorporated into these Terms by reference.
            </p>

            <h2>10. Governing law</h2>
            <p>
              These Terms are governed by the laws of the Hong Kong Special Administrative Region. Any dispute arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Hong Kong.
            </p>

            <h2>11. Changes to these terms</h2>
            <p>
              We reserve the right to update these Terms at any time. We will indicate the date of the most recent update at the top of this page. Continued use of the site after changes are posted constitutes your acceptance of the updated Terms.
            </p>

            <h2>12. Contact</h2>
            <p>
              For any questions regarding these Terms, please contact us at:<br/>
              <a href="mailto:contact@miceandelephants.com">contact@miceandelephants.com</a>
            </p>

            <hr className="divider"/>

            <p style={{ fontSize: '0.82rem', color: '#9BA8C0' }}>
              These Terms of Service apply to miceandelephants.com and all subdomains operated by Mice &amp; Elephants.
            </p>

          </div>
        </div>

        {/* footer */}
        <footer style={{ borderTop: '3px solid #1A1A2E', padding: '1.5rem 2rem', backgroundColor: '#F6F8FA' }}>
          <div style={{ maxWidth: '48rem', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.82rem', color: '#6B7A99', fontFamily: "'DM Sans', sans-serif" }}>{`© ${new Date().getFullYear()} Mice & Elephants. All rights reserved.`}</span>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="/privacy" style={{ fontSize: '0.82rem', color: '#6B7A99', textDecoration: 'none', fontFamily: "'DM Sans', sans-serif" }}>Privacy Policy</a>
              <a href="/terms" style={{ fontSize: '0.82rem', color: '#1A1A2E', fontWeight: 700, textDecoration: 'none', fontFamily: "'DM Sans', sans-serif" }}>Terms</a>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
