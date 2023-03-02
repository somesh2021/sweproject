import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/HomePage/Home";
import LoginSignUp from "./pages/LoginSignUpPage/LoginSignUp";
import Account from "./pages/AccountPage/Account";
import CompanyPortal from "./pages/CompanyPortalPage/CompanyPortal";
import Auction from "./pages/AuctionPage/Auction"; 
import Bidding from "./pages/BiddingPage/Bidding";
import Checkout from "./pages/CheckoutPage/Checkout";
import AdminPanel from "./pages/AdminPanelPage/AdminPanel";
import CustomerService from "./pages/CustomerServicePage/CustomerService";
import CompanyRepPortal from "./pages/CompanyRepPortalPage/CompanyRepPortal";
import Product from "./pages/ProductPage/Product";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} />      
      <Route path="/logInSignUp" element={<LoginSignUp/>} />
      <Route path="/account" element={<Account/>} />
      <Route path="/companyPortal" element={<CompanyPortal/>} />
      <Route path="/auction" element={<Auction/>} />
      <Route path="/bidding" element={<Bidding/>} />
      <Route path="/checkOut" element={<Checkout/>} />
      <Route path="/adminPanel" element={<AdminPanel/>} />
      <Route path="/customerService" element={<CustomerService/>} />
      <Route path="/companyRepPortal" element={<CompanyRepPortal/>} />
      <Route path="/product" element={<Product/>} />



    </Routes>
  );
}

export default App;
