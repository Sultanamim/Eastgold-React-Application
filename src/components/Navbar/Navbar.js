import React, { useEffect, useState } from "react";

import LogoImg from "../../assets/logo2.png";
import LogoImg2 from "../../assets/logo.svg";
import CrossImg from "../../assets/cross.png";
import "../../assets/css/Blogs.css";
import "../../assets/css/template.css";
import { Translation } from "react-i18next";
import { useTranslation } from "react-i18next";
import ChangeLang from "../ChangeLang";
import { Link } from "react-router-dom";
import "./navbar.css";
import Swal from "sweetalert2";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleDeshBoard = () => {
    if (user.account_mode === "Seller") {
      // history.push("/seller-dashboard")

      window.location.href = "/seller-profile";
    } else if (user.account_mode === "Buyer") {
      window.location.href = "/buyer-transitions";
      //  history.push("/buyer-transitions")
    } else if (user.account_mode === "Partner") {
      //  history.push("/client-transitions")
      window.location.href = "/client-transitions";
    }

    alert("Are you sure?");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    Swal.fire("Successfully!", "Logout Successfully", "success", {
      buttons: false,
      timer: 2000,
    });

    window.location.href = "/home";

    alert("Are you sure?");
  };

  return (
    <header className="header-area-one">
      {/* ---------  Header-logo-area  -------------- */}
      <div className="header-logo-area  d-flex align-items-center">
        <div className="container">
          <div className="row d-flex flex-row">
            <div className="col-lg-4 col-md-3">
              <div
                className="site-branding"
                style={{ justifyContent: "center" }}
              >
                <a href="/" className="brand-logo">
                  <img src={LogoImg2} alt="logo" />
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-md-9 d-xl-block d-none">
              <div className="site-info">
                <ul className="info-list">
                  <li>
                    <div className="icon">
                      <a href="#">
                        <i className="fa-solid fa-mobile-screen-button"></i>
                      </a>
                    </div>
                    <div className="info">
                      <span className="title">{t("Phone Number")}</span>
                      <h5>
                        <a href="#">{"+ 077 712 10 90"}</a>
                      </h5>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <a href="#">
                        <i className="fa-regular fa-envelope"></i>
                      </a>
                    </div>
                    <div className="info">
                      <span className="title">{t("Email Address")}</span>
                      <h5>
                        <a href="#">office@eastgold.az</a>
                      </h5>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*------------- */}

      {/* ----------  Header Navigation -------------- */}
      <div className="container">
        <nav className="header-navigation navbar navbar-expand-lg d-flex align-items-center">
          <div className="row d-flex flex-row mx-0 px-0 align-items-center">
            <div className="col-lg-6 col-4 d-flex align-items-center">
              {/*---- OffCanvas ------ */}
              <button
                className="navbar-toggler d-flex align-items-center d-lg-none"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon">
                  <i className="fa-solid fa-bars"></i>
                </span>
              </button>

              <div
                className="offcanvas offcanvas-start"
                tabIndex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div className="offcanvas-header">
                  <h5
                    className="offcanvas-title"
                    id="offcanvasNavbarLabel"
                  ></h5>
                  <button
                    type="button"
                    className="close-button"
                    data-bs-dismiss="offcanvas"
                  >
                    <p
                      style={{
                        color: "#fff",
                        fontSize: "36px",
                        padding: "5px 12px",
                        marginTop: "-20px",
                        marginRight: "-16px",
                      }}
                    >
                      &times;
                    </p>
                  </button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-start">
                    <li className="nav-item">
                      <Link className="nav-link active" to="/home">
                        {t("Home")}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/products">
                        {t("Products")}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">
                        {t("About Us")}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">
                        {t("Contact Us")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/*-------- */}
            </div>
            <div className="col-lg-6 col-8 d-flex align-items-center justify-content-end">
              {/*----- Header Right Nav ------ */}
              <ul className="d-flex align-items-center justify-content-end">
                <li className="d-xl-block d-none nav-item mt-2">
                  <a
                    href="tel:+0777121090"
                    className="main-btn float-right m-0"
                  >
                    {t("Request A Quote")}
                  </a>
                </li>
                {/* <li>
                  <form action="" id="userLangForms">
                    <select
                      name="code"
                      id="lang-code"
                      className="nav-item form-control from-control-sm "
                    >
                      <option value="en">
                        English
                      </option>
                      <option value="ar">عربي</option>
                    </select>
                  </form>
                </li> */}
              </ul>
              <div className="lang-icon">
                <Translation>{(t) => <ChangeLang t={t} />}</Translation>
              </div>

              {(() => {
                if (token) {
                  return <Link onClick={handleDeshBoard}>{t("Deshbord")}</Link>;
                }
              })()}
              <div className="nav-item info nav-push-item">
                {(() => {
                  if (!token) {
                    return <Link to="/login">{t("Login")}</Link>;
                  } else {
                    return <Link onClick={handleLogout}>{t("Logout")}</Link>;
                  }
                })()}

                {/* <Link to="/signup">Sign up</Link> */}
              </div>
              {/*-------- */}
            </div>
          </div>
        </nav>
      </div>
      {/* ------------- */}
    </header>
  );
}
