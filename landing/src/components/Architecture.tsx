const STACK = [
  { layer: 'UI Layer',        items: ['PyQt5 Overlay', 'Transparent Window', 'System Tray'], color: '#00f5ff' },
  { layer: 'Audio Engine',    items: ['PyAudio Input', 'faster-whisper STT', 'Q-Detection'], color: '#0080ff' },
  { layer: 'LLM Runtime',     items: ['Ollama SDK', 'Qwen2.5:14b / Custom', 'Stream=True'], color: '#00f5ff' },
  { layer: 'Vision Module',   items: ['mss Capture', 'Pillow Encode', 'Multimodal Prompt'], color: '#0080ff' },
  { layer: 'Context Manager', items: ['History[]', 'System Prompt', 'Window Trimmer'],      color: '#00f5ff' },
]

const DEPLOYS = [
  {
    icon: '▲', name: 'Vercel',
    desc: 'Frontend static hosting. Zero config, instant CDN, preview deployments on every push.',
    url: 'https://vercel.com',
  },
  {
    icon: '🚂', name: 'Railway',
    desc: 'Backend API hosting. Supports Python services, persistent storage, and custom domains.',
    url: 'https://railway.app',
  },
  {
    icon: '⚙️', name: 'Render',
    desc: 'Alternative backend with free-tier web services. Ideal for lightweight FastAPI wrappers.',
    url: 'https://render.com',
  },
]

export default function Architecture() {
  return (
    <section id="architecture" style={{ padding: '120px 24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', left: -200, bottom: '10%',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,128,255,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>For Developers</div>
          <h2 style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '-0.8px', color: '#e2f8fa' }}>
            System{' '}
            <span className="glow-text" style={{ color: '#00f5ff' }}>Architecture</span>
          </h2>
          <p style={{ color: '#6b8c91', marginTop: 16, fontSize: 15, maxWidth: 480, margin: '16px auto 0' }}>
            Open-source, modular, and contributor-friendly. Here's how the pieces fit together.
          </p>
        </div>

        {/* Stack diagram */}
        <div className="neo-card" style={{ padding: '32px 40px', marginBottom: 32 }}>
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#00f5ff', letterSpacing: 2, marginBottom: 24 }}>
            01 // APPLICATION STACK
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {STACK.map((s, i) => (
              <div key={s.layer} style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                <div style={{
                  width: 140, flexShrink: 0, fontFamily: 'JetBrains Mono', fontSize: 11,
                  color: s.color, border: `1px solid ${s.color}22`,
                  background: `${s.color}08`, borderRadius: 6, padding: '6px 12px', textAlign: 'center',
                }}>
                  {s.layer}
                </div>
                {/* Arrow */}
                <div style={{ color: '#6b8c91', fontSize: 14 }}>→</div>
                {/* Items */}
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {s.items.map(item => (
                    <span key={item} style={{
                      fontFamily: 'JetBrains Mono', fontSize: 11, color: '#e2f8fa',
                      background: 'rgba(0,245,255,0.04)', border: '1px solid rgba(0,245,255,0.1)',
                      borderRadius: 6, padding: '5px 10px',
                    }}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Branches */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginBottom: 32 }}>
          {[
            {
              branch: 'main',
              label: 'Production',
              color: '#00f5ff',
              desc: 'Stable, tested builds. Protected branch. Merges only via reviewed PRs. Deployed to all release channels.',
              items: ['✓ Stealth overlay', '✓ Audio engine', '✓ Local LLM', '✓ Screen capture'],
            },
            {
              branch: 'experiment',
              label: 'Development',
              color: '#febc2e',
              desc: 'Active development branch. Feature flags enabled. Breaking changes allowed. Test-bed for new LLM integrations.',
              items: ['◐ Android companion', '◐ .exe packager', '◐ Model hub UI', '◐ Cloud tier API'],
            },
          ].map(b => (
            <div key={b.branch} className="neo-card" style={{ padding: 28 }}>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#6b8c91', letterSpacing: 2, marginBottom: 12 }}>
                02 // BRANCH
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{
                  fontFamily: 'JetBrains Mono', fontSize: 13, fontWeight: 700,
                  color: b.color, background: `${b.color}12`,
                  border: `1px solid ${b.color}30`, borderRadius: 6, padding: '5px 12px',
                }}>
                  git: {b.branch}
                </div>
                <span style={{
                  fontFamily: 'JetBrains Mono', fontSize: 10, padding: '3px 8px', borderRadius: 4,
                  background: `${b.color}10`, color: b.color, border: `1px solid ${b.color}25`,
                }}>
                  {b.label}
                </span>
              </div>
              <p style={{ color: '#6b8c91', fontSize: 13, lineHeight: 1.65, marginBottom: 16 }}>{b.desc}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {b.items.map(item => (
                  <span key={item} style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: item.startsWith('✓') ? '#00f5ff' : '#6b8c91' }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Deploy targets */}
        <div>
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#6b8c91', letterSpacing: 2, marginBottom: 20, textAlign: 'center' }}>
            03 // DEPLOYMENT TARGETS
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {DEPLOYS.map(d => (
              <a
                key={d.name}
                href={d.url}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div className="neo-card" style={{ padding: 24, cursor: 'pointer' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <span style={{ fontSize: 20 }}>{d.icon}</span>
                    <span style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '1rem', color: '#e2f8fa' }}>{d.name}</span>
                  </div>
                  <p style={{ color: '#6b8c91', fontSize: 13, lineHeight: 1.65 }}>{d.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Start */}
        <div className="neo-card" style={{ padding: 32, marginTop: 32 }}>
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#00f5ff', letterSpacing: 2, marginBottom: 20 }}>
            04 // QUICK START
          </div>
          <div style={{
            background: '#000a0c', borderRadius: 10, padding: '24px 28px',
            border: '1px solid rgba(0,245,255,0.08)', fontFamily: 'JetBrains Mono', fontSize: 13,
            lineHeight: 2.2,
          }}>
            {[
              { prefix: '# ', text: 'Clone the repo', color: '#6b8c91' },
              { prefix: '$ ', text: 'git clone https://github.com/vaibhav45sktech/NeoAgent.git', color: '#e2f8fa' },
              { prefix: '# ', text: 'Pull the local model', color: '#6b8c91' },
              { prefix: '$ ', text: 'ollama pull qwen2.5:14b', color: '#e2f8fa' },
              { prefix: '# ', text: 'Install dependencies', color: '#6b8c91' },
              { prefix: '$ ', text: 'pip install -r requirements.txt', color: '#e2f8fa' },
              { prefix: '# ', text: 'Launch', color: '#6b8c91' },
              { prefix: '$ ', text: 'python main.py', color: '#00f5ff' },
            ].map((line, i) => (
              <div key={i} style={{ color: line.color }}>
                <span style={{ color: line.color === '#e2f8fa' || line.color === '#00f5ff' ? '#00f5ff' : '#6b8c91', marginRight: 8 }}>
                  {line.prefix}
                </span>
                {line.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
