import React, { Component } from 'react'

export default class Skills extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="skills">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">my speciality</span>
                                <h2 className="colorlib-heading">Skills & Interests</h2>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-1">
                                    <span className="icon">
                                        <i className="icon-check" />
                                    </span>
                                    <div className="desc">
                                        <h4>Proficient in python, Java, C++, and SQL.</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-3">
                                    <span className="icon">
                                        <i className="icon-user" />
                                    </span>
                                    <div className="desc">
                                        <h4>Experienced with Git, Amazon Web Services, Docker, Jira, Apache Maven, Junit, Eclipse, VSCode, and Anaconda.</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-5">
                                    <span className="icon">
                                        <i className="icon-bulb" />
                                    </span>
                                    <div className="desc">
                                        <h4>Familiar with NumPy, Pandas, React, and JavaScript.</h4>
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
