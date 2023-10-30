import React from "react";
import "./Footer.css";
import { Translation } from "react-i18next";
import { useTranslation } from "react-i18next";
import ChangeLang from "../ChangeLang";
import LogoImg from "../../assets/logo2.png";
import FooterLogo from "../../assets/footer-logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t, i18n } = useTranslation();

  const externalImage = LogoImg;
  return (
    <>
      <footer className="footer-area">
        <div
          data-bg={LogoImg}
          className="footer-wrapper-one lazy position-relative bg_cover pb-30 entered loaded"
          data-ll-status="loaded"
          style={{ backgroundImage: `url(${externalImage})` }}
        >
          <div className="container">
            <div className="footer-widget pt-80 pb-20">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="widget about-widget mb-55 wow fadeInUp"
                    data-wow-delay=".2s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.2s",
                      textAlign: "center",
                    }}
                  >
                    <a className="footer-logo" href="#">
                      <img src={LogoImg} alt="logo" />
                    </a>
                    <p>
                      Power of choice is untrammelled &amp; when nothing
                      prevents our being able. Dolor sit amet consectetur
                      adipiscing elit sed do eiusmod tempor incididunt
                    </p>
                    <div className="share">
                      <h4>Follow</h4>
                      <ul className="social-link">
                        <li>
                          <a href="#">
                            <i class="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fab fa-dribbble"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fab fa-behance"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="widget footer-nav-widget mb-55 wow fadeInUp"
                    data-wow-delay=".3s"
                    style={{ visibility: "visible", animationDelay: "0.3s" }}
                  >
                    <h4 className="widget-title">{t("Quick Links")}</h4>
                    <ul className="widget-link">
                      <li>
                        <a href="#about">{t("About Us")}</a>
                      </li>
                      <li>
                        <a href="#">{t("Terms &amp; Conditions")}</a>
                      </li>
                      <li>
                        <a href="#">{t("Privacy Policy")}</a>
                      </li>
                      <li>
                        <a href="/contact">{t("Contact Us")}</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="widget contact-info-widget mb-55 wow fadeInUp"
                    data-wow-delay=".5s"
                    style={{ visibility: "visible", animationDelay: "0.5s" }}
                  >
                    <h4 className="widget-title">{t("Contact Us")}</h4>
                    <div className="info-widget-content mb-10">
                      <p>
                        <i className="fa-solid fa-phone"></i>
                        <a href="tel: +82659211">+ 077 712 10 90</a>
                      </p>
                      <p>
                        <i className="fa-regular fa-envelope"></i>
                        <a href="mailto: office@eastgold.az">
                          office@eastgold.az
                        </a>
                      </p>
                      <p>
                        <i className="fa-solid fa-location-dot"></i>
                        <span>
                          {" "}
                          {t("Karabakh Street, 15 Khatai Ave, Baku")}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-copyright">
              <div className="row">
                <div className="col-lg-12">
                  <div className="copyright-text text-center">
                    <p></p>
                    <p>
                      Copyright © 2023. All rights reserved by{" "}
                      <a target="_blank" href="www.webcodecare.com">
                        www.webcodecare.com
                      </a>
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            href="#"
            className="back-to-top"
            style={{ display: "inline-block" }}
          >
            <i className="fas fa-angle-up"></i>
          </a>
        </div>
      </footer>
    </>
  );
}
