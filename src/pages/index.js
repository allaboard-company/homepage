import gsap from "gsap"
import * as React from "react"
import "../assets/css/page.main.scss"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  React.useEffect(() => {
    init()
  }, [])

  async function init() {
    var t1 = gsap.timeline()

    t1.to(".bg-wrap", {
      width: "100%",
      height: "100%",
      duration: 1.6,
      ease: "sine.out",
    })

    t1.to("h1", {
      opacity: 1,
      duration: 0.6,
      delay: -1,
      ease: "sine.inOut",
    })

    t1.to(".text", {
      opacity: 1,
      duration: 0.6,
      delay: -0.4,
      ease: "sine.inOut",
    })
  }

  return (
    <Layout pageName="index">
      <div className="main-page">
        <div className="bg-wrap"></div>
        <div className="scroll-space">
          <div></div>
          <div></div>
        </div>
        <div className="txt-wrap">
          <h1>
            WELCOME
            <br />
            ABOARD
          </h1>
          <p className="text">
            redefining design,
            <br />
            bridging the digital and physical divide
          </p>
          <p className="copyright">©2023 ABOARD.</p>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo />

export default IndexPage
