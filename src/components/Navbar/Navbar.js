import React from "react";
import LogoImg from "../../assets/logo2.png";
import CrossImg from "../../assets/cross.png";
import "../../assets/css/Blogs.css";
import "../../assets/css/template.css";
import { Translation } from "react-i18next";
import { useTranslation } from "react-i18next";
import ChangeLang from "../ChangeLang.js";
import { Link } from "react-router-dom";
import "./navbar.css";
import Swal from "sweetalert2";


export default function Navbar() {
  const { t, i18n } = useTranslation();
  const token = localStorage.getItem("token");


  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    Swal.fire("Successfully!",  "Logout Successfully", "success", {
      buttons: false,
      timer: 2000,
    });

    window.location.href = "/home";
  };


  return (
    <header className="header-area-one">
      {/* ---------  Header-logo-area  -------------- */}
      <div className="header-logo-area  d-flex align-items-center">
        <div className="container">
          <div className="row d-flex flex-row">
            <div className="col-lg-4 col-md-3">
              <div className="site-branding">
                <a href="#" className="brand-logo">
                  <img src={LogoImg} alt="logo" />
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
                      <span className="title">Phone Number</span>
                      <h5>
                        <a href="#">{"+012 (345) 6789"}</a>
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
                      <span className="title">Email Address</span>
                      <h5>
                        <a href="#">support@gmail.com</a>
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
                <span className="navbar-toggler-icon"></span>
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
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        {t("Home")}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/products">
                        {t("Products")}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/portfolios">
                        {t("Portfolios")}
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
                  <a href="#" className="main-btn float-right m-0">
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
