import React, { useState, useEffect } from "react";
import DashboardImg from "../../assets/dashboard.png";
import ProfileImg from "../../assets/profile.png";
import OrdersImg from "../../assets/my-orders.png";
import { Link } from "react-router-dom";
import "../SellerDashboard/Seller.css";

export default function Orders() {
  const [data, setData] = useState([]);

  const apiGetSellerTransitions = async () => {
    try {
      const response = await fetch(
        "https://office.webcodecare.com/api/sellers_details?seller_id=252"
      );
      const jsondata = await response.json();
      console.log(jsondata);
    } catch (error) {
      console.error("API request error:", error);
    }
  };

  useEffect(() => {
    apiGetSellerTransitions();
  }, []);

  return (
    <>
      <div id="layout">
        <div className="main">
          <div>
            <div className="header-fixed-content-layout">
              <section className="seller-profile-area common-padding white-shaded-bg">
                <div className="container">
                  <div className="row">
                    {/* ------  Sidebar ------- */}
                    <div className="col-lg-3 seller-profile-sidebar-col d-none d-xl-block">
                      <div className="bordered-shadow-box">
                        <div className="bordered-shadow-box-overflow-hidden">
                          <div className="seller-profile-sidebar">
                            {/* ---main sidebar */}
                            <div className="seller-profile-sidebar-collapsed-menu-area first">
                              <a
                                className="seller-profile-sidebar-collapsed-menu-header"
                                data-toggle="collapse"
                                to="#profile-options"
                                role="button"
                                aria-expanded="true"
                                aria-controls="m-profile-options"
                              >
                                <span> Profile Options</span>
                                <span className="icon">
                                  <i className="fas fa-chevron-right"></i>
                                </span>
                              </a>
                              <div
                                id="profile-options"
                                className="seller-profile-sidebar-menu collapse show"
                              >
                                <ul>
                                  <li>
                                    <Link to="/buyer-dashboard">
                                      <span className="icon">
                                        {" "}
                                        <img src={DashboardImg} alt="" />{" "}
                                      </span>
                                      <span className="text">Dashboard</span>
                                    </Link>
                                  </li>
                                
                                  <li>
                                    <Link to="/buyer-transitions">
                                      <span className="icon">
                                        {" "}
                                        <img src={OrdersImg} alt="" />{" "}
                                      </span>
                                      <span className="text">Transitions</span>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            {/*----------- */}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ------------ */}

                    {/*---------  Main Contents ------- */}
                    <div className="col-lg-9 seller-profile-content-col">
                      <div className="seller-profile-content-area">
                        {/*---- Header element ---- */}
                        <div className="seller-profile-content-header">
                          <h3>Buyer Transitions</h3>
                          <div className="seller-profile-content-breadcumb">
                            <ul>
                              <li>
                                <a to="/">Home</a>
                              </li>
                              <li>
                                <a to="/">Transitions</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/*  --------- */}

                        {/* ---- Other elements ---- */}
                        <div>
                          <div>
                            {/*-----     Summary Section ------ */}
                            <div className="seller-transitions-summary-list">
                              <div className="row">
                                <div className="col-lg-6"></div>
                                <div className="col-lg-6"></div>
                              </div>
                            </div>
                            {/* ------- */}
                            {/* -------  Transaction List ------ */}
                            <div className="row seller-dashboard-col-equal">
                              <div className="col-lg-12">
                                <div className="seller-profile-panel">
                                  <div className="seller-profile-panel-header transaction">
                                    Transaction History
                                  </div>
                                  <div className="seller-profile-panel-body">
                                  <div className="table-responsive notification-list-area dashboard-notification">
                                  <table className="table transaction d-flex">
                                  <tbody>
                                  <th className="table-head">
                                    <td>
                                      <p>Id</p>
                                    </td>
                                    <td>
                                      <p>Name</p>
                                    </td>
                                    <td>
                                      <p>Reg. Date</p>
                                    </td>
                                    <td>
                                      <p>Agreement NO:</p>
                                    </td>
                                    <td>
                                      <p>Status</p>
                                    </td>
                                    <td>
                                      <p>Address</p>
                                    </td>
                                    <td>
                                      <p>Created at</p>
                                    </td>
                                    <td>
                                      <p>Updated at</p>
                                    </td>
                                  </th>
                                  </tbody>
                                  </table>
                                  </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/*  -------------- */}
                          </div>
                        </div>
                        {/* ----- */}
                      </div>
                    </div>
                    {/* -------------------------- */}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
