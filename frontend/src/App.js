import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/HomePage/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Account from "./pages/AccountPage/Account";
import CompanyPortal from "./pages/CompanyPortalPage/CompanyPortal";
import Auction from "./pages/AuctionPage/Auction";
import Bidding from "./pages/BiddingPage/Bidding";
import Checkout from "./pages/CheckoutPage/Checkout";
import AdminPanel from "./pages/AdminPanelPage/AdminPanel";
import CustomerService from "./pages/CustomerServicePage/CustomerService";
import CompanyRepPortal from "./pages/CompanyRepPortalPage/CompanyRepPortal";
import Navigation from "./components/Navigation/Navigation";
import Shop from "./pages/Shop/Shop";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/companyPortal" element={<CompanyPortal />} />
        <Route path="/auction" element={<Auction />} />
        <Route path="/bidding" element={<Bidding />} />
        <Route path="/checkOut" element={<Checkout />} />
        <Route path="/adminPanel" element={<AdminPanel />} />
        <Route path="/customerService" element={<CustomerService />} />
        <Route path="/companyRepPortal" element={<CompanyRepPortal />} />
        <Route path="/products" element={<Shop />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
