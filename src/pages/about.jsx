import gsap from "gsap"
import * as React from "react"
import "../assets/css/page.about.scss"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => {
  React.useEffect(() => {
    init()
  }, [])

  async function init() {
    gsap.utils.toArray(".stair-item").forEach(item => {
      gsap.to(item, {
        yPercent: -50,
        duration: 0,
      })

      gsap.to(item, {
        yPercent: -50,
        ease: "none",
        duration: 0.5,
        opacity: 1,
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "bottom top",
          // markers: true,
          scrub: 0.5,
        },
      })
    })

    gsap.to(".about-page", {
      duration: 0.3,
      opacity: 1,
    })
  }

  return (
    <Layout pageName="about">
      <div className="about-page">
        <section className="sec1">
          <h1>
            WELCOME
            <br />
            ABOARD
          </h1>
          <img src="/img/stair.webp" className="stair-item" />
        </section>
        <section className="sec2">
          <div className="container">
            <p className="txt1" data-aos="fade-left">
              Where design breaks free from screens and converges the realms of
              digital and physical interactions. Specializing in captivating
              websites and intuitive mobile apps, we redefine user experiences
              online. But our commitment doesn't stop there. We bring the same
              creativity to the tangible world, crafting immersive retail
              spaces, innovative product packaging, and thoughtful physical
              environments.
            </p>
          </div>
          <div className="obj-wrap">
            <div className="img-wrap">
              <img
                className="img1"
                src="/img/about_02.webp"
                alt="ABOUT 배경 이미지"
                data-aos="fade-right"
              />
              <img src="/img/stair.webp" className="stair-item" />
            </div>
            <p className="txt2" data-aos="fade-left">
              Our approach is grounded in understanding user behavior. Through
              meticulous research, prototyping, and user testing, we ensure our
              designs not only meet but exceed expectations. Collaboration is at
              our core; we partner closely with clients, making their vision our
              own.
            </p>
          </div>
        </section>
        <section className="sec3">
          <img
            src="/img/about_03.webp"
            alt="ABOUT 배경 이미지"
            className="w100"
            data-aos="fade-up"
          />
          <img src="/img/stair.webp" className="stair-item" />
          <p className="txt1" data-aos="fade-up">
            As we surge ahead, ABOARD envisions a future where design seamlessly
            integrates into everyday life. Join us on this journey of breaking
            boundaries, where innovation thrives in the interconnected world of
            online and offline experiences.
          </p>
          <p className="title" data-aos="fade-up">
            ABOARD
          </p>
          <div className="line" data-aos="fade-up"></div>
          <p className="txt2" data-aos="fade-up">
            Redefining Design,
            <br />
            Bridging the Digital and Physical Divide
          </p>
        </section>
        <section className="sec4">
          <h2>Business Area</h2>
          <ul className="circles">
            <li data-aos="fade-up">
              Experience
              <br />
              Design
            </li>
            <li data-aos="fade-up" data-aos-delay="50">
              Interactive
              <br />
              Design
            </li>
            <li data-aos="fade-up" data-aos-delay="100">
              Service
              <br />
              Development
            </li>
          </ul>
          <p className="txt1" data-aos="fade-up">
            Web/Mobile, UX/UI Design, Programming, Motion Graphic, AR/VR/MR
            <br />
            Media Producing, Exhibition Design, Physical Interaction, Service
            Consulting
          </p>
        </section>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="About" />

export default AboutPage
