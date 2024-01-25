import gsap, { Power2 } from "gsap"
import * as React from "react"
import "../assets/css/page.main.scss"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  React.useEffect(() => {
    window.addEventListener("resize", handleResize)
    init()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  async function handleResize() {
    const itemSize = window.outerHeight / 3
    gsap.from(".white-bars > li:first-of-type", {
      width: "50%",
    })

    gsap.from(".white-bars > li:nth-of-type(2)", {
      x: -itemSize,
      width: "50%",
    })
    gsap.from(".white-bars > li:nth-of-type(3)", {
      x: -itemSize * 2,
      width: "50%",
    })
  }

  async function init() {
    const itemSize = window.innerHeight / 3
    gsap.to(".white-bars > li:first-of-type", {
      duration: 1,
      // x: 180,
      width: "50%",
      ease: Power2.easeOut,
    })

    gsap.to(".white-bars > li:nth-of-type(2)", {
      duration: 0.9,
      x: -itemSize,
      width: "50%",
      ease: Power2.easeOut,
      delay: 0.1,
    })

    gsap.to(".white-bars > li:nth-of-type(3)", {
      duration: 0.8,
      x: -itemSize * 2,
      width: "50%",
      ease: Power2.easeOut,
      delay: 0.2,
    })

    gsap.to(".bg-overlay > .black-bg", {
      alpha: 0,
      duration: 0.8,
      ease: Power2.easeInOut,
      delay: 0.6,
    })

    setTimeout(() => {
      gsap.to(".toggle-menu-btn .bar", {
        stroke: "white",
        // ease: Power2.easeOut,
      })
    }, 50)

    setTimeout(() => {
      document.querySelector(".menu-area").classList.add("white")
    }, 100)

    setTimeout(() => {
      document
        .querySelector(".txt-list > li:first-of-type")
        .classList.add("active")
    }, 800)

    let targets = gsap.utils.toArray(".scroll-container > div")
    targets.forEach((item, index) => {
      gsap.to(item, {
        scrollTrigger: {
          scroller: ".scroll-container",
          trigger: item,
          start: "top",
          onEnter: () => {
            const target = index
            console.log("enter:" + target)
            document
              .querySelectorAll(".bg-container > div")
              .forEach((el, index) => {
                if (index == target) {
                  el.classList.add("active")
                } else {
                  el.classList.remove("active")
                }
              })

            document.querySelectorAll(".txt-list > li").forEach((el, index) => {
              if (index == target) {
                el.classList.add("active")
              } else {
                el.classList.remove("active")
              }
            })
          },
          onLeaveBack: () => {
            const target = index
            console.log("leave:" + target)
            document
              .querySelectorAll(".bg-container > div")
              .forEach((el, index) => {
                if (index == target) {
                  el.classList.add("active")
                } else {
                  el.classList.remove("active")
                }
              })

            document.querySelectorAll(".txt-list > li").forEach((el, index) => {
              if (index == target) {
                el.classList.add("active")
              } else {
                el.classList.remove("active")
              }
            })
          },
        },
      })
    })
  }

  return (
    <Layout pageName="index">
      <div className="main-page" data-lenis-prevent>
        <div className="bg-container">
          <div className="active">
            <img src="/img/bg/1.webp" alt="" />
          </div>
          <div>
            <img src="/img/bg/2.webp" alt="" />
          </div>
          <div>
            <img src="/img/bg/3.webp" alt="" />
          </div>
          <div>
            <img src="/img/bg/4.webp" alt="" />
          </div>
          <div>
            <img src="/img/bg/5.webp" alt="" />
          </div>
          <div>
            <img src="/img/bg/6.webp" alt="" />
          </div>
          <div>
            <img src="/img/bg/7.webp" alt="" />
          </div>
          <div>
            <img src="/img/bg/8.webp" alt="" />
          </div>
        </div>
        <div className="bg-overlay">
          <div className="black-bg"></div>
          <ul className="white-bars">
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul className="txt-list">
            <li>
              <span>WELCOME</span>
              <span>ABOARD</span>
            </li>
            <li>
              <span>On or Onto</span>
              <span>Physical Interaction</span>
            </li>
            <li>
              <span>On or Onto</span>
              <span>Metaverse</span>
            </li>
            <li>
              <span>On or Onto</span>
              <span>User Experience Design</span>
            </li>
            <li>
              <span>On or Onto</span>
              <span>Interactive Design</span>
            </li>
            <li>
              <span>On or Onto</span>
              <span>Mixed Reality</span>
            </li>
            <li>
              <span>On or Onto</span>
              <span>Systems Engineering</span>
            </li>
            <li>
              <span>On or Onto</span>
              <span>AI Service Platform</span>
            </li>
          </ul>
        </div>
        <div className="scroll-container">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className="copyright">©2023 ABOARD.</p>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo />

export default IndexPage
