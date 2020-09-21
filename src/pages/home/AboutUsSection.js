import React from 'react';
import aboutUs from '../../assets/images/about_us/about_us.jpg';
import './aboutUsSection.css';
import './aboutUsSection.scss';

export default function AboutUsSection() {
    return (
        <div id='about-us-section' className='about-position-top'>
            <div className='about-wrapper'>
                <div className="container">
                    <div className="row row--35 align-items-center">
                        <div className='col-lg-5 col-md-12'>
                            <div className='thumbnail'>
                                <img className='w-100' src={aboutUs} alt="about us" />
                            </div>
                        </div>

                        <div className='description col-lg-7 col-md-12'>
                            <article className='section-title'>
                                <h2>About</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,</p>
                            </article>

                            <div className='row mt--30 mt_sm--10'>
                                <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                                    <article className='about-us-list'>
                                        <h3>Who we are</h3>
                                        <p>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                    </article>
                                </div>


                                <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                                    <article className='about-us-list'>
                                        <h3>Who we are</h3>
                                        <p>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                    </article>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}