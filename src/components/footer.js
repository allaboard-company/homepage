import * as React from "react"
const Footer = ({ pageName }) => {
  if (pageName !== "about" && pageName !== "work") {
    return <></>
  }

  function scrollToTop() {
    if (pageName == "work") {
      document.querySelector(".work-detail-page").scrollTo({ top: 0 })
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // 부드러운 스크롤 효과
      })
    }
  }

  return (
    <footer>
      <span className="copyright">©2023 ABOARD.</span>
      <button className="btn-top" onClick={scrollToTop}>
        TOP
      </button>
    </footer>
  )
}

export default Footer
