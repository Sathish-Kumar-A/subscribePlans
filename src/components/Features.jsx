import React from 'react';
import "./features.css";

export const Features = ({ content }) => {
  return (
      <div className='features-wrapper'>
          <div className='title'>
              <h3 style={{color:"rgb(206, 201, 201)"}}>{content["mode"]}</h3>
              <span><h1 style={{display:"inline"}}>{content["price"]}</h1>/month</span>
          </div>   
          <hr />
          <div className='content'>
              <div className='contentList' style={content["first"]["correct"] ? { color: "black" } : { color: "grey" }}>
                  <img className='image' style={{ color: "grey" }} src={content["first"]["icon"]} alt={content["first"]["alt"]}/>
                  <p className={content['first']["bold"]?"bold":"nrml"}>{content["first"]["text"]}</p>
              </div>
              <div className='contentList' style={content["second"]["correct"]?{color:"black"}:{color:"grey"}}>
                  <img className='image' src={content["second"]["icon"]} alt={content["second"]["alt"]}/>
                  <p className={content['second']["bold"]?"bold":"nrml"}>{content["second"]["text"]}</p>
              </div>
              <div className='contentList' style={content["third"]["correct"]?{color:"black"}:{color:"grey"}}>
                  <img className='image' src={content["third"]["icon"]} alt={content["third"]["alt"]}/>
                  <p className={content['third']["bold"]?"bold":"nrml"}>{content["third"]["text"]}</p>
              </div>
              <div className='contentList' style={content["fourth"]["correct"]?{color:"black"}:{color:"grey"}}>
                  <img className='image' src={content["fourth"]["icon"]} alt={content["fourth"]["alt"]}/>
                  <p className={content['fourth']["bold"]?"bold":"nrml"}>{content["fourth"]["text"]}</p>
              </div>
              <div className='contentList' style={content["fifth"]["correct"]?{color:"black"}:{color:"grey"}}>
                  <img className='image' src={content["fifth"]["icon"]} alt={content["fifth"]["alt"]}/>
                  <p className={content['fifth']["bold"]?"bold":"nrml"}>{content["fifth"]["text"]}</p>
              </div>
              <div className='contentList' style={content["sixth"]["correct"]?{color:"black"}:{color:"grey"}}>
                  <img className='image' src={content["sixth"]["icon"]} alt={content["sixth"]["alt"]}/>
                  <p className={content['sixth']["bold"]?"bold":"nrml"}>{content["sixth"]["text"]}</p>
              </div>
              <div className='contentList' style={content["seventh"]["correct"]?{color:"black"}:{color:"grey"}}>
                  <img className='image' src={content["seventh"]["icon"]} alt={content["seventh"]["alt"]}/>
                  <p className={content['seventh']["bold"]?"bold":"nrml"}>{content["seventh"]["text"]}</p>
              </div>
              <div className='contentList' style={content["eighth"]["correct"]?{color:"black"}:{color:"grey"}}>
                  <img className='image' src={content["eighth"]["icon"]} alt={content["eighth"]["alt"]}/>
                  <p className={content['eighth']["bold"]?"bold":"nrml"}>{content["eighth"]["text"]}</p>
              </div>
      </div>
      <button className='btn'>Button</button>
    </div>
  )
}
