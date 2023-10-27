import React, { useEffect, useState } from "react";
import { Translation } from "react-i18next";
import { useTranslation } from "react-i18next";

export default function Portfolios() {

    const { t, i18n } = useTranslation();
  // Define the items that correspond to each filter

  const externalImg =
    "https://businesso.xyz/assets/front/img/user/breadcrumb.jpg";

  // Define your projects with corresponding filters
 

  // Filter the projects based on the active filter


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
            <h1 className="page-title"> {t('Contact Us')}</h1>
            <ul>
              <li>
                <a href="/">{t('Home')}</a>
              </li>
              <li>{t('About Us')}</li>
            </ul>
          </div>
        </div>
        <div className="breadcrumb-shapes">
          <div className="one"></div>
          <div className="two"></div>
        </div>
      </section>

      {/* ----------  Project Section -------- */}
      <section className="contact-area light-bg pb-130 pt-0">

            <br></br>

        <div className="container">
            

            <div class="row">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61056.26248609084!2d49.81075007185792!3d40.39757827390435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d126c4865e9%3A0xa7eb4f89f3e1e706!2s15%20Khatai%20Ave%2C%20Baku%2C%20Azerbaijan!5e0!3m2!1sen!2sbd!4v1698395903469!5m2!1sen!2sbd" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

          <div
            className="contact-wrapper-one wow fadeInDown"
            data-wow-delay=".2s"
            style={{visibility: "visible", animationDelay: "0.2s", animationName: "fadeInDown",}}
          >
            <div className="contact-form">
              <form
                action="#"
                method="#"
                encType="multipart/form-data"
              >
                <input
                  type="hidden"
                  name="_token"
                  value="Pe3TTp0JCxj8C4nWmz90tf1Ph0IPeLUxMg3b1WI0"
                />{" "}
                <input type="hidden" name="id" value="174" />
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="form_group">
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Name"
                        name="fullname"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="form_group">
                      <input
                        type="emil"
                        className="form_control"
                        placeholder="Email Address"
                        name="email"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="form_group">
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Subject"
                        name="subject"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="form_group">
                      <textarea
                        className="form_control"
                        placeholder="Message"
                        name="message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="form_group">
                      <button type="submit" className="arrow-btn main-btn">
                        {t('Send Message')}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
