import { useEffect, useRef, useState } from 'react'

const TYPED_WORDS = ['interviews.', 'assessments.', 'coding rounds.', 'HR rounds.']

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const word = TYPED_WORDS[wordIdx]
    if (!deleting && displayed.length < word.length) {
      timeout.current = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === word.length) {
      timeout.current = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timeout.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setWordIdx(i => (i + 1) % TYPED_WORDS.length)
    }
    return () => { if (timeout.current) clearTimeout(timeout.current) }
  }, [displayed, deleting, wordIdx])

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 120,
        paddingBottom: 80,
        background: '#000',
      }}
    >
      {/* Soft radial highlight — very subtle white */}
      <div style={{
        position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)',
        width: 800, height: 600, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(255,255,255,0.03) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 900, margin: '0 auto', padding: '0 24px',
        textAlign: 'center', position: 'relative', zIndex: 1,
      }}>

        {/* ── Main Headline ── tweakcn.com style: bold sans + italic serif mix */}
        <h1
          className="animate-fade-up"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 900,
            lineHeight: 1.06,
            fontSize: 'clamp(2.8rem, 6.5vw, 5.2rem)',
            marginBottom: 28,
            letterSpacing: '-2px',
            color: '#ffffff',
          }}
        >
          NeoAgent: Your{' '}
          {/* "AI edge" is the italic serif accent — mirrors "Perfect" in reference */}
          <span
            className="italic-serif"
            style={{ color: '#ffffff', fontWeight: 900, fontSize: '1.05em' }}
          >
            AI edge
          </span>
          <br />
          for smarter{' '}
          <span
            className="italic-serif"
            style={{ color: '#ffffff', fontWeight: 900 }}
          >
            {displayed}
          </span>
          <span style={{ color: '#fff', animation: 'blink 1s step-end infinite', fontWeight: 100 }}>|</span>
        </h1>

        {/* Sub-headline */}
        <p
          className="animate-fade-up"
          style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            fontStyle: 'italic',
            fontWeight: 700,
            color: '#aaaaaa',
            lineHeight: 1.5,
            maxWidth: 620,
            margin: '0 auto 40px',
            animationDelay: '0.2s',
            opacity: 0,
            animationFillMode: 'forwards',
            whiteSpace: 'nowrap',
          }}
        >
          Bypass the stress invisible AI answers, in real-time.
        </p>

        {/* CTA Buttons */}
        <div
          className="animate-fade-up"
          style={{
            display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap',
            animationDelay: '0.35s', opacity: 0, animationFillMode: 'forwards',
          }}
        >
          <a href="#demo" className="btn-primary" style={{ textDecoration: 'none' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
            Watch the Demo →
          </a>
          <a
            href="https://github.com/vaibhav45sktech/NeoAgent"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
            style={{ textDecoration: 'none' }}
          >
            Get Early Access
          </a>
        </div>

        {/* Demo video frame */}
        <div id="demo" className="animate-fade-up animate-pulse-glow" style={{
          marginTop: 80,
          animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards',
        }}>
          <div className="video-frame scanline" style={{ maxWidth: 860, margin: '0 auto', aspectRatio: '16/9' }}>
            {/* Browser chrome bar */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 30, zIndex: 3,
              background: 'rgba(10,10,10,0.98)', borderBottom: '1px solid rgba(255,255,255,0.07)',
              display: 'flex', alignItems: 'center', paddingLeft: 12, gap: 7,
            }}>
              {['#ff5f57', '#febc2e', '#28c840'].map(c => (
                <div key={c} style={{ width: 11, height: 11, borderRadius: '50%', background: c, opacity: 0.85 }} />
              ))}
              <div style={{
                marginLeft: 12, flex: 1, height: 18, background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)', borderRadius: 4,
                maxWidth: 260, display: 'flex', alignItems: 'center', paddingLeft: 8,
              }}>
                <span style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#555' }}>🔒 neoagent.app/demo</span>
              </div>
            </div>

            {/* ─── DEMO VIDEO ───
                Drop your video file at:  landing/public/demo.mp4
                It will auto-play, loop, and fill the cinematic frame below.
            */}
            <video
              src="/demo.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                paddingTop: 30,
                background: '#000',
              }}
            >
              {/* Fallback if no video file yet */}
              <div style={{
                position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                background: '#0a0a0a',
              }}>
                <p style={{ fontFamily: 'JetBrains Mono', fontSize: 14, color: '#444' }}>
                  // Drop demo.mp4 in /public to preview
                </p>
              </div>
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
