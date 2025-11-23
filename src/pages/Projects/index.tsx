const Projects = () => {
  return (
    <>
    <h2>PROJECTS</h2>
      <section className="mt-2">
        <p className="bio-row">
          <a href="https://www.lecoccoledimammairene.org/" target="_blank">Le coccole di mamma Irene</a>
        </p>
        <p className="bio-row italic small">Aug 2025 - Present</p>
        <p className="bio-row">
          Developing the WordPress website of my cousin's NGO, a group of amazing volunteers that visit NICUs and help premature newborn babies.
        </p>
        <p className="bio-row small">
          🔗
          <a href="https://www.lecoccoledimammairene.org/" target="_blank" className="secondary"
            >https://www.lecoccoledimammairene.org/</a>
        </p>
        <div className="social-icons-row">
          <a href="https://www.facebook.com/archeplaceinc" target="_blank">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.linkedin.com/company/archeplaceinc" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/archeplaceinc/" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </section>
      <section className="mt-2">
        <p className="bio-row">
          <a href="https://bit.ly/3MMeH7N" target="_blank"
            >Natura Di Stagione</a>
        </p>
        <p className="bio-row italic small">Mar 2024 - Present</p>
        <p className="bio-row">
          Working alongside two brilliant minds (<a
            href="https://www.linkedin.com/in/simone-filippo-antonicchio/"
            target="_blank"
            className="secondary"
            >Simone</a> and <a
            href="https://www.linkedin.com/in/piero-tupone-40029924b/"
            target="_blank"
            className="secondary"
            >Piero</a>) on a React Native mobile app that helps people find info about
          seasonal fruits and vegetables in Italy.<br />
          Main contributions: backend server in NestJS, mockups, UI, and general
          look and feel.
        </p>
        <p className="bio-row small">
          🔗
          <a href="https://bit.ly/3MMeH7N" target="_blank" className="secondary"
            >https://bit.ly/3MMeH7N</a>
        </p>
        <div className="social-icons-row">
          <a href="https://www.facebook.com/naturadistagione/" target="_blank">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.linkedin.com/company/natura-di-stagione/" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/naturadistagione/" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </section>
      <section className="mt-2">
        <p className="bio-row">
          <a href="http://archeplace.org/" target="_blank">Arche Place</a>
        </p>
        <p className="bio-row italic small">Aug 2024 - Dec 2024</p>
        <p className="bio-row">
          Developed a WordPress website for a US-based nonprofit organization
          that helps victims of domestic violence.
        </p>
        <p className="bio-row small">
          🔗
          <a href="http://archeplace.org/" target="_blank" className="secondary"
            >http://archeplace.org/</a>
        </p>
        <div className="social-icons-row">
          <a href="https://www.facebook.com/archeplaceinc" target="_blank">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.linkedin.com/company/archeplaceinc" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/archeplaceinc/" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </section>
      <section className="mt-2">
        <p className="bio-row">
          <a href={`https://www.polyglotwannabe.com/projects/buy-and-sell/`} target="_blank">Buy and Sell</a>
        </p>
        <p className="bio-row italic small">Feb 2024</p>
        <p className="bio-row">
          Developed a mock buy and sell platform in Angular and Node.js using
          hapi for the server and Firebase to handle Google login. Database,
          backend and frontend hosted separately.
        </p>
        <p className="bio-row small">
          🔗
          <a href={`https://www.polyglotwannabe.com/projects/buy-and-sell/`} target="_blank" className="secondary"
            >/projects/buy-and-sell/</a>
        </p>
      </section>
      </>
  )
}

export default Projects