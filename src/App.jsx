import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import './App.css';
import Toolkit from './Toolkit';
import HeroVisual from './HeroVisual';

const projects = [
  {
    number: '01',
    category: 'Web Application',
    title: 'AccEscape Room',
    description: 'An interactive escape room web game with a dark, atmospheric theme, where players solve puzzles and challenges through an immersive in-browser experience.',
    stack: ['React', 'Vite', 'Tailwind CSS'],
    tone: 'project-sand',
    image: '/images/projects/AccEscape.png',
    liveUrl: '',
    repoUrl: '',
  },
  {
    number: '02',
    category: 'Educational Program',
    title: 'ARsemble App',
    description: 'An augmented reality learning app for exploring computer hardware in real time, with interactive 3D components and a built-in quiz. Developed in Unity and built as an Android APK.',
    stack: ['Unity', 'Augmented Reality', 'Android APK'],
    tone: 'project-cream',
    image: '/images/projects/ARsemble.jpeg',
    liveUrl: '',
    repoUrl: '',
  },
  {
    number: '03',
    category: 'Web Application',
    title: 'Daily-Notes-App',
    description: 'A daily notes app for managing everyday notes easily and securely, built with a microservices architecture that separates the user, note, and comment services.',
    stack: ['Next.js', 'Tailwind CSS', 'Prisma', 'Microservices', 'TypeScript'],
    tone: 'project-gray',
    image: '/images/projects/Daily.png',
    liveUrl: '',
    repoUrl: '',
  },
  {
    number: '04',
    category: '3D Graphics',
    title: 'Server Room',
    description: 'A 3D visualization project that represents a server room environment and its components, rendered with C++ and OpenGL.',
    stack: ['C++', 'OpenGL', '3D Graphics'],
    tone: 'project-sand',
    image: '/images/projects/ServerRoom.png',
    liveUrl: '',
    repoUrl: '',
  },
  {
    number: '05',
    category: 'Web Application',
    title: 'SiLomba',
    description: 'An all-in-one competition platform for finding competitions from various campus partners in one place. Data is stored in MySQL and images are managed with Cloudinary.',
    stack: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Cloudinary'],
    tone: 'project-gray',
    image: '/images/projects/Silomba.png',
    liveUrl: '',
    repoUrl: '',
  },
  {
    number: '06',
    category: 'Web Application',
    title: 'UMindify',
    description: 'A tutoring platform where users can register as tutors or as students looking for lessons. Data is stored in MySQL and images are managed with Cloudinary.',
    stack: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Cloudinary'],
    tone: 'project-cream',
    image: '/images/projects/Umindify.png',
    liveUrl: '',
    repoUrl: '',
  },
];

