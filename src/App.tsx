import { useState } from 'react'
import { ArrowDown, ArrowDownRight, ArrowUpRight, Code2, GraduationCap, Linkedin, Mail, MapPin, Menu, X } from 'lucide-react'

const skills = [
  { title: 'Languages', items: ['Java', 'C', 'JavaScript'] },
  { title: 'Foundations', items: ['OOP', 'Data structures', 'Collections', 'Exception handling', 'Debugging'] },
  { title: 'Data & APIs', items: ['SQL', 'MySQL', 'MongoDB', 'JDBC', 'REST APIs', 'CRUD'] },
  { title: 'Web & tools', items: ['React.js', 'HTML5', 'CSS3', 'Git', 'GitHub', 'VS Code', 'Eclipse'] },
]

const projects = [
  {
    number: '01', title: 'Train Ticket Reservation System', type: 'Academic project', year: '2024', tags: ['Java', 'JDBC', 'MySQL'],
    description: 'A modular reservation system built around the real flow of finding a train, booking a seat, and keeping every record in sync.',
    points: ['Designed OOP models for users, trains, bookings, and schedules.', 'Connected five relational tables with JDBC and MySQL.', 'Built a four-step booking workflow with route and seat availability checks.', 'Added CRUD modules and unit-tested booking flows for reliable data.'],
    accent: 'mint', mark: 'TT',
  },
  {
    number: '02', title: 'StaySphere', type: 'Accommodation booking platform', year: '2025—26', tags: ['Express.js', 'React.js', 'Node.js'],
    description: 'A full-stack stay discovery and booking experience, with secure accounts and a flexible listing search.',
    points: ['Built listing, search, booking, and reservation management flows.', 'Implemented Express-Session authentication with role-based access control.', 'Developed dynamic listing filters and REST endpoints for booking transactions.'],
    accent: 'peach', mark: 'S',
  },
]

const certifications = [
  { title: 'Fundamentals of Object-Oriented Programming', issuer: 'NPTEL', detail: '73 / 100', date: 'Jan 2026', symbol: 'N' },
  { title: 'CSS Training', issuer: 'Spoken Tutorial · IIT Bombay & EduPyramids', detail: '62.5%', date: 'May 2026', symbol: 'C' },
  { title: 'Introduction to SQL', issuer: 'Simplilearn', detail: 'Course completion', date: 'Jul 2025', symbol: 'S' },
  { title: 'C Programming', issuer: 'CCIT, Amravati', detail: 'Course completion', date: '', symbol: 'C' },
]

