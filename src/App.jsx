// import React, { useState } from 'react'


function App() {
  return (
    <>
  {/* Epic Neural Background */}
  <div className="neural-background" />
  {/* Floating Geometric Shapes */}
  <div className="geometric-shapes">
    <div className="shape" />
    <div className="shape" />
    <div className="shape" />
    <div className="shape" />
  </div>
  {/* Neural Network Lines */}
  <div className="neural-lines">
    <div className="neural-line" />
    <div className="neural-line" />
    <div className="neural-line" />
  </div>
  {/* Header */}
  <header className="glass">
    <nav>
      <a href="#home" className="logo">
        <svg
          className="logo-icon"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="logoGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" style={{ stopColor: "#e0a3ff" }} />
              <stop offset="50%" style={{ stopColor: "#ff69b4" }} />
              <stop offset="100%" style={{ stopColor: "#9370db" }} />
            </linearGradient>
          </defs>
          <circle cx={50} cy={30} r={8} fill="url(#logoGradient)" opacity="0.8">
            <animate
              attributeName="opacity"
              values="0.8;1;0.8"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx={30} cy={60} r={6} fill="url(#logoGradient)" opacity="0.6">
            <animate
              attributeName="opacity"
              values="0.6;1;0.6"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx={70} cy={65} r={7} fill="url(#logoGradient)" opacity="0.7">
            <animate
              attributeName="opacity"
              values="0.7;1;0.7"
              dur="1.8s"
              repeatCount="indefinite"
            />
          </circle>
          <line
            x1={50}
            y1={30}
            x2={30}
            y2={60}
            stroke="url(#logoGradient)"
            strokeWidth={2}
            opacity="0.6"
          >
            <animate
              attributeName="opacity"
              values="0.6;1;0.6"
              dur="3s"
              repeatCount="indefinite"
            />
          </line>
          <line
            x1={50}
            y1={30}
            x2={70}
            y2={65}
            stroke="url(#logoGradient)"
            strokeWidth={2}
            opacity="0.6"
          >
            <animate
              attributeName="opacity"
              values="0.6;1;0.6"
              dur="2.2s"
              repeatCount="indefinite"
            />
          </line>
          <line
            x1={30}
            y1={60}
            x2={70}
            y2={65}
            stroke="url(#logoGradient)"
            strokeWidth={2}
            opacity="0.6"
          >
            <animate
              attributeName="opacity"
              values="0.6;1;0.6"
              dur="2.8s"
              repeatCount="indefinite"
            />
          </line>
        </svg>
        PERSONAL PORTFOLIO
      </a>
      <ul className="nav-links">
        <li>
          <a href="#features">About</a>
        </li>
        <li>
          <a href="#showcase">Education</a>
        </li>
        <li>
          <a href="#timeline">Projects</a>
        </li>
        <li>
          <a href="#contact">Connect</a>
        </li>
        <li>
          <a
            href="https://github.com/Ashken-Soriano/Ashken-Soriano"
            target="_blank"
            className="external-link"
          >
            GitHub
          </a>
        </li>
      </ul>
      <div className="mobile-menu-toggle">
        <div className="hamburger-line" />
        <div className="hamburger-line" />
        <div className="hamburger-line" />
      </div>
    </nav>
    <div className="mobile-nav">
      <a href="#features">Neural</a>
      <a href="#showcase">Matrix</a>
      <a href="#timeline">Evolution</a>
      <a href="#contact">Connect</a>
      <a href="https://example.com" target="_blank" className="external-link">
        External
      </a>
    </div>
  </header>


  {/* Section 1: Hero */}
  <section className="hero" id="home">
    <div className="hero-content">
      <div className="hero-subtitle">Welcome to my</div>
      <h1>PERSONAL PORTFOLIO</h1>
      <div className="hero-description">
        <p>
          Experience the convergence of myself through
          this portfolio.
        </p>
      </div>
      <div className="hero-stats">
        <div className="hero-stat">
          <span className="hero-stat-number">99.9%</span>
          <span className="hero-stat-label">Neural Sync Rate</span>
        </div>
        <div className="hero-stat">
          <span className="hero-stat-number">∞</span>
          <span className="hero-stat-label">Processing Power</span>
        </div>
        <div className="hero-stat">
          <span className="hero-stat-number">0.001</span>
          <span className="hero-stat-label">Latency (ms)</span>
        </div>
        <div className="hero-stat">
          <span className="hero-stat-number">24/7</span>
          <span className="hero-stat-label">Neural Access</span>
        </div>
      </div>
      <div className="cta-buttons">
        <a href="#features" className="cta-button">
          Initialize About Me
        </a>
        <a href="#timeline" className="cta-button secondary">
          Explore My Work
        </a>
      </div>
    </div>
  </section>


  {/* Section 2: Diagonal Features */}
  <section className="features" id="features">
    <div className="features-container">
      <h2 className="section-title">ABOUT ME</h2>
      <div className="diagonal-grid">
        <div className="feature-row">
          <div className="feature-content glass">
            <div className="feature-icon">🧠</div>
            <h3>Ashken Soriano</h3>
            <p>
              Hi! I’m Ashken Soriano, a third-year college student at La Verdad Christian College. 
              I like to think of myself as a kind and empathetic person who values understanding others and building meaningful connections. 
              While I’m still learning and developing my technical skills, I’m eager and open to new experiences, challenges, and opportunities to grow.
            </p>
          </div>
          <div className="feature-visual glass" />
        </div>
        <div className="feature-row">
          <div className="feature-content glass">
            <div className="feature-icon">⚡</div>
            <h3>My Passion</h3>
            <p>
              Outside of academics, I have a passion for playing the guitar, chess, and exploring new hobbies. 
              I enjoy activities that challenge my mind and creativity while also allowing me to relax and connect with others.
            </p>
          </div>
          <div className="feature-visual glass" />
        </div>
        <div className="feature-row">
          <div className="feature-content glass">
            <div className="feature-icon">🌐</div>
            <h3>My Goals</h3>
            <p>
              I’m driven by a desire to learn, improve, and make a positive impact in both my personal life and the communities I’m part of. 
              My goal is to continue growing my skills, discovering new interests, and contributing in meaningful ways wherever I go.
            </p>
          </div>
          <div className="feature-visual glass" />
        </div>
      </div>
    </div>
  </section>


  {/* Section 3: Hexagonal Showcase */}
  <section className="showcase" id="showcase">
    <h2 className="section-title">MY EDUCATIONAL BACKGROUND</h2>
    <div className="hexagon-container">
      <div className="hexagon">
        <div className="hexagon-inner glass">
          <h4>Mabuhay Homes 2000 Elementary School</h4>
          <p>Binangonan, Rizal</p>
        </div>
      </div>
      <div className="hexagon">
        <div className="hexagon-inner glass">
          <h4>Vicente Madrigal Integrated School</h4>
          <p>Binangonan, Rizal</p>
        </div>
      </div>
      <div className="hexagon">
        <div className="hexagon-inner glass">
          <h4>La Verdad Christian College</h4>
          <p>Apalit, Pampanga</p>
        </div>
      </div>
    </div>
  </section>


  {/* Section 4: Timeline */}
  <section className="timeline" id="timeline">
    <h2 className="section-title">MY 3D MODEL PROJECTS</h2>
    <div className="timeline-container">
      <div className="timeline-line" />
      <div className="timeline-item">
        <div className="timeline-content glass">
          <div className="timeline-year"></div>
          <img src="assets/images/1.jpg" alt="img1" />
        </div>
        <div className="timeline-dot" />
      </div>
      <div className="timeline-item">
        <div className="timeline-content glass">
          <img src="assets/images/2.jpg" alt="img2" />
        </div>
        <div className="timeline-dot" />
      </div>
      <div className="timeline-item">
        <div className="timeline-content glass">
          <img src="assets/images/3.jpg" alt="img3" />
        </div>
        <div className="timeline-dot" />
      </div>
      <div className="timeline-item">
        <div className="timeline-content glass">
          <img src="assets/images/4.jpg" alt="img4" />
        </div>
        <div className="timeline-dot" />
      </div>
      <div className="timeline-item">
        <div className="timeline-content glass">
          <img src="assets/images/5.jpg" alt="img5" />
        </div>
        <div className="timeline-dot" />
      </div>
      <div className="timeline-item">
        <div className="timeline-content glass">
          <img src="assets/images/6.jpg" alt="img6" />
        </div>
        <div className="timeline-dot" />
      </div>
      <div className="timeline-item">
        <div className="timeline-content glass">
          <img src="assets/images/7.jpg" alt="img7" />
        </div>
        <div className="timeline-dot" />
      </div>
      <div className="timeline-item">
        <div className="timeline-content glass">
          <img src="assets/images/8.jpg" alt="img8" />
        </div>
        <div className="timeline-dot" />
      </div>
    </div>
  </section>


  {/* Section 5: Contact */}
  <section className="contact" id="contact">
    <div className="contact-container">
      <div className="contact-info glass">
        <h3>CONTACT ME</h3>
        

        <div className="social-links">
          <a href="https://www.instagram.com/kennnsooo/" className="glass">
            📡
          </a>
          <a href="https://github.com/Ashken-Soriano/Ashken-Soriano" className="glass">
            🌐
          </a>
          <a href="https://www.messenger.com/t/ashken.louie.soriano" className="glass">
            💬
          </a>
          <a href="mailto:louiesoriano026@gmail.com" className="glass">
            📨
          </a>
        </div>
        
      </div>
      <div className="contact-form glass">
        <div className="form-group">
          <input type="text" placeholder="Name" required="" />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            required=""
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Subject"
            required=""
          />
        </div>
        <div className="form-group">
          <textarea
            rows={5}
            placeholder="Message"
            required=""
            defaultValue={""}
          />
        </div>
        <button type="submit" className="submit-btn">
          SUBMIT
        </button>
      </div>
    </div>
  </section>


  {/* Footer */}
  <footer>
    <div className="footer-content">
      <div className="footer-links">
        <a href="#features">Neural Networks</a>
        <a href="#showcase">Matrix Protocols</a>
        <a href="#timeline">Evolution</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Documentation</a>
        {/* Add external links */}
        <a href="https://github.com/yourproject" target="_blank" rel="noopener">
          GitHub
        </a>
      </div>
      <div className="footer-copyright">
        <p>
          © 2025 NeuralGlass Interface. All quantum rights reserved across
          dimensions.
        </p>
      </div>
      <div className="footer-design">
        Design:{" "}
        <a
          href="https://templatemo.com"
          target="_blank"
          rel="nofollow noopener"
        >
          TemplateMo
        </a>{" "}
        | Enhanced by Neural AI Systems |<a href="#">Quantum Framework</a>
      </div>
    </div>
  </footer>
</>

  )
  
}

export default App
