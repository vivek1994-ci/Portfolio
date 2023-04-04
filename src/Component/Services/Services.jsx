import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"; 
import Card from '../Card/Card';
import Glasess from "../../img/glasess.png";
import Humble from "../../img/humble.png";
import Resume from './resume.pdf';

const Services = () => {
  return (
    <div className="services">
      {/*left side*/}
      <div className="awesome">
      <span>My Awesome</span>
      <span>Services</span>
      <spane>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      <br/>
      Placeat facere iste odio nihil iusto.
      </spane>
      <a href={Resume} download>
      <button className="button s-button">Download CV</button>
      </a>
      <div className="blur s-blue1"></div>
      </div>
      {/*right side*/}
      <div className="cards">
        <div style={{left: '33rem'}}>
         <Card
         emoji = {HeartEmoji}
         heading = {'Design'}
         detail = {"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
         />
        </div>
        {/*second card*/}
        <div style={{top: "12rem", left: "12rem"}}>
         <Card
         emoji = {Glasess}
         heading = {'Developer'}
         detail = {"html, css, javascript, react js, node js"}
         />
        </div>
        {/*third card*/}
        <div style={{top: "22rem", left: "28rem"}}>
         <Card
         emoji = {Humble}
         heading = {'UI/UX'}
         detail = {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at lacus erat."}
         />
        </div>
        <div className="blur s-blur2"></div>
      </div>
    </div>  
  )
}
export default Services