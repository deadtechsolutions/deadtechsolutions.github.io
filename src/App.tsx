import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">
            <h1 className="nav-logo">Dead Tech Solutions</h1>
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#home" className={activeSection === 'home' ? 'nav-link active' : 'nav-link'} onClick={() => setActiveSection('home')}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" className={activeSection === 'projects' ? 'nav-link active' : 'nav-link'} onClick={() => setActiveSection('projects')}>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className={activeSection === 'about' ? 'nav-link active' : 'nav-link'} onClick={() => setActiveSection('about')}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className={activeSection === 'contact' ? 'nav-link active' : 'nav-link'} onClick={() => setActiveSection('contact')}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <div className="hero-main">
              <div className="hero-text">
                <h1>Welcome to Dead Tech Solutions</h1>
                <p className="hero-subtitle">Bringing old technology back to life through innovative engineering</p>
                <p className="hero-description">
                  Specialized in reverse engineering, electronics repair, and creating modern solutions for vintage hardware.
                </p>
              </div>
              <div className="hero-logo">
                <img src="/DeadTechIcon_transparant.svg" alt="Dead Tech Solutions Circuit Logo" className="hero-logo-icon" />
              </div>
            </div>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => setActiveSection('projects')}>
                View Projects
              </button>
              <button className="btn-secondary" onClick={() => setActiveSection('contact')}>
                Get In Touch
              </button>
            </div>
          </div>
        </section>

        <section id="projects" className="projects">
          <div className="container">
            <h2>Featured Projects</h2>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-image">
                  <div className="placeholder-image">📡</div>
                </div>
                <div className="project-content">
                  <h3>IR Remote Decoder</h3>
                  <p>
                    A Python-based infrared remote control decoder that captures and analyzes IR signals 
                    from various remote controls. Built with real-time signal processing capabilities.
                  </p>
                  <div className="project-tech">
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">Electronics</span>
                    <span className="tech-tag">Signal Processing</span>
                  </div>
                  <div className="project-links">
                    <a href="https://github.com/deadtechsolutions/IR-decoder" target="_blank" rel="noopener noreferrer" className="btn-small">View Code</a>
                    <a href="#" className="btn-small btn-outline">Live Demo</a>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">
                  <div className="placeholder-image">🔧</div>
                </div>
                <div className="project-content">
                  <h3>Legacy Hardware Revival</h3>
                  <p>
                    Restoration and modernization of vintage computing equipment, 
                    including custom firmware development and hardware modifications.
                  </p>
                  <div className="project-tech">
                    <span className="tech-tag">Assembly</span>
                    <span className="tech-tag">Electronics</span>
                    <span className="tech-tag">Firmware</span>
                  </div>
                  <div className="project-links">
                    <a href="#" className="btn-small">Learn More</a>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">
                  <div className="placeholder-image">🚴</div>
                </div>
                <div className="project-content">
                  <h3>Smart Bike Retrofit System</h3>
                  <p>
                    Modernizing vintage bikes with digital dashboards, smartphone integration, 
                    and sensor networks for speed monitoring, music control, and system alerts.
                  </p>
                  <div className="project-tech">
                    <span className="tech-tag">ESP-IDF</span>
                    <span className="tech-tag">Bluetooth LE</span>
                    <span className="tech-tag">Sensors</span>
                    <span className="tech-tag">Mobile App</span>
                  </div>
                  <div className="project-links">
                    <a href="#" className="btn-small">In Development</a>
                    <a href="#" className="btn-small btn-outline">Learn More</a>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">
                  <div className="placeholder-image">📺</div>
                </div>
                <div className="project-content">
                  <h3>Smart TV Enhancement Hub</h3>
                  <p>
                    Transforming old "dumb" TVs into smart entertainment centers with phone integration, 
                    streaming capabilities, and unified remote control via modern interfaces.
                  </p>
                  <div className="project-tech">
                    <span className="tech-tag">Raspberry Pi</span>
                    <span className="tech-tag">IR Control</span>
                    <span className="tech-tag">Streaming</span>
                    <span className="tech-tag">Mobile App</span>
                  </div>
                  <div className="project-links">
                    <a href="#" className="btn-small">Concept</a>
                    <a href="#" className="btn-small btn-outline">Details</a>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">
                  <div className="placeholder-image">🔑</div>
                </div>
                <div className="project-content">
                  <h3>Universal Phone Key System</h3>
                  <p>
                    Transforming smartphones into universal access controllers for bikes, home locks, 
                    and vehicles through secure Bluetooth LE and proximity-based authentication.
                  </p>
                  <div className="project-tech">
                    <span className="tech-tag">Bluetooth LE</span>
                    <span className="tech-tag">Mobile App</span>
                    <span className="tech-tag">Security</span>
                    <span className="tech-tag">IoT</span>
                  </div>
                  <div className="project-links">
                    <a href="#" className="btn-small">Concept</a>
                    <a href="#" className="btn-small btn-outline">Explore</a>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">
                  <div className="placeholder-image">📱</div>
                </div>
                <div className="project-content">
                  <h3>Dead Tech Control Hub</h3>
                  <p>
                    A unified mobile and web application that simplifies smart home control, 
                    integrating all retrofitted devices with an intuitive, user-friendly interface.
                  </p>
                  <div className="project-tech">
                    <span className="tech-tag">React Native</span>
                    <span className="tech-tag">MQTT</span>
                    <span className="tech-tag">Real-time</span>
                    <span className="tech-tag">UX/UI</span>
                  </div>
                  <div className="project-links">
                    <a href="#" className="btn-small">Vision</a>
                    <a href="#" className="btn-small btn-outline">Future</a>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">
                  <div className="placeholder-image">⚡</div>
                </div>
                <div className="project-content">
                  <h3>Circuit Analysis Tools</h3>
                  <p>
                    Custom tools and utilities for analyzing and debugging electronic circuits, 
                    including automated testing frameworks.
                  </p>
                  <div className="project-tech">
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">Testing</span>
                    <span className="tech-tag">Automation</span>
                  </div>
                  <div className="project-links">
                    <a href="#" className="btn-small">View Code</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container">
            <h2>About Dead Tech Solutions</h2>
            <div className="about-content">
              <div className="about-text">
                <p>
                  At Dead Tech Solutions, we specialize in breathing new life into forgotten technology. 
                  Our passion lies in understanding how things work, fixing what's broken, and creating 
                  innovative solutions that bridge the gap between old and new.
                </p>
                <p>
                  From reverse engineering vintage electronics to developing modern tools for classic 
                  hardware, we combine deep technical knowledge with creative problem-solving to tackle 
                  the challenges that others might consider impossible.
                </p>
              </div>
              <div className="skills">
                <h3>Core Technologies</h3>
                <div className="skills-grid">
                  <div className="skill">Python</div>
                  <div className="skill">Electronics</div>
                  <div className="skill">Reverse Engineering</div>
                  <div className="skill">Signal Processing</div>
                  <div className="skill">Firmware Development</div>
                  <div className="skill">Circuit Analysis</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <h2>Get In Touch</h2>
            <div className="contact-content">
              <p>
                Have an interesting project or need help with legacy technology? 
                Let's discuss how we can bring your ideas to life.
              </p>
              <div className="contact-methods">
                <div className="contact-method">
                  <h4>Email</h4>
                  <p>orpheus@deadtechsolutions.com</p>
                </div>
                <div className="contact-method">
                  <h4>Website</h4>
                  <p>www.deadtechsolutions.com</p>
                </div>
                <div className="contact-method">
                  <h4>GitHub</h4>
                  <p>github.com/deadtechsolutions</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Dead Tech Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
