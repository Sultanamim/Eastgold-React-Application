import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import Products from "../src/pages/Products/Products";
import Portfolios from "../src/pages/Portfolios/Portfolios";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import SellerDashboard from "./pages/SellerDashboard/SellerDashboard";
import BuyerDashboard from "./pages/BuyerDashboard/BuyerDashboard";
import ClientDashboard from "./pages/ClientDashboard/ClientDashboard";
import SellerOrders from "./pages/SellerDashboard/orders";
import SellerProfile from "./pages/SellerDashboard/Profile";
import BuyerOrders from './pages/BuyerDashboard/Order';
import ClientOrders from "./pages/ClientDashboard/Order";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [user, setUser] = useState({
    seller: {
      email: "seller123@gmail.com",
      password: "123456",
      name: "Ramil Cavadov",
      phone_number: "712389949",
      dob: "09.10.2023",
    },
    buyer: {
      email: "buyer123@gmail.com",
      password: "123456",
    },
    client: {
      email: "client123@gmail.com",
      password: "123456",
    },
  });

  const [sellerData, setSellerData] = useState([]);
  const [buyerData, setBuyerData] = useState([]);
  const [partnerData, setPartnerData] = useState([]);
  const [userBuyerData, setUserBuyerData] = useState([]);
  const [userPartnerData, setUserPartnerData] = useState([]);
  const apiGetBuyerDetails = async () => {
    try {
      const response = await fetch(
        "https://office.webcodecare.com/api/allbuyers_details"
      );
      const jsondata = await response.json();
      setBuyerData(jsondata);
    } catch (error) {
      console.error("API request error:", error);
    }
  };
  const apiGetPartnerDetails = async () => {
    try {
      const response = await fetch(
        "https://office.webcodecare.com/api/allpartners_details"
      );
      const jsondata = await response.json();
      setPartnerData(jsondata);
    } catch (error) {
      console.error("API request error:", error);
    }
  };

  useEffect(() => {
    // apiGetSellerDetails();
    apiGetBuyerDetails();
    apiGetPartnerDetails();
  }, []);
  useEffect(() => {
    if (buyerData.length > 0) {
      const userNewBuyerData = buyerData.map((items) => {
        return items.map((i) => {
          return i;
        });
      });
      setUserBuyerData(userNewBuyerData);
    }
  }, [buyerData]);

  useEffect(() => {
    if (partnerData.length > 0) {
      const userNewPartnerData = partnerData.map((items) => {
        return items.map((i) => {
          return i;
        });
      });
      setUserPartnerData(userNewPartnerData);
    }
  }, [partnerData]);

  // useEffect(() => {
  //   if (userBuyerData.length > 0) {
  //     console.log("Updated userBuyerData:", userBuyerData);
  //   }
  // }, [userBuyerData]);

  // useEffect(() => {
  //   if (userPartnerData.length > 0) {
  //     console.log("Updated userPartnerData:", userPartnerData);
  //   }
  // }, [userPartnerData]);

  return (
    <div className="App">
      {/* ---------- Navigation Bar ---------- */}
      <Navbar />

      {/* ---------- Routings ---------- */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/portfolios">
          <Portfolios />
        </Route>
        <Route exact path="/login">
          <Login user={user} />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        {/* ---- Seller ---- */}
        <Route exact path="/seller-dashboard">
          {userBuyerData.length > 0 && userPartnerData.length > 0 ? (
            <SellerDashboard
              user={user}
              userBuyerData={userBuyerData}
              userPartnerData={userPartnerData}
            />
          ) : (
            <p>Loading...</p>
          )}
        </Route>
        <Route exact path="/seller-transitions">
          <SellerOrders user={user} />
        </Route>
        <Route exact path="/seller-profile">
        {userBuyerData.length > 0 && userPartnerData.length > 0 ? (
            <SellerProfile
              user={user}
              userBuyerData={userBuyerData}
              userPartnerData={userPartnerData}
            />
          ) : (
            <p>Loading...</p>
          )}
        </Route>
        {/* ------- */}
        {/* ---- Buyer ---- */}
        <Route exact path="/buyer-dashboard">
          <BuyerDashboard user={user} userBuyerData={userBuyerData} />
        </Route>
        <Route exact path="/buyer-transitions">
          <BuyerOrders user={user} userBuyerData={userBuyerData} />
        </Route>
        {/* ---- Client ---- */}
        <Route exact path="/client-dashboard">
          <ClientDashboard user={user} userPartnerData={userPartnerData} />
        </Route>
        <Route exact path="/client-transitions">
          <ClientOrders user={user} userPartnerData={userPartnerData} />
        </Route>
      </Switch>

      {/* ---------- Footer ---------- */}
      <Footer />
    </div>
  );
}

export default App;
