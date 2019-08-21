import React, { Component } from 'react'

export default class Leadership extends Component {
    render() {
        return (
            <div>
                <section id="colorlib-hero" className="js-fullheight" data-section="leadership">
                    <div className="flexslider js-fullheight">
                        <ul className="slides">
                            <li style={{ backgroundImage: 'url(images/pic.png)' }}>
                                <div className="overlay" />
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                            <div className="slider-text-inner js-fullheight">
                                                <div className="desc">
                                                    <span className="heading-meta">Leadership</span>
                                                    <h4>Secretary | Nepal Students' Association</h4>
                                                    <h6><i>Student Government Association - Texas Tech University</i></h6>
                                                    <h6>Handled correspondence, organized meetings, and logistical fulfillment for 10+ events open for all 100+ association members; Increased organization funding by 50%</h6>
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
