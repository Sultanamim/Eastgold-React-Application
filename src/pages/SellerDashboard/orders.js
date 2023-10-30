import React, { useState, useEffect } from "react";
import DashboardImg from "../../assets/dashboard.png";
import ProfileImg from "../../assets/profile.png";
import OrdersImg from "../../assets/my-orders.png";
import { Link } from "react-router-dom";
import "./Seller.css";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import DataTable from "react-data-table-component";
import GolgImg from "../../assets/gold.png";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import SortIcon from "@material-ui/icons/ArrowDownward";
import "../styles.css";

export default function Orders() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const [sellerComission, setSellerComission] = useState([]);
  const [sellerCount, setSellerCount] = useState([]);
  let history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));

  const apiGetSellerTransitions = async () => {
    try {
      const response = await fetch(
        `https://office.webcodecare.com/api/sellers_details?seller_id=${user.user_id_info}`
      );
      const jsondata = await response.json();
      //console.log(jsondata);
      setData(jsondata.data);
      setFilter(jsondata.data);
      setSellerComission(jsondata.comission);
      setSellerCount(jsondata.count);
    } catch (error) {
      console.error("API request error:", error);
    }
  };
  //console.log(data);
  useEffect(() => {
    apiGetSellerTransitions();
    const token = localStorage.getItem("token");
    if (!token) {
      history.push("/login");
    }
  }, []);

  //  useEffect(() => {
  //    const result = data.filter((item) => {
  //     return item.title.toLowerCase().match(search.toLowerCase());
  //    })
  //    //setFilter(result);
  //  }, [search]);

  //console.log(data.data);

  const handleWithdraw = async () => {
    try {
      const response = await fetch(
        "https://office.webcodecare.com/api/fetchAddress"
      );
      const jsondata = await response.json();
      const msg = jsondata[0].address;
      Swal.fire("Successfully!", `You have withdrawn ${msg}`, "success");
    } catch (error) {
      Swal.fire("Error!", `You have withdrawn ${error}`, "error");
    }
  };
  const columns = [
    {
      name: "Buyer Id",
      selector: (row) => row.buyer_id,
    },
    {
      name: "Partner Id",
      selector: (row) => row.partner_id,
    },

    {
      name: "Seller Id",
      selector: (row) => row.seller_id,
    },
    {
      name: "Product Name",
      selector: (row) => row.product_name,
    },
    {
      name: "Product Price",
      selector: (row) => row.product_price,
    },
    {
      name: "Sales Mode",
      selector: (row) => row.sales_mode,
    },
    {
      name: "Sales Source",
      selector: (row) => row.sales_source,
    },
  ];

  const tableData = {
    columns,
    data,
  };

  const newData =
    data.length > 0
      ? data.map((items) => {
          //console.log(items);
          const dataTable = {
            buyer_id: items.buyer_id,
            partner_id: items.partner_id,
            seller_id: items.seller_id,
            product_name: items.product_name,
            product_price: items.product_price,
            sales_mode: items.sales_mode,
            sales_source: items.sales_source,
            created_at: items.created_at,
          };

          return dataTable;
        })
      : null;
  //console.log(filter);

  const sellerData =
    data.length > 0 ? (
      <div>
        <div>
          {/*-----     Summary Section ------ */}
          {/* <div className="seller-transitions-summary-list">
            <div className="row">
              <div className="col-xl-6 col-md-12">
                <div className="info-box">
                  <h2>Wallet Details</h2>
                  <div className="row">
                    <div className="col-lg-4 col-4 left-item text-align-left">
                      <div className="align-items-flex-start">
                        <p>Hi {user.name}</p>
                        <p>You Have</p>
                        <h3>{data.length}</h3>
                        <p>Transaction </p>
                      </div>
                    </div>

                    <div className="col-lg-5 col-5 right-item text-align-left">
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
                              width: `${sellerComission}%`,
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
                            {sellerComission}%
                          </p>
                        </div>
                        <p>Total Amount</p>
                        <p>{sellerCount}</p>
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
                              width: `${
                                (sellerComission * sellerCount) / 100
                              }%`,
                              height: "2px",
                              backgroundColor: "green",
                              alignSelf: "center",
                            }}
                          ></div>
                        </div>
                        <p> {(sellerComission * sellerCount) / 100} </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-3 left-item text-align-left">
                      <img src={GolgImg} alt="logo" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-12">
                <div className="info-box">
                  <h2>TOTAL AVAILABLE GOLD BARS</h2>
                  <div className="row">
                    <div className="col-lg-4 col-4 left-item d-flex text-align-center justify-content-center">
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

                    <div className="col-lg-6 col-6 right-item d-flex justify-content-center align-items-center">
                      <h2
                        style={{
                          backgroundColor: "#3a5af9",
                          color: "#000",
                          padding: "10px 20px",
                          marginLeft: "1rem",
                          cursor: "pointer",
                        }}
                        onClick={handleWithdraw}
                      >
                        WITHDRAWL
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
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
                    <DataTableExtensions {...tableData}>
                      <DataTable
                        columns={columns}
                        data={newData}
                        noHeader
                        defaultSortField="id"
                        sortIcon={<SortIcon />}
                        defaultSortAsc={true}
                        pagination
                        highlightOnHover
                        dense
                      />
                    </DataTableExtensions>

                    {/* <DataTable
                      columns={columns}
                      data={newData}
                      pagination
                      selectableRows
                      fixedHeader
                      selectableRowsHighlight
                      highlightOnHover
                      actions={
                        (<>
                          <input
                          type="text"
                          className="w-25 h-10 form-control"
                          placeholder="Search.."
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                          style={{justifyContent: "flex-end"}}
                        />
                        <button
                          className="btn btn-primary"
                          style={{ marginTop: "-10px", padding: "10px 10px" }}
                        >
                          Export
                        </button>
                        </>)
                      }
                    
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  -------------- */}
        </div>
      </div>
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
                    {/* seller-profile-sidebar-col d-none d-xl-block */}
                    <div className="col-lg-3">
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
                    {/* seller-profile-content-col */}
                    <div className="col-lg-9 ">
                      <div className="seller-profile-content-area">
                        {/*---- Header element ---- */}
                        <div className="seller-profile-content-header">
                          <h3>Selling Transitions</h3>
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
                        {sellerData}
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
