import React from "react"
import DecImage from "../images/draw_1.jpg"

export default function Introduction(){
    return (
        <div className="main">
            <div className="intro">
                <h1 id="intro">Elaine Smit</h1>
                <h2>Front-End Dev</h2>
                <h2>Design</h2>
            </div>
            <div className="main-body">
                <div className="what-i-do">
                    <h1>What I do <small>...for now</small></h1>
                    
                    <img className="dec-img" src={DecImage} alt=""/>
                </div>
                <div className="services" id="services">
                    <h1>Front-End Services</h1>
                    <div className="front--services">
                        <div>
                            <h2>Design + Development</h2>
                            <p>From an idea. To wireframes. To design. To development.
                            <br/>
                            <br/>
                            I can create your project from scratch.
                            <br/>
                            <br />
                            Don't know what you want? I can help you with that too.</p>
                        </div>
                        <div>
                            <h2>E-commerce</h2>
                            <p>
                                Need to sell you products or services?
                                <br/>
                                <br/>
                                From downloadable content to physical products.
                                <br/>
                                <br/>
                                I can Get you product in the markets ready for sale.
                            </p>
                        </div>
                        <div>
                            <h2>Wordpress</h2>
                            <p>
                                I can create you a wordpress site.
                                <br/>
                                <br/>
                                Create new plugins adn themes.
                                <br/>
                                <br/>
                                Edit WordPress itself.
                                <br/>
                                <br/>
                                Whatever you need.
                            </p>
                        </div>
                    </div>
                    <a href="work" className="btn-work">See my work</a>
                </div>
            </div>
        </div>
    )
    
}