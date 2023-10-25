import React from "react";
import "./Team.css";
import Img3 from "../../../assets/3.jpeg";
import Img4 from "../../../assets/4.jpeg";
import Img5 from "../../../assets/5.jpeg";

export default function TeamSection() {
  return (
    <>
      <section className="team-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div
                className="section-title section-title-left mb-65 wow fadeInLeft"
                data-wow-delay=".2s"
                style={{visibility: "visible", animationDelay: "0.2s", animationName: "fadeInLeft",}}
              >
                <span className="sub-title">Our Team</span>
                <h2 className="">Lorem ipsum dolor sit amet</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="team-item team-item-one mb-40 wow fadeInUp"
                data-wow-delay=".25s"
                style={{visibility: "visible", animationDelay: "0.25s", animationName: "fadeInUp",}}
              >
                <div className="team-img">
                  <img
                    data-src={Img3}
                    className="lazy entered loaded"
                    alt="Team"
                    data-ll-status="loaded"
                    src={Img3}
                  />
                  <div className="team-overlay">
                    <div className="team-social">
                      <ul className="social-link">
                        <li>
                          <a href="#" target="_blank">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="fab fa-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <h3 className="title">
                    <a href="attorney-details.html">Stuart Clark</a>
                  </h3>
                  <span className="position">CEO, Rolan</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="team-item team-item-one mb-40 wow fadeInUp"
                data-wow-delay=".25s"
                style={{visibility: "visible", animationDelay: "0.25s", animationName: "fadeInUp",}}
              >
                <div className="team-img">
                  <img
                    data-src={Img4}
                    className="lazy entered loaded"
                    alt="Team"
                    data-ll-status="loaded"
                    src={Img4}
                  />
                  <div className="team-overlay">
                    <div className="team-social">
                      <ul className="social-link">
                        <li>
                          <a href="#" target="_blank">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="fab fa-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <h3 className="title">
                    <a href="attorney-details.html">Federico Cheisa</a>
                  </h3>
                  <span className="position">Manager, Rolan</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="team-item team-item-one mb-40 wow fadeInUp"
                data-wow-delay=".25s"
                style={{visibility: "visible", animationDelay: "0.25s", animationName: "fadeInUp",}}
              >
                <div className="team-img">
                  <img
                    data-src={Img5}
                    className="lazy entered loaded"
                    alt="Team"
                    data-ll-status="loaded"
                    src={Img5}
                  />
                  <div className="team-overlay">
                    <div className="team-social">
                      <ul className="social-link">
                        <li>
                          <a href="#" target="_blank">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="fab fa-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <h3 className="title">
                    <a href="attorney-details.html">Dani Olmo</a>
                  </h3>
                  <span className="position">Developer, Rolan</span>
                </div>
              </div>
            </div>
         
          </div>
        </div>
      </section>
    </>
  );
}
