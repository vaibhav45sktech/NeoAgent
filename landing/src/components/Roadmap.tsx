import { useEffect, useRef } from 'react'

const ITEMS = [
  { done: true,  date: 'Day 01–02', title: 'Environment & App Shell',       desc: 'Python 3.11, Ollama, PyQt5, global hotkeys, and overlay widget scaffolded.' },
  { done: true,  date: 'Day 03–04', title: 'Screen Capture & Text Chat',    desc: 'mss screen grab, full multi-turn Ollama chat with context history.' },
  { done: true,  date: 'Day 05–06', title: 'Vision Mode & UI Polish',       desc: 'Multimodal LLM with base64 screen encoding. Transparent overlay styled.' },
  { done: true,  date: 'Day 07–08', title: 'Streaming & Context Engine',    desc: 'Real-time token streaming, full conversation history, system prompt editor.' },
  { done: true,  date: 'Day 09',    title: 'Stealth Mode',                  desc: 'WA_TranslucentBackground + no-capture flags — fully invisible to OBS & recorders.' },
  { done: true,  date: 'Day 10',    title: 'Audio Engine & Polish',         desc: 'faster-whisper integration, settings UI, requirements.txt, demo recorded.' },
  { done: false, date: 'Q3 2025',   title: 'Standalone Windows .exe',       desc: 'PyInstaller-packaged single-file executable. No Python required. One-click install.' },
  { done: false, date: 'Q3 2025',   title: 'Android .apk',                  desc: 'Mobile companion app via Kivy or React Native. Listen via phone mic, answer on screen.' },
  { done: false, date: 'Q4 2025',   title: 'Local LLM Model Marketplace',   desc: 'In-app model hub: pick Llama 3, Mistral, Gemma, Phi-3 — download and switch live.' },
  { done: false, date: 'Q4 2025',   title: 'Multi-platform Stealth',        desc: 'macOS + Linux stealth support. Extension for Chrome/Arc browsers.' },
  { done: false, date: '2026',      title: 'SaaS API Tier',                 desc: 'Optional cloud tier with BYO API keys, sub-150ms latency, and team sharing.' },
]

export default function Roadmap() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) (e.target as HTMLElement).style.opacity = '1'
      }),
      { threshold: 0.15 }
    )
    itemRefs.current.forEach(el => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="roadmap" style={{ padding: '120px 24px', position: 'relative' }}>
      <div style={{
        position: 'absolute', left: '50%', top: '10%', transform: 'translateX(-50%)',
        width: 800, height: 800, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,245,255,0.03) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>Timeline</div>
          <h2 style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '-0.8px', color: '#e2f8fa' }}>
            Build{' '}
            <span className="glow-text" style={{ color: '#00f5ff' }}>Roadmap</span>
          </h2>
          <p style={{ color: '#6b8c91', marginTop: 16, fontSize: 15 }}>
            10 days shipped. The future is already on the board.
          </p>
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', marginBottom: 56 }}>
          {[
            { color: '#00f5ff', label: 'Completed' },
            { color: 'transparent', label: 'Planned', border: '2px solid rgba(0,245,255,0.4)' },
          ].map(({ color, label, border }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: color, border, boxShadow: color !== 'transparent' ? '0 0 10px rgba(0,245,255,0.6)' : 'none' }} />
              <span style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: '#6b8c91' }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: 40 }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: 6, top: 0, bottom: 0, width: 2,
            background: 'linear-gradient(to bottom, #00f5ff 55%, rgba(0,245,255,0.15) 55%)',
          }} />

          {ITEMS.map((item, i) => (
            <div
              key={item.title}
              ref={el => { itemRefs.current[i] = el }}
              style={{
                display: 'flex', gap: 24, marginBottom: 40, position: 'relative',
                opacity: 0, transition: `opacity 0.6s ease ${i * 0.07}s`,
              }}
            >
              {/* Dot */}
              <div
                className={`timeline-dot${item.done ? ' done' : ''}`}
                style={{ position: 'absolute', left: -34, top: 4 }}
              />

              {/* Content */}
              <div className="neo-card" style={{ padding: '20px 24px', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 8 }}>
                  <h3 style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '1rem', color: '#e2f8fa' }}>{item.title}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#6b8c91' }}>{item.date}</span>
                    <span style={{
                      fontFamily: 'JetBrains Mono', fontSize: 10, padding: '3px 8px', borderRadius: 4,
                      background: item.done ? 'rgba(0,245,255,0.1)' : 'rgba(254,188,46,0.08)',
                      color: item.done ? '#00f5ff' : '#febc2e',
                      border: `1px solid ${item.done ? 'rgba(0,245,255,0.2)' : 'rgba(254,188,46,0.2)'}`,
                    }}>
                      {item.done ? '✓ DONE' : '◐ PLANNED'}
                    </span>
                  </div>
                </div>
                <p style={{ color: '#6b8c91', fontSize: 13, lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
