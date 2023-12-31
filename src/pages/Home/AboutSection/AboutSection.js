import React from "react";
import "./About.css";

export default function AboutSection() {
  return (
    <>
      <section className="about-area pt-130 pb-70" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div
                className="about-content-box about-content-box-one mb-50 wow fadeInLeft"
                data-wow-delay=".3s"
                style={{visibility: "visible", animationDelay: "0.3s",}}
              >
                <div className="section-title section-title-left mb-40">
                  <span className="sub-title">About Us</span>
                  <h2 className="">Professional Business Guidance Agency</h2>
                </div>
                <p className="mb-4">
                  Sedut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam raperiaeaque ipsa
                  quae ab illo inventore veritatis et quasi
                  <br />
                  <br />
                  Doloremque laudantium, totam raperiaeaque ipsa quae ab illo
                  inventore veritatis et quasi
                  <br />
                  <br />
                  Business &amp; Consulting Agency
                  <br />
                  Awards Winning Business Comapny
                  <br />
                  Business &amp; Consulting Agency
                  <br />
                  Awards Winning Business Comapny
                </p>
                <a href="http://example.com/" className="main-btn arrow-btn">
                  Learn More
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="about-img-box about-img-box-one mb-50">
                <div
                  className="about-img-one wow fadeInUp"
                  data-wow-delay=".45s"
                  style={{visibility: "visible", animationDelay: "0.45s",}}
                >
                  <img
                    className="lazy entered loaded"
                    data-src="https://businesso.xyz/assets/front/img/user/home_settings/62381226ecd01.png"
                    alt="about"
                    data-ll-status="loaded"
                    src="https://businesso.xyz/assets/front/img/user/home_settings/62381226ecd01.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
