import React from "react"
import AboutImg from "../images/tech_4.jpg"

export default function About(){
    return (
        <div className="about-container" id="about">
            <div className="about-container">
                <h1 className="about-h1">About me</h1>
                <div>
                    <img src={AboutImg} alt="" className="about-img"/>
                </div>
                <div className="about-p">
                    <p>
                        I am a developer and I wish to be a full stack and design my own sites and app.
                        <br/>
                        <br/>
                        Basically I want to be able to do everything from bottom to top.
                        <br/>
                        <br/>
                        Starting from the top(design), I will eventually know how to make everything.
                        <br/>
                        <br/>
                        I have a good knowledge of all the tools and technologies that is needed to achieve this goal and is working onn perfecting them all top to bottom.
                        <br/>
                        <br/>
                        I even strive to have great graphic and web design skills.
                        <br/>
                        <br/>
                        Nothing feels better than being able to do anything you want.
                    </p>
                </div>
                <div className="work-display">
                    <h2>I will be updating my work and projects on a regular basis and as i learn new things.</h2>
                    <br/>
                    <a href="work" className="btn-work-dark">See my work</a>
                </div>
            </div>
        </div>
    )
}