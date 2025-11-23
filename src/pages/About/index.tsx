import Picture from "../../assets/picture.jpg"

const About = () => {
  return (
    <>

      <h2>ABOUT</h2>
      <div className="intro">
        <img src={Picture} className="picture" alt="picture of me" />
        <p className="italic">
          90% of my body is made of tea, the rest is foreign languages, music
          and overthinking
        </p>
      </div>
      <section>
        <p className="bio-row">
          <a
            href="https://www.linkedin.com/company/accessiway"
            target="_blank"
          >AccessiWay</a>, <span className="bold">Frontend Developer</span></p>
        <p className="bio-row italic small">May 2025 - Present</p>
        <p className="bio-row">
          Developing tools used by accessibility experts to carry out analyses and provide reports to clients. React with Vite, TypeScript, Chakra UI, Tailwind, Playwright for e2e tests, and other cool stuff.
        </p>
      </section>
      <p className="subheading mt-2 text-left">
        ... more on <a
          href="https://www.linkedin.com/in/lidiacirrone/?locale=en_US"
          target="_blank"
        >linkedin</a> and <a
          href="https://github.com/lidiaCirrone"
          target="_blank"
        >github</a>
      </p>
    </>
  )
}

export default About