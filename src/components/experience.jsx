import React, { Component } from 'react'

export default class Experience extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-experience" data-section="experience">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">highlights</span>
                                <h2 className="colorlib-heading animate-box">Timeline</h2>
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
                                                <h2>Cummins Inc. <span>Jun 2019 - Aug 2019</span></h2>
                                                <h4><i>Software Engineer Intern </i>|<i> Digital Accelerator</i></h4>
                                                <li>Designed & developed a monitoring system to quickly discern the health of the CA/CD (Connected Analytics & Connected Diagnostics) pipelines using native tools to the AWS Cloud Platform, and working as a dedicated SCRUM team</li>
                                                <li>Facilitated with visual monitoring in the production environment using Amazon QuickSight</li>
                                                <li>Automated and deployed using AWS CloudFormation</li>
                                                <li>Retained historical data on CloudWatch Logs to perform analytics using CloudWatch Insights</li>
                                                <li>Performed Unit testing, Integration testing, System testing, and User Acceptance Testing</li>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-4">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Texas Tech University <span>Jan 2019 - May 2019</span></h2>
                                                <h4><i>Undergraduate researcher </i>|<i> CS Department</i></h4>
                                                <li>Programmed a reddit crawler to scrap data of subreddits such as opiates, drugs for study on drug addiction and its recovery</li>
                                                <li>Cleaned and prepared data using pandas, NumPy modules to manipulate, analyze and visualize user statistics</li>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-4">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Texas Tech University <span>Aug 2017 - May 2019</span></h2>
                                                <h4><i>Student Assistant </i>|<i> Hospitality Services</i></h4>
                                                <li>Provided Customer satisfaction with in-person interaction to 250+ customers on a weekly basis</li>
                                                <li>Balanced a rigorous course load with 15-20 hours of employment per week</li>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-4">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Tennessee Tech University <span>Jan 2016 - May 2016</span></h2>
                                                <h4><i>Professional Tutor </i>|<i> Office of Multicultural Affairs</i></h4>
                                                <li>Delivered private tutoring services to 5+ students in C++ programming, Calculus based Physics & Linear Algebra, saving 3 students from academic probation</li>
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
