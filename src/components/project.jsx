import React, { Component } from 'react'

export default class Project extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-experience" data-section="project">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">highlights</span>
                                <h2 className="colorlib-heading animate-box">Projects</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="timeline-centered">
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-3">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Dristi</h2>
                                                <li>Web application that facilitates user with movies released near user location, offers movies based on user preference, and a feature to send invite to friends/family</li>
                                                <li>Technologies: Flask framework, SQLAlchemy, HTML, CSS</li>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-4">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Complex Communication Problem</h2>
                                                <li>Researched, as part of a team, over 3 different school communication system strategies for a middle school with an average of 800 students</li>
                                                <li>Pioneered a final deliverable to the audience of 6 stakeholders to persuade Gradelink, a cloud-based student information system</li>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-none">
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
