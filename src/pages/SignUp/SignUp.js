import React from "react";
import { useState } from "react";

export default function SignUp() {
  const[userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const externalImg =
    "https://eastgold.az/assets/front/img/user/breadcrumb.jpg";
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
            <h1 className="page-title">Sign up</h1>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Sign up</li>
            </ul>
          </div>
        </div>
        <div className="breadcrumb-shapes">
          <div className="one"></div>
          <div className="two"></div>
        </div>
      </section>
      {/* ------- Sign Up -------- */}
      <div className="user-area-section section-gap">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="user-form">
                <div class="title mb-3">
                  <h4>Sign up</h4>
                </div>
                <form action="" method="POST">
                  <input
                    type="hidden"
                    name="_token"
                    value="xlUtwp39ff85RygKd8oN8dxTkguuPvHRFjrhm6Nc"
                  />{" "}
                  <div class="form_group">
                    <label>Username **</label>
                    <input
                      type="text"
                      placeholder="Enter Username"
                      class="form_control"
                      name="username"
                      value={userName}
                      onChange={() => setUserName()}
                    />
                  </div>
                  <div class="form_group">
                    <label>Email Address **</label>
                    <input
                      type="email"
                      placeholder="Enter Email Address"
                      class="form_control"
                      name="email"
                      value={email}
                      onChange={() => setEmail()}
                    />
                  </div>
                  <div class="form_group">
                    <label>Password **</label>
                    <input
                      type="password"
                      placeholder="Enter Password"
                      class="form_control"
                      name="password"
                      value={password}
                      onChange={() => setPassword()}
                    />
                  </div>
                  <div class="form_group">
                    <label>Confirm Password **</label>
                    <input
                      type="password"
                      placeholder="Enter Password Again"
                      class="form_control"
                      name="password_confirmation"
                      value={confirmPass}
                      onChange={() => setConfirmPass()}
                    />
                  </div>
                  <div class="form_group"></div>
                  <div class="form_group">
                    <button type="submit" class="btn btn-form">
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
