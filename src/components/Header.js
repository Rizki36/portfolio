import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom></Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                Hi, saya {data.name}{" "}
                <span role="img" aria-label="Emoji">
                  👋
                </span>
              </h1>
            </div>
          </Fade>
          <Fade bottom>
            <p>{data.headerParagraph}</p>
          </Fade>
          <Fade bottom>
            <a
              href={`mailto:${
                data.contactEmail ? data.contactEmail : "cahrizki.rf@gmail.com"
              }`}
              className="primary-btn"
            >
              HUBUNGI SAYA
            </a>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
