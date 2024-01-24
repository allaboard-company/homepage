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
    console.log("hi")
    window.scrollTo({
      top: 0,
    })

    if (document.querySelector(".btn-top")) {
      document.querySelector(".btn-top").addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth", // 부드러운 스크롤 효과
        })
      })
    }

    if (window.Lenis) {
      const lenis = new window.Lenis({
        duration: 1.2,
        easing: t => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
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

    document.body.classList.remove("loading")
    AOS.init()
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
