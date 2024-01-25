import { Link } from "gatsby"
import gsap, { Power2 } from "gsap"
import * as React from "react"

const Header = ({ pageName }) => {
  React.useEffect(() => {
    init()
  }, [])

  async function init() {
    const menuToggle = document.querySelector(".toggle-menu-btn")
    const menuBar = gsap.timeline()
    menuBar.to(
      ".bar",
      1,
      {
        stroke: "white",
        ease: Power2.easeOut,
      },
      "start"
    )

    menuBar.to(
      ".bar-v",
      0.5,
      {
        attr: { x1: 13, x2: 13 },
        ease: Power2.easeInOut,
      },
      "start"
    )

    menuBar.to(
      ".bar-h",
      0.5,
      {
        attr: { y1: 13, y2: 13 },
        ease: Power2.easeInOut,
      },
      "start"
    )

    menuBar.to(".toggle-menu-btn", 0.2, { rotation: 45 }, 0.4)
    menuBar.reverse()

    // 풀페이지 메뉴
    var tl = gsap.timeline({ paused: true })
    tl.to(".fullpage-menu", {
      duration: 0,
      display: "block",
      ease: "Expo.easeInOut",
    })

    tl.from(".menu-bg span", {
      duration: 1,
      x: "100%",
      stagger: 0.1,
      ease: "Expo.easeInOut",
    })

    tl.from(
      ".main-menu li a",
      {
        duration: 1.5,
        y: "100%",
        stagger: 0.2,
        ease: "Expo.easeInOut",
      },
      "-=0.5"
    )

    tl.reverse()

    menuToggle.addEventListener("click", function () {
      menuBar.reversed(!menuBar.reversed())
      tl.reversed(!tl.reversed())
    })
  }

  return (
    <header>
      <a href="/" className="logo">
        ABOARD
      </a>
      <div className="menu-area">
        <nav>
          <Link to="/" className={pageName === "work" ? "active" : ""}>
            WORK
          </Link>
          <Link to="/about" className={pageName === "about" ? "active" : ""}>
            ABOUT
          </Link>
          <Link
            to="/contact"
            className={pageName === "contact" ? "active" : ""}
          >
            CONTACT
          </Link>
        </nav>
        <section className="fullpage-menu">
          <div className="fullpage-menu-inner">
            <div className="menu-bg">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <nav>
              <ul className="main-menu">
                <li className="active">
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/work">Work</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </section>
        <button className="toggle-menu-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <line x1="1" y1="17" x2="1" y2="25" className="bar bar-v" />
            <line x1="9" y1="9" x2="9" y2="17" className="bar bar-v" />
            <line x1="17" y1="1" x2="17" y2="9" className="bar bar-v" />
            <line x1="1" y1="17" x2="9" y2="17" className="bar bar-h" />
            <line x1="9" y1="9" x2="17" y2="9" className="bar bar-h" />
            <line x1="17" y1="1" x2="25" y2="1" className="bar bar-h" />
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Header
