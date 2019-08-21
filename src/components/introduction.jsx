import React, { Component } from 'react'

export default class Introduction extends Component {
    render() {
        return (
            <div>
                <section id="colorlib-hero" className="js-fullheight" data-section="home">
                    <div className="flexslider js-fullheight">
                        <ul className="slides">
                            <li style={{ backgroundImage: 'url(images/photo.png)' }}>
                                <div className="overlay" />
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                            <div className="slider-text-inner js-fullheight">
                                                <div className="desc">
                                                    <h1>Hi! <br />I'm Saugat</h1>
                                                    <p><a className="btn btn-primary btn-learn" href="resume/resume.pdf" target="_blank" rel="noopener noreferrer">Download CV<i className="icon-download4" /></a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li style={{ backgroundImage: 'url(images/me.jpg)' }}>
                                <div className="overlay" />
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                            <div className="slider-text-inner js-fullheight">
                                                <div className="desc">
                                                    <h1>About</h1>
                                                    <h2>I consider myself as a part of this ever-changing global village where great achievements are not merely a result of knowledge, but enthusiasm and desires to excel; and, I want to contribute my part to the field of technology alongside the vast majority of others who have the same desires as me. </h2>
                                                    <p><a className="btn btn-primary btn-learn" href="resume/resume.pdf" target="_blank" rel="noopener noreferrer">Download CV<i className="icon-download4" /></a></p>
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
