import React from "react"

import { Container, Title, Button } from "./common"

import "./intro.css"

const Intro = () => {
  return (
    <div className="intro-area">
      <Title title="Follow Me" social height="320px" />
      <Container>
        <div className="intro">
          <div className="intro-text">
            <p>Hello! I am</p>
            <h1>Victor Preston</h1>
            <h3>Full Stack Developer</h3>
            <ul>
              <li>Software Engineer</li>
              <li>Programmer</li>
              <li>Web Developer</li>
            </ul>
            <div className="action">
            <Button
                link="https://wa.link/9p7yn3"
                target="_blank"
                title="Get In Touch"
              />
              <Button clickEvent link="#about" ml="15px" title="About Me" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { Intro }
