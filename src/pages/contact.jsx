import * as React from "react"
import gsap, { Power2 } from "gsap"
import "../assets/css/page.contact.scss"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = () => {
  React.useEffect(() => {
    init()
  }, [])

  async function init() {
    gsap.fromTo(
      ".contact-page",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.2,
        ease: Power2.easeOut,
      }
    )

    gsap.fromTo(
      ".contact-page .info-area",
      {
        width: "50%",
      },
      {
        width: "100%",
        duration: 3,
        ease: "Expo.easeOut",
      }
    )

    gsap.fromTo(
      ".contact-page h1, .contact-page ul li, .contact-page a",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "Expo.easeInOut",
        delay: 0.3,
      }
    )

    // document.querySelector(".contact-page").classList.add("loaded")
  }

  return (
    <Layout pageName="contact">
      <div className="contact-page">
        <div className="img-area"></div>
        <div className="info-area">
          <div>
            <h1>Contact us</h1>
            <ul>
              <li>aboard@allaboard.co.kr</li>
              <li>+82 70 8800 0401</li>
              <li>
                Publik B1712, 178, Digital-ro, Geumcheon-gu, Seoul, Republic of
                Korea
              </li>
            </ul>
            <a
              href="https://maps.app.goo.gl/Hsp9RmTq2n1Ts1i66"
              className="map-link"
              target="_blank"
            >
              FIND US ON THE MAP
            </a>
          </div>
          <span className="copyright">©2023 ABOARD.</span>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Contact" />

export default ContactPage
