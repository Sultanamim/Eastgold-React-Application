import React from "react";
import "./Footer.css";

export default function Footer() {
  const externalImage =
    "https://eastgold.az/assets/front/img/static/lawyer/footer-bg-1.jpg";
  return (
    <>
      <footer className="footer-area">
        <div
          data-bg="https://eastgold.az/assets/front/img/static/lawyer/footer-bg-1.jpg"
          className="footer-wrapper-one lazy position-relative bg_cover pb-30 entered loaded"
          data-ll-status="loaded"
          style={{ backgroundImage: `url(${externalImage})` }}
        >
          <div className="container">
            <div className="footer-widget pt-80 pb-20">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="widget about-widget mb-55 wow fadeInUp"
                    data-wow-delay=".2s"
                    style={{ visibility: "visible", animationDelay: "0.2s" }}
                  >
                    <a className="footer-logo" href="#">
                      <img
                        className="lazy entered loaded"
                        data-src="https://businesso.xyz/assets/front/img/user/footer/7556b078b136ecf0fccc9c390bfb3c1b086e4700.png"
                        alt="Footer Logo"
                        data-ll-status="loaded"
                        src="https://businesso.xyz/assets/front/img/user/footer/7556b078b136ecf0fccc9c390bfb3c1b086e4700.png"
                      />
                    </a>
                    <p>
                      Power of choice is untrammelled &amp; when nothing
                      prevents our being able. Dolor sit amet consectetur
                      adipiscing elit sed do eiusmod tempor incididunt
                    </p>
                    <div className="share">
                      <h4>Follow</h4>
                      <ul className="social-link">
                        <li>
                          <a href="http://example.com/">
                            <i class="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="http://example.com/">
                            <i class="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="http://example.com/">
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                        <li>
                          <a href="http://example.com/">
                            <i class="fab fa-dribbble"></i>
                          </a>
                        </li>
                        <li>
                          <a href="http://example.com/">
                            <i class="fab fa-behance"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="widget footer-nav-widget mb-55 wow fadeInUp"
                    data-wow-delay=".3s"
                    style={{ visibility: "visible", animationDelay: "0.3s" }}
                  >
                    <h4 className="widget-title">Quick Links</h4>
                    <ul className="widget-link">
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Terms &amp; Conditions</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="widget contact-info-widget mb-55 wow fadeInUp"
                    data-wow-delay=".5s"
                    style={{ visibility: "visible", animationDelay: "0.5s" }}
                  >
                    <h4 className="widget-title">Contact Us</h4>
                    <div className="info-widget-content mb-10">
                      <p>
                        <i className="fa-solid fa-phone"></i>
                        <a href="tel: +012 (345) 6789">+012 (345) 6789</a>,
                        <a href="tel: +82659211">+82659211</a>,
                        <a href="tel: +97257102">+97257102</a>
                      </p>
                      <p>
                        <i className="fa-regular fa-envelope"></i>
                        <a href="mailto: support@gmail.com">
                          support@gmail.com
                        </a>
                        ,
                        <a href="mailto: contact@rangs.com">
                          contact@rangs.com
                        </a>
                      </p>
                      <p>
                        <i className="fa-solid fa-location-dot"></i>
                        <span>Broklyn Street USA</span> |
                        <span>Newyork, USA</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-copyright">
              <div className="row">
                <div className="col-lg-12">
                  <div className="copyright-text text-center">
                    <p></p>
                    <p>Copyright © 2022. All rights reserved by Rangs</p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            href="#"
            className="back-to-top"
            style={{ display: "inline-block" }}
          >
            <i className="fas fa-angle-up"></i>
          </a>
        </div>
      </footer>
    </>
  );
}
