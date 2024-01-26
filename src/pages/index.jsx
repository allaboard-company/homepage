import gsap, { Power2 } from "gsap"
import * as React from "react"
import "../assets/css/page.main.scss"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

const IndexPage = () => {
  React.useEffect(() => {
    window.addEventListener("resize", handleResize)
    init()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  async function handleResize() {
    const isMobile = window.innerWidth < 768
    if (!isMobile) {
      const itemSize = window.innerHeight / 3
      gsap.to(".white-bars > li:first-of-type", {
        duration: 1,
        width: "50%",
        x: 0,
        y: 0,
        ease: Power2.easeOut,
      })

      gsap.to(".white-bars > li:nth-of-type(2)", {
        duration: 0.9,
        x: -itemSize,
        y: 0,
        width: "50%",
        ease: Power2.easeOut,
        delay: 0.1,
      })

      gsap.to(".white-bars > li:nth-of-type(3)", {
        duration: 0.8,
        x: -itemSize * 2,
        y: 0,
        width: "50%",
        ease: Power2.easeOut,
        delay: 0.2,
      })
    } else {
      const itemSize = window.innerWidth / 3
      gsap.to(".white-bars > li:first-of-type", {
        duration: 1,
        width: "100%",
        height: "50%",
        ease: Power2.easeOut,
      })

      gsap.to(".white-bars > li:nth-of-type(2)", {
        duration: 0.9,
        y: -itemSize,
        x: 0,
        width: "100%",
        height: "50%",
        ease: Power2.easeOut,
        delay: 0.1,
      })

      gsap.to(".white-bars > li:nth-of-type(3)", {
        duration: 0.8,
        x: 0,
        y: -itemSize * 2,
        width: "100%",
        height: "50%",
        ease: Power2.easeOut,
        delay: 0.2,
      })
    }

    gsap.to(".copyright", {
      color: "white",
      // ease: Power2.easeOut,
    })
  }

  async function init() {
    const isMobile = window.innerWidth < 768
    handleResize()

    gsap.to(".black-bg", {
      alpha: 0,
      duration: 0.8,
      ease: Power2.easeInOut,
      delay: 0.6,
    })

    setTimeout(() => {
      if (!isMobile) {
        gsap.to(".toggle-menu-btn .bar", {
          stroke: "white",
          // ease: Power2.easeOut,
        })
      }

      gsap.to(".copyright", {
        color: "white",
        // ease: Power2.easeOut,
      })
    }, 50)

    setTimeout(() => {
      const el = document.querySelector(".menu-area")
      if (!el) {
        return
      }
      el.classList.add("white")
    }, 100)

    setTimeout(() => {
      const el = document.querySelector(".txt-list > li:first-of-type")
      if (!el) {
        return
      }
      el.classList.add("active")
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
            // document
            //   .querySelectorAll(".bg-container > div")
            //   .forEach((el, index) => {
            //     if (index == target) {
            //       el.classList.add("active")
            //     } else {
            //       el.classList.remove("active")
            //     }
            //   })

            // document.querySelectorAll(".txt-list > li").forEach((el, index) => {
            //   if (index == target) {
            //     el.classList.add("active")
            //   } else {
            //     el.classList.remove("active")
            //   }
            // })
          },
          onLeaveBack: () => {
            const target = index
            console.log("leave:" + target)
            // document
            //   .querySelectorAll(".bg-container > div")
            //   .forEach((el, index) => {
            //     if (index == target) {
            //       el.classList.add("active")
            //     } else {
            //       el.classList.remove("active")
            //     }
            //   })

            // document.querySelectorAll(".txt-list > li").forEach((el, index) => {
            //   if (index == target) {
            //     el.classList.add("active")
            //   } else {
            //     el.classList.remove("active")
            //   }
            // })
          },
        },
      })
    })
  }

  return (
    <Layout pageName="index">
      <div className="main-page" data-lenis-prevent>
        <div className="bg-overlay">
          <Swiper
            className="bg-swiper"
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={swiper => console.log(swiper)}
          >
            <SwiperSlide>
              <img src="/img/bg/1.webp" alt="" />
            </SwiperSlide>
            {/* <SwiperSlide>
              <img src="/img/bg/2.webp" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/bg/3.webp" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/img/bg/4.webp" alt="" />
            </SwiperSlide> */}
            <div className="gradient-bg"></div>
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
            </ul>
          </Swiper>
        </div>
        <p className="copyright">©2023 ABOARD.</p>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo />

export default IndexPage
