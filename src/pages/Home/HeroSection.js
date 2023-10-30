import React from "react";
import CarouselImg1 from "../../assets/1.jpg";
import CarouselImg2 from "../../assets/2.jpg";
import "./Home.css";
import { Translation } from "react-i18next";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t, i18n } = useTranslation();
  const Img1 = "../../assets/1.jpg";
  const Img2 = "../../assets/2.jpg";

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
                  <img
                    src={CarouselImg1}
                    className="d-block w-100"
                    alt="Image-1"
                  />
                  <div className="carousel-caption align-items-center d-flex justify-content-center">
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-lg-12">
                          <div className="hero-content hero-content-center">
                            <h1>{t("orporate Law Firms")}</h1>
                            <h4>
                              {t("25 Years Of Experience In Law Solutiuons")}
                            </h4>
                            <ul className="button">
                              <li>
                                <a href="#" className="main-btn arro-btn">
                                  {t("Our Services")}
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
                  <img
                    src={CarouselImg2}
                    className="d-block w-100"
                    alt="Image-2"
                  />
                  <div className="carousel-caption d-flex align-items-center justify-content-center">
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-lg-12">
                          <div className="hero-content hero-content-center">
                            <h1>{t("orporate Law Firms")}</h1>
                            <h4>
                              {t("25 Years Of Experience In Law Solutiuons")}
                            </h4>
                            <ul className="button">
                              <li>
                                <a href="#" className="main-btn arro-btn">
                                  {t("Our Services")}
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
                <span className="visually-hidden">{t("Previous")}</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
              >
                <i className="fa-solid fa-arrow-right"></i>
                <span className="visually-hidden">{t("Next")}</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== End Hero section ======--> */}
    </>
  );
}
