import React from "react";
import "./Contact.css";

export default function ContactSection() {
  return (
    <>
      <section className="contact-area light-bg pb-130 pt-0">
        <div className="container">
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
                        Send Message
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
