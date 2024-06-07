import Link from 'next/link'
import React from 'react'

const FooterSection = () => {
  return (
    <footer id="footer-section">
        <div className="container">
            <div className="footer-one">
                <div className="row justify-content-between">
                    <div className="col-xxl-4 col-xl-5 col-lg-6">
                        <div className="footer-heading">
                            <h3>We Are Your Instagram Best Solution</h3>
                        </div>
                    </div>

                    <div className="col-xxl-5 col-xl-6 col-lg-6">
                        <div className="footer-img-container">
                            <a href="assets/img/bg/service.png" className="image-popups">
                                <img src="assets/img/bg/service.png" alt="girls-using-phone" className="footer-img"/>
                            </a>
                            <a href="assets/img/about/about-1.jpg" className="image-popups">
                                <img src="assets/img/about/about-1.jpg" alt="2 people watching tab" className="footer-img"/>
                            </a>
                            <a href="assets/img/blog/blog-box-1.png" className="image-popups">
                                <img src="assets/img/blog/blog-box-1.png" alt="girl-lying" className="footer-img"/>
                            </a>
                            <a href="assets/img/blog/blog-details-1.jpg" className="image-popups">
                                <img src="assets/img/blog/blog-details-1.jpg" alt="people using laptop"
                                    className="footer-img"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-two">
                <div className="row justify-content-xl-between justify-content-center">
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="company-info">
                            <img src="assets/img/logo/logo-3.png" alt="logo" className="footer-two__logo"/>

                            <div className="company-info__txt">
                                <span>O PBox 1622 Vissaosang Street West </span>

                                <div className="company__numbers">
                                    <a href="tel:9145789658424">+9145789658424 ,</a>
                                    <a href="tel:6157845625">+6157845625</a>
                                </div>

                                <span>minimart@domain.com</span>
                                <span>Opening Hours : 8.00AM - 21.00AM</span>
                                <span>Sunday - Friday</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-3 col-6">
                        <div className="ba-footer-widget footer-two-widget">
                            <h3 className="ba-footer-widget-title footer-two-widget__title">Help?</h3>
                            <ul>
                                <li><a href="#">Term & conditions</a></li>
                                <li><a href="#">Reporting</a></li>
                                <li><a href="#">Documentation</a></li>
                                <li><a href="#">Support Policy</a></li>
                                <li><a href="#">Privacy</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-3 col-6">
                        <div className="ba-footer-widget footer-two-widget">
                            <h3 className="ba-footer-widget-title footer-two-widget__title">Quick links</h3>
                            <ul>
                                <li><Link href="/homePage2">Home Two</Link></li>
                                <li><Link href="/blog">Blog Post</Link></li>
                                <li><Link href="/blogDetails">Blog Details</Link></li>
                                <li><Link href="/team">Team</Link></li>
                                <li><Link href="/teamDetails">Team Details</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-md-6 col-8">
                        <div className="ba-footer-widget footer-two-widget footer-two-widget--last pr-50">
                            <h3 className="ba-footer-widget-title footer-two-widget__title">Working Hours</h3>
                            <div className="ba-footer-widget-working-hours-list footer-two-widget__working-hours">
                                <ul>
                                    <li>
                                        <span className="label">Monday</span>
                                        <span className="value">10:00 – 11:00</span>
                                    </li>
                                    <li>
                                        <span className="label">Tusday</span>
                                        <span className="value">11:00 – 11:40</span>
                                    </li>
                                    <li>
                                        <span className="label">Wedesday</span>
                                        <span className="value">8:00 – 9:40</span>
                                    </li>
                                    <li>
                                        <span className="label">Thursday</span>
                                        <span className="value">7:50 – 8:40</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-three pt-35 pb-40">
                <div className="row">
                    <div className="col-md-6">
                        <p className="ba-footer-copyright-text footer-three__copyright-text">Copyright &copy; 2022 All rights reserved.</p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
                        <img src="assets/img/payment-method/payment-method.png" alt="logo" className="payment-methods"/>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default FooterSection