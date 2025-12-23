import { Link, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="background-glow" aria-hidden="true" />
      <header className="site-header">
        <div className="container nav-row">
          <Link className="logo" to="/">
            NoiseMan
          </Link>
          <nav className="nav-links">
            <a href="/#overview">Overview</a>
            <a href="/#how">How it Works</a>
            <a href="/#formats">Formats</a>
            <a href="/#pricing">Pricing</a>
            <a href="/#faq">FAQ</a>
          </nav>
          <div className="nav-actions">
            <a className="btn btn-secondary btn-small" href="/#pricing">
              Buy
            </a>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <p className="footer-logo">NoiseMan</p>
            <p className="footer-tagline">Noise reduction plugin for VST3 & CLAP.</p>
          </div>
          <div className="footer-links">
            <p className="footer-label">Contact</p>
            <a href="mailto:support@YOURDOMAIN.com">support@YOURDOMAIN.com</a>
            <p className="footer-label">Legal</p>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms & EULA</Link>
          </div>
          <div className="footer-meta">
            <p>Developed by Kevin Coulter.</p>
            <p>Copyright {new Date().getFullYear()} Kevin Coulter</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
