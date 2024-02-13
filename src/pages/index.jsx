import gsap, { Power2 } from "gsap"
import * as React from "react"
import "../assets/css/page.main.scss"
import "../assets/css/page.work.scss"
import Layout from "../components/layout"
import Seo from "../components/seo"

import "swiper/css"
import "swiper/css/pagination"
import { Pagination, Mousewheel } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Footer from "../components/footer"
import WORK_LIST from "../../static/data/works.json"

const IndexPage = () => {
  const [title1, setTitle1] = React.useState("")
  const [title2, setTitle2] = React.useState("")
  let projectIdx = 0

  React.useEffect(() => {
    window.addEventListener("resize", handleResize)
    init()
    initWorkDetail()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  async function handleResize() {
    const isMobile = window.innerWidth < 768
    if (!isMobile) {
      let itemSize = window.innerWidth / 5
      gsap.to(".white-bars > li:first-of-type", {
        duration: 1,
        width: "60%",
        x: 0,
        y: 0,
        height: itemSize,
        ease: Power2.easeOut,
      })

      gsap.to(".white-bars > li:nth-of-type(2)", {
        duration: 0.9,
        x: -itemSize,
        y: 0,
        width: "60%",
        height: itemSize,
        ease: Power2.easeOut,
        delay: 0.1,
      })

      gsap.to(".white-bars > li:nth-of-type(3)", {
        duration: 0.8,
        x: -itemSize * 2,
        y: 0,
        width: "60%",
        height: itemSize,
        ease: Power2.easeOut,
        delay: 0.2,
      })
    } else {
      const itemSize = window.innerWidth / 3
      gsap.fromTo(
        ".white-bars > li:first-of-type",
        {
          x: 0,
          y: 0,
          width: "100%",
          height: "100%",
        },
        {
          duration: 1,
          width: "100%",
          height: itemSize * 3.542,
          ease: Power2.easeOut,
        }
      )

      gsap.fromTo(
        ".white-bars > li:nth-of-type(2)",
        {
          x: 0,
          y: 0,
          width: "100%",
          height: "100%",
        },
        {
          duration: 0.9,
          x: 0,
          width: "100%",
          height: itemSize * 2.542,
          ease: Power2.easeOut,
          delay: 0.1,
        }
      )

      gsap.fromTo(
        ".white-bars > li:nth-of-type(3)",
        {
          x: 0,
          y: 0,
          width: "100%",
          height: "100%",
        },
        {
          duration: 0.8,
          x: 0,
          width: "100%",
          height: itemSize * 1.542,
          ease: Power2.easeOut,
          delay: 0.2,
        }
      )
    }

    gsap.to(".toggle-menu-btn .bar", {
      stroke: isMobile ? "black" : "white",
    })

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
        })
      }

      gsap.to(".copyright", {
        color: "white",
      })
    }, 50)

    setTimeout(() => {
      const el = document.querySelector(".menu-area")
      if (!el) {
        return
      }
      el.classList.add("white")
    }, 100)

    gsap.to(".project-title-wrap", { alpha: 1, delay: 1 })
    setTitle1(WORK_LIST[0].title)
    setTitle2(WORK_LIST[0].subtitle)
  }

  function extractAttributeValue(str, attributeName) {
    var regex = new RegExp(attributeName + "='([^']+)'")
    var match = str.match(regex)
    return match ? match[1] : null
  }

  function extractVimeoId(url) {
    var regex = /vimeo\.com\/(\d+)/
    var match = url.match(regex)
    return match ? match[1] : null
  }

  function createVimeoEmbedString(vimeoId) {
    return `<iframe src="https://player.vimeo.com/video/${vimeoId}" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>`
  }

  function showPopup(index) {
    if (index < 0 || WORK_LIST.length <= index) {
      return
    }

    const data = WORK_LIST[index]
    if (!data) {
      return
    }
    document.querySelector(".work-detail-page .container").innerHTML = ""

    projectIdx = index

    const {
      title,
      main_img,
      hashtags,
      head_desc,
      foot_desc,
      content,
      notes = [],
    } = data

    let html = ""
    if (title) {
      html += `<h2>${title}</h2>`
    }

    if (hashtags) {
      html += `<p class="hashtags">${hashtags
        .map(hashtag => {
          return "#" + hashtag
        })
        .join(" ")}</p>`
    }

    if (head_desc) {
      html += `<p class="inner-container float-right">${head_desc}</p>`
    }

    if (main_img) {
      html += `<img class="main-img" src="${main_img}"/>`
    }

    if (content) {
      html += '<div class="content">'
      html += content
        .map(item => {
          if (item.startsWith("<vimeo")) {
            let vimeoId = extractAttributeValue(item, "id")
            if (vimeoId.startsWith("http")) {
              vimeoId = extractVimeoId(vimeoId)
            }

            if (!vimeoId) {
              return ""
            }

            return `<div class="video-wrap">${createVimeoEmbedString(
              vimeoId
            )}</div>`
          }

          return item
        })
        .join("")
      html += "</div>"
    }

    if (foot_desc) {
      html += `<p class="inner-container">${foot_desc}</p>`
    }

    if (notes.length > 0) {
      html += '<ul class="notes inner-container"">'
      html += notes
        .map(item => {
          return `<li class="text"><span>${item["name"]}</span>${item["value"]}</li>`
        })
        .join("")
      html += "</ul>"
    }

    document.querySelector(".work-detail-page").scrollTo({ top: 0 })
    document.querySelector(".work-detail-page .container").innerHTML = html

    setTimeout(() => {
      document.body.classList.add("show-full-popup")
      const el = document.querySelector(".work-detail-page")
      if (!el) {
        return
      }
      el.style.display = "block"
      el.scrollTo({ top: 0 })
      gsap.to(".work-detail-page", {
        opacity: 1,
      })
    }, 100)
  }

  function initWorkDetail() {
    document.querySelector(".btn-close").addEventListener("click", function () {
      gsap.to(".work-detail-page", {
        opacity: 0,
        onComplete: () => {
          document.body.classList.remove("show-full-popup")
          document.querySelector(".work-detail-page").style.display = "none"
        },
      })
    })

    document.querySelector(".btn-left").addEventListener("click", function () {
      showPopup(projectIdx - 1)
    })

    document.querySelector(".btn-right").addEventListener("click", function () {
      showPopup(projectIdx + 1)
    })
  }

  return (
    <Layout pageName="index">
      <div className="main-page">
        <Swiper
          modules={[Pagination, Mousewheel]}
          className="bg-swiper"
          spaceBetween={0}
          slidesPerView={1}
          direction="vertical"
          mousewheel={true}
          loopAdditionalSlides={10}
          speed={500}
          grabCursor={true}
          watchSlidesProgress={true}
          // grabCursor={true}
          // pagination={{
          //   type: "bullets",
          //   clickable: true,
          // }}
          onClick={swiper => {
            const index = swiper.activeIndex
            showPopup(index)
          }}
          onSlideChange={swiper => {
            const index = swiper.activeIndex
            setTitle1(WORK_LIST[index].title)
            setTitle2(WORK_LIST[index].subtitle)
          }}
          onProgress={swiper => {
            const interleaveOffset = 0.9
            for (const slide of swiper.slides) {
              var slideProgress = slide.progress
              var innerOffset = swiper.height * interleaveOffset
              var innerTranslate = slideProgress * innerOffset
              slide.querySelector(".bg-img").style.transform =
                "translate3d(0, " + innerTranslate + "px, 0)"
            }
          }}
          onTouchStart={swiper => {
            for (const slide of swiper.slides) {
              slide.style.transition = ""
            }
          }}
          onSetTransition={(swiper, transition) => {
            for (const slide of swiper.slides) {
              slide.style.transition = transition + "ms"
              slide.querySelector(".bg-img").style.transition =
                transition + "ms"
            }
          }}
        >
          {WORK_LIST.map(item => {
            return (
              <SwiperSlide>
                <div
                  className="bg-img"
                  style={{
                    background: `url("${item["thumb_img"]}")`,
                  }}
                ></div>
                <p className="title">${item["title"]}</p>
                <p className="subtitle">${item["subtitle"]}</p>
              </SwiperSlide>
            )
          })}
          <div className="swiper-pagination"></div>
          <div className="gradient-bg"></div>
          <div className="black-bg"></div>
          <ul className="white-bars">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </Swiper>
        <div className="project-title-wrap">
          <p className="title">{title1}</p>
          <p className="subtitle">{title2}</p>
        </div>
        <p className="copyright">©2023 ABOARD.</p>
      </div>
      <div className="work-detail-page" data-lenis-prevent>
        <button className="btn-close"></button>
        <div className="container"></div>
        <div className="bot-float">
          <button className="btn-left"></button>
          <button className="btn-right"></button>
        </div>
        <Footer pageName={"work"} />
      </div>
    </Layout>
  )
}

export const Head = () => <Seo />

export default IndexPage
