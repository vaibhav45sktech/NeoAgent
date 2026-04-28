import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = ['Features', 'About', 'Roadmap', 'Architecture']

  return (
    <nav
      id="navbar"
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'all 0.3s',
        background: scrolled ? 'rgba(0,0,0,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
        padding: '0 24px',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            width: 34, height: 34,
            border: '2px solid rgba(255,255,255,0.25)',
            borderRadius: 8,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(255,255,255,0.05)',
          }}>
            <span style={{ fontFamily: 'JetBrains Mono', fontSize: 13, fontWeight: 700, color: '#fff' }}>N</span>
          </div>
          <span style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: 18, color: '#e2f8fa', letterSpacing: '-0.3px' }}>
            Neo<span style={{ color: '#fff', fontStyle: 'italic', fontFamily: 'Playfair Display, serif' }}>Agent</span>
          </span>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 36, alignItems: 'center' }} className="hidden md:flex">
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{
                color: '#777', fontSize: 14, fontWeight: 500,
                textDecoration: 'none', transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#777')}
            >
              {l}
            </a>
          ))}
          <a href="#hero" className="btn-primary" style={{ padding: '9px 22px', fontSize: 13, borderRadius: 8 }}>
            Get Early Access
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff', display: 'flex', flexDirection: 'column', gap: 5 }}
          className="flex md:hidden"
        >
          {[0,1,2].map(i => (
            <span key={i} style={{ width: 22, height: 2, background: '#fff', borderRadius: 2, display: 'block', transition: 'all 0.3s' }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: '#000', borderTop: '1px solid rgba(255,255,255,0.07)',
          padding: '16px 24px 24px', display: 'flex', flexDirection: 'column', gap: 20,
        }}>
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{ color: '#888', fontSize: 15, textDecoration: 'none', fontWeight: 500 }}
            >
              {l}
            </a>
          ))}
          <a href="#hero" className="btn-primary" style={{ textAlign: 'center', textDecoration: 'none', display: 'block' }}>
            Get Early Access
          </a>
        </div>
      )}
    </nav>
  )
}
