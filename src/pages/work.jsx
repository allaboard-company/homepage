import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import gsap from "gsap"
import "../assets/css/page.work.scss"
import Layout from "../components/layout"
import Seo from "../components/seo"

const DUMMY_DATA = [
  {
    title: "LOTTE EBC #1",
    subtitle: "Lotte Executive Briefing Center : WELCOME",
    thumb_img: "/img/works/01.jpg",
    main_img: "/img/works/01/main_img.webp",
    hashtags: ["New_Media", "Contents_Design", "Branding"],
    desc: "Our project focuses on the creation of a media space and content production that allows our VIP customers to experience the essence of LOTTE Group's values and vision. \n\nAt the LOTTE Executive Briefing Center, we've designed a unique space where you can engage with the rich history, innovation, and global impact that define LOTTE Group.",
    content: [
      "ABOARD spearheaded the media content creation project for the revamped LOTTE EBC on the 113th floor of LOTTE Tower.\n\nWe've designed innovative media content for two key areas:\n\nThe Welcome Zone, where we extend a warm welcome to our VIP guests.\nThe PR Zone, where visitors can experience LOTTE's values and vision through tailored media messages.",
      "<h2>Welcome Zone: Stained Glass</h2>",
      "In the Welcome Zone, the iconic LOTTE World Tower in Seoul is transformed into a captivating and beautiful panorama through transparent displays, showcasing a vibrant array of patterns.",
      "<vimeo id='https://vimeo.com/875463114'/>",
      "<img src='/img/works/01/sub01.webp'/>",
      "<img src='/img/works/01/sub02.webp'/>",
      "<img src='/img/works/01/sub03.webp'/>",
      "<img src='/img/works/01/sub04.webp'/>",
      "<h2>Welcome Zone: LOTTE Value Element</h2>",
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
      "<h2>Welcome Zone: Space LOTTE</h2>",
      "Transparent displays recreate the awe-inspiring sky view from the 113th floor, symbolizing LOTTE's boundless potential and limitless opportunities.",
      "<vimeo id='https://vimeo.com/875516173'/>",
      "<img src='/img/works/01/sub15.webp'/>",
      "<img src='/img/works/01/sub16.webp'/>",
      "<img src='/img/works/01/sub17.webp'/>",
      "<img src='/img/works/01/sub18.webp'/>",
      "Redefining Design, Bridging the Digital and Physical Divide. ",
    ],
    client: "LOTTE",
    period: "2022. 8 ~ 2023. 01",
    proejct_note: "LED Display Contents",
  },
  {
    thumb_src: "/img/works/02.jpg",
    title: "LOTTE EBC #2",
    subtitle: "Lotte Executive Briefing Center : WELCOME",
    thumb_img: "/img/works/02.jpg",
    main_img: "/img/works/02/main_img.webp",
    hashtags: ["New_Media", "Contents_Design", "Branding"],
    desc: "Our project focuses on the creation of a media space and content production that allows our VIP customers to experience the essence of LOTTE Group's values and vision. \n\nAt the LOTTE Executive Briefing Center, we've designed a unique space where you can engage with the rich history, innovation, and global impact that define LOTTE Group.",
    content: [
      "ABOARD spearheaded the media content creation project for the revamped LOTTE EBC on the 113th floor of LOTTE Tower.\n\nWe've designed innovative media content for two key areas:\n\nThe Welcome Zone, where we extend a warm welcome to our VIP guests.\nThe PR Zone, where visitors can experience LOTTE's values and vision through tailored media messages.",
      "<h2>PR Zone: Art Forest</h2>",
      "The Art Forest in the PR Zone expands the perception of limited space, creating a sense of openness. As light filters through the forest, it transforms into a captivating and ever-changing fantasy.",
      "<vimeo id='https://vimeo.com/875532472'/>",
      "<img src='/img/works/02/sub01.webp'/>",
      "<img src='/img/works/02/sub02.webp'/>",
      "<img src='/img/works/02/sub03.webp'/>",
      "<h2>PR Zone: SECRET GARDEN</h2>",
      "In the Secret Garden, the use of diverse window patterns creates an illusion of expanded space. It presents a fantasy representation of what unfolds within a hidden garden.",
      "<vimeo id='https://vimeo.com/875531297'/>",
      "<img src='/img/works/02/sub04.webp'/>",
      "<img src='/img/works/02/sub05.webp'/>",
      "<img src='/img/works/02/sub06.webp'/>",
      "<img src='/img/works/02/sub07.webp'/>",
      "<h2>PR Zone: CLOUD</h2>",
      "The Clouds in this zone symbolize the altitude of the 113th floor, dynamically transforming through time to create a fantastical representation of various cloud formations.",
      "<vimeo id='https://vimeo.com/875531937'/>",
      "<img src='/img/works/02/sub08.webp'/>",
      "<img src='/img/works/02/sub09.webp'/>",
      "<img src='/img/works/02/sub10.webp'/>",
      "Redefining Design, Bridging the Digital and Physical Divide. ",
    ],
    client: "LOTTE",
    period: "2022. 8 ~ 2023. 01",
    proejct_note: "LED Display Contents",
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
      "<h2>M VISION TO : Augmented Reality</h2>",
      "Our project focuses on optimizing the passenger experience through the development of user-friendly interfaces. This includes the creation of Meta Contents UX.I and Proactive UX. Our goal is to provide passengers with immersive, seamless, and interactive experiences during their journeys, setting new standards in transportation industry interface development.",
      "<img src='/img/works/03/sub01.webp'/>",
      "<h2>LED TRI - SCREEN : DRIVING FILM</h2>",
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
    client: "HYUNDAI MOBIS",
    period: "2022. 8 ~ 2023. 01",
    proejct_note: "LED Display, AR",
  },
  {
    thumb_src: "/img/works/04.jpg",
    title: "STANDARD ENERGY",
    subtitle: "Lighting Control System",
  },
  {
    thumb_src: "/img/works/05.jpg",
    title: "CLEANTOPIA",
    subtitle: "Service App GUI Design",
  },
  {
    thumb_src: "/img/works/06.jpg",
    title: "AMWAY",
    subtitle: "Amway Kiosk GUI Design",
  },
  {
    thumb_src: "/img/works/07.jpg",
    title: "MOBIS PLATFORM",
    subtitle: "Hyundai Mobis B to B Service Platform",
  },
  {
    thumb_src: "/img/works/08.jpg",
    title: "MOBIS SHOWROOM",
    subtitle: "Hyundai Mobis Virtual Showroom",
  },
  {
    thumb_src: "/img/works/09.jpg",
    title: "SEOSA",
    subtitle: "Seosa App Film Contents",
  },
  {
    thumb_src: "/img/works/10.jpg",
    title: "LG DISPLAY",
    subtitle: "LG Display Virtual Exhibition",
  },
]

const WorkPage = () => {
  React.useEffect(() => {
    init()
  }, [])

  async function init() {
    document.querySelectorAll(".work-list li").forEach(el => {
      el.querySelector(".thumb-wrap").setAttribute("data-aos", "fade-up")
      el.querySelector(".title").setAttribute("data-aos", "fade-up")
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