const credentials = [
  // AWARDS
  {
    title: 'IDEA-Fest 2024 – Silver Medal',
    issuer: 'Universitas Negeri Malang · Faculty of Engineering',
    date: '14 Nov 2024',
    type: 'Awards',
    detail: 'Awarded a Silver Medal for the invention "Upgrade" at the Innovations, Developments, Explorations and Applications in Techno-Science Festival (IDEA-Fest) 2024.',
    image: '/images/certificates/AW1.jpeg',
  },
  {
    title: 'IDEA-Fest 2025 – Bronze Medal',
    issuer: 'Universitas Negeri Malang · Faculty of Engineering',
    date: '16 Oct 2025',
    type: 'Awards',
    detail: 'Awarded a Bronze Medal for the invention "BliMed" at IDEA-Fest 2025, themed "RISE to IMPACT: From Ideas to Real-World Change".',
    image: '/images/certificates/AW2.jpeg',
  },
  {
    title: '3rd Place – National Digital Poster Competition',
    issuer: 'FESMARO 2025 · Himpunan Mahasiswa Teknik Elektro dan Informatika, UM',
    date: '17 Apr 2025',
    type: 'Awards',
    detail: 'Won 3rd place in the national-level Digital Education Poster competition at the Electrical & Informatics Student Creativity Festival (FESMARO) 2025, themed "Creativity Without Limits, Innovation Without Stopping".',
    image: '/images/certificates/AW3.jpeg',
  },

  // ACHIEVEMENTS
  {
    title: 'Event Chairperson – Belajar Interaktif, Berkarya Inovatif',
    issuer: 'Komunitas Teknik Care (KTC) · BEM Faculty of Engineering, UM',
    date: '3 Oct 2026',
    type: 'Achievements',
    detail: 'Served as Chairperson of the "Belajar Interaktif, Berkarya Inovatif" event, coordinating the committee and overseeing the event from planning to execution.',
    image: '/images/certificates/AC1.jpeg',
  },
  {
    title: 'BELMAWA Competition – PKM Category',
    issuer: 'Universitas Negeri Malang · Directorate of Student Affairs and Alumni',
    date: '10 Apr 2026',
    type: 'Achievements',
    detail: 'Recognized for having one of the best proposals in the university-level Student Creativity Program (PKM) 2026 selection, nominated to SIMBELMAWA.',
    image: '/images/certificates/AC2.jpeg',
  },
  {
    title: 'Practicum Assistant – Object-Oriented Programming',
    issuer: 'Department of Electrical Engineering and Informatics · Universitas Negeri Malang',
    date: '26 Jan – 22 May 2026',
    type: 'Achievements',
    detail: 'Served as a practicum assistant for Object-Oriented Programming in the 2025/2026 even semester, supporting students and helping deliver lab sessions.',
    image: '/images/certificates/AC3.jpeg',
  },

  // COURSES
  {
    title: 'Content Creator National Seminar',
    issuer: 'BIGFAIR RISE 2025',
    date: '11 Jan 2025',
    type: 'Courses',
    detail: 'Participated in the national seminar talkshow "Make Money From Ur Social Media" on content creation and monetizing social media.',
    image: '/images/certificates/C1.jpeg',
  },
  {
    title: 'Public Speaking Training',
    issuer: 'BIGFAIR RISE 2025',
    date: '11 Jan 2025',
    type: 'Courses',
    detail: 'Completed the public speaking training "Dare To Speak Up To Get Attention", focused on confident delivery and communication skills.',
    image: '/images/certificates/C2.jpeg',
  },
  {
    title: 'Career Preparation Training',
    issuer: 'BIGFAIR RISE 2025',
    date: '11 Jan 2025',
    type: 'Courses',
    detail: 'Joined the career preparation session "Get Ready For Career!" covering readiness for the professional world.',
    image: '/images/certificates/C3.jpeg',
  },
  {
    title: 'Certificate of Appreciation',
    issuer: 'BIGFAIR RISE 2025',
    date: '2025',
    type: 'Courses',
    detail: 'Certificate of appreciation received for participation and contribution in the BIGFAIR RISE 2025 program.',
    image: '/images/certificates/C4.jpeg',
  },
  {
    title: 'IT Essentials 8',
    issuer: 'Cisco Networking Academy · Universitas Negeri Malang',
    date: '12 Aug 2026',
    type: 'Courses',
    detail: 'Successfully completed the IT Essentials 8 learning program through Cisco Networking Academy.',
    image: '/images/certificates/C5.jpeg',
  },

  // CERTIFICATIONS
  {
    title: 'Copyright Registration (Hak Cipta)',
    issuer: 'Republic of Indonesia',
    date: '2026',
    type: 'Certifications',
    detail: 'Listed as a creator in the attachment of an official copyright registration certificate.',
    image: '/images/certificates/S1.jpg',
  },
];

const categories = [
  'All',
  'Certifications',
  'Awards',
  'Achievements',
  'Courses',
];

const INITIAL_PROJECTS = 3;     // jumlah project yang tampil di awal
const INITIAL_CREDENTIALS = 8;  // jumlah sertifikat yang tampil di awal

const pad = (n) => String(n).padStart(2, '0');

function ArrowUpRight() {
  return <span aria-hidden="true" className="arrow-up-right">↗</span>;
}

