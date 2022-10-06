import React from "react"
import HTML from "../images/html-logo.png"
import CSS from "../images/css-logo.png"
import JS from "../images/js-logo.png"
import CSharp from "../images/cSharp.svg"
import reactLogo from "../images/react-logo.png"
import dotNet from "../images/NET_Core_Logo.png"
import Adobe from "../images/adobe-suite-logo.png"
import Bootstrap from "../images/bootstrap-logo-vector.svg"
import Node from "../images/node-logo.png"

export default function Use(){
    return(
        <div className="work-container" id="tech">
            <div className="work-head">What I use</div>
            <div className="work-sub">Here a list of some of the languages, frameworks, software I use.</div>
            <div className="">
                <h3>JavaScript</h3>
                <img src={JS}  alt="JS logo" className="js logo"/>
                <p>Design.</p>
            </div>
            <div className="">
                <h3>HTML</h3>
                <img src={HTML}  alt="HTML logo" className="html logo"/>
                <p>Design.</p>
            </div>
            <div className="">
                <h3>CSS</h3>
                <img src={CSS}  alt="CSS logo" className="css logo"/>
                <p>Design.</p>
            </div>
            <div className="">
                <h3>C#</h3>
                <img src={CSharp}  alt="CSS logo" className="cSharp logo"/>
            </div>
            <div className="">
                <h3>React</h3>
                <img src={reactLogo}  alt="CSS logo" className="react logo"/>
            </div>
            <div className="">
                <h3>.NET</h3>
                <img src={dotNet}  alt="CSS logo" className="react logo"/>
            </div>
            <div className="">
                <h3>Adobe Suite</h3>
                <img src={Adobe}  alt="CSS logo" className="react logo"/>
            </div>
            <div className="">
                <h3>Bootstrap</h3>
                <img src={Bootstrap}  alt="CSS logo" className="react logo"/>
            </div>
            <div className="">
                <h3>Node</h3>
                <img src={Node}  alt="CSS logo" className="react logo"/>
            </div>
            <div className="work-footer">
                <h3>Footer</h3>
                <p></p>
            </div>
        </div>
    )
}