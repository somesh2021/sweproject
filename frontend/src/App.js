import { Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/HomePage/Home";
import About from "./pages/AboutPage/About";
import Contact from "./pages/Contact/Contact"
import Orders from "./pages/Orders/orders"
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Orders" element={<Orders/>} />

    </Routes>
  );
}

export default App;
