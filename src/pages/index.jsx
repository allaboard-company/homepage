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

const DUMMY_DATA = [
  {
    title: "LOTTE EBC #1",
    subtitle: "Lotte Executive Briefing Center\nWELCOME",
    thumb_img: "/img/works/01.jpg",
    main_img: "/img/works/01/main_img.webp",
    hashtags: ["New_Media", "Contents_Design", "Branding"],
    desc: "Our project focuses on the creation of a media space and content production that allows our VIP customers to experience the essence of LOTTE Group's values and vision. \n\nAt the LOTTE Executive Briefing Center, we've designed a unique space where you can engage with the rich history, innovation, and global impact that define LOTTE Group.",
    content: [
      "ABOARD spearheaded the media content creation project for the revamped LOTTE EBC on the 113th floor of LOTTE Tower.\n\nWe've designed innovative media content for two key areas:\n\nThe Welcome Zone, where we extend a warm welcome to our VIP guests.\nThe PR Zone, where visitors can experience LOTTE's values and vision through tailored media messages.",
      "<h3>Welcome Zone: Stained Glass</h3>",
      "In the Welcome Zone, the iconic LOTTE World Tower in Seoul is transformed into a captivating and beautiful panorama through transparent displays, showcasing a vibrant array of patterns.",
      "<vimeo id='https://vimeo.com/875463114'/>",
      "<img src='/img/works/01/sub01.webp'/>",
      "<img src='/img/works/01/sub02.webp'/>",
      "<img src='/img/works/01/sub03.webp'/>",
      "<img src='/img/works/01/sub04.webp'/>",
      "<h3>Welcome Zone: LOTTE Value Element</h3>",
      "LOTTE Group's businesses are visually represented through trendy objects and dynamic motions, creating a spectacular presentation of materials and properties.",
      "<vimeo id='https://vimeo.com/875463114'/>",
      "<img src='/img/works/01/sub05.webp'/>",
      "<img src='/img/works/01/sub06.webp'/>",
      "<img src='/img/works/01/sub07.webp'/>",
      "<img src='/img/works/01/sub08.webp'/>",
      "<img src='/img/works/01/sub09.webp'/>",
      "<img src='/img/works/01/sub18.webp'/>",
      "<img src='/img/works/01/sub10.webp'/>",
      "<img src='/img/works/01/sub11.webp'/>",
      "<img src='/img/works/01/sub12.webp'/>",
      "<img src='/img/works/01/sub13.webp'/>",
      "<img src='/img/works/01/sub14.webp'/>",
      "<h3>Welcome Zone: Space LOTTE</h3>",
      "Transparent displays recreate the awe-inspiring sky view from the 113th floor, symbolizing LOTTE's boundless potential and limitless opportunities.",
      "<vimeo id='https://vimeo.com/875516173'/>",
      "<img src='/img/works/01/sub15.webp'/>",
      "<img src='/img/works/01/sub16.webp'/>",
      "<img src='/img/works/01/sub17.webp'/>",
      "<img src='/img/works/01/sub18.webp'/>",
      "Redefining Design, Bridging the Digital and Physical Divide. ",
    ],
    notes: [
      { name: "Client", value: "LOTTE" },
      { name: "Period", value: "2022. 8 ~ 2023. 01" },
      { name: "Project Note.", value: "LED Display Contents" },
    ],
  },
  {
    thumb_src: "/img/works/02.jpg",
    title: "LOTTE EBC #2",
    subtitle: "Lotte Executive Briefing Center\nWELCOME",
    thumb_img: "/img/works/02.jpg",
    main_img: "/img/works/02/main_img.webp",
    hashtags: ["New_Media", "Contents_Design", "Branding"],
    desc: "Our project focuses on the creation of a media space and content production that allows our VIP customers to experience the essence of LOTTE Group's values and vision. \n\nAt the LOTTE Executive Briefing Center, we've designed a unique space where you can engage with the rich history, innovation, and global impact that define LOTTE Group.",
    content: [
      "ABOARD spearheaded the media content creation project for the revamped LOTTE EBC on the 113th floor of LOTTE Tower.\n\nWe've designed innovative media content for two key areas:\n\nThe Welcome Zone, where we extend a warm welcome to our VIP guests.\nThe PR Zone, where visitors can experience LOTTE's values and vision through tailored media messages.",
      "<h3>PR Zone: Art Forest</h3>",
      "The Art Forest in the PR Zone expands the perception of limited space, creating a sense of openness. As light filters through the forest, it transforms into a captivating and ever-changing fantasy.",
      "<vimeo id='https://vimeo.com/875532472'/>",
      "<img src='/img/works/02/sub01.webp'/>",
      "<img src='/img/works/02/sub02.webp'/>",
      "<img src='/img/works/02/sub03.webp'/>",
      "<h3>PR Zone: SECRET GARDEN</h3>",
      "In the Secret Garden, the use of diverse window patterns creates an illusion of expanded space. It presents a fantasy representation of what unfolds within a hidden garden.",
      "<vimeo id='https://vimeo.com/875531297'/>",
      "<img src='/img/works/02/sub04.webp'/>",
      "<img src='/img/works/02/sub05.webp'/>",
      "<img src='/img/works/02/sub06.webp'/>",
      "<img src='/img/works/02/sub07.webp'/>",
      "<h3>PR Zone: CLOUD</h3>",
      "The Clouds in this zone symbolize the altitude of the 113th floor, dynamically transforming through time to create a fantastical representation of various cloud formations.",
      "<vimeo id='https://vimeo.com/875531937'/>",
      "<img src='/img/works/02/sub08.webp'/>",
      "<img src='/img/works/02/sub09.webp'/>",
      "<img src='/img/works/02/sub10.webp'/>",
      "Redefining Design, Bridging the Digital and Physical Divide. ",
    ],
    notes: [
      { name: "Client", value: "LOTTE" },
      { name: "Period", value: "2022. 8 ~ 2023. 01" },
      { name: "Project Note.", value: "LED Display Contents" },
    ],
  },
  {
    thumb_src: "/img/works/03.jpg",
    title: "MOBIS CES",
    subtitle: "Hyundai Mobis CES Show 2023",
    thumb_img: "/img/works/03.jpg",
    main_img: "/img/works/03/main_img.webp",
    hashtags: ["New_Media", "Interactive", "AR"],
    desc: "ABOARD utilized Hyundai Mobis' cutting-edge urban mobility platform, M.Vision TO, to create immersive media content at CES 2023. This content offers visitors the opportunity to directly and effectively experience a wide array of future city environments.",
    content: [
      "At CES 2023, New Gaze spearheaded a groundbreaking project in collaboration with Hyundai Mobis, centered around the use of their innovative urban mobility platform, M.Vision TO. Our mission was to craft immersive media content that allows visitors to experience an assortment of future city environments in a direct and highly effective manner.\n\nThrough M.Vision TO, we've harnessed the potential of cutting-edge technology to transport attendees into the heart of diverse urban landscapes. By leveraging our media content, we've made it possible for CES 2023 visitors to get up close and personal with the future of cities, showcasing how urban spaces can be efficiently and thoughtfully used. This project is a testament to our commitment to pushing the boundaries of what's possible in the realm of urban mobility and smart city development.",
      "<h3>M VISION TO : Augmented Reality</h3>",
      "Our project focuses on optimizing the passenger experience through the development of user-friendly interfaces. This includes the creation of Meta Contents UX.I and Proactive UX. Our goal is to provide passengers with immersive, seamless, and interactive experiences during their journeys, setting new standards in transportation industry interface development.",
      "<img src='/img/works/03/sub01.webp'/>",
      "<h3>LED TRI - SCREEN : DRIVING FILM</h3>",
      "We've created large LED tri-screen videos to provide an immersive experience of driving through a future city. These videos are seamlessly integrated with M.VISION TO vehicles to deliver a real-life, futuristic urban journey.",
      "<vimeo id='https://vimeo.com/875553839'/>",
      "<img src='/img/works/03/sub01.webp'/>",
      "<img src='/img/works/03/sub02.webp'/>",
      "<img src='/img/works/03/sub03.webp'/>",
      "<img src='/img/works/03/sub04.webp'/>",
      "<img src='/img/works/03/sub05.webp'/>",
      "<img src='/img/works/03/sub06.webp'/>",
      "<img src='/img/works/03/sub07.webp'/>",
      "<img src='/img/works/03/sub08.webp'/>",
      "<img src='/img/works/03/sub09.webp'/>",
      "<img src='/img/works/03/sub10.webp'/>",
      "<img src='/img/works/03/sub11.webp'/>",
      "Redefining Design, Bridging the Digital and Physical Divide. ",
    ],
    notes: [
      { name: "Client", value: "HYUNDAI MOBIS" },
      { name: "Period", value: "2022. 8 ~ 2023. 01" },
      { name: "Project Note.", value: "LED Display, AR" },
    ],
  },
]
const IndexPage = () => {
  const [title1, setTitle1] = React.useState("")
  const [title2, setTitle2] = React.useState("")
  const [projectIdx, setProjectIdx] = React.useState(-1)

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
      let itemSize = window.innerHeight / 3
      itemSize =
        window.innerWidth < itemSize * 4 ? window.innerWidth / 4 : itemSize
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
          height: itemSize * 3,
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
          height: itemSize * 2,
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
          height: itemSize * 1,
          ease: Power2.easeOut,
          delay: 0.2,
        }
      )
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
    setTitle1(DUMMY_DATA[0].title)
    setTitle2(DUMMY_DATA[0].subtitle)
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
    const data = DUMMY_DATA[index]
    if (!data) {
      return
    }
    setProjectIdx(index)

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
          // loop={true}
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
            if (index === 0) {
              return
            }
            showPopup(index)
          }}
          onSlideChange={swiper => {
            const index = swiper.activeIndex
            setTitle1(DUMMY_DATA[index].title)
            setTitle2(DUMMY_DATA[index].subtitle)
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
          {DUMMY_DATA.map(item => {
            return (
              <SwiperSlide>
                <div
                  className="bg-img"
                  style={{
                    background: `url("${item["main_img"]}")`,
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
      </div>
    </Layout>
  )
}

export const Head = () => <Seo />

export default IndexPage
