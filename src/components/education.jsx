import React, { Component } from 'react'

export default class Education extends Component {
    render() {
        return (
            <div>
                <section id="colorlib-hero" className="js-fullheight" data-section="education">
                    <div className="flexslider js-fullheight">
                        <ul className="slides">
                            <li style={{ backgroundImage: 'url(images/ttup.jpg)' }}>
                                <div className="overlay" />
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                            <div className="slider-text-inner js-fullheight">
                                                <div className="desc">
                                                    <span className="heading-meta">Education</span>
                                                    <h4><b>Major: </b>Bachelor of Science in Computer Science</h4>
                                                    <h4><b>Minor: </b>Mathematics</h4>
                                                    <h4><b>Cummulative GPA: </b>3.95/4.0</h4>
                                                    <h4><b>Related Coursework: </b>Algorithms, Data Structures, Theory of Automata, Software Engineering, Computer Architecture, Operating Systems, Proof & Mathematical Reasoning, Differential Equations, Probability & Statistics </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
}
