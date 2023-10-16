import React, { useEffect } from "react";
import "./Seller.css";
import DashboardImg from "../../assets/dashboard.png";
import ProfileImg from "../../assets/profile.png";
import OrdersImg from "../../assets/my-orders.png";
import { Link } from "react-router-dom";
import { useState } from "react";


async function formData(credentials) {
  return fetch('https://office.webcodecare.com/api/seller_product', {
    method: 'POST',
    dataType: "json",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]')?.getAttribute('content'),
    },
    
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }


export default function Profile(props) {


  const [elements, setElements] = useState({
    product_name: "test",
    product_price: "150",
    buyer_id: "1",
    agent_id: "1",
    seller_id: "5",
    sales_mode: "150.50",
    sales_source: "add text"    
  })
  
  const buyer = props.userBuyerData[0];
  const agent = props.userPartnerData[0];
  let product_name = elements.product_name;
  let product_price = elements.product_price;
  let buyer_id = elements.buyer_id;
  let agent_id = elements.agent_id;
  let seller_id = elements.seller_id;
  let sales_mode = elements.sales_mode;
  let sales_source = elements.sales_source;

  const buyerData = buyer.map((items) => {
     return items;
   
  });
  const agentData = agent.map((items) => {
    //console.log(items);
    return items;

 });
 //console.log(agentData);
  useEffect(() => {

      setElements({...elements, buyer_id: buyer.user});

      setElements({...elements, agent_id: agentData.user});
      setElements({...elements, seller_id: seller_id});

  }, [])


  const handleChange = e => {
    setElements({...elements, [e.target.name]: e.target.value })
}

const handleSubmit = async (e) => {
  e.preventDefault();
   const response = await formData({
     product_name,
     product_price,
     buyer_id,
     agent_id,
     seller_id,
     sales_mode,
     sales_source,
   });

}

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
                          <h3>Seller Profile</h3>
                          <div className="seller-profile-content-breadcumb">
                            <ul>
                              <li>
                                <a to="/">Home</a>
                              </li>
                              <li>
                                <a to="/customer/dashboard">Profile</a>
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
                              <form>
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
                                              value={elements.product_name}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="form-group undefined">
                                      <div className="row align-items-center">
                                        <div className="col-sm-2">
                                          <label htmlFor="product_price">Product Price</label>
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
                                              value={elements.product_price}
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
                                              value={elements.sales_mode}
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
                                                    onChange={(e) => handleChange(e)}
                                                    value={elements.sales_source}
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
                                                    value={elements.buyer_id}
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
                                    <input type="hidden" name="seller_id" onChange={(e) => handleChange(e)} value={elements.seller_id} />
                                    <div className="form-group undefined">
                                      <div className="row align-items-center">
                                        <div className="col-sm-2">
                                          <label htmlFor="agent_id">
                                            Agent Id
                                          </label>
                                        </div>
                                        <div className="col-sm-10">
                                          <div>
                                          <input
                                                    type="text"
                                                    name="agent_id"
                                                    className="form-control"
                                                    onChange={(e) => handleChange(e)}
                                                    value={elements.agent_id}
                                                  />
                                            {/* <select className="form-control" onChange={(e) => handleChange(e)} name="agent_id">
                                              {
                                                agentData.map(i => (
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
