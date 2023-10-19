import React, { useState } from "react";
import DashboardImg from "../../assets/dashboard.png";
import ProfileImg from "../../assets/profile.png";
import OrdersImg from "../../assets/my-orders.png";
import MailImg from "../../assets/mail.png";
import {Link} from "react-router-dom";

import "./Seller.css";

export default function SellerDashboard(props) {

  return (
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
                                  <Link to="/seller-dashboard">
                                    <span className="icon">
                                      {" "}
                                      <img src={DashboardImg} alt="" />{" "}
                                    </span>
                                    <span className="text">Dashboard</span>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/seller-profile">
                                    <span className="icon">
                                      {" "}
                                      <img src={ProfileImg} alt="" />{" "}
                                    </span>
                                    <span className="text"> Profile</span>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/seller-transitions">
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
                        <h3>Seller Dashboard</h3>
                        <div className="seller-profile-content-breadcumb">
                          <ul>
                            <li>
                              <a to="/">Home</a>
                            </li>
                            <li>
                              <a to="/customer/dashboard">Dashboard</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/*  --------- */}

                      {/* ---- Other elements ---- */}
                      <div>
                        <div>
                          {/* ----- Summary List ---- */}
                          <div className="seller-profile-summary-list">
                            <div className="row">
                              <div className="col-lg-3">
                                <a
                                  className="seller-profile-summary-card-new red"
                                  to="#"
                                >
                                  <div className="seller-profile-summary-card-icon-new">
                                    <span>
                                      <i className="fas fa-cart-plus"></i>
                                    </span>
                                  </div>
                                  <div className="seller-profile-summary-card-info-new">
                                    <p>WishList Products</p>
                                    <h3>56</h3>
                                  </div>
                                </a>
                              </div>
                              <div className="col-lg-3">
                                <a
                                  className="seller-profile-summary-card-new purple"
                                  to="/customer/orders"
                                >
                                  <div className="seller-profile-summary-card-icon-new">
                                    <span>
                                      <i className="fas fa-check-square"></i>
                                    </span>
                                  </div>
                                  <div className="seller-profile-summary-card-info-new">
                                    <p>Successful Orders</p>
                                    <h3>0</h3>
                                  </div>
                                </a>
                              </div>
                              <div className="col-lg-3">
                                <a
                                  className="seller-profile-summary-card-new blue"
                                  to="/customer/cashback"
                                >
                                  <div className="seller-profile-summary-card-icon-new">
                                    <span>
                                      <i className="fas fa-dollar-sign"></i>
                                    </span>
                                  </div>
                                  <div className="seller-profile-summary-card-info-new">
                                    <p>Total Cashback Earn</p>
                                    <h3>0,00 ₼</h3>
                                  </div>
                                </a>
                              </div>
                              <div className="col-lg-3">
                                <a
                                  className="seller-profile-summary-card-new green"
                                  to="/customer/comeback"
                                >
                                  <div className="seller-profile-summary-card-icon-new">
                                    <span>
                                      <i className="fas fa-money-bill"></i>
                                    </span>
                                  </div>
                                  <div className="seller-profile-summary-card-info-new">
                                    <p>Total Comeback Earn</p>
                                    <h3>0,00 ₼</h3>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                          {/* --------- */}
                          {/* ------ Seller Dashboard ---------- */}
                          <div className="row seller-dashboard-col-equal">
                            <div className="col-lg-6">
                              <div className="seller-profile-panel">
                                <div className="seller-profile-panel-header">
                                Recent Notification
                                </div>
                                <div className="seller-profile-panel-body">
                                  <div className="table-responsive notification-list-area dashboard-notification">
                                    <table className="table">
                                      <tbody>
                                        <tr className="">
                                          <td>
                                            <p>
                                              <a>
                                                <span className="table-image">
                                                  <img src={MailImg} alt="" />
                                                </span>
                                              </a>
                                            </p>
                                          </td>
                                          <td>
                                            <p>
                                              <a>Your Order Completed</a>
                                            </p>
                                          </td>
                                          <td>
                                            <p className="notification-time">
                                              <span>25.03.2022, 15:56</span>
                                            </p>
                                          </td>
                                        </tr>
                                        <tr className="">
                                          <td>
                                            <p>
                                              <a>
                                                <span className="table-image">
                                                  <img src={MailImg} alt="" />
                                                </span>
                                              </a>
                                            </p>
                                          </td>
                                          <td>
                                            <p>
                                              <a>Your Order Status Completed</a>
                                            </p>
                                          </td>
                                          <td>
                                            <p className="notification-time">
                                              <span>25.03.2022, 15:56</span>
                                            </p>
                                          </td>
                                        </tr>
                                        <tr className="">
                                          <td>
                                            <p>
                                              <a>
                                                <span className="table-image">
                                                  <img src={MailImg} alt="" />
                                                </span>
                                              </a>
                                            </p>
                                          </td>
                                          <td>
                                            <p>
                                              <a>Your Order Status Shipped</a>
                                            </p>
                                          </td>
                                          <td>
                                            <p className="notification-time">
                                              <span>25.03.2022, 15:55</span>
                                            </p>
                                          </td>
                                        </tr>
                                        <tr className="">
                                          <td>
                                            <p>
                                              <a>
                                                <span className="table-image">
                                                  <img src={MailImg} alt="" />
                                                </span>
                                              </a>
                                            </p>
                                          </td>
                                          <td>
                                            <p>
                                              <a>Your Order Status Shipped</a>
                                            </p>
                                          </td>
                                          <td>
                                            <p className="notification-time">
                                              <span>25.03.2022, 15:55</span>
                                            </p>
                                          </td>
                                        </tr>
                                        <tr className="">
                                          <td>
                                            <p>
                                              <a>
                                                <span className="table-image">
                                                  <img src={MailImg} alt="" />
                                                </span>
                                              </a>
                                            </p>
                                          </td>
                                          <td>
                                            <p>
                                              <a>Your Order Status Shipped</a>
                                            </p>
                                          </td>
                                          <td>
                                            <p className="notification-time">
                                              <span>25.03.2022, 15:55</span>
                                            </p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-6">
                              <div className="seller-profile-panel">
                                <div className="seller-profile-panel-header">
                                  Orders Summary
                                </div>
                                <div className="seller-profile-panel-body2">
                                  <div className="table-responsive d-flex justify-content-space-between">
                                    <table>
                                      <tbody>
                                        <tr>
                                          <td>Total Orders:</td>
                                          <td>29</td>
                                        </tr>
                                        <tr>
                                          <td>Accepted Orders:</td>
                                          <td>0</td>
                                        </tr>
                                        <tr>
                                          <td>Canceled Orders:</td>
                                          <td>0</td>
                                        </tr>
                                        <tr>
                                          <td>Shipped Orders:</td>
                                          <td>0</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* ------- */}
                  
                  
                          {/* ------------ Most Common Menus --------- */}
                          {/* <div className="row">
                            <div className="col-lg-12">
                              <div className="seller-profile-panel">
                                <div className="seller-profile-panel-header">
                                  Most Common Menus
                                </div>
                                <div className="seller-profile-panel-body">
                                  <div className="dashboard-common-menus">
                                    <ul>
                                      <li>
                                        <a to="/customer/dashboard">
                                          <span className="icon">
                                            {" "}
                                            <img
                                              src={DashboardImg}
                                              alt=""
                                            />{" "}
                                          </span>
                                          <span className="text">
                                            Dashboard
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a to="/customer/profile">
                                          <span className="icon">
                                            {" "}
                                            <img src={ProfileImg} alt="" />{" "}
                                          </span>
                                          <span className="text"> Profile</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a to="/customer/orders">
                                          <span className="icon">
                                            {" "}
                                            <img src={OrdersImg} alt="" />{" "}
                                          </span>
                                          <span className="text">
                                            {" "}
                                            My Orders
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a to="/customer/wishlists">
                                          <span className="icon">
                                            {" "}
                                            <img
                                              src={WishlistImg}
                                              alt=""
                                            />{" "}
                                          </span>
                                          <span className="text">
                                            {" "}
                                            My Wishlist
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a to="/customer/following-merchant">
                                          <span className="icon">
                                            {" "}
                                            <img
                                              src={MerchantImg}
                                              alt=""
                                            />{" "}
                                          </span>
                                          <span className="text">
                                            {" "}
                                            Following Merchant
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a to="/customer/messages">
                                          <span className="icon">
                                            {" "}
                                            <img
                                              src={MessagesImg}
                                              alt=""
                                            />{" "}
                                          </span>
                                          <span className="text">
                                            {" "}
                                            My Messages
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a to="/customer/notifications">
                                          <span className="icon">
                                            {" "}
                                            <img
                                              src={NotificationImg}
                                              alt=""
                                            />{" "}
                                          </span>
                                          <span className="text">
                                            {" "}
                                            My Notifications
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> */}
                          {/* ---------- */}
                          {/* -------------Affiliate Programme --------- */}
                          {/* <div className="row">
                            <div className="col-lg-12">
                              <div className="seller-profile-panel">
                                <div className="seller-profile-panel-header">
                                  Welcome to Our Affiliate Program
                                </div>
                                <div className="seller-profile-panel-body">
                                  <div className="row justify-content-center become-an-affiliate-row">
                                    <div className="col-3 text-center">
                                      <button
                                        className="btn-submit affiliate-program-box blue"
                                        type="button"
                                      >
                                        <span className="affiliate-program-icon">
                                          <i className="fas fa-user-tie"></i>
                                        </span>
                                        <span className="affiliate-program-text">
                                          Seller Dashboard
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> */}
                          {/* ----------- */}
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
  );
}
