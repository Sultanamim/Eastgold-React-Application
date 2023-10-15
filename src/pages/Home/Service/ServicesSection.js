import React from "react";
import "./Service.css";

export default function ServicesSection() {
  return (
    <>
      <section className="service-area position-relative light-bg pt-120 pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div
                className="section-title text-center mb-75 wow fadeInUp"
                style={{visibility: "visible", animationName: "fadeInUp",}}
              >
                <span className="sub-title">25 Years Of Experience</span>
                <h2>Best SEO Optimization Agency</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div
                className="service-item service-item-one wow fadeInUp animated"
                data-wow-delay=".2s"
                style={{visibility: "visible", animationDelay: "0.2s",}}
              >
                <div className="icon">
                  <i className="far fa-bookmark"></i>
                </div>
                <div className="content">
                  <h3 className="title">
                    <a>Have A Coffee</a>
                  </h3>
                  <p>
                    Doloremque laudantium totam raperiaeaqu ipsa quae ab illo
                    inventore veritatis et quasi
                  </p>
                </div>
              </div>
              <div
                className="service-item service-item-one wow fadeInUp"
                data-wow-delay=".2s"
                style={{visibility: "visible", animationDelay: "0.2s",}}
              >
                <div className="icon">
                  <i className="far fa-user"></i>
                </div>
                <div className="content">
                  <h3 className="title">
                    <a>Meet With Advisors</a>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque
                  </p>
                </div>
              </div>
              <div
                className="service-item service-item-one wow fadeInUp"
                data-wow-delay=".2s"
                style={{visibility: "visible", animationDelay: "0.2s",}}
              >
                <div className="icon">
                  <i className="fas fa-bullseye"></i>
                </div>
                <div className="content">
                  <h3 className="title">
                    <a>Achieve Your Goals</a>
                  </h3>
                  <p>
                    Quis autem vel eum iure reprehenderit qui ieas voluptate
                    velit esse quam nihil mole
                  </p>
                </div>
              </div>
              <div
                className="service-item service-item-one wow fadeInUp"
                data-wow-delay=".2s"
                style={{visibility: "visible", animationDelay: "0.2s",}}
              >
                <div className="icon">
                  <i className="far fa-user"></i>
                </div>
                <div className="content">
                  <h3 className="title">
                    <a>Meet With Advisors</a>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="service-img pl-70 wow fadeInRight animated"
                data-wow-delay=".60s"
                style={{visibility: "visible", animationDelay: "0.6s",}}
              >
                <img
                  className="lazy entered loaded"
                  data-src="https://businesso.xyz/assets/front/img/static/lawyer/work_process.jpg"
                  alt="service"
                  data-ll-status="loaded"
                  src="https://businesso.xyz/assets/front/img/static/lawyer/work_process.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
