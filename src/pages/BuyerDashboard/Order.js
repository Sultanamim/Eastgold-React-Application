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
        "https://office.webcodecare.com/api/buyer_product_details?buyer_id=1"
      );
      const jsondata = await response.json();
      jsondata.map((items) => setData(items));
    } catch (error) {
      console.error("API request error:", error);
    }
  };

  useEffect(() => {
    apiGetSellerTransitions();
  }, []);

  console.log(data);

  const buyerData =
    data.length > 0 ? (
      data.map((items) =>{ 
        console.log(items);
      return  (

        <div>
          <div>
            {/*-----     Summary Section ------ */}
            <div className="seller-transitions-summary-list">
              <div className="row">
                <div className="col-lg-6">
                  <div className="info-box">
                    <h2>Wallet Details</h2>
                    <div className="row">
                      <div className="col-lg-4 left-item text-align-left">
                        <div className="align-items-flex-start">
                          <p>Hi name</p>
                          <p>You Have</p>
                          <h3>3,0001,142</h3>
                          <p>DEM COINS</p>
                        </div>
                      </div>

                      <div className="col-lg-6 right-item text-align-left">
                        <div className="align-items-flex-start">
                          <p>Purchased Coins</p>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              marginLeft: "15px",
                            }}
                          >
                            <div
                              style={{
                                display: "inline-block",
                                content: "",
                                width: "70%",
                                height: "2px",
                                backgroundColor: "blue",
                                alignSelf: "center",
                              }}
                            ></div>
                            <p
                              style={{
                                float: "left",
                                paddingLeft: "0",
                                marginLeft: "5px",
                                lineHeight: "20px",
                                textAlign: "left",
                              }}
                            >
                              70%
                            </p>
                          </div>

                          <p>2,145,564</p>
                          <p>Bonus Earnings</p>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              marginLeft: "15px",
                            }}
                          >
                            <div
                              style={{
                                display: "inline-block",
                                content: "",
                                // width: `${items.seller_comission_form_cash}`,
                                height: "2px",
                                backgroundColor: "green",
                                alignSelf: "center",
                              }}
                            ></div>
                            <p
                              style={{
                                float: "left",
                                paddingLeft: "0",
                                marginLeft: "5px",
                                lineHeight: "20px",
                                textAlign: "left",
                              }}
                            >
                              {/* {items.seller_comission_form_cash}% */}
                            </p>
                          </div>
                          <p>2,145,564</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="info-box" style={{ width: "380px" }}>
                    <h2>TOTAL AVAILABLE GOLD BARS</h2>
                    <div className="row">
                      <div className="col-lg-4 left-item d-flex text-align-center justify-content-center">
                        <h1
                          style={{
                            fontSize: "120px",
                            marginTop: "1rem",
                            fontFamily: "sans-serif",
                            color: "#000",
                          }}
                        >
                          1
                        </h1>
                      </div>

                      <div className="col-lg-6 right-item d-flex justify-content-center align-items-center">
                        <h2
                          style={{
                            backgroundColor: "#3a5af9",
                            color: "#000",
                            padding: "10px 20px",
                            marginLeft: "1rem",
                          }}
                        >
                          WITHDRAWL
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
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
                    <div className="table-responsive">
                      <table className="table">
                        <tbody className="transaction">
                          <tr className="table-head">
                            <td>
                              <p>Buyer Id</p>
                            </td>
                            <td>
                              <p>Partner Id</p>
                            </td>
                             <td>
                              <p>Product Name</p>
                            </td>
                            <td>
                              <p>Product Price</p>
                            </td>
                            <td>
                              <p>Sales Mode</p>
                            </td>
                            <td>
                              <p>Sales Source</p>
                            </td>
                            <td>
                              <p>Created at</p>
                            </td>
                            <td>
                              <p>Updated at</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>{items.buyer_id}</p>
                            </td>
                            <td>
                              <p>{items.partner_id}</p>
                            </td>
                            <td>
                              <p>{items.product_name}</p>
                            </td>
                            <td>
                              <p>{items.product_price}</p>
                            </td>
                            <td>
                              <p>{items.sales_mode}</p>
                            </td>
                            <td>
                              <p>{items.sales_source}</p>
                            </td>
                            <td>
                              <p>{items.created_at}</p>
                            </td>
                            <td>
                              <p>{items.updated_at}</p>
                            </td>
                          </tr>
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
      )
    })
    ) : (
      // console.log(items);

      <p>Loading....</p>
    );

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
                        {buyerData}
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
