import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import "../assets/css/page.contact.scss"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = () => {
  React.useEffect(() => {
    init()
  }, [])

  async function init() {}

  return (
    <Layout>
      <div className="contact-page">
        <div></div>
        <div>
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
