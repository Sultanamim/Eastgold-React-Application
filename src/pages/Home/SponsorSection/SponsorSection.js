import React from "react";
import "./Sponsor.css";

export default function SponsorSection() {
  return (
    <>
      <section className="sponsor-area light-bg pt-70 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="sponsor-slider-one slick-initialized slick-slider">
                <div className="slick-list draggable">
                  <div
                    className="slick-track"
                    style={{opacity: 1, width: "1200px", transform: "translate3d 0px, 0px, 0px",}}
                  >
                    <a
                      className="single-sponsor d-block slick-slide slick-current slick-active"
                      href="http://example.com/"
                      target="_blank"
                      data-slick-index="0"
                      aria-hidden="false"
                      style={{width: "210px",}}
                      tabIndex="0"
                    >
                      <img
                        data-src="https://businesso.xyz/assets/front/img/user/brands/595423e58bc34639c543269e62449ce32d8ca9d1.png"
                        className="lazy entered loaded"
                        alt="sponsors"
                        data-ll-status="loaded"
                        src="https://businesso.xyz/assets/front/img/user/brands/595423e58bc34639c543269e62449ce32d8ca9d1.png"
                      />
                    </a>
                    <a
                      className="single-sponsor d-block slick-slide slick-active"
                      href="http://example.com/"
                      target="_blank"
                      data-slick-index="1"
                      aria-hidden="false"
                      style={{width: "210px",}}
                      tabIndex="0"
                    >
                      <img
                        data-src="https://businesso.xyz/assets/front/img/user/brands/9f5fbbb7d3ce866780c1fe361c50f2cc504a3a20.png"
                        className="lazy entered loaded"
                        alt="sponsors"
                        data-ll-status="loaded"
                        src="https://businesso.xyz/assets/front/img/user/brands/9f5fbbb7d3ce866780c1fe361c50f2cc504a3a20.png"
                      />
                    </a>
                    <a
                      className="single-sponsor d-block slick-slide slick-active"
                      href="http://example.com/"
                      target="_blank"
                      data-slick-index="2"
                      aria-hidden="false"
                      style={{width: "210px",}}
                      tabIndex="0"
                    >
                      <img
                        data-src="https://businesso.xyz/assets/front/img/user/brands/5b00d3f6b37f9105728ed0f27d9e88a0cfca78c6.png"
                        className="lazy entered loaded"
                        alt="sponsors"
                        data-ll-status="loaded"
                        src="https://businesso.xyz/assets/front/img/user/brands/5b00d3f6b37f9105728ed0f27d9e88a0cfca78c6.png"
                      />
                    </a>
                    <a
                      className="single-sponsor d-block slick-slide slick-active"
                      href="http://example.com/"
                      target="_blank"
                      data-slick-index="3"
                      aria-hidden="false"
                      style={{width: "210px",}}
                      tabIndex="0"
                    >
                      <img
                        data-src="https://businesso.xyz/assets/front/img/user/brands/bf47f787b394f7aaa65f4c0e7c7bea7eb24091a1.png"
                        className="lazy entered loaded"
                        alt="sponsors"
                        data-ll-status="loaded"
                        src="https://businesso.xyz/assets/front/img/user/brands/bf47f787b394f7aaa65f4c0e7c7bea7eb24091a1.png"
                      />
                    </a>
                    <a
                      className="single-sponsor d-block slick-slide slick-active"
                      href="http://example.com/"
                      target="_blank"
                      data-slick-index="4"
                      aria-hidden="false"
                      style={{width: "210px",}}
                      tabIndex="0"
                    >
                      <img
                        data-src="https://businesso.xyz/assets/front/img/user/brands/cc1e45d4d0f5d6779e3f55dafb482e269c8d1ce3.png"
                        className="lazy entered loaded"
                        alt="sponsors"
                        data-ll-status="loaded"
                        src="https://businesso.xyz/assets/front/img/user/brands/cc1e45d4d0f5d6779e3f55dafb482e269c8d1ce3.png"
                      />
                    </a>
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
