const TECH = ['Python 3.11', 'PyQt5', 'Ollama SDK', 'faster-whisper', 'mss', 'keyboard']
const SKILLS = [
  { label: 'Systems Programming', pct: 88 },
  { label: 'LLM Integration', pct: 92 },
  { label: 'UI/UX Engineering', pct: 80 },
  { label: 'Local AI Architecture', pct: 95 },
]

export default function About() {
  return (
    <section id="about" style={{ padding: '120px 24px', position: 'relative', overflow: 'hidden' }}>
      {/* BG accent */}
      <div style={{
        position: 'absolute', right: -200, top: '10%',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,245,255,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>The Human Behind the Machine</div>
          <h2 style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '-0.8px', color: '#e2f8fa' }}>
            About &amp;{' '}
            <span className="glow-text" style={{ color: '#00f5ff' }}>Inspiration</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
          {/* Dev Card */}
          <div className="neo-card" style={{ padding: 40 }}>
            {/* Avatar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 32 }}>
              <div style={{
                width: 72, height: 72, borderRadius: '50%',
                border: '2px solid #00f5ff',
                background: 'linear-gradient(135deg, rgba(0,245,255,0.15), rgba(0,128,255,0.1))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 20px rgba(0,245,255,0.25)',
                fontSize: 32, flexShrink: 0,
              }}>🧑‍💻</div>
              <div>
                <div style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '1.25rem', color: '#e2f8fa' }}>
                  Vaibhav Mishra
                </div>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: '#00f5ff', marginTop: 4, letterSpacing: 1 }}>
                  Developer · AI Engineer
                </div>
              </div>
            </div>

            {/* Bio */}
            <p style={{ color: '#6b8c91', fontSize: 14, lineHeight: 1.75, marginBottom: 28 }}>
              Builder obsessed with local AI, stealth tooling, and fast prototypes.
              NeoAgent was designed and shipped in <strong style={{ color: '#e2f8fa' }}>10 days</strong> as a ground-up
              exploration of running LLMs entirely on-device—no cloud, no compromise.
            </p>

            {/* Skills */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {SKILLS.map(s => (
                <div key={s.label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: '#6b8c91' }}>{s.label}</span>
                    <span style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: '#00f5ff' }}>{s.pct}%</span>
                  </div>
                  <div style={{ height: 4, borderRadius: 2, background: 'rgba(0,245,255,0.08)', overflow: 'hidden' }}>
                    <div style={{
                      height: '100%', borderRadius: 2, width: `${s.pct}%`,
                      background: 'linear-gradient(90deg, #00f5ff, #0080ff)',
                      boxShadow: '0 0 8px rgba(0,245,255,0.4)',
                    }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 28 }}>
              {TECH.map(t => (
                <span key={t} style={{
                  fontFamily: 'JetBrains Mono', fontSize: 11, color: '#00c8d4',
                  background: 'rgba(0,245,255,0.06)', border: '1px solid rgba(0,245,255,0.12)',
                  borderRadius: 6, padding: '4px 10px',
                }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Inspiration Card */}
          <div className="neo-card" style={{ padding: 40, display: 'flex', flexDirection: 'column', gap: 28 }}>
            <div>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#00f5ff', letterSpacing: 2, marginBottom: 12 }}>
                01 // THE PROBLEM
              </div>
              <h3 style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '1.1rem', color: '#e2f8fa', marginBottom: 10 }}>
                Interviews are broken.
              </h3>
              <p style={{ color: '#6b8c91', fontSize: 14, lineHeight: 1.75 }}>
                Modern technical interviews test memorization more than skill. Candidates who prep scripted answers win over
                those who are genuinely capable. NeoAgent levels the field by turning raw thinking into polished responses—in real time.
              </p>
            </div>

            <div style={{ height: 1, background: 'linear-gradient(90deg, rgba(0,245,255,0.15), transparent)' }} />

            <div>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#00f5ff', letterSpacing: 2, marginBottom: 12 }}>
                02 // THE MISSION
              </div>
              <h3 style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '1.1rem', color: '#e2f8fa', marginBottom: 10 }}>
                Democratize success.
              </h3>
              <p style={{ color: '#6b8c91', fontSize: 14, lineHeight: 1.75 }}>
                Big tech candidates at top schools have unfair coaching advantages. NeoAgent is an equalizer—a tool that
                gives every developer access to the kind of real-time cognitive support previously only available to those with elite networks.
              </p>
            </div>

            <div style={{ height: 1, background: 'linear-gradient(90deg, rgba(0,245,255,0.15), transparent)' }} />

            <div>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#00f5ff', letterSpacing: 2, marginBottom: 12 }}>
                03 // THE CURIOSITY
              </div>
              <h3 style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '1.1rem', color: '#e2f8fa', marginBottom: 10 }}>
                Exploring local LLMs.
              </h3>
              <p style={{ color: '#6b8c91', fontSize: 14, lineHeight: 1.75 }}>
                Running a 14B parameter model locally at competitive speed is a genuinely hard engineering problem.
                NeoAgent is partly a research project—proving that private, zero-latency AI assistance is possible
                without any cloud dependency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
