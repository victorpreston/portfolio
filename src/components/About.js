import React from "react"

import { Container, Title, Button } from "./common"

import profile from "../assets/image/profile.jpeg"

import "./about.css"

const About = () => {
  return (
    <div id="about" className="about-area">
      <Container>
        <Title side="right" title="About Me" />
        <div className="about">
          <div className="about-details">
            <p>
            I'm a passionate Software Engineer with close to 3 
            years of experience in developing dynamic web applications, 
            mobile solutions, and desktop applications. 
            
            I aim to create software that not only meets technical 
            specifications but also resonates with end-users,
            providing them with seamless, intuitive, 
            and delightful experiences. By placing the user at the 
            forefront of my work, I aspire to make technology 
            accessible and impactful.
            </p>
            <p>
            Get in touch if you need a competent 
            programmer.
            </p>
            <div className="about-action">
              <Button
                clickEvent link="#portfolio" ml="15px" title="Portfolio" 
              />
              <Button clickEvent link="#skill" ml="15px" title="My Skills" />
            </div>
          </div>
          <div className="about-image">
            <div className="image">
              <img alt="profile" src={profile} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { About }
