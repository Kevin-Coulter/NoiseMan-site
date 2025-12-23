import BuyButton from '../components/BuyButton.jsx'

const featureBullets = [
  'Targeted spectral reduction for dialogue, vocals, and ambience.',
  'Adaptive noise profile that reacts to changing rooms and gear.',
  'Low latency monitoring mode for tracking and streaming.',
  'Transparent smoothing to keep transients and room tone intact.',
]

const steps = [
  {
    title: 'Capture the noise floor',
    description:
      'Sample a short slice of room noise or let the auto profile listen in real time.',
  },
  {
    title: 'Reduce with intent',
    description:
      'Dial in reduction, threshold, and sensitivity while the plugin preserves clarity.',
  },
  {
    title: 'Finalize the tone',
    description:
      'Shape the remaining ambience with the smoothness and detail controls.',
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
]

const faqs = [
  {
    question: 'What is NoiseMan?',
    answer:
      'NoiseMan is a noise reduction plugin for VST3 & CLAP that removes consistent background noise while keeping your signal natural.',
  },
  {
    question: 'Is there a free trial?',
    answer:
      'Trial builds are planned. Use the Download Trial button to check back for availability.',
  },
  {
    question: 'Does it work in Reaper?',
    answer:
      'Yes. Reaper is tested. Other modern DAWs should work when they support VST3 or CLAP.',
  },
  {
    question: 'Is an internet connection required?',
    answer:
      'No. The plugin runs locally. Internet is only needed if you choose to check for updates.',
  },
  {
    question: 'How does licensing work?',
    answer:
      'Each purchase grants a license for a single user. Your checkout and license delivery are handled by Paddle.',
  },
  {
    question: 'What is the refund policy?',
    answer:
      'Refunds are handled directly by Paddle according to their policies.',
  },
  {
    question: 'Does it support macOS or Linux?',
    answer:
      'Support for macOS and Linux is planned, but only Windows 10/11 is supported today.',
  },
  {
    question: 'How are updates delivered?',
    answer:
      'Updates are provided as new installers and version notes on the product page.',
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
              Remove hiss, room noise, and fans without dulling the performance. A modern
              reduction tool built for today's sessions.
            </p>
            <p className="hero-meta reveal" style={{ '--delay': '0.15s' }}>
              Developed by Kevin Coulter.
            </p>
            <div className="cta-row reveal" style={{ '--delay': '0.2s' }}>
              <BuyButton />
              <button
                className="btn btn-secondary"
                type="button"
                disabled
                title="Trial builds coming soon"
              >
                Download Trial
              </button>
            </div>
            <p className="fine-print reveal" style={{ '--delay': '0.25s' }}>
              Trial builds coming soon. Checkout is handled by Paddle.
            </p>
          </div>
          <div className="hero-panel hero-panel-image reveal" style={{ '--delay': '0.15s' }}>
            <div className="panel-header">
              <span className="panel-chip">UI Preview</span>
              <span className="panel-title">NoiseMan Interface</span>
            </div>
            <img
              src="/noiseMan.png"
              alt="NoiseMan noise reduction plugin interface preview"
              loading="lazy"
            />
            <p className="panel-caption">
              Adaptive reduction, quick controls, and low-latency monitoring.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="overview">
        <div className="container">
          <div className="section-heading">
            <h2>Overview</h2>
            <p>
              NoiseMan is designed for creators who need clean audio fast. Use it on vocals,
              podcasts, streams, or full mixes to keep noise under control without killing the
              life in the performance.
            </p>
          </div>
          <ul className="feature-list">
            {featureBullets.map((item, index) => (
              <li className="reveal" style={{ '--delay': `${index * 0.05}s` }} key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="how">
        <div className="container">
          <div className="section-heading">
            <h2>How it works</h2>
            <p>Three quick steps to a cleaner signal.</p>
          </div>
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

      <section className="section" id="formats">
        <div className="container">
          <div className="section-heading">
            <h2>Formats & compatibility</h2>
            <p>Ready for modern DAWs and future-proof workflows.</p>
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
            <p>Simple, one-time license with checkout handled by Paddle.</p>
          </div>
          <div className="pricing-card reveal">
            <div>
              <p className="pricing-title">NoiseMan License</p>
              <p className="pricing-price">$79</p>
              <p className="pricing-note">One-time purchase. Delivered instantly.</p>
            </div>
            <ul className="compact-list">
              <li>One user license</li>
              <li>VST3 + CLAP formats</li>
              <li>Windows 10/11 support</li>
              <li>Free updates for the current major version</li>
            </ul>
            <BuyButton className="pricing-cta" />
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
