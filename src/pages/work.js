import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import gsap from "gsap"
import "../assets/css/page.work.scss"
import Layout from "../components/layout"
import Seo from "../components/seo"

const DUMMY_DATA = []

const WorkPage = () => {
  React.useEffect(() => {
    init()
  }, [])

  async function init() {
    document.querySelectorAll(".work-list li").forEach(el => {
      el.querySelector(".thumb-wrap").setAttribute("data-aos", "fade-up")
      el.querySelector(".title").setAttribute("data-aos", "fade-up")
      el.querySelector(".subtitle").setAttribute("data-aos-delay", "5")
      el.querySelector(".subtitle").setAttribute("data-aos", "fade-up")
    })

    // gsap.utils.toArray(".work-list .title, .work-list .subtitle").forEach((item) => {
    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: item,
    //       // start: "top bottom",
    //     },
    //   });

    //   tl.fromTo(
    //     item,
    //     {
    //       opacity: 0,
    //       // top: 200,
    //       yPercent: 30,
    //       ease: Power2.easeInOut,
    //     },
    //     {
    //       opacity: 1,
    //       // top: 0,
    //       yPercent: 0,
    //       delay: 0.4,
    //       ease: Power2.easeInOut,
    //     }
    //   );
    // });

    gsap.utils.toArray(".thumb-wrap img").forEach(item => {
      // gsap.to(item, {
      //   bottom: 0,
      //   ease: "none",
      //   duration: 0.5,
      //   scrollTrigger: {
      //     trigger: item,
      //     start: "top bottom",
      //     end: "bottom top",
      //     markers: true,
      //     scrub: 0.5,
      //   },
      // });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          scrub: true,
          pin: false,
        },
      })

      tl.fromTo(
        item,
        {
          yPercent: -10,
          ease: "none",
        },
        {
          yPercent: 10,
          ease: "none",
        }
      )
    })

    document.querySelectorAll(".work-list li").forEach((el, index) => {
      el.addEventListener("click", function () {
        showPopup(index)
        document.body.classList.add("show-full-popup")
        document.querySelector(".work-detail-page").style.display = "block"
        gsap.to(".work-detail-page", {
          opacity: 1,
        })
      })
    })

    document.querySelector(".btn-close").addEventListener("click", function () {
      gsap.to(".work-detail-page", {
        opacity: 0,
        onComplete: () => {
          document.body.classList.remove("show-full-popup")
          document.querySelector(".work-detail-page").style.display = "none"
        },
      })
    })

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

    let currentIndex = -1
    function showPopup(index) {
      currentIndex = index
      const data = DUMMY_DATA[index]
      if (!data) {
        return
      }

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
        html += `<p class="desc float-right">${head_desc}</p>`
      }

      if (main_img) {
        html += `<img class="main-img" src="${main_img}"/>`
      }

      if (content) {
        html += '<div class="inner-container">'
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
        html += `<p class="desc">${foot_desc}</p>`
      }

      if (notes.length > 0) {
        html += '<ul class="notes">'
        html += notes
          .map(item => {
            return `<li class="text"><span>${item["name"]}</span>${item["value"]}</li>`
          })
          .join("")
        html += "</ul>"
      }

      document.querySelector(".work-detail-page .container").innerHTML = html
    }

    function initWorkDetail() {
      document
        .querySelector(".btn-left")
        .addEventListener("click", function () {
          showPopup(currentIndex - 1)
        })

      document
        .querySelector(".btn-right")
        .addEventListener("click", function () {
          showPopup(currentIndex + 1)
        })
    }
    initWorkDetail()
  }

  return (
    <Layout pageName="work">
      <div className="work-page">
        <img src="/img/work_bg.webp" className="w100" />
        <ul className="work-list">
          <li>
            <div className="thumb-wrap">
              <img src="/img/works/01.jpg" alt="LOTTE EBC #1 이미지" />
            </div>
            <p className="title">LOTTE EBC #1</p>
            <p className="subtitle">
              Lotte Executive Briefing Center : WELCOME
            </p>
          </li>
          <li>
            <div className="thumb-wrap">
              <img src="/img/works/02.jpg" alt="LOTTE EBC #2 이미지" />
            </div>
            <p className="title">LOTTE EBC #2</p>
            <p className="subtitle">
              Lotte Executive Briefing Center : WELCOME
            </p>
          </li>
          <li>
            <div className="thumb-wrap">
              <img src="/img/works/03.jpg" alt="LOTTE EBC #1 이미지" />
            </div>
            <p className="title">MOBIS CES</p>
            <p className="subtitle">Hyundai Mobis CES Show 2023</p>
          </li>
          <li>
            <div className="thumb-wrap">
              <img src="/img/works/04.jpg" alt="LOTTE EBC #2 이미지" />
            </div>
            <p className="title">STANDARD ENERGY</p>
            <p className="subtitle">Lighting Control System</p>
          </li>
          <li>
            <div className="thumb-wrap">
              <img src="/img/works/05.jpg" alt="LOTTE EBC #1 이미지" />
            </div>
            <p className="title">CLEANTOPIA</p>
            <p className="subtitle">Service App GUI Design</p>
          </li>
          <li>
            <div className="thumb-wrap">
              <img src="/img/works/06.jpg" alt="LOTTE EBC #2 이미지" />
            </div>
            <p className="title">AMWAY</p>
            <p className="subtitle">Amway Kiosk GUI Design</p>
          </li>
          <li>
            <div className="thumb-wrap">
              <img src="/img/works/07.jpg" alt="LOTTE EBC #1 이미지" />
            </div>
            <p className="title">MOBIS PLATFORM</p>
            <p className="subtitle">Hyundai Mobis B to B Service Platform</p>
          </li>
          <li>
            <div className="thumb-wrap">
              <img src="/img/works/08.jpg" alt="LOTTE EBC #2 이미지" />
            </div>
            <p className="title">MOBIS SHOWROOM</p>
            <p className="subtitle">Hyundai Mobis Virtual Showroom</p>
          </li>
          <li>
            <div className="thumb-wrap">
              <img src="/img/works/09.jpg" alt="LOTTE EBC #1 이미지" />
            </div>
            <p className="title">SEOSA</p>
            <p className="subtitle">Seosa App Film Contents</p>
          </li>
          <li>
            <div className="thumb-wrap">
              <img src="/img/works/10.jpg" alt="LOTTE EBC #2 이미지" />
            </div>
            <p className="title">LG DISPLAY</p>
            <p className="subtitle">LG Display Virtual Exhibition</p>
          </li>
        </ul>
      </div>
      <div className="work-detail-page" data-lenis-prevent>
        <button className="btn-close"></button>
        <div className="container"></div>
        <div className="bot-float">
          <button className="btn-left"></button>
          <button className="btn-right"></button>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Work" />

export default WorkPage
