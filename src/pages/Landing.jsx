import BuyButton from '../components/BuyButton.jsx'

const whatItDoes = [
  'Reduces steady and semi-steady noise in real time.',
  'Preserves transients with adjustable reduction and smoothing.',
  'Shows signal and reduction behavior with live visuals.',
]

const whyDifferent = [
  'Deterministic DSP. No neural nets or hidden heuristics.',
  'You capture the noise profile; the plugin follows your reference.',
  'Predictable artifacts with clear controls under automation.',
  'FFT-domain reduction with adjustable curve and smoothing.',
  'Built for real-time inserts, not offline renders.',
]

const useCases = [
  'Dialogue cleanup for podcasts and video.',
  'Room tone reduction on vocal takes.',
  'Guitar and amp noise control between phrases.',
  'Live streaming noise management.',
  'Bus-level cleanup for steady noise in stems.',
  'Cleanup for synths or samplers with persistent hiss.',
]

const steps = [
  {
    title: 'Capture the noise',
    description:
      'Learn a short slice of noise so the plugin has a clear reference.',
  },
  {
    title: 'Set reduction',
    description:
      'Adjust reduction and smoothing to balance cleanup with natural tone.',
  },
  {
    title: 'Shape the curve',
    description:
      'Tune the spectral curve to keep transients intact and artifacts predictable.',
  },
]

const algorithms = [
  {
    title: 'Algorithm 1: Bypass',
    summary: 'No processing. Clean signal passes through unchanged.',
    bullets: ['Use for A/B checks and gain staging.', 'Zero reduction, zero artifacts.'],
  },
  {
    title: 'Algorithm 2: Spectral Subtraction',
    summary:
      'Magnitude-based subtraction using a learned noise profile in the FFT domain.',
    formula: [
      '|S_hat(w)|^2 = |Y(w)|^2 - alpha * |N(w)|^2',
      'alpha = 1.0 + reduction * 4.0',
    ],
    pipeline: [
      'Profile: capture a short noise-only slice.',
      'Analysis: FFT to get complex bins.',
      'Deduction: subtract alpha * noise power.',
      'Floor: apply a spectral floor (beta).',
      'Synthesis: IFFT using original phase.',
    ],
    notes: [
      'Phase is preserved; only magnitudes are reduced.',
      'Spectral floor + gain smoothing reduce musical noise.',
    ],
  },
  {
    title: 'Algorithm 3: Wiener Filter',
    summary: 'Gain-based attenuation using a learned noise profile.',
    formula: [
      'G(w) = P_S(w) / (P_S(w) + P_N(w))',
      'G = SNR / (SNR + 1)',
    ],
    pipeline: [
      'Analysis: FFT to get complex bins.',
      'Estimation: use the noise profile to estimate P_N.',
      'Filtering: apply the Wiener gain per bin.',
      'Synthesis: IFFT + overlap-add.',
    ],
    notes: [
      'Smoother than subtraction because it scales bins instead of cutting.',
      'Typically lower musical-noise artifacts.',
    ],
  },
]

const compatibility = [
  {
    title: 'Formats',
    details: ['VST3', 'CLAP'],
  },
  {
    title: 'OS Support',
    details: ['Windows 10/11', 'macOS (planned)', 'Linux (planned)'],
  },
  {
    title: 'DAWs',
    details: [
      'Tested: Reaper',
      'Should work: Ableton Live, FL Studio, Studio One, Cubase, Bitwig',
    ],
  },
  {
    title: 'Specs',
    details: [
      'Latency: [LATENCY: fill in]',
      'CPU: [CPU: fill in]',
      'Stage: Early beta / active development',
    ],
  },
]

const faqs = [
  {
    question: 'What is the latency?',
    answer:
      'Latency is set by FFT size and windowing. It is low but non-zero. [LATENCY: fill in]',
  },
  {
    question: 'Will it add artifacts?',
    answer:
      'All spectral reduction can leave artifacts. NoiseMan makes them predictable and controllable through reduction and smoothing.',
  },
  {
    question: 'How does Learn Noise work?',
    answer:
      'Capture a short slice of noise from the input. That profile becomes the reference for reduction.',
  },
  {
    question: 'Is it for music or voice?',
    answer:
      'Both. It targets steady and semi-steady noise, so it works on vocals, dialogue, instruments, and room tone.',
  },
  {
    question: 'Is there a trial?',
    answer:
      'A Lite version is planned with limited controls or quality caps. The full version is paid.',
  },
  {
    question: 'How does licensing work?',
    answer:
      'License details are provided at checkout and in the Terms/EULA.',
  },
  {
    question: 'What formats are supported?',
    answer: 'VST3 and CLAP.',
  },
  {
    question: 'What DAWs are compatible?',
    answer:
      'NoiseMan runs on Windows in any DAW that supports VST3 or CLAP. macOS and Linux are planned.',
  },
]

