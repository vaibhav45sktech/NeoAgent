import { useEffect, useRef } from 'react'

const FEATURES = [
  {
    icon: '👁️',
    tag: '01 // STEALTH',
    title: 'Invisible Overlay',
    desc: 'Runs as a transparent, always-on-top overlay that is completely invisible to screen-recording software, OBS, and remote interview platforms like Zoom or Google Meet.',
    detail: 'WA_TranslucentBackground + no-capture window flags',
  },
  {
    icon: '🎙️',
    tag: '02 // AUDIO',
    title: 'Real-time Audio Processing',
    desc: 'Listens to the interviewer\'s voice live using faster-whisper for near-zero-latency transcription. Detects questions automatically and triggers answer generation instantly.',
    detail: 'faster-whisper + PyAudio pipeline',
  },
  {
    icon: '🔑',
    tag: '03 // LLM',
    title: 'Bring Your Own AI',
    desc: 'Attach your own API keys (OpenAI, Anthropic, Gemini) or run a fully local LLM via Ollama. Maximum privacy, zero data leakage, and configurable latency profiles.',
    detail: 'Ollama / Qwen2.5:14b · Local-first architecture',
  },
  {
    icon: '📸',
    tag: '04 // VISION',
    title: 'Screen Vision Mode',
    desc: 'Capture your screen on demand and ask the AI to analyze what\'s visible—code challenges, whiteboard problems, or shared documents—and receive instant contextual answers.',
    detail: 'mss screen capture + multimodal LLM vision',
  },
  {
    icon: '⚡',
    tag: '05 // STREAMING',
    title: 'Token Streaming',
    desc: 'Responses stream token-by-token directly into the overlay, so you see the answer forming in real-time—no waiting for the full response before you can start reading.',
    detail: 'stream=True · Async token generator',
  },
  {
    icon: '🧠',
    tag: '06 // CONTEXT',
    title: 'Persistent Context',
    desc: 'Maintains multi-turn conversation history throughout the interview. Follow-up answers understand the full context of what was said earlier in the session.',
    detail: 'Context window management · Role-based history',
  },
]

export default function HowItWorks() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('animate-fade-up')
      }),
      { threshold: 0.1 }
    )
    cardsRef.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" style={{ padding: '120px 24px', position: 'relative' }}>
      {/* Subtle left border glow */}
      <div style={{
        position: 'absolute', left: 0, top: '20%', bottom: '20%',
        width: 1, background: 'linear-gradient(to bottom, transparent, rgba(0,245,255,0.3), transparent)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>How it works</div>
          <h2 style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '-0.8px', color: '#e2f8fa' }}>
            Six pillars of the{' '}
            <span className="glow-text" style={{ color: '#00f5ff' }}>stealth engine</span>
          </h2>
          <p style={{ color: '#6b8c91', marginTop: 16, fontSize: 16, maxWidth: 500, margin: '16px auto 0' }}>
            Every component is engineered for speed, privacy, and invisibility.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: 24,
        }}>
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              ref={el => { cardsRef.current[i] = el }}
              className="neo-card"
              style={{ padding: 32, opacity: 0, animationDelay: `${i * 0.08}s`, animationFillMode: 'forwards' }}
            >
              {/* Tag */}
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#00f5ff', letterSpacing: 2, marginBottom: 16 }}>
                {f.tag}
              </div>
              {/* Icon */}
              <div style={{ fontSize: 36, marginBottom: 18, display: 'inline-block' }}>{f.icon}</div>
              {/* Title */}
              <h3 style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '1.2rem', color: '#e2f8fa', marginBottom: 12 }}>
                {f.title}
              </h3>
              {/* Description */}
              <p style={{ color: '#6b8c91', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>{f.desc}</p>
              {/* Detail chip */}
              <div style={{
                background: 'rgba(0,245,255,0.05)', border: '1px solid rgba(0,245,255,0.1)',
                borderRadius: 6, padding: '6px 12px', display: 'inline-block',
              }}>
                <span style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#00c8d4' }}>{f.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
