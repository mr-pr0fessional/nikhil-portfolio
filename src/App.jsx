import { useState } from "react";
import "./App.css";
import AvatarStage from "./components/AvatarStage";

function App() {
  const [activePanel, setActivePanel] = useState(null);

  const openPanel = (panel) => {
    setActivePanel(panel);
  };

  const closePanel = () => {
    setActivePanel(null);
  };

  return (
    <main className="portfolio-shell">

      {/* ==================== NAVIGATION ==================== */}
      <header className="topbar">

        <div className="brand">
          <div className="brand-mark">NN</div>

          <div className="brand-name">
            <strong>NIKHIL NANDAN</strong>
            <span>MANEPALLI</span>
          </div>
        </div>

        <nav className="main-nav">

          <button type="button" onClick={closePanel}>Home</button>

          <button
            type="button"
            onClick={() => openPanel("about")}
          >
            About
          </button>

          <button
            type="button"
            onClick={() => openPanel("skills")}
          >
            Skills
          </button>

          <button
            type="button"
            onClick={() => openPanel("projects")}
          >
            Projects
          </button>

          <button
            type="button"
            onClick={() => openPanel("experience")}
          >
            Experience
          </button>

          <button
            type="button"
            onClick={() => openPanel("contact")}
          >
            Contact
          </button>

        </nav>

        <button
          type="button"
          className="connect-button"
          onClick={() => openPanel("contact")}
        >
          Let's Connect
          <span>→</span>
        </button>

      </header>


      {/* ==================== HERO ==================== */}
      <section className="hero-dashboard" id="home">

        {/* ==================== LEFT ==================== */}
        <div className="hero-copy">

          <div className="eyebrow">
            <span className="eyebrow-dot"></span>
            AI & DATA ANALYTICS PROFESSIONAL
          </div>

          <h1>
            NIKHIL NANDAN
            <span>MANEPALLI</span>
          </h1>

          <p className="hero-intro">
            I turn ideas into intelligent solutions using data,
            AI and creative technology.
          </p>

          <div className="skill-pills">
            
            <span>GEN AI</span>
            
            <span>DATA ANALYTICS</span>
          </div>


          {/* ==================== EDUCATION ==================== */}
          <div className="info-card education-card">

            <div className="info-item">
              <small>EDUCATION</small>
              <strong>B.Tech CSE</strong>
              <span>Data Science</span>
              <span>2022 — 2026</span>
            </div>

            <div className="info-divider"></div>

            <div className="info-item">
              <small>CGPA</small>
              <strong>7.43</strong>
              <span>Academic Performance</span>
            </div>

            <div className="info-divider"></div>

            <div className="info-item">
              <small>LOCATION</small>
              <strong>Hyderabad</strong>
              <span>India</span>
            </div>

            <div className="info-divider"></div>

            <div className="info-item">
              <small>FOCUS</small>
              <strong>AI + Data</strong>
              <span>Real-world solutions</span>
            </div>

          </div>


          {/* ==================== TECHNOLOGIES ==================== */}
          <div className="glass-card technologies-card">

            <div className="card-heading">
              <span>TOOLS & TECHNOLOGIES</span>
              <span className="card-status">ACTIVE</span>
            </div>

            <div className="tech-grid">
              <span>Python</span>
              <span>SQL</span>
              <span>Power BI</span>
              <span>Excel</span>
              <span>AWS</span>
              <span>Snowflake</span>
              
              <span>RAG</span>
              <span>LLMs</span>
              <span>Git</span>
              <span>Linux</span>
              <span>Prompt Engineering</span>
            </div>

          </div>

        </div>


        {/* ==================== AVATAR ==================== */}
        <div className="hero-avatar">

          <div className="avatar-platform"></div>

          <AvatarStage />

        </div>


        {/* ==================== RIGHT PANELS ==================== */}
        <aside className="hero-panels">

          {/* STATUS */}
          <div className="glass-card status-card">

            <div className="card-heading">

              <span>STATUS</span>

              <span className="online-status">
                <i></i>
                ONLINE
              </span>

            </div>

            <div className="status-list">

              <div>
                <span>◈</span>
                Problem Solving
              </div>

              <div>
                <span>◈</span>
                Building Solutions
              </div>

              <div>
                <span>◈</span>
                Exploring AI
              </div>

              <div>
                <span>◈</span>
                Learning Everyday
              </div>

            </div>

            <div className="orbit-globe">
              <div className="globe-core">◎</div>
            </div>

          </div>


          {/* ==================== PROJECT ==================== */}
          <div className="glass-card project-card">

            <div className="card-heading">

              <span>CURRENT PROJECT</span>

              <button
                className="view-link project-open-btn"
                type="button"
                onClick={() => openPanel("vision")}
              >
                View Project →
              </button>

            </div>


            <div className="project-content">

              <div className="project-icon">
                V
              </div>

              <div>

                <h2>VISION Bai</h2>

                <p>
                  Construction AI RAG Chatbot
                </p>

                <ul>
                  <li>Construction-focused knowledge</li>
                  <li>Data analytics & visualisation</li>
                  <li>Local LLM — Ollama + Mistral 7B</li>
                  <li>RAG-based conversational workflow</li>
                </ul>

              </div>

            </div>


            <div className="project-tags">
              <span>Ollama</span>
              <span>Mistral 7B</span>
              <span>Python</span>
              <span>RAG</span>
            </div>

          </div>


          {/* ==================== CTA ==================== */}
          <div className="glass-card contact-card">

            <div className="card-heading">
              LET'S BUILD SOMETHING IMPACTFUL
            </div>

            <p>
              Open to opportunities in Data Analytics,
              Data Engineering and Gen AI roles.
            </p>

            <div className="cta-buttons">

              <button
                type="button"
                className="primary-cta"
                onClick={() => openPanel("projects")}
              >
                View My Work →
              </button>

              <a
                href="https://drive.google.com/file/d/1J2afNLWKSgSzM9D7Ko2a78Fw23dLntzc/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="secondary-cta"
              >
                Download Resume
              </a>

            </div>

          </div>

        </aside>

      </section>


      {/* ==================== FOOTER ==================== */}
      <footer className="portfolio-footer">

        <span>
          © 2026 Nikhil Nandan Manepalli
        </span>

        <span>
          IDEAS → DATA → AI → REAL WORLD IMPACT
        </span>

        

      </footer>


      {/* =====================================================
          CINEMATIC OVERLAY
      ===================================================== */}

      {activePanel && (

        <div
          className="portfolio-overlay"
          onClick={closePanel}
        >

          <div
            className="portfolio-modal"
            onClick={(event) => event.stopPropagation()}
          >

            {/* CLOSE */}
            <button
              type="button"
              className="modal-close"
              onClick={closePanel}
            >
              ×
            </button>


{/* ==================== ABOUT ==================== */}
{activePanel === "about" && (

  <div className="modal-content about-panel">

    <span className="modal-kicker">
      SYSTEM PROFILE
    </span>

    <h2>
      Nikhil Nandan Manepalli
    </h2>

    <p className="modal-lead">
      AI & Data Analytics Professional
    </p>

    <div className="modal-grid">

      <div>
  <small>WHO I AM</small>

  <p>
    I am Nikhil Nandan Manepalli, an AI & Data Analytics Professional
    with a background in Computer Science and Data Science. I am curious,
    creative and analytical, with a strong interest in Generative AI,
    Data Analytics and practical technology solutions.
  </p>
</div>

<div>
  <small>HOW MY JOURNEY STARTED</small>

  <p>
    My journey began with Computer Science and Data Science, where I
    developed an interest in working with data, understanding patterns
    and solving problems. Over time, that interest expanded into
    analytics, AI and intelligent applications.
  </p>
</div>

<div>
  <small>WHY AI</small>

  <p>
    Generative AI caught my attention because it felt almost like magic.
    An idea could begin in my head and, with the right tools, become
    something I could actually see, test and interact with. That
    curiosity pushed me to experiment with RAG, LLMs, APIs and local AI.
  </p>
</div>

<div>
  <small>HOW I LEARN</small>

  <p>
    I learn best by building. While experimenting with projects such as
    VISION Bai, I worked through APIs, local LLMs, dependencies,
    project configuration and development environments. I enjoy
    investigating problems, experimenting with solutions and learning
    from the process.
  </p>
</div>

    </div>

    <div className="about-highlight">

      <span>CORE IDEA</span>

      <strong>
        Turn ideas into intelligent solutions.
      </strong>

    </div>

  </div>

)}


            {/* ==================== SKILLS ==================== */}
           {activePanel === "skills" && (
  <div className="modal-content skills-panel">
    <span className="modal-kicker">CAPABILITY SYSTEM</span>

    <h2>Skills & Technologies</h2>

    <p className="modal-lead">
      I don't see skills as a checklist. I learn technologies by trying to
      solve problems with them — experimenting, building, troubleshooting
      and improving along the way.
    </p>

    <div className="skills-story">
      <div className="skill-category">
        <div className="skill-category-header">
          <span>01</span>
          <h3>DATA & ANALYTICS</h3>
        </div>

        <div className="skill-list">
          <div className="skill-item">
            <strong>Python</strong>
            <p>
              Data analysis, working with datasets and using libraries such as
              Pandas and NumPy.
            </p>
          </div>

          <div className="skill-item">
            <strong>SQL</strong>
            <p>
              Querying, filtering, transforming and analysing structured data.
            </p>
          </div>

          <div className="skill-item">
            <strong>Power BI</strong>
            <p>
              Building interactive dashboards, KPI reports and visual
              representations of business insights.
            </p>
          </div>

          <div className="skill-item">
            <strong>Microsoft Excel</strong>
            <p>
              Data preparation, analysis and reporting using spreadsheets.
            </p>
          </div>
        </div>
      </div>

      <div className="skill-category">
        <div className="skill-category-header">
          <span>02</span>
          <h3>GENERATIVE AI</h3>
        </div>

        <div className="skill-list">
          <div className="skill-item">
            <strong>RAG</strong>
            <p>
              Building knowledge-grounded conversational workflows around
              focused datasets and information sources.
            </p>
          </div>

          <div className="skill-item">
            <strong>LLMs</strong>
            <p>
              Exploring and integrating large language models into
              AI-powered applications.
            </p>
          </div>

          <div className="skill-item">
            <strong>Prompt Engineering</strong>
            <p>
              Designing prompts and AI workflows to produce useful,
              structured outputs.
            </p>
          </div>

          <div className="skill-item">
            <strong>Ollama</strong>
            <p>
              Working with local language models, including Mistral 7B, for
              experimentation and AI applications.
            </p>
          </div>
        </div>
      </div>

      <div className="skill-category">
        <div className="skill-category-header">
          <span>03</span>
          <h3>AI-ASSISTED DEVELOPMENT</h3>
        </div>

        <div className="skill-list">
          <div className="skill-item">
            <strong>React</strong>
            <p>
              Building interfaces and application experiences with the help
              of AI-assisted development.
            </p>
          </div>

          <div className="skill-item">
            <strong>JavaScript & TypeScript</strong>
            <p>
              Working with modern web application code and interactive
              interfaces.
            </p>
          </div>

          <div className="skill-item">
            <strong>Bun</strong>
            <p>
              Working with the runtime and project tooling while building
              AI-powered applications.
            </p>
          </div>

          <div className="skill-item">
            <strong>Git</strong>
            <p>
              Managing projects and working with version-control workflows.
            </p>
          </div>
        </div>
      </div>

      <div className="skill-category">
        <div className="skill-category-header">
          <span>04</span>
          <h3>CLOUD & DEVELOPMENT ENVIRONMENT</h3>
        </div>

        <div className="skill-list">
          <div className="skill-item">
            <strong>AWS</strong>
            <p>
              Familiarity with cloud concepts and AWS-based technologies.
            </p>
          </div>

          <div className="skill-item">
            <strong>Snowflake</strong>
            <p>
              Familiarity with modern cloud data-platform concepts.
            </p>
          </div>

          <div className="skill-item">
            <strong>Linux & Bash</strong>
            <p>
              Basic command-line usage and working with development
              environments.
            </p>
          </div>

          <div className="skill-item">
            <strong>PowerShell</strong>
            <p>
              Using terminal commands for project setup, troubleshooting and
              development workflows.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="skills-highlight">
      <span>MY APPROACH</span>
      <strong>
        Learn → Experiment → Build → Troubleshoot → Improve
      </strong>
    </div>
  </div>
)}


            {/* ==================== PROJECTS ==================== */}
            {activePanel === "projects" && (

              <div className="modal-content">

                <span className="modal-kicker">
                  SELECTED WORK
                </span>

                <h2>
                  Projects
                </h2>

                <div className="project-list">

                  <button
                    type="button"
                    onClick={() => openPanel("vision")}
                  >
                    <strong>VISION Bai</strong>
                    <span>
                      Construction AI RAG Chatbot →
                    </span>
                  </button>

                  <div>
                    <strong>
                      Customer Behaviour Analysis
                    </strong>

                    <span>
                      Data Analytics Project
                    </span>
                  </div>

                  <div>
                    <strong>
                      Vendor Performance Analytics
                    </strong>

                    <span>
                      Data Analytics Project
                    </span>
                  </div>

                  <div>
                    <strong>
                      Placement Management
                    </strong>

                    <span>
                      Academic Project
                    </span>
                  </div>

                

                </div>

              </div>

            )}


            {/* ==================== VISION ==================== */}
            {/* ==================== VISION BAI STORY ==================== */}
{activePanel === "vision" && (
  <div className="modal-content vision-story-panel">

    <span className="modal-kicker">
      FEATURED PROJECT · PERSONAL BUILD
    </span>

    <h2>VISION Bai</h2>

    <p className="modal-lead">
      Construction AI RAG Chatbot
    </p>

    {/* THE BEGINNING */}
    <section className="vision-story-section">
      <span className="vision-story-number">01</span>

      <div>
        <small>THE BEGINNING</small>

        <h3>It started as an experiment.</h3>

        <p>
          I wanted to understand how far I could take Generative AI when it
          was focused on one specific domain. I chose construction and began
          experimenting with RAG, local language models, APIs and data.
        </p>

        <p>
          The idea was to make construction-focused information easier to
          explore through a conversational AI system while also connecting
          data with visual insights.
        </p>
      </div>
    </section>

    {/* THE PROBLEM */}
    <section className="vision-story-section">
      <span className="vision-story-number">02</span>

      <div>
        <small>THE PROBLEM</small>

        <h3>How can domain knowledge become easier to explore?</h3>

        <p>
          Instead of creating a general-purpose chatbot, I wanted VISION Bai
          to stay focused on construction-related knowledge and provide a
          more relevant conversational experience.
        </p>
      </div>
    </section>

    {/* THE APPROACH */}
    <section className="vision-story-section">
      <span className="vision-story-number">03</span>

      <div>
        <small>THE APPROACH</small>

        <h3>RAG + Local AI + Data</h3>

        <p>
          I explored a retrieval-augmented generation workflow so that the
          system could work with focused knowledge rather than relying only
          on the language model's general knowledge.
        </p>

        <div className="vision-flow">
          <span>KNOWLEDGE</span>
          <b>→</b>
          <span>RAG</span>
          <b>→</b>
          <span>LOCAL LLM</span>
          <b>→</b>
          <span>RESPONSE</span>
        </div>
      </div>
    </section>

    {/* WHAT I BUILT */}
    <section className="vision-story-section">
      <span className="vision-story-number">04</span>

      <div>
        <small>WHAT I BUILT</small>

        <h3>A focused AI workflow around construction knowledge.</h3>

        <p>
          I prepared the project workflow, worked with APIs and local LLM
          configuration, connected the different parts of the application
          and explored ways to combine conversational AI with data
          visualisation.
        </p>

        <div className="vision-tech-stack">
          <span>RAG</span>
          <span>Ollama</span>
          <span>Mistral 7B</span>
          <span>Hugging Face</span>
          <span>Python</span>
          <span>Pandas</span>
          <span>React</span>
          <span>TypeScript</span>
          <span>Bun</span>
        </div>
      </div>
    </section>

    {/* THE HARD PART */}
    <section className="vision-story-section">
      <span className="vision-story-number">05</span>

      <div>
        <small>THE HARD PART</small>

        <h3>Building it was also about troubleshooting.</h3>

        <p>
          The difficult part wasn't simply getting an AI response. I had to
          work through APIs, dependencies, project configuration, folders,
          Bun, PowerShell, local model setup and other technical issues.
        </p>

        <p>
          I kept investigating, experimenting with different approaches and
          learning from each problem instead of stopping when something
          didn't work.
        </p>
      </div>
    </section>

    {/* WHAT I LEARNED */}
    <section className="vision-story-section">
      <span className="vision-story-number">06</span>

      <div>
        <small>WHAT I LEARNED</small>

        <h3>The project changed how I approach technology.</h3>

        <p>
          VISION Bai taught me that building something useful is not only
          about knowing a technology. It is also about understanding the
          problem, experimenting, troubleshooting and continuously improving
          the solution.
        </p>

        <div className="vision-mindset">
          <span>UNDERSTAND</span>
          <b>→</b>
          <span>EXPERIMENT</span>
          <b>→</b>
          <span>BUILD</span>
          <b>→</b>
          <span>BREAK</span>
          <b>→</b>
          <span>FIX</span>
          <b>→</b>
          <span>IMPROVE</span>
        </div>
      </div>
    </section>

    {/* FINAL STATEMENT */}
    <div className="vision-story-highlight">
      <span>WHY VISION Bai MATTERS TO ME</span>

      <strong>
        It started as an experiment — and became a way for me to learn
        how to turn an idea into something real.
      </strong>
    </div>

  </div>
)}


           {/* ==================== NETTMS STORY ==================== */}
{activePanel === "experience" && (
  <div className="modal-content nettms-story-panel">

    <span className="modal-kicker">
      PROFESSIONAL DEVELOPMENT · 2026
    </span>

    <h2>Nettms Urban Habitat</h2>

    <p className="modal-lead">
      Data Analysis with AI — Course & Internship
    </p>

    {/* 01 */}
    <section className="nettms-story-section">
      <span className="nettms-story-number">01</span>

      <div>
        <small>THE EXPERIENCE</small>

        <h3>A structured step into Data Analysis with AI.</h3>

        <p>
          My journey with Nettms Urban Habitat was an opportunity to
          strengthen my understanding of data analysis and explore how
          artificial intelligence can support modern analytical workflows.
        </p>

        <p>
          The program ran from March 2026 to September 2026 and combined
          course learning with an internship component.
        </p>
      </div>
    </section>

    {/* 02 */}
    <section className="nettms-story-section">
      <span className="nettms-story-number">02</span>

      <div>
        <small>WHAT I FOCUSED ON</small>

        <h3>Data + AI</h3>

        <p>
          I focused on strengthening my data-analysis foundation while
          exploring AI-assisted ways of working with information,
          analysis and problem solving.
        </p>

        <div className="nettms-focus-tags">
          <span>DATA ANALYSIS</span>
          <span>AI</span>
          <span>ANALYTICAL THINKING</span>
          <span>AI-ASSISTED WORKFLOWS</span>
        </div>
      </div>
    </section>

    {/* 03 */}
    <section className="nettms-story-section">
      <span className="nettms-story-number">03</span>

      <div>
        <small>THE REALITY</small>

        <h3>Learning continued even while project onboarding was pending.</h3>

        <p>
          I completed the course and internship program. During the
          internship period, the company's real-time project onboarding was
          still pending, so I did not present company project work as my own.
        </p>

        <p>
          Instead, I continued learning, experimenting with technology and
          building independently.
        </p>
      </div>
    </section>

    {/* 04 */}
    <section className="nettms-story-section">
      <span className="nettms-story-number">04</span>

      <div>
        <small>WHAT CAME NEXT</small>

        <h3>I started building on my own.</h3>

        <p>
          The experience became one of the steps that pushed me toward
          independent experimentation. I began exploring Generative AI,
          RAG, local language models and AI-assisted development more deeply.
        </p>

        <p>
          That direction eventually led to projects such as
          <strong> VISION Bai</strong>.
        </p>
      </div>
    </section>

    {/* CERTIFICATE */}
    <section className="nettms-certificate-section">

      <div className="nettms-certificate-heading">
        <div>
          <small>PROOF OF COMPLETION</small>
          <h3>Certificate</h3>
        </div>

        <span>09 MAR 2026 → 09 SEP 2026</span>
      </div>

      <div className="nettms-certificate-frame">
  <img
    src="/certificates/nettms-certificate.png"
    alt="Nettms Urban Habitat Certificate"
  />
</div>

      <p className="nettms-certificate-note">
        Certificate of Completion — Data Analysis with AI
      </p>

    </section>

    {/* FINAL */}
    <div className="nettms-story-highlight">
      <span>WHAT THIS CHAPTER MEANS</span>

      <strong>
        Learn what you can, be honest about what you have done,
        and keep building when the next opportunity has not arrived yet.
      </strong>
    </div>

  </div>
)}


            {/* ==================== CONTACT ==================== */}
            {activePanel === "contact" && (

              <div className="modal-content">

                <span className="modal-kicker">
                  LET'S CONNECT
                </span>

                <h2>
                  Let's build something impactful.
                </h2>

                <p className="modal-lead">
                  Open to opportunities in Data Analytics,
                  Data Engineering and Gen AI roles.
                </p>

                <div className="contact-links">

                  <a href="mailto:nikhilmanepalli6734@gmail.com">
                    <span>Email</span>
                    <strong>
                      nikhilmanepalli6734@gmail.com
                    </strong>
                  </a>

                  <a
                    href="https://github.com/mr-pr0fessional"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>GitHub</span>
                    <strong>
                      github.com/mr-pr0fessional
                    </strong>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/manepalli-nikhil-nandan"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>LinkedIn</span>
                    <strong>
                      linkedin.com/in/manepalli-nikhil-nandan
                    </strong>
                  </a>

                </div>

              </div>

            )}

          </div>

        </div>

      )}



    </main>
  );
}



export default App;