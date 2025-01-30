import React from 'react'
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
            href="https://www.linkedin.com/company/myedu-digital"
            target="_blank"
          >MyEdu</a>, <span className="bold">Frontend Developer</span></p>
        <p className="bio-row italic small">Apr 2024 - Present</p>
        <p className="bio-row">
          Rebuilding an educational platform in Next.js, TypeScript and Tailwind CSS. Integrating APIs and using Server Side Rendering to optimize performances. Developing custom plugins for the CKEditor library to add functionalities to the rich text editors used to create and edit lessons content and tests. Creating scripts in Node.js to add pre-commit hooks for Git and using Valibot to validate form inputs.
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