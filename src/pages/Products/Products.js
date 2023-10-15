import React from "react";
import "../Portfolios/Portfolio.css";
import BreadCrumbImg from "../../assets/breadcrumb.jpg";

export default function Products() {
  const externalImg =
    "https://eastgold.az/assets/front/img/user/breadcrumb.jpg";
    
    const img1 = "https://eastgold.az/assets/front/img/user/portfolios/1647180612.jpg";
    const img2 = "https://eastgold.az/assets/front/img/user/portfolios/1647180540.jpg";
    const img3 = "https://eastgold.az/assets/front/img/user/portfolios/1647180548.jpg";
    const img4 = "https://eastgold.az/assets/front/img/user/portfolios/1647180556.jpg";
    const img5 = "https://eastgold.az/assets/front/img/user/portfolios/1647180605.jpg";

  return (
    <>
      {/* ---------- Breadcrumb Section -------- */}
      <section
        className="breadcrumb-section bg-img-c lazy entered loaded"
        data-bg={externalImg}
        data-ll-status="loaded"
        style={{ backgroundImage: `url(${externalImg})` }}
      >
        <div className="container">
          <div className="breadcrumb-text">
            <h1 className="page-title"> Our ProDucts</h1>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li> Our Products</li>
            </ul>
          </div>
        </div>
        <div className="breadcrumb-shapes">
          <div className="one"></div>
          <div className="two"></div>
        </div>
      </section>

      {/* ----------  Project Section -------- */}
      <section className="project-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              <ul className="project-nav project-isotope-filter">
                <li data-filter="*" className="active">
                  {" "}
                  All{" "}
                </li>
                <li data-filter=".item-87" className="">
                  Consulting
                </li>
                <li data-filter=".item-88">Web Development</li>
                <li data-filter=".item-89">Graphic Design</li>
              </ul>
            </div>
          </div>

          {/* <!-- Project Boxes --> */}
          <div
            className="row project-boxes project-isotope mt-60 justify-content-center"
            style={{position: "relative", height: "800px", marginTop: "3rem"}}
          >
            <div
              className="isotope-item col-lg-4 col-sm-6 item-87"
              style={{position: "absolute", left: "0%", top: "0px",}}
            >
              <div className="project-box hover-style">
                <a
                  className="project-thumb"
                  href="#"
                >
                  <div
                    className="thumb bg-img-c lazy entered error"
                    data-bg={img5}
                    data-ll-status="error"
                    style={{backgroundImage: `url(${img5})`}}
                  ></div>
                </a>
                <div className="project-desc text-center">
                  <h4>
                    <a href="#">
                      Free Consulting
                    </a>
                  </h4>
                  <p>Consulting</p>
                  <a
                    href="#"
                    className="project-link"
                  >
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="isotope-item col-lg-4 col-sm-6 item-88"
              style={{position: "absolute", left: "33.3333%", top: "0px",}}
            >
              <div className="project-box hover-style">
                <a
                  className="project-thumb"
                  href="#"
                >
                  <div
                    className="thumb bg-img-c lazy entered loaded"
                    data-bg={img2}
                    data-ll-status="loaded"
                    style={{backgroundImage: `url(${img2})`}}
                  ></div>
                </a>
                <div className="project-desc text-center">
                  <h4>
                    <a href="#">
                      Business Growth
                    </a>
                  </h4>
                  <p>Web Development</p>
                  <a
                    href="#"
                    className="project-link"
                  >
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="isotope-item col-lg-4 col-sm-6 item-89"
              style={{position: "absolute", left: "66.6667%", top: "0px",}}
            >
              <div className="project-box hover-style">
                <a
                  className="project-thumb"
                  href="#"
                >
                  <div
                    className="thumb bg-img-c lazy entered error"
                    data-bg={img4}
                    data-ll-status="error"
                    style={{backgroundImage: `url(${img4})`}}
                  ></div>
                </a>
                <div className="project-desc text-center">
                  <h4>
                    <a href="#">
                      IT Consulting
                    </a>
                  </h4>
                  <p>Graphic Design</p>
                  <a
                    href="#"
                    className="project-link"
                  >
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="isotope-item col-lg-4 col-sm-6 item-87"
              style={{position: "absolute", left: "0%", top: "400px"}}
            >
              <div className="project-box hover-style">
                <a
                  class="project-thumb"
                  href="#"
                >
                  <div
                    className="thumb bg-img-c lazy entered error"
                    data-bg={img3}
                    data-ll-status="error"
                    style={{backgroundImage: `url(${img3})`}}
                  ></div>
                </a>
                <div className="project-desc text-center">
                  <h4>
                    <a href="#">
                      Investment Plan
                    </a>
                  </h4>
                  <p>Consulting</p>
                  <a
                    href="#"
                    className="project-link"
                  >
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="isotope-item col-lg-4 col-sm-6 item-88"
              style={{position: "absolute", left: "33.3333%", top: "400px",}}
            >
              <div className="project-box hover-style">
                <a
                  className="project-thumb"
                  href="#"
                >
                  <div
                    className="thumb bg-img-c lazy entered loaded"
                    data-bg={img2}
                    data-ll-status="loaded"
                    style={{backgroundImage: `url(${img2})`}}
                  ></div>
                </a>
                <div className="project-desc text-center">
                  <h4>
                    <a href="#">
                      Financial Planning
                    </a>
                  </h4>
                  <p>Web Development</p>
                  <a
                    href="#"
                    className="project-link"
                  >
                    <i className="fal fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="isotope-item col-lg-4 col-sm-6 item-89"
              style={{position: "absolute", left: "66.6667%", top: "400px",}}
            >
              <div className="project-box hover-style">
                <a
                  className="project-thumb"
                  href="#"
                >
                  <div
                    className="thumb bg-img-c lazy entered error"
                    data-bg={img1}
                    data-ll-status="error"
                    style={{backgroundImage: `url(${img1})`}}
                  ></div>
                </a>
                <div className="project-desc text-center">
                  <h4>
                    <a href="#">
                      Relationship
                    </a>
                  </h4>
                  <p>Graphic Design</p>
                  <a
                    href="#"
                    className="project-link"
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
