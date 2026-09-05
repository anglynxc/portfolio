import React, { useState, useEffect, useRef } from 'react';

// Komponen Reusable untuk animasi scroll
const Reveal = ({ children, className = '' }) => {
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, { threshold: 0.1 });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={domRef} className={`reveal ${className}`}>
      {children}
    </div>
  );
};

// Komponen Flip Card Anggota Tim
const TeamMemberCard = ({ name, role, bio, initial }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`flip-card h-72 ${isFlipped ? 'is-flipped' : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="flip-card-inner">
        {/* DEPAN */}
        <div className="flip-card-front shadow-md">
          <div className="w-24 h-24 mx-auto rounded-full bg-[#E8F5E9] flex items-center justify-center mb-4">
            <span className="text-[#4CAF50] text-3xl font-bold">{initial}</span>
          </div>
          <h3 className="text-xl font-semibold text-[#333333]">{name}</h3>
          <p className="text-[#4CAF50] font-medium text-sm mt-1">{role}</p>
          <p className="text-xs text-gray-400 mt-4">*Click to see details</p>
        </div>

        {/* BELAKANG */}
        <div className="flip-card-back">
          <h3 className="text-xl font-bold text-[#2F3E46] mb-2">{name}</h3>
          <p className="text-sm text-[#4B5563] leading-relaxed">{bio}</p>
          <div className="mt-4 flex gap-3">
            <a href="#" className="text-xs bg-white px-3 py-1 rounded-full text-[#4CAF50] font-semibold hover:bg-[#4CAF50] hover:text-white transition">LinkedIn</a>
            <a href="#" className="text-xs bg-white px-3 py-1 rounded-full text-[#4CAF50] font-semibold hover:bg-[#4CAF50] hover:text-white transition">Email</a>
          </div>
          <p className="text-xs text-gray-500 mt-4">*Click to go back</p>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-gray-600 font-sans">
      
      {/* HEADER / NAVBAR (FLOATING TRANSPARAN) */}
      <nav className="w-full bg-white/20 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between border-b border-gray-100/50">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#E8F5E9] rounded-xl flex items-center justify-center">
              <span className="text-[#4CAF50] font-semibold text-lg">E</span>
            </div>
            <h1 className="text-lg font-medium tracking-wide text-[#333333]">Epsilon</h1>
          </div>

          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-500">
            <a href="#team" className="hover:text-[#4CAF50] transition">Our Team</a>
            <a href="#work" className="hover:text-[#4CAF50] transition">Our Works</a>
            <a href="#contact" className="hover:text-[#4CAF50] transition">Contact</a>
          </div>

          <a href="#contact" className="bg-[#E8F5E9] text-[#4CAF50] border border-[#4CAF50]/20 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#4CAF50] hover:text-white transition shadow-sm">
            Let's Talk
          </a>
        </div>
      </nav>

      {/* HALAMAN UTAMA */}
      <div>
        {/* HERO SECTION */}
        <Reveal>
          <section className="max-w-7xl mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center justify-between gap-12">
            
            <div className="w-full md:w-3/5 text-left">
              <span className="inline-block bg-[#E8F5E9] text-[#4CAF50] px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider mb-6">
                Creative Digital Team
              </span>
              
              <h1 className="text-4xl md:text-6xl font-serif font-light leading-tight text-[#333333] mb-6">
                We Build Digital <br /> 
                <span className="text-[#4CAF50] font-normal">Perfect</span> Experiences.
              </h1>
              
              <p className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed">
                Epsilon is a creative team transforming ideas into modern, fast, and aesthetically pleasing digital experiences.
              </p>
              
              <div className="flex flex-col md:flex-row gap-4">
                <a href="#team" className="bg-[#4CAF50] text-white px-8 py-3.5 rounded-full font-medium hover:bg-[#43A047] transition shadow-sm">
                  Meet Our Team
                </a>
                <a href="#work" className="bg-transparent border border-[#4CAF50] text-[#4CAF50] px-8 py-3.5 rounded-full font-medium hover:bg-[#4CAF50] hover:text-white transition">
                  See Our Works
                </a>
              </div>
            </div>

            <div className="hidden md:block w-2/5">
              <div className="w-full h-96 bg-gradient-to-br from-[#E8F5E9] to-[#FDFBF7] rounded-3xl shadow-lg transform rotate-3 hover:rotate-0 transition duration-500"></div>
            </div>

          </section>
        </Reveal>

        {/* SECTION OUR TEAM */}
        <section id="team" className="py-24 bg-[#FDFBF7]">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-light text-[#333333] mb-4">Meet Our Team</h2>
                <p className="text-gray-500 max-w-xl mx-auto font-light">Click on a member card to see their details and expertise.</p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <Reveal>
                <TeamMemberCard 
                  name="Angelina Christiani S" 
                  role="Project Manager" 
                  initial="A"
                  bio="Responsible for managing team workflow, ensuring all projects are completed on time and according to targets."
                />
              </Reveal>

              <Reveal>
                <TeamMemberCard 
                  name="Dhimas Eko A" 
                  role="Backend Developer" 
                  initial="B"
                  bio="Builds server logic, databases, and APIs to ensure the website runs stable, secure, and smoothly."
                />
              </Reveal>

              <Reveal>
                <TeamMemberCard 
                  name="Aluna Syela Eka F" 
                  role="UI/UX Designer" 
                  initial="C"
                  bio="Designs aesthetic and user-friendly interfaces (User Friendly) for all platforms."
                />
              </Reveal>

              <Reveal>
                <TeamMemberCard 
                  name="Daffa Rikza M" 
                  role="Frontend Developer" 
                  initial="D"
                  bio="Transforms designs into responsive, fast, and interactive React code across various devices."
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* SECTION OUR WORKS */}
        <section id="work" className="py-24 bg-[#FDFBF7]">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-serif font-light text-[#333333] mb-4">Our Works</h2>
                <p className="text-gray-500 max-w-xl mx-auto font-light">Explore our projects from two perspectives: Education and Industry.</p>
              </div>
            </Reveal>

            {/* Tombol Tab */}
            <div className="flex justify-center gap-4 mb-12">
              <button 
                onClick={() => setActiveTab(1)}
                className={`px-8 py-3 rounded-full font-medium transition duration-300 ${
                  activeTab === 1 
                    ? 'bg-[#E8F5E9] text-[#4CAF50] shadow-sm' 
                    : 'bg-white text-[#4CAF50] border border-[#4CAF50]'
                }`}
              >
                Education
              </button>
              <button 
                onClick={() => setActiveTab(2)}
                className={`px-8 py-3 rounded-full font-medium transition duration-300 ${
                  activeTab === 2 
                    ? 'bg-[#E8F5E9] text-[#4CAF50] shadow-sm' 
                    : 'bg-white text-[#4CAF50] border border-[#4CAF50]'
                }`}
              >
                Industry
              </button>
            </div>

            {/* KONTEN TAB PENDIDIKAN */}
            {activeTab === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Reveal>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition duration-300">
                    <div className="h-52 bg-[#E8F5E9] relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[#4CAF50] text-lg font-medium opacity-70">Project Image Placeholder</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-medium text-[#333333] mb-2">Education Project 1</h3>
                      <p className="text-gray-500 text-sm font-light">Short description of this project.</p>
                      <span className="inline-block mt-4 text-xs font-medium text-[#4CAF50] bg-[#E8F5E9] px-3 py-1 rounded-full">Academic</span>
                    </div>
                  </div>
                </Reveal>

                <Reveal>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition duration-300">
                    <div className="h-52 bg-[#E8F5E9] relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[#4CAF50] text-lg font-medium opacity-70">Project Image Placeholder</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-medium text-[#333333] mb-2">Education Project 2</h3>
                      <p className="text-gray-500 text-sm font-light">Short description of this project.</p>
                      <span className="inline-block mt-4 text-xs font-medium text-[#4CAF50] bg-[#E8F5E9] px-3 py-1 rounded-full">Academic</span>
                    </div>
                  </div>
                </Reveal>

                <Reveal>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition duration-300">
                    <div className="h-52 bg-[#E8F5E9] relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[#4CAF50] text-lg font-medium opacity-70">Project Image Placeholder</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-medium text-[#333333] mb-2">Education Project 3</h3>
                      <p className="text-gray-500 text-sm font-light">Short description of this project.</p>
                      <span className="inline-block mt-4 text-xs font-medium text-[#4CAF50] bg-[#E8F5E9] px-3 py-1 rounded-full">Academic</span>
                    </div>
                  </div>
                </Reveal>
              </div>
            )}

            {/* KONTEN TAB INDUSTRI */}
            {activeTab === 2 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Reveal>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition duration-300">
                    <div className="h-52 bg-[#E8F5E9] relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[#4CAF50] text-lg font-medium opacity-70">Project Image Placeholder</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-medium text-[#333333] mb-2">Industry Project 1</h3>
                      <p className="text-gray-500 text-sm font-light">Short description of this project.</p>
                      <span className="inline-block mt-4 text-xs font-medium text-[#4CAF50] bg-[#E8F5E9] px-3 py-1 rounded-full">Industry</span>
                    </div>
                  </div>
                </Reveal>

                <Reveal>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition duration-300">
                    <div className="h-52 bg-[#E8F5E9] relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[#4CAF50] text-lg font-medium opacity-70">Project Image Placeholder</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-medium text-[#333333] mb-2">Industry Project 2</h3>
                      <p className="text-gray-500 text-sm font-light">Short description of this project.</p>
                      <span className="inline-block mt-4 text-xs font-medium text-[#4CAF50] bg-[#E8F5E9] px-3 py-1 rounded-full">Industry</span>
                    </div>
                  </div>
                </Reveal>

                <Reveal>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition duration-300">
                    <div className="h-52 bg-[#E8F5E9] relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[#4CAF50] text-lg font-medium opacity-70">Project Image Placeholder</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-medium text-[#333333] mb-2">Industry Project 3</h3>
                      <p className="text-gray-500 text-sm font-light">Short description of this project.</p>
                      <span className="inline-block mt-4 text-xs font-medium text-[#4CAF50] bg-[#E8F5E9] px-3 py-1 rounded-full">Industry</span>
                    </div>
                  </div>
                </Reveal>
              </div>
            )}

          </div>
        </section>

        {/* SECTION CONTACT */}
        <section id="contact" className="py-24 bg-[#FDFBF7]">
          <Reveal>
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[#333333] mb-4">Let's Work Together</h2>
              <p className="text-gray-500 text-lg font-light mb-8">Have an interesting project? Feel free to contact us.</p>
              
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <a href="mailto:halo@Epsilon.com" className="bg-[#E8F5E9] text-[#4CAF50] border border-[#4CAF50]/20 px-8 py-3.5 rounded-full font-medium hover:bg-[#4CAF50] hover:text-white transition shadow-sm">
                  halo@Epsilon.com
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-[#E8F5E9] text-[#4CAF50] border border-[#4CAF50]/20 px-8 py-3.5 rounded-full font-medium hover:bg-[#4CAF50] hover:text-white transition shadow-sm">
                  DM Instagram
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#F1F8E9] text-[#2F3E46] py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#E8F5E9] rounded-lg flex items-center justify-center">
              <span className="text-[#4CAF50] font-medium text-lg">E</span>
            </div>
            <h1 className="text-lg font-medium">Epsilon</h1>
          </div>
          
          <p className="text-sm text-gray-600">© 2026 Epsilon. All rights reserved.</p>
          
          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#E8F5E9] flex items-center justify-center hover:bg-[#4CAF50] transition group">
              <svg className="w-5 h-5 text-[#4CAF50] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#E8F5E9] flex items-center justify-center hover:bg-[#4CAF50] transition group">
              <svg className="w-5 h-5 text-[#4CAF50] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              </svg>
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#E8F5E9] flex items-center justify-center hover:bg-[#4CAF50] transition group">
              <svg className="w-5 h-5 text-[#4CAF50] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 24c-6.627 0-12-5.373-12-12s5.373-12 12-12 12 5.373 12 12-5.373 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;