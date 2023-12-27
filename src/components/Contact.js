import React from "react"

import { Container, Title, Button } from "./common"

import "./contact.css"

const Contact = () => {
  return (
    <div id="contact" className="contact-area">
      <Container>
        <Title side="right" title="Contact" />
        <div className="contact">
          <div className="contact-status">
            <p>
            I am dedicated to delivering high quality, 
            responsive Websites, seamless user experience 
            and robust Backend infrastructure. Your project is an 
            opportunity for me to create something exceptional.
            </p>
            <div>
              <Button
                title="Get In Touch"
                mt="25px"
                bgColor="#6f93e2"
                color="#fff"
                link="https://wa.link/9p7yn3"
              />
            </div>
          </div>
          <div className="contact-details">
            <ul>
              <li>
                <h5>Email</h5>
                <p>
                  vp.victorpreston@gmail.com
                </p>
              </li>
              
              <li>
                <h5>Phone</h5>
                <p>
                  +254 705 383 588 <span>(Always Available)</span>
                </p>
              </li>
              <li>
                <h5>Address</h5>
                <p>Nairobi, Kenya</p>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { Contact }
