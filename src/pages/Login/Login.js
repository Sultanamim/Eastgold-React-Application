import React, { useState, useEffect } from "react";
import {useHistory,} from "react-router-dom";
import "./Login.css";
import Swal from "sweetalert2";


async function loginUser(credentials) {

  return fetch('https://office.webcodecare.com/api/client_login', {
         method: 'POST',
         body: JSON.stringify(credentials),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
         body: JSON.stringify(credentials)
      }) .then(data => data.json())

 }


export default function Login(props) {
  const [credentialsInfo, setCredentialsInfo] = useState({
    user:'',
   password:'',
})
  const externalImg =
    "https://businesso.xyz/assets/front/img/user/breadcrumb.jpg";
  
  let user = credentialsInfo.user;
  let password = credentialsInfo.password;
  let history = useHistory();

  //console.log(seller.email)

  const handleChange = e => {
    setCredentialsInfo({...credentialsInfo, [e.target.name]: e.target.value })
}



useEffect(() => {
  const token = localStorage.getItem('token');
  if(!token) {
    history.push('/login');
  }
  if(token) {
    history.push('/home');
  }

}, []);

const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await loginUser({
    user,
    password
  });

  if ("api_token" in response) {
    Swal.fire("Successfully!",  response.message, "success", {
      buttons: false,
      timer: 2000,
    });

    localStorage.setItem("token", response["data"]["account_mode"]);
    localStorage.setItem("user", JSON.stringify(response["data"]));
    // window.location.href = "/portfolio";



    if(response.data.account_mode === 'Seller'){
      // history.push("/seller-dashboard")

      
      window.location.href = "/seller-profile";
     } else if (response.data.account_mode === 'Buyer'){

      window.location.href = "/buyer-transitions";
      //  history.push("/buyer-transitions")
     } else if (response.data.account_mode === 'Partner'){
      //  history.push("/client-transitions")
       window.location.href = "/client-transitions";
     }else{
        alert("Invalid email")
     }

  } else {
    Swal.fire("Error", response.message, "error");
  }



}

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
            <h1 className="page-title">Login</h1>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Login</li>
            </ul>
          </div>
        </div>
        <div className="breadcrumb-shapes">
          <div className="one"></div>
          <div className="two"></div>
        </div>
      </section>

      {/* ---------   Login Part ------------ */}
      <div className="user-area-section section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="user-form">
                <div className="title mb-3">
                  <h4>Login</h4>
                </div>
                <form
                  data-v-32ab5d56=""
                  novalidate="novalidate"
                  class="BaseForm register-form"
                  data-hs-cf-bound="true"
                  onSubmit={handleSubmit}
                >
                  {/* <input
                    type="hidden"
                    name="_token"
                    value="z7BruS3WKu5ypQR6AxCACvkIRicWxBWKdlmwsP6F"
                  />{" "} */}
                  {/* <input type="hidden" name="user_id" value="174" /> */}
                  <div className="form_group">
                    <label>User Id *</label>
                    <input
                      type="text"
                      placeholder="Enter User Id"
                      className="form_control"
                      name="user"
                      onChange={e => handleChange(e)}
                    />
                  </div>
                  <div className="form_group">
                    <label>Password *</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Enter Password"
                      onChange={e => handleChange(e)}
                    />
                  </div>
                  {/* <div className="form_group form_inline">
                    <div>
                      <label htmlFor="checkbox1"></label>
                    </div>
                    <a href="#">
                      Lost your password?
                    </a>
                  </div> */}
                  <div className="form_group"></div>
                  <div className="form_group">
                    {/* <button type="submit" className="btn" onClick={(e) => handleSubmit(e)}>
                      Login Now
                    </button> */}
                    <button
                    className="btn" 
              data-v-1ea8460d=""
              data-v-32ab5d56=""
              tabindex="1"
              type="submit"
              block=""
              color="primary"
            >
              <span class="v-btn__content"> Login Now</span>
            </button>
                  </div>
                  {/* <div className="new-user text-center">
                    <p className="text">
                      New User?{" "}
                      <a href="https://businesso.xyz/rangs/user/signup">
                        Do not have an account?
                      </a>
                    </p>
                  </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
