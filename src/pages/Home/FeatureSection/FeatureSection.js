import React from "react";
import "./Feature.css";

export default function FeatureSection() {
  const externalImage = "https://businesso.xyz/assets/front/img/user/services/1647182306.jpg";
  return (
    <>
      <section className="features-area features-area-one">
        <div className="container-fluid ">
          <div className="row features-wrapper-one no-gutters ">
            <div className="col-lg-3 features-column">
              <div className="features-item features-item-one text-center">
                <div
                  className="item-bg bg_cover lazy entered loaded"
                  data-bg={externalImage}
                  data-ll-status="loaded"
                  style={{backgroundImage: `url(${externalImage})`}}
                ></div>
                <div className="icon">
                  <i className="fab fa-accusoft"></i>
                </div>
                <div className="content">
                  <h4>MOBILE APPS</h4>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority...
                  </p>
                  <a
                    href="#"
                    className="icon-btn"
                  >
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 features-column">
              <div className="features-item features-item-one text-center">
                <div
                  className="item-bg bg_cover lazy entered error"
                  data-bg={externalImage}
                  data-ll-status="error"
                  style={{backgroundImage: `url(${externalImage})`}}
                ></div>
                <div className="icon">
                  <i className="fas fa-arrows-alt"></i>
                </div>
                <div className="content">
                  <h4>WEB DEVELOPMENT</h4>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority...
                  </p>
                  <a
                    href="#"
                    className="icon-btn"
                  >
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 features-column">
              <div className="features-item features-item-one text-center">
                <div
                  className="item-bg bg_cover lazy entered error"
                  data-bg={externalImage}
                  data-ll-status="error"
                  style={{backgroundImage: `url(${externalImage})`}}
                ></div>
                <div className="icon">
                  <i className="fas fa-address-card"></i>
                </div>
                <div className="content">
                  <h4>GRAPHIC DESIGN</h4>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority...
                  </p>
                  <a
                    href="#"
                    className="icon-btn"
                  >
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 features-column">
              <div className="features-item features-item-one text-center">
                <div
                  className="item-bg bg_cover lazy entered error"
                  data-bg={externalImage}
                  data-ll-status="error"
                  style={{backgroundImage: `url(${externalImage})`}}
                ></div>
                <div className="icon">
                  <i className="fab fa-accusoft"></i>
                </div>
                <div className="content">
                  <h4>PLUGIN DEVELOPMENT</h4>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority...
                  </p>
                  <a
                    href="#"
                    className="icon-btn"
                  >
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 features-column">
              <div className="features-item features-item-one text-center">
                <div
                  className="item-bg bg_cover lazy entered error"
                  data-bg={externalImage}
                  data-ll-status="error"
                  style={{backgroundImage: `url(${externalImage})`}}
                ></div>
                <div className="icon">
                  <i className="fas fa-bell-slash"></i>
                </div>
                <div className="content">
                  <h4>MARKETTING SEO</h4>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority...
                  </p>
                  <a
                    href="#"
                    className="icon-btn"
                  >
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
