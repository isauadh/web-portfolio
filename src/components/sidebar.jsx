import React, { Component } from 'react'

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <div>
                    <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
                    <aside id="colorlib-aside" className="border js-fullheight">
                        <div className="text-center">
                            <div className="author-img" style={{ backgroundImage: 'url(images/Adhikari_Saugat.jfif)' }} />
                            <h1 id="colorlib-logo"><a href="index.html">Saugat Adhikari</a></h1>
                            <h5>Software Engineer-Intern | AWS Certified | Senior Computer Science</h5>
                            <span className="email"><i className="icon-mail"></i>saugat.adhikari@ymail.com</span>
                        </div>
                        <nav id="colorlib-main-menu">
                            <ul>
                                <li><a href="https://www.linkedin.com/in/saugat-adhikari/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                                <li><a href="https://github.com/isauadh" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                            </ul>
                        </nav>
                        <nav id="colorlib-main-menu" role="navigation" className="navbar">
                            <div id="navbar" className="collapse">
                                <ul>
                                    <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                                    <li><a href="#education" data-nav-section="education">Education</a></li>
                                    <li><a href="#experience" data-nav-section="experience">Work Experience</a></li>
                                    <li><a href="#leadership" data-nav-section="leadership">Leadership</a></li>
                                    <li><a href="#skills" data-nav-section="skills">Skills & Interests</a></li>
                                    <li><a href="#project" data-nav-section="project">Independent Projects</a></li>
                                    <li><a href="#honors" data-nav-section="honors">Honor & Awards</a></li>
                                </ul>
                            </div>
                        </nav>

                        <div className="colorlib-footer">
                            <p><small>&copy; Copyright &copy; 2019. All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                            </small></p>
                        </div>
                    </aside>
                </div>
            </div >
        )
    }
}
