import React from "react"

import { Container, Title } from "./common"

import writtingblog from "../assets/image/writtingblog.svg"
import CodeReview from "../assets/image/travelling.svg"
import Design from "../assets/image/mountainhiking.svg"
import LeetCode from "../assets/image/swimming.svg"

import "./lovetodo.css"

const LoveToDo = () => {
  return (
    <div className="love-to-do-area">
      <Container>
        <Title side="right" title="Love To Do" />
        <div className="love-to-do">
          <div className="stickpad">
            <img alt="" src={writtingblog} />
            <h4>Blogging</h4>
          </div>
          <div className="stickpad">
            <img alt="" src={CodeReview} />
            <h4>Code Review</h4>
          </div>
          <div className="stickpad">
            <img alt="" src={Design} />
            <h4>Design</h4>
          </div>
          <div className="stickpad">
            <img alt="" src={LeetCode} />
            <h4>LeetCode</h4>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { LoveToDo }
