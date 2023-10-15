import React from "react";
import "./Testimonial.css";
import Slider from "react-slick";

export default function TestimonialSection() {
  return (
    <>
      <section className="testimonial-area pt-120 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div
                className="section-title text-center mb-75 wow fadeInUp"
                data-wow-delay=".2s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeInUp",
                }}
              >
                <span className="sub-title">Client’s Say</span>
                <h2 className="">Lorem ipsum dolor sit</h2>
              </div>
            </div>
          </div>

          <div className="row align-items-center testimonial-wrapper-one">
            <div className="col-lg-5">
              <div
                className="testimonial-img mb-50 wow fadeInLeft"
                data-wow-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInLeft",
                }}
              >
                <img
                  className="lazy entered loaded"
                  data-src="https://businesso.xyz/assets/front/img/user/home_settings/6195e2885a64b.jpg"
                  alt="testimonial"
                  data-ll-status="loaded"
                  src="https://businesso.xyz/assets/front/img/user/home_settings/6195e2885a64b.jpg"
                />
              </div>
            </div>

            <div className="col-lg-7">
              <div
                id="carouselExampleDark"
                class="carousel carousel-dark slide"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div
                    class="carousel-item active"
                    data-bs-interval="500"
                  >
                    <div className="wt-content">
                      <h3>
                        "It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here'"
                      </h3>
                    </div>
                    <div className="wt-title-thumb">
                      <div className="wt-thumb">
                        <img
                          className="lazy entered loaded"
                          data-src="https://businesso.xyz/assets/front/img/user/testimonials/1637127252.jpg"
                          alt="Author thumb"
                          data-ll-status="loaded"
                          src="https://businesso.xyz/assets/front/img/user/testimonials/1637127252.jpg"
                        />
                      </div>
                      <div className="wt-title">
                        <h4>Adress Pirlo</h4>
                        <span class="position">Manager, Madchef</span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="carousel-item"
                    data-bs-interval="600"
                  >
                    <div className="wt-content">
                      <h3>
                        "It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here'"
                      </h3>
                    </div>
                    <div className="wt-title-thumb">
                      <div class="wt-thumb">
                        <img
                          className="lazy entered loaded"
                          data-src="https://businesso.xyz/assets/front/img/user/testimonials/1637126679.jpg"
                          alt="Author thumb"
                          data-ll-status="loaded"
                          src="https://businesso.xyz/assets/front/img/user/testimonials/1637126679.jpg"
                        />
                      </div>
                      <div className="wt-title">
                        <h4>Marco Veratti</h4>
                        <span class="position">CEO, Janex</span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="carousel-item"
                  >
                    <div className="wt-content">
                      <h3>
                        "It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here'"
                      </h3>
                    </div>
                    <div className="wt-title-thumb">
                      <div className="wt-thumb">
                        <img
                          className="lazy entered loaded"
                          data-src="https://businesso.xyz/assets/front/img/user/testimonials/1637127234.jpg"
                          alt="Author thumb"
                          data-ll-status="loaded"
                          src="https://businesso.xyz/assets/front/img/user/testimonials/1637127234.jpg"
                        />
                      </div>
                      <div className="wt-title">
                        <h4>Nicolo Zaniolo</h4>
                        <span className="position">CTO, WebTech</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