function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`section-heading section-heading-${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedCredential, setSelectedCredential] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCredentials, setShowAllCredentials] = useState(false);

  const visibleCredentials = activeCategory === 'All'
    ? credentials
    : credentials.filter((item) => item.type === activeCategory);

  const shownProjects = showAllProjects ? projects : projects.slice(0, INITIAL_PROJECTS);
  const shownCredentials = showAllCredentials
    ? visibleCredentials
    : visibleCredentials.slice(0, INITIAL_CREDENTIALS);

  const closeMenu = () => setMenuOpen(false);

  // Tutup daftar lalu kembali ke awal section supaya pengguna tidak "tersesat"
  const collapseSection = (sectionId, setter) => {
    setter(false);
    const el = document.getElementById(sectionId);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90 });
  };

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ANCHOR_GAP = 36; // jarak judul section dari bawah navbar (px). Ubah sesuai selera.

    // Scroll halus (roda mouse dan trackpad)
    let lenis;
    let frame;
    if (!reduceMotion) {
      lenis = new Lenis({
        duration: 1.8,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        wheelMultiplier: 0.9,
      });
      const raf = (time) => {
        lenis.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);
    }

    // Klik menu: berhenti pas di bawah navbar, tanpa ruang kosong di atas judul section.
    // Posisi tujuan = awal section + padding atas section - tinggi navbar - jarak.
    const getTargetY = (id) => {
      const section = document.getElementById(id);
      if (!section) return null;
      if (id === 'home') return 0;
      const header = document.querySelector('.site-header');
      const headerHeight = header ? header.offsetHeight : 82;
      const paddingTop = parseFloat(getComputedStyle(section).paddingTop) || 0;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      return Math.max(0, sectionTop + paddingTop - headerHeight - ANCHOR_GAP);
    };

    const handleAnchorClick = (event) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target.closest('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute('href').slice(1);
      const y = id ? getTargetY(id) : null;
      if (y === null) return;
      event.preventDefault();
      if (lenis) lenis.scrollTo(y, { duration: 1.6 });
      else window.scrollTo({ top: y });
      window.history.replaceState(null, '', `#${id}`);
    };
    document.addEventListener('click', handleAnchorClick);

    // Isi tiap section muncul pelan saat masuk layar (kecuali hero)
    const targets = document.querySelectorAll('main section:not(#home) > .container');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -8% 0px' }
    );
    targets.forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });

    return () => {
      cancelAnimationFrame(frame);
      if (lenis) lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
      observer.disconnect();
      targets.forEach((el) => el.classList.remove('reveal', 'is-visible'));
    };
  }, []);

  return (
    <div className="site-shell">
      <header className="site-header">
        <nav className="navbar container" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={closeMenu}>Angelina<span>.</span></a>
          <button
            className="mobile-menu-button"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span><span></span>
          </button>
          <div className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#works" onClick={closeMenu}>Projects</a>
            <a href="#credentials" onClick={closeMenu}>Credentials</a>
          </div>
          <a className="button button-dark nav-cta" href="#contact">Let&apos;s Talk <ArrowUpRight /></a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section-pad">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span className="status-dot"></span> PERSONAL PORTFOLIO</p>
              <h1>Hii!<br />I'm <span className="text-accent">Angelina</span></h1>
              <p className="hero-description">
                 <strong>Angelina</strong> — an informatics student exploring web development,
                backend systems, and the ideas that turn into useful digital products.
              </p>
              <div className="hero-actions">
                <a className="button button-dark" href="#works">Explore my work <ArrowUpRight /></a>
                <a className="button button-outline" href="#about">More about me <ArrowUpRight /></a>
              </div>
              <div className="hero-meta">
                <div><strong>Web</strong><span>Development</span></div>
                <div><strong>Backend</strong><span>In progress</span></div>
                <div><strong>Always</strong><span>Learning</span></div>
              </div>
            </div>
            <HeroVisual />
          </div>
          <div className="container hero-bottom-line">
            <span>BASED IN INDONESIA</span><span>SCROLL TO EXPLORE ↓</span>
          </div>
        </section>

        <section id="about" className="about-section section-pad">
          <div className="container">
            <SectionHeading
              eyebrow="ABOUT ME"
              title={<>Learn. Build. <span className="text-accent">Share.</span></>}
            />
            <div className="about-grid">
              <div className="about-story">
                <p className="large-copy">
                  I&apos;m an Informatics Engineering Education student who loves building for the web, from the interface people see to the data behind it.
                </p>
                <p>
                  I&apos;m currently doing an internship as a web developer at Branding Universitas Negeri Malang, where I turn real needs into working pages. Outside of class, I&apos;m part of Komunitas Teknik Care and active in mentorship, including serving as a practicum assistant, because explaining something to others is one of the best ways to understand it myself.
                </p>
                <a className="text-link" href="#contact">Let&apos;s connect <ArrowUpRight /></a>
              </div>
              <div className="about-details">
                <div className="detail-block">
                  <span className="detail-number">01</span>
                  <div><h3>Education</h3><p>Universitas Negeri Malang</p><span className="muted-text">Informatics Engineering Education</span></div>
                </div>
                <div className="detail-block">
                  <span className="detail-number">02</span>
                  <div><h3>Internship</h3><p>Web Developer</p><span className="muted-text">Branding Universitas Negeri Malang</span></div>
                </div>
                <div className="detail-block">
                  <span className="detail-number">03</span>
                  <div><h3>Organization</h3><p>Komunitas Teknik Care</p><span className="muted-text">BEM FT Universitas Negeri Malang</span></div>
                </div>
              </div>
            </div>
            <Toolkit />
          </div>
        </section>

        <section id="works" className="works-section section-pad">
          <div className="container">
            <div className="section-topline">
              <SectionHeading eyebrow="SELECTED PROJECT" title={<>Ideas made <span className="text-accent">tangible.</span></>} description="A selection of projects, experiments, and concepts I have worked on or explored." />
              <span className="section-count">{pad(projects.length)} / PROJECTS</span>
            </div>
            <div className="projects-grid">
              {shownProjects.map((project, index) => (
                <article
                  className={`project-card${index >= INITIAL_PROJECTS ? ' card-enter' : ''}`}
                  key={project.number}
                >
                  <div className={`project-art ${project.tone} ${project.image ? 'project-art-has-image' : ''}`}>
                    {project.image ? <img className="project-image" src={project.image} alt={`${project.title} preview`} /> : <><span className="project-number">{project.number}</span><span className="project-art-title">{project.title}</span><span className="project-art-caption">{project.category}</span><span className="project-art-mark">↗</span></>}
                  </div>
                  <div className="project-content">
                    <div className="project-title-row"><h3>{project.title}</h3><span className="project-category">{project.category}</span></div>
                    <p>{project.description}</p>
                    <div className="tag-list">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
                    {(project.liveUrl || project.repoUrl) && <div className="project-links">{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live demo ↗</a>}{project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noreferrer">Source code ↗</a>}</div>}
                  </div>
                </article>
              ))}
            </div>
            {projects.length > INITIAL_PROJECTS && (
              <div className="show-more-wrap">
                {showAllProjects ? (
                  <button className="button button-outline" type="button" onClick={() => collapseSection('works', setShowAllProjects)}>
                    Show less ↑
                  </button>
                ) : (
                  <button className="button button-outline" type="button" onClick={() => setShowAllProjects(true)}>
                    Show more ({projects.length - INITIAL_PROJECTS} more) ↓
                  </button>
                )}
              </div>
            )}
          </div>
        </section>

        <section id="credentials" className="credentials-section section-pad">
          <div className="container">
            <div className="section-topline credentials-topline">
              <SectionHeading eyebrow="MILESTONES & LEARNING" title={<>Proof of <span className="text-accent">progress.</span></>} description="Certificates, courses, awards, and achievements gathered along the way." />
              <span className="section-count">{pad(credentials.length)} / CREDENTIALS</span>
            </div>
            <div className="credential-filters" role="group" aria-label="Filter credentials">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-button ${activeCategory === category ? 'filter-active' : ''}`}
                  type="button"
                  onClick={() => { setActiveCategory(category); setShowAllCredentials(false); }}
                >{category}</button>
              ))}
            </div>
            <div className="credentials-grid">
              {shownCredentials.map((credential, index) => (
                <button
                  className={`credential-card${index >= INITIAL_CREDENTIALS ? ' card-enter' : ''}`}
                  key={credential.title}
                  onClick={() => setSelectedCredential(credential)}
                  type="button"
                >
                  <div className={`certificate-preview certificate-tone-${index % 3} ${credential.image ? 'certificate-has-image' : ''}`}>
                    {credential.image ? <img className="certificate-image" src={credential.image} alt={credential.title} /> : <div className="certificate-inner">
                      <span className="certificate-topline">CERTIFICATE OF {credential.type === 'Courses' ? 'COMPLETION' : credential.type === 'Awards' ? 'RECOGNITION' : 'ACHIEVEMENT'}</span>
                      <span className="certificate-seal">e.</span>
                      <span className="certificate-title">{credential.title}</span>
                      <span className="certificate-rule"></span>
                      <span className="certificate-recipient">Angelina</span>
                      <span className="certificate-issuer">{credential.issuer}</span>
                    </div>}
                    <span className="credential-open">View ↗</span>
                  </div>
                  <div className="credential-info">
                    <span className="credential-type">{credential.type}</span>
                    <h3>{credential.title}</h3>
                    <p>{credential.issuer}</p>
                    <span className="credential-date">{credential.date}</span>
                  </div>
                </button>
              ))}
            </div>
            {visibleCredentials.length > INITIAL_CREDENTIALS && (
              <div className="show-more-wrap">
                {showAllCredentials ? (
                  <button className="button button-outline" type="button" onClick={() => collapseSection('credentials', setShowAllCredentials)}>
                    Show less ↑
                  </button>
                ) : (
                  <button className="button button-outline" type="button" onClick={() => setShowAllCredentials(true)}>
                    Show more ({visibleCredentials.length - INITIAL_CREDENTIALS} more) ↓
                  </button>
                )}
              </div>
            )}
          </div>
        </section>

        <section id="contact" className="contact-section section-pad">
          <div className="container contact-panel">
            <div className="contact-copy">
              <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
              <h2>Let&apos;s make<br /><span className="text-accent">it happen.</span></h2>
              <p>Have an idea, collaboration, or opportunity to discuss? My inbox is open.</p>
            </div>
            <div className="contact-actions">
              <a className="button button-light" href="https://wa.me/6282249038679">Send me <ArrowUpRight /></a>
              <p>Send me this email with your active address.</p>
              <div className="social-links">
                <a href="https://github.com/anglynxc" target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a>
                <a href="https://www.linkedin.com/in/angelina-christiani-sihotang-60a5ab3b2" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand" href="#home">Angelina<span>.</span></a>
          <p>Designed with intention · © {new Date().getFullYear()} Angelina</p>
          <a href="#home" className="back-top">Back to top ↑</a>
        </div>
      </footer>

      {selectedCredential && (
        <div className="modal-backdrop" role="presentation" onClick={() => setSelectedCredential(null)}>
          <div className="credential-modal" data-lenis-prevent role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" aria-label="Close preview" onClick={() => setSelectedCredential(null)}>×</button>
            <div className="modal-certificate">
              {selectedCredential.image ? <img className="modal-certificate-image" src={selectedCredential.image} alt={selectedCredential.title} /> : <><span className="certificate-seal">e.</span><p className="eyebrow">{selectedCredential.type}</p><h2 id="modal-title">{selectedCredential.title}</h2><p>{selectedCredential.issuer}</p><span className="certificate-rule"></span><span className="muted-text">{selectedCredential.date}</span></>}
            </div>
            <div className="modal-description"><h3>{selectedCredential.title}</h3><p>{selectedCredential.detail}</p><p className="content-note">{selectedCredential.issuer} · {selectedCredential.date}</p></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
