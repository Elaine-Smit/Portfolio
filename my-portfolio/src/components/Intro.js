import React from "react"
import DecImage from "../images/draw_1.jpg"

export default function Introduction(){
    return (
        <div className="main">
            <div className="intro">
                <h1 id="intro">Elaine Smit</h1>
                <br/>
                <h2>Front-End Dev</h2>
            </div>
            <div className="main-body">
                <div className="what-i-do">
                    <h1>What I do <small>...for now</small></h1>
                    
                    <img className="dec-img" src={DecImage} alt=""/>
                </div>
                <div className="services">
                    <h1>Services</h1>
                </div>
            </div>
        </div>
    )
    
}