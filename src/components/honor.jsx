import React, { Component } from 'react'

export default class Honors extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="honors">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">my speciality</span>
                                <h2 className="colorlib-heading">Honor & Interests</h2>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-1">
                                    <span className="icon">
                                        <i className="icon-thumbs-up" />
                                    </span>
                                    <div className="desc">
                                        <h4>An academic distinction</h4>
                                        <i>
                                            <li>Proven Achiever's Scholarship</li>
                                            <li>Office of International Affairs</li>
                                            <li>President's List</li>
                                            <li>Dean's List</li>
                                        </i>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-3">
                                    <span className="icon">
                                        <i className="icon-flag" />
                                    </span>
                                    <div className="desc">
                                        <h4>Cummins Innovation and Technology Invention Challenge</h4>
                                        <h6><i>1st Runner Up</i></h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-5">
                                    <span className="icon">
                                        <i className="icon-leaf" />
                                    </span>
                                    <div className="desc">
                                        <h4>Go Green</h4>
                                        <h6><i>Sustainability Scholarship: contribution to sustainability, and involvement in Reduce, Reuse & Recycle at Texas Tech</i></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
