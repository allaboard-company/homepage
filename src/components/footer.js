import * as React from "react"
const Footer = ({ pageName }) => {
  if (pageName !== "about" && pageName !== "work") {
    return <></>
  }

  return (
    <footer>
      <span className="copyright">©2023 ABOARD.</span>
      <button className="btn-top">TOP</button>
    </footer>
  )
}

export default Footer