function Landing() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow reveal">Noise reduction plugin for VST3 & CLAP.</p>
            <h1 className="hero-title reveal" style={{ '--delay': '0.05s' }}>
              NoiseMan
            </h1>
            <p className="hero-subtitle reveal" style={{ '--delay': '0.1s' }}>
              Clean up hiss, hum, and room tone without chasing artifacts. Classical DSP,
              explicit noise learning, and predictable controls for VST3 + CLAP.
            </p>
            <p className="hero-meta reveal" style={{ '--delay': '0.15s' }}>
              Developed by Kevin Coulter.
            </p>
            <div className="cta-row reveal" style={{ '--delay': '0.2s' }}>
              <BuyButton />
              <button className="btn btn-secondary" type="button" disabled title="Lite planned">
                Download Lite (planned)
              </button>
            </div>
            <p className="fine-print reveal" style={{ '--delay': '0.25s' }}>
              No black boxes. No one-knob magic. Checkout is handled by FastSpring.
            </p>
          </div>
          <div className="hero-panel hero-panel-image reveal" style={{ '--delay': '0.15s' }}>
            <div className="panel-header">
              <span className="panel-chip">UI Preview</span>
              <span className="panel-title">NoiseMan Interface</span>
            </div>
            <div className="hero-image-frame">
              <img
                src="/noiseMan.png"
                alt="NoiseMan noise reduction plugin interface preview"
                loading="lazy"
              />
            </div>
            <p className="panel-caption">
              Adaptive reduction, quick controls, and low-latency monitoring.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="overview">
        <div className="container">
          <div className="section-heading">
            <h2>What it does</h2>
            <p>
              NoiseMan reduces steady and semi-steady background noise in real time, with
              controls that keep the cleanup musical and predictable.
            </p>
          </div>
          <ul className="feature-list">
            {whatItDoes.map((item, index) => (
              <li className="reveal" style={{ '--delay': `${index * 0.05}s` }} key={item}>
                {item}
              </li>
            ))}
          </ul>
          <div className="overview-grid">
            <div className="overview-block">
              <h3>Why it is different</h3>
              <ul className="compact-list">
                {whyDifferent.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="overview-block">
              <h3>Use cases</h3>
              <ul className="compact-list">
                {useCases.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="how">
        <div className="container">
          <div className="section-heading">
            <h2>How it works</h2>
            <p>
              Capture a noise profile, then reduce matching content in real time. You control
              reduction strength, smoothing, and the curve so the artifacts stay predictable.
            </p>
          </div>
          <details className="tech-note">
            <summary>Tech note</summary>
            <p>
              FFT-domain analysis with learned noise profiles, spectral reduction, smoothing,
              and adjustable reduction curves. Deterministic processing with no neural nets.
            </p>
          </details>
          <div className="card-grid">
            {steps.map((step, index) => (
              <article className="card reveal" style={{ '--delay': `${index * 0.08}s` }} key={step.title}>
                <span className="card-step">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="algorithms">
        <div className="container">
          <div className="section-heading">
            <h2>Algorithms</h2>
            <p>Three processing modes with predictable DSP behavior.</p>
          </div>
          <div className="algo-grid">
            {algorithms.map((algo) => (
              <article className="card algo-card" key={algo.title}>
                <h3>{algo.title}</h3>
                <p>{algo.summary}</p>
                {algo.bullets && (
                  <ul className="compact-list">
                    {algo.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {algo.formula && (
                  <pre className="math-block">
                    {algo.formula.join('\n')}
                  </pre>
                )}
                {algo.pipeline && (
                  <div className="algo-steps">
                    <p className="algo-label">Pipeline</p>
                    <ul className="compact-list">
                      {algo.pipeline.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {algo.notes && (
                  <div className="algo-steps">
                    <p className="algo-label">Notes</p>
                    <ul className="compact-list">
                      {algo.notes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="formats">
        <div className="container">
          <div className="section-heading">
            <h2>Formats & compatibility</h2>
            <p>VST3 and CLAP support with clear, published specs.</p>
          </div>
          <div className="card-grid">
            {compatibility.map((item) => (
              <article className="card reveal" key={item.title}>
                <h3>{item.title}</h3>
                <ul className="compact-list">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="pricing">
        <div className="container">
          <div className="section-heading">
            <h2>Pricing</h2>
            <p>Full version paid. Lite version planned.</p>
          </div>
          <div className="pricing-card reveal">
            <div>
              <p className="pricing-title">NoiseMan (Full)</p>
              <p className="pricing-price">$24.99</p>
              <p className="pricing-note">One-time purchase.</p>
            </div>
            <ul className="compact-list">
              <li>Full version paid</li>
              <li>VST3 + CLAP formats</li>
              <li>Windows 10/11 support</li>
              <li>macOS and Linux planned</li>
            </ul>
            <BuyButton className="pricing-cta" />
          </div>
          <div className="checkout-embed">
            <div id="fsc-embedded-checkout-container"></div>
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container">
          <div className="section-heading">
            <h2>FAQ</h2>
            <p>Answers to common questions before you buy.</p>
          </div>
          <div className="faq-grid">
            {faqs.map((item) => (
              <details className="faq-item" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Landing
