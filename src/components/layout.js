import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import * as React from "react"
import "../assets/css/reset.css"
import "../assets/css/layout.scss"
import Header from "./header"
import AOS from "aos"
import "aos/dist/aos.css"

gsap.registerPlugin(ScrollTrigger)

const Layout = ({ children }) => {
  React.useEffect(() => {
    console.log("layout init")
    init()
  }, [])

  async function init() {
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

  function renderFooter() {
    if (
      !window.location.pathname.startsWith("/about") &&
      !window.location.pathname.startsWith("/work")
    ) {
      return <></>
    }

    return (
      <footer>
        <span className="copyright">©2023 ABOARD.</span>
        <button className="btn-top">TOP</button>
      </footer>
    )
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      {renderFooter()}
    </>
  )
}

export default Layout
