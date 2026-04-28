const LINKS = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
    label: 'GitHub',
    href: 'https://github.com/vaibhav45sktech/NeoAgent',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    label: 'X / Twitter',
    href: 'https://twitter.com/',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
    label: 'Email',
    href: 'mailto:vaibhavmishra@example.com',
  },
]

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.07)',
      background: '#000',
      padding: '60px 24px 40px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Top row */}
        <div style={{
          display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 40, marginBottom: 48,
        }}>
          {/* Brand */}
          <div style={{ maxWidth: 300 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{
                width: 34, height: 34, border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(255,255,255,0.04)',
              }}>
                <span style={{ fontFamily: 'JetBrains Mono', fontSize: 13, fontWeight: 700, color: '#fff' }}>N</span>
              </div>
              <span style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: 18, color: '#fff' }}>
                Neo<em style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>Agent</em>
              </span>
            </div>
            <p style={{ color: '#555', fontSize: 13, lineHeight: 1.7 }}>
              An invisible AI interview co-pilot. Built in 10 days. Fully local. Always private.
            </p>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#444', letterSpacing: 2, marginBottom: 16, textTransform: 'uppercase' }}>
                Product
              </div>
              {['Features', 'Roadmap', 'Architecture', 'Early Access'].map(l => (
                <div key={l} style={{ marginBottom: 10 }}>
                  <a
                    href={`#${l.toLowerCase().replace(' ', '-')}`}
                    style={{ color: '#555', fontSize: 13, textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#555')}
                  >
                    {l}
                  </a>
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#444', letterSpacing: 2, marginBottom: 16, textTransform: 'uppercase' }}>
                Connect
              </div>
              {LINKS.map(link => (
                <div key={link.label} style={{ marginBottom: 10 }}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: '#555', fontSize: 13, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#555')}
                  >
                    <span style={{ opacity: 0.7 }}>{link.icon}</span>
                    {link.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', marginBottom: 28 }} />

        {/* Bottom row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <p style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: '#444' }}>
            © 2025 NeoAgent · MIT License · Built by Vaibhav Mishra
          </p>

          {/* Ethical disclaimer badge */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 8, padding: '8px 16px',
          }}>
            <span style={{ fontSize: 14 }}>⚠️</span>
            <p style={{ fontFamily: 'Inter', fontSize: 11, color: '#555', lineHeight: 1.5, maxWidth: 420 }}>
              <strong style={{ color: '#777' }}>Ethical Use Disclaimer:</strong> NeoAgent is built for educational and research purposes.
              Users are solely responsible for ensuring their use complies with applicable laws, platform policies, and professional ethics.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
