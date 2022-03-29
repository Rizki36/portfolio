import React from "react"
import Card from "./atoms/Card"
import Fade from "react-reveal/Fade"

import data from "../yourdata"

const Work = () => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <Fade bottom>
            <h1>Portfolio</h1>
          </Fade>

          <div className="grid">
            <Fade bottom cascade>
              {data.projects.map((project, index) => (
                <Card
                  key={index}
                  heading={project.title}
                  paragraph={project.para}
                  imgUrl={project.imageSrc}
                  projectLink={project.url}
                  liveLink={project?.liveUrl}
                ></Card>
              ))}
            </Fade>
          </div>
          <Fade bottom>
            <a
              href={`https://github.com/Rizki36`}
              className="primary-btn"
              style={{ marginTop: 40 }}
            >
              Lihat lebih banyak di github
            </a>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Work
