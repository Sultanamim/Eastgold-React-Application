import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import Products from "../src/pages/Products/Products";
import About from "../src/pages/About/About";
import Contact from "../src/pages/Contact/Contact";
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

  const [isLogedIn, setIsLogedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLogedIn(true);
  }


  return (
    <div className="App">
      {/* ---------- Navigation Bar ---------- */}
      <Navbar />

      {/* ---------- Routings ---------- */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/portfolios">
          <Portfolios />
        </Route>
        <Route exact path="/login">
          <Login isLogedIn={isLogedIn} setIsLogedIn={setIsLogedIn} handleLoginClick={handleLoginClick}/>
        </Route>
        {/* <Route exact path="/signup">
          <SignUp />
        </Route> */}
        {/* ---- Seller ---- */}
        <Route exact path="/seller-dashboard">
          {userBuyerData.length > 0 && userPartnerData.length > 0 ? (
            <SellerDashboard
             
              userBuyerData={userBuyerData}
              userPartnerData={userPartnerData}
            />
          ) : (
            <p>Loading...</p>
          )}
        </Route>
        <Route exact path="/seller-transitions">
          <SellerOrders isLogedIn={isLogedIn} setIsLogedIn={setIsLogedIn}/>
        </Route>
        <Route exact path="/seller-profile">
        {userBuyerData.length > 0 && userPartnerData.length > 0 ? (
            <SellerProfile
            
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
          <BuyerDashboard userBuyerData={userBuyerData} />
        </Route>
        <Route exact path="/buyer-transitions">
          <BuyerOrders isLogedIn={isLogedIn} setIsLogedIn={setIsLogedIn} userBuyerData={userBuyerData} />
        </Route>
        {/* ---- Client ---- */}
        <Route exact path="/client-dashboard">
          <ClientDashboard userPartnerData={userPartnerData} />
        </Route>
        <Route exact path="/client-transitions">
          <ClientOrders isLogedIn={isLogedIn} setIsLogedIn={setIsLogedIn} userPartnerData={userPartnerData} />
        </Route>
      </Switch>

      {/* ---------- Footer ---------- */}
      <Footer />
    </div>
  );
}

export default App;
