import AOS from "aos"
import "aos/dist/aos.css"
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import * as React from "react"
import "../assets/css/layout.scss"
import "../assets/css/reset.css"
import Footer from "./footer"
import Header from "./header"

gsap.registerPlugin(ScrollTrigger)

const Layout = ({ pageName, children }) => {
  React.useEffect(() => {
    init()
  }, [])

  async function init() {
    if (window.Lenis) {
      const lenis = new window.Lenis({
        // duration: 1.2,
        easing: t => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        // smoothTouch: false,
        // touchMultiplier: 2,
      })

      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)

      lenis.on("scroll", ScrollTrigger.update)

      gsap.ticker.add(time => {
        lenis.raf(time * 1000)
      })

      gsap.ticker.lagSmoothing(0)
    }

    AOS.init({
      // offset: 20,
      delay: 0,
      duration: 1000,
      easing: "ease-out-sine",
    })

    document.body.classList.add("loaded")
  }

  return (
    <>
      <Header pageName={pageName} />
      <main>{children}</main>
      <Footer pageName={pageName} />
    </>
  )
}

export default Layout
