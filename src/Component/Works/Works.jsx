import React from 'react'
import './Works.css'
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/facebook.png";



const Works = () => {
  return (
    <div className="works">
{/*left side*/}
<div className="awesome">
      <span>Works for All these</span>
      <span>Brands & Clients</span>
      <spane>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      <br/>
      Placeat facere iste odio nihil iusto.
      <br/>
      Placeat facere iste odio nihil iusto facere iste odio.
      <br/>
      Lorem ipsum dolor sit amet consectetur facere iste odio
      </spane>
      <button className="button s-button">Hire me</button>
      <div className="blur s-blue1"></div>
      </div>
      {/*right side*/}
      <div className="w-right">
        <div className="w-mainCircle">

            <div className="w-secCircle">
                <img src={Upwork} alt=""/>
            </div>
            <div className="w-secCircle">
                <img src={Fiverr} alt=""/>
            </div>
            <div className="w-secCircle">
                <img src={Amazon} alt=""/>
            </div>
            <div className="w-secCircle">
                <img src={Shopify} alt=""/>
            </div>
            <div className="w-secCircle">
                <img src={Facebook} alt=""/>
            </div>
        </div>
        {/* bckground circle*/}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>

      </div>
    </div>
  )
}

export default Works