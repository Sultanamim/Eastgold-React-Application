import React, { useEffect } from "react";
import "./Seller.css";
import DashboardImg from "../../assets/dashboard.png";
import ProfileImg from "../../assets/profile.png";
import OrdersImg from "../../assets/my-orders.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

async function formData(credentials) {
  const csrfToken = document.head
    .querySelector('meta[name="csrf-token"]')
    ?.getAttribute("content");

  const response = await fetch(
    "https://office.webcodecare.com/api/seller_product",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(credentials),
    }
  ).then((data) => data.json());

  if (response) {
    Swal.fire("Successfully!", response.message, "success", {
      buttons: false,
      timer: 2000,
    });

    window.location.reload();
  } else {
    Swal.fire("Error", response.message, "error");
  }
}

export default function Profile(props) {
  const [elements, setElements] = useState({
    product_name: "test",
    product_price: "150",
    buyer_id: "1",
    partner_id: "1",
    seller_id: "5",
    sales_mode: "150.50",
    sales_source: "add text",
  });

  const buyer = props.userBuyerData[0];
  const partner = props.userPartnerData[0];
  let product_name = elements.product_name;
  let product_price = elements.product_price;
  let buyer_id = elements.buyer_id;
  let partner_id = elements.partner_id;
  let seller_id = elements.seller_id;
  let sales_mode = elements.sales_mode;
  let sales_source = elements.sales_source;
  let history = useHistory();

  const buyerData = buyer.map((items) => {
    return items;
  });
  const partnerData = partner.map((items) => {
    //console.log(items);
    return items;
  });
  //console.log(partnerData);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      history.push("/login");
    }
    setElements({ ...elements, buyer_id: buyer.user });

    setElements({ ...elements, partner_id: partnerData.user });
    setElements({ ...elements, seller_id: seller_id });
  }, []);

  const handleChange = (e) => {
    setElements({ ...elements, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await formData({
        product_name,
        product_price,
        buyer_id,
        partner_id,
        seller_id,
        sales_mode,
        sales_source,
      });

      if (response.status === 200) {
        // Request was successful, handle the response data
        console.log("Request was successful:", response);
      } else {
        // Handle other status codes (e.g., 404, 500, etc.)
        console.error("Request failed with status:", response.status);
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("An error occurred:", error);
    }
  };

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
                                <span> Selling Information Options</span>
                                <span className="icon">
                                  <i className="fas fa-chevron-right"></i>
                                </span>
                              </a>
                              <div
                                id="profile-options"
                                className="seller-profile-sidebar-menu collapse show"
                              >
                                <ul>
                                  {/* <li>
                                    <Link to="/seller-dashboard">
                                      <span className="icon">
                                        {" "}
                                        <img src={DashboardImg} alt="" />{" "}
                                      </span>
                                      <span className="text">Dashboard</span>
                                    </Link>
                                  </li> */}
                                  <li>
                                    <Link to="/seller-profile">
                                      <span className="icon">
                                        {" "}
                                        <img src={ProfileImg} alt="" />{" "}
                                      </span>
                                      <span className="text">
                                        Selling Information
                                      </span>
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
                          <h3>Selling Information</h3>
                          <div className="seller-profile-content-breadcumb">
                            <ul>
                              <li>
                                <a to="/">Home</a>
                              </li>
                              <li>
                                <a to="/customer/dashboard">
                                  Selling Information
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/*  --------- */}

                        {/* ---- Other elements ---- */}
                        <div>
                          <div>
                            {/* ------ Profile Form ---- */}
                            <div className="seller-profile-form">
                              <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="seller-profile-panel">
                                  <div className="seller-profile-panel-header">
                                    Basic Info
                                  </div>
                                  <div className="seller-profile-panel-body">
                                    <div className="form-group undefined">
                                      <div className="row align-items-center">
                                        <div className="col-sm-2">
                                          <label htmlFor="product_name">
                                            Product Name
                                          </label>
                                        </div>
                                        <div className="col-sm-10">
                                          <div>
                                            <input
                                              type="text"
                                              className="form-control"
                                              placeholder="Name"
                                              name="product_name"
                                              id="product_name"
                                              onChange={(e) => handleChange(e)}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="form-group undefined">
                                      <div className="row align-items-center">
                                        <div className="col-sm-2">
                                          <label htmlFor="product_price">
                                            Product Price
                                          </label>
                                        </div>
                                        <div className="col-sm-10">
                                          <div>
                                            <input
                                              type="text"
                                              className="form-control"
                                              placeholder="Product Price"
                                              name="product_price"
                                              id="product_price"
                                              onChange={(e) => handleChange(e)}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="form-group">
                                      <div className="row align-items-center">
                                        <div className="col-sm-2">
                                          <label htmlFor="sales_mode">
                                            Sales mode
                                          </label>
                                        </div>
                                        <div className="col-sm-10">
                                          <div>
                                            <input
                                              type="text"
                                              className="form-control"
                                              placeholder="Sales mode"
                                              name="sales_mode"
                                              id="sales_mode"
                                              onChange={(e) => handleChange(e)}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="form-group">
                                      <div className="row align-items-center">
                                        <div className="col-sm-2">
                                          <label htmlFor="sales_source">
                                            {" "}
                                            Sales source
                                          </label>
                                        </div>
                                        <div className="col-sm-10">
                                          <div>
                                            <div className="input-group">
                                              <div className="react-datepicker-wrapper">
                                                <div className="react-datepicker__input-container">
                                                  <input
                                                    type="text"
                                                    name="sales_source"
                                                    className="form-control"
                                                    onChange={(e) =>
                                                      handleChange(e)
                                                    }
                                                  />
                                                </div>
                                              </div>
                                              {/* <div className="input-group-append">
                                                <div className="input-group-text">
                                                  <i className="fas fa-calendar-alt"></i>
                                                </div>
                                              </div> */}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="form-group undefined">
                                      <div className="row align-items-center">
                                        <div className="col-sm-2">
                                          <label htmlFor="buyer_id">
                                            Buyer Id
                                          </label>
                                        </div>
                                        <div className="col-sm-10">
                                          <div>
                                            <input
                                              type="text"
                                              name="buyer_id"
                                              className="form-control"
                                              onChange={(e) => handleChange(e)}
                                            />
                                            {/* <select className="form-control" onChange={(e) => handleChange(e)} name="buyer_id">
                                              {buyerData.map(i => (
                                                <option value={i.user}>{i.name_surname}</option>
                                              ))}
                                            </select> */}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <input
                                      type="hidden"
                                      name="seller_id"
                                      onChange={(e) => handleChange(e)}
                                    />
                                    <div className="form-group undefined">
                                      <div className="row align-items-center">
                                        <div className="col-sm-2">
                                          <label htmlFor="partner_id">
                                            Partner Id
                                          </label>
                                        </div>
                                        <div className="col-sm-10">
                                          <div>
                                            <input
                                              type="text"
                                              name="partner_id"
                                              className="form-control"
                                              onChange={(e) => handleChange(e)}
                                            />
                                            {/* <select className="form-control" onChange={(e) => handleChange(e)} name="partner_id">
                                              {
                                                partnerData.map(i => (
                                                  <option value={i.user}>{i.name_surname}</option>
                                                ))
                                              }
                                            </select> */}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="form-group">
                                  <div className="row align-items-center justify-content-end">
                                    <div className="col-sm-3">
                                      <button
                                        type="submit"
                                        className="seller-form-submit"
                                      >
                                        Save
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                            {/* 
                            <div className="seller-profile-form">
                              <form>
                                <div className="seller-profile-panel">
                                  <div className="seller-profile-panel-header">
                                    Change Password
                                  </div>
                                  <div className="seller-profile-panel-body">
                                    <div className="form-group undefined">
                                      <div className="row align-items-center">
                                        <div className="col-sm-2">
                                          <label htmlFor="old-password">
                                            Old Password
                                          </label>
                                        </div>
                                        <div className="col-sm-10">
                                          <input
                                            type="password"
                                            className="form-control"
                                            name="current_password"
                                            placeholder="Old Password"
                                            id="old-password"
                                            value={password}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="form-group undefined">
                                      <div className="row align-items-center">
                                        <div className="col-sm-2">
                                          <label htmlFor="new-password">
                                            {" "}
                                            New Password
                                          </label>
                                        </div>
                                        <div className="col-sm-10">
                                          <input
                                            type="password"
                                            className="form-control"
                                            name="new_password"
                                            placeholder="New Password"
                                            id="new-password"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="form-group undefined">
                                      <div className="row align-items-center">
                                        <div className="col-sm-2">
                                          <label htmlFor="confirm-new-password">
                                            Confirm New Password
                                          </label>
                                        </div>
                                        <div className="col-sm-10">
                                          <input
                                            type="password"
                                            className="form-control"
                                            name="new_password_confirmation"
                                            placeholder="Confirm New Password"
                                            id="new_password_confirmation"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="form-group">
                                  <div className="row align-items-center justify-content-end">
                                    <div className="col-sm-3">
                                      <button
                                        type="submit"
                                        className="seller-form-submit"
                                      >
                                        Save
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div> */}

                            {/* --------- */}
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
