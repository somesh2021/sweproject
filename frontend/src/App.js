import { Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/HomePage/Home";
import About from "./pages/AboutPage/About";
import Contact from "./pages/Contact/Contact"
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/Contact" element={<Contact/>} />
    </Routes>
  );
}

export default App;
