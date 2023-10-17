import React from "react";
import i18n from "i18next";
import en from '../assets/en.jpg';
import bn from '../assets/bn.jpg';
import az from '../assets/az.webp';
import { Link } from 'react-router-dom';


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

  langChangeInfo = e => {
    
    const { lang } = this.state;
    this.setState({ lang: e }, () => {
      localStorage.setItem("lang", this.state.lang);
      const lang = localStorage.getItem("lang");
console.log(this.state.lang);

      // i18n.changeLanguage(lang);
    });
  };


  render() {
    const { t } = this.props;
    const { lang } = this.state;
    const { i18n } = this.props;
 
    let currentLanFlag = en;

    return (
      <div>


{/* <div className='version col-4'>
                <div className="dropdown show">
                  <a className="dropdown-toggle" href="" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{display: "flex"}}>
                      {(() => {
                    if (lang == "en") {
                      return (   <img 
                        className="currentLanFlag" 
                        src={ en }
                        style={{width:"80px",height:"auto"}} 
                        alt="Language Flag"/>);
                    } else {
                      return (   <img 
                        className="currentLanFlag" 
                        src={ az }
                        style={{width:"80px",height:"auto"}} 
                        alt="Language Flag"/>);
                    }
                  })()}
               
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <Link onClick={() => this.langChangeInfo('en')} to={this.props.location} style={{display: "flex",textDecoration: "none",padding: "5px"}}>
                        <img className="flag" src={en} alt="" style={{width:"20px",height:"15px"}} /> &nbsp; English
                      </Link>
                     
                      <Link onClick={() => this.langChangeInfo('az')} to={this.props.location} style={{display: "flex",textDecoration: "none",padding: "5px"}}>
                        <img className="flag" src={az} alt="" style={{width:"20px",height:"15px"}} /> &nbsp; Azerbaijan
                      </Link>
                  </div>
                </div>
            </div> */}


        <select
          className="selectBox"
          onChange={this.langChangeInfo}
          name="lang"
          value={lang}
        >
        
          <option className="optionsMenu"  value="en" >
              <Link onClick={() => this.langChangeInfo('en')} to={this.props.location} style={{display: "flex",textDecoration: "none",padding: "5px"}}>
                         &nbsp; English
                      </Link>

          </option>
  
          <option className="optionsMenu" value="az">
         
             <Link onClick={() => this.langChangeInfo('az')} to={this.props.location} style={{display: "flex",textDecoration: "none",padding: "5px"}}>
                         &nbsp; Azerbaijan
                      </Link>
          </option>
        </select>

        {/* <div>
        <select name="code" id="lang-code" className="nav-item form-control from-control-sm ">
          <option value="en">
            <Link onClick={() => this.langChangeInfo('en')} to={this.props.location} style={{display: "flex",textDecoration: "none",padding: "5px"}}>
              <img className="flag" src={en} alt="" style={{width:"20px",height:"15px"}} /> &nbsp; English
            </Link>
          </option>
          <option value="ar">
            <Link onClick={() => this.langChangeInfo('az')} to={this.props.location} style={{display: "flex",textDecoration: "none",padding: "5px"}}>
              <img className="flag" src={az} alt="" style={{width:"20px",height:"15px"}} /> &nbsp; Azerbaijan
            </Link>
          </option>
        </select>
        </div> */}
      </div>
    );
  }
}
