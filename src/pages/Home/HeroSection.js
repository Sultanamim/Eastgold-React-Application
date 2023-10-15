import React from "react";
import "./Home.css";

export default function HeroSection() {
  const Img1 =
    "https://businesso.xyz/assets/front/img/hero_slider/37db1e96370fe3a98b1814d4fb6922822419bf3a.jpg";
  const Img2 =
    "https://businesso.xyz/assets/front/img/hero_slider/784ffa3036c249fd132041bf56701406720e3e23.jpg";
  const Img3 =
    "https://businesso.xyz/assets/front/img/hero_slider/9d5005c0ad6235fadbdec1e5f181c85f9cf51841.jpg";
  return (
    <>
      {/* <!--====== Start Hero section ======--> */}
      <section className="hero-area">
        <div
          className="hero-wrapper-one carousel slide"
          id="carouselExampleInterval"
          data-bs-ride="carousel"
        >
          <div className="hero-slider-one">
            <div className="single-slider">
              <div className="carousel-inner bg_cover lazy">
                <div className="carousel-item active" data-bs-interval="5000">
                  <img src={Img1} className="d-block w-100" alt="Image-1" />
                  <div className="carousel-caption d-md-block">
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-lg-12">
                          <div className="hero-content hero-content-center">
                            <h1>Corporate Law Firms</h1>
                            <h4>25 Years Of Experience In Law Solutiuons</h4>
                            <ul className="button">
                              <li>
                                <a href="#" className="main-btn arro-btn">
                                  Our Services
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                  <img src={Img2} className="d-block w-100" alt="Image-2" />
                  <div className="carousel-caption d-md-block">
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-lg-12">
                          <div className="hero-content hero-content-center">
                            <h1>Corporate Law Firms</h1>
                            <h4>25 Years Of Experience In Law Solutiuons</h4>
                            <ul className="button">
                              <li>
                                <a href="#" className="main-btn arro-btn">
                                  Our Services
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={Img3} className="d-block w-100" alt="Image-3" />
                  <div className="carousel-caption d-md-block">
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-lg-12">
                          <div className="hero-content hero-content-center">
                            <h1>Corporate Law Firms</h1>
                            <h4>25 Years Of Experience In Law Solutiuons</h4>
                            <ul className="button">
                              <li>
                                <a href="#" className="main-btn arro-btn">
                                  Our Services
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev"
              >
               <i className="fa-solid fa-arrow-left"></i>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
              >
               <i className="fa-solid fa-arrow-right"></i>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== End Hero section ======--> */}
    </>
  );
}