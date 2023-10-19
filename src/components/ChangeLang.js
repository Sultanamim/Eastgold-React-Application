import React from "react";
import i18n from "i18next";
import en from "../assets/en.jpg";
import bn from "../assets/bn.jpg";
import az from "../assets/az.webp";
import { Link } from "react-router-dom";

export default class ChangeLang extends React.Component {
  state = {
    lang: "en",
  };
  // langChange = e => {
  //   this.setState({ [e.target.name]: e.target.value }, () => {
  //     localStorage.setItem("lang", this.state.lang);
  //     const lang = localStorage.getItem("lang");
  //     i18n.changeLanguage(lang);
  //   });
  // };

  langChangeInfo = (e) => {
    const { lang } = this.state;
    this.setState({ lang: e }, () => {
      localStorage.setItem("lang", this.state.lang);
      const lang = localStorage.getItem("lang");

      i18n.changeLanguage(lang);
      
      // i18next.changeLanguage(lang());
    });
  };

  render() {
    const { t } = this.props;
    const { lang } = this.state;
    const { i18n } = this.props;

    let currentLanFlag = en;

    return (
      <div>
        <div className="version col-4">
          <div className="dropdown show">
            <a
              className="dropdown-toggle"
              href=""
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ display: "flex" }}
            >
              {(() => {
                if (lang == "en") {
                  return (
                    <img
                      className="currentLanFlag"
                      src={en}
                      style={{ width: "80px", height: "auto" }}
                      alt="Language Flag"
                    />
                  );
                } else {
                  return (
                    <img
                      className="currentLanFlag"
                      src={az}
                      style={{ width: "80px", height: "auto" }}
                      alt="Language Flag"
                    />
                  );
                }
              })()}
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <Link
                className="dropdown-item"
                onClick={() => this.langChangeInfo("en")}
                to={this.props}
                style={{
                  textDecoration: "none",
                  padding: "5px",
                }}
              >
                <img
                  className="flag"
                  src={en}
                  alt=""
                  style={{ width: "20px", height: "15px"  }}
                />{" "}
                &nbsp; English
              </Link>

              <Link
                className="dropdown-item"
                onClick={() => this.langChangeInfo("az")}
                to={this.props}
                style={{
                  textDecoration: "none",
                  padding: "5px",
                }}
              >
                <img
                  className="flag"
                  src={az}
                  alt=""
                  style={{ width: "20px", height: "15px" }}
                />{" "}
                &nbsp; Azerbaijan
              </Link>
            </div>
          </div>
        </div>

        {/* <select
          className="selectBox"
          onChange={this.langChange}
          name="lang"
          value={lang}
        >
        
          <option className="optionsMenu"  value="en" >
            <a href="#">
              <img src={en} alt="en" /> English
            </a>
          </option>
  
          <option className="optionsMenu" value="az">
         
             AZ <img src={az} alt="az" />
          </option>
        </select> */}
      </div>
    );
  }
}