const exams = [
  { name: 'NPTEL · Object-Oriented Programming', score: '73', unit: '/ 100', note: 'Jan 2026' },
  { name: 'BCA · Final result', score: '7.96', unit: 'CGPA', note: 'Mar 2025' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="topbar">
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a><a href="#skills" onClick={closeMenu}>Skills</a><a href="#work" onClick={closeMenu}>Projects</a><a href="#journey" onClick={closeMenu}>Journey</a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO OPPORTUNITIES <span className="eyebrow-rule" /></div>
            <h1>Thoughtful code.<br /><span>Useful</span> experiences.</h1>
            <p className="hero-intro">I’m <strong>Purva Narendra Bhujbal</strong> — an MCA student and aspiring software developer who enjoys turning careful thinking into dependable, user-friendly applications.</p>
            <div className="hero-actions"><a className="button button-dark" href="#work">Explore my work <ArrowDownRight size={17} /></a></div>
            <div className="hero-meta"><span><MapPin size={15} /> Amravati, Maharashtra</span><a href="mailto:purvabhujbal56@gmail.com"><Mail size={15} /> Say hello</a></div>
          </div>
          <div className="hero-art" aria-label="Decorative profile illustration">
            <div className="art-sun" /><div className="art-ring ring-one" /><div className="art-ring ring-two" />
            <div className="art-card"><div className="art-card-top"><span>PORTFOLIO / 2026</span><span className="art-card-icon"><Code2 size={16} /></span></div><div className="portrait"><img className="portrait-photo" src="/purva-bhujbal.jpeg" alt="Purva Narendra Bhujbal" /></div><div className="art-card-bottom"><span>PURVA N. BHUJBAL</span><span>DEVELOPER <span className="tiny-star">✳</span></span></div></div>
            <div className="floating-note note-code"><Code2 size={15} /><span>Building with purpose</span></div><div className="floating-note note-location"><span className="mini-dot" /> Based in India</div><span className="art-scribble">✳</span>
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
        </section>

        <section className="about section-wrap" id="about">
          <div className="section-label"><span>01 / A LITTLE ABOUT ME</span><span className="label-line" /></div>
          <div className="about-grid"><h2>Curiosity is where<br />good work <em>begins.</em></h2><div className="about-body"><p>I’m a BCA graduate currently pursuing my Master of Computer Applications at P. R. Pote Patil College of Engineering and Management, Amravati.</p><p>My foundation spans Java, databases, REST APIs, and full-stack development. I care about code that’s clean and maintainable, data that stays reliable, and products that make sense to the people using them.</p><p>Quick to learn and easy to collaborate with, I’m excited to grow alongside a team solving practical problems.</p><div className="about-facts"><div><span className="fact-number">02</span><span>hands-on projects</span></div><div><span className="fact-number">04</span><span>certifications</span></div><div><span className="fact-number">∞</span><span>things to learn</span></div></div></div></div>
        </section>

        <section className="skills section-wrap" id="skills">
          <div className="section-label"><span>02 / WHAT I WORK WITH</span><span className="label-line" /></div><div className="skills-heading"><h2>My toolkit<span className="accent-dot">.</span></h2><p>A growing set of skills for building reliable, full-stack applications.</p></div>
          <div className="skill-grid">{skills.map((group, index) => <article className="skill-card" key={group.title}><span className="skill-index">0{index + 1}</span><h3>{group.title}</h3><div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div>
          <div className="skill-foot"><span><span className="mini-dot" /> ALWAYS LEARNING</span><span>Spring (core basics) · JWT · RBAC · Postman · JUnit</span></div>
        </section>

        <section className="work section-wrap" id="work">
          <div className="section-label"><span>03 / SELECTED WORK</span><span className="label-line" /></div><div className="work-heading"><h2>Made with <em>intention.</em></h2><p>Academic projects where I brought ideas to life, one thoughtful feature at a time.</p></div>
          <div className="project-list">{projects.map(project => <article className="project-card" key={project.number}><div className={`project-visual ${project.accent}`}><span className="project-visual-index">PROJECT / {project.number}</span><div className="project-stamp">{project.mark}</div><span className="project-visual-caption">{project.type}</span><div className="project-visual-lines"><i /><i /><i /></div></div><div className="project-content"><div className="project-meta"><span>{project.type}</span><span>{project.year}</span></div><h3>{project.title}<ArrowUpRight size={20} /></h3><p className="project-description">{project.description}</p><ul>{project.points.map(point => <li key={point}>{point}</li>)}</ul><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
        </section>

        <section className="journey section-wrap" id="journey">
          <div className="section-label"><span>04 / THE JOURNEY SO FAR</span><span className="label-line" /></div><div className="journey-grid"><div><h2>Learning by<br /><em>doing.</em></h2><p className="journey-lead">A foundation in computer science, strengthened through practice and a healthy amount of curiosity.</p><div className="leadership-note"><span className="leadership-icon">✳</span><div><strong>Beyond the coursework</strong><span>Coordinator, TECH Astra technical event<br />Member, Computer Application Society</span></div></div><div className="soft-skills"><span>Problem solving</span><span>Communication</span><span>Teamwork</span><span>Meeting deadlines</span></div></div><div className="timeline"><article className="timeline-item current"><div className="timeline-marker"><GraduationCap size={17} /></div><div className="timeline-top"><span>2025 — 2027</span><span className="timeline-status">IN PROGRESS</span></div><h3>Master of Computer Applications</h3><p>P. R. Pote Patil College of Engineering and Management</p><span className="timeline-place">Amravati, Maharashtra</span></article><article className="timeline-item"><div className="timeline-marker"><GraduationCap size={17} /></div><div className="timeline-top"><span>2022 — 2025</span><span>COMPLETED</span></div><h3>Bachelor of Computer Applications</h3><p>Brijlal Biyani Science College</p><span className="timeline-place">Amravati, Maharashtra · 7.96 CGPA</span></article></div></div>
        </section>

        <section className="credentials section-wrap" id="credentials">
          <div className="section-label"><span>05 / CREDENTIALS</span><span className="label-line" /></div><div className="credentials-heading"><div><h2>Proof of <em>practice.</em></h2><p>Courses and assessments that have helped me sharpen the fundamentals.</p></div><a href="#contact" className="text-link">Ask me about any of these <ArrowUpRight size={15} /></a></div>
          <div className="credential-grid">{certifications.map((cert, index) => <article className="credential-card" key={cert.title}><div className="credential-top"><span className="credential-symbol">{cert.symbol}</span><span className="credential-number">0{index + 1}</span></div><h3>{cert.title}</h3><p>{cert.issuer}</p><div className="credential-bottom"><span>{cert.detail}</span>{cert.date && <span>{cert.date}</span>}</div></article>)}</div>
          <div className="exam-block"><div className="exam-heading"><span>ASSESSMENTS & EXAMINATIONS</span><span className="label-line" /></div><div className="exam-list">{exams.map(exam => <article className="exam-row" key={exam.name}><div><span className="exam-name">{exam.name}</span><span className="exam-note">{exam.note}</span></div><strong>{exam.score}<small>{exam.unit}</small></strong></article>)}</div></div>
        </section>

        <section className="contact section-wrap" id="contact"><div className="contact-panel"><div className="contact-copy"><div className="section-label light"><span>06 / START A CONVERSATION</span><span className="label-line" /></div><h2>Have a good<br />problem to <em>solve?</em></h2><p>I’m always happy to talk about software, new opportunities, or a project that could use a thoughtful approach.</p><a href="mailto:purvabhujbal56@gmail.com" className="contact-email">purvabhujbal56@gmail.com <ArrowUpRight size={16} /></a><a href="https://linkedin.com/in/purva-bhujbal-209101278" target="_blank" rel="noreferrer" className="linkedin-link"><Linkedin size={16} /> Find me on LinkedIn <ArrowUpRight size={14} /></a></div></div></section>
      </main>

    </>
  )
}

export default App
