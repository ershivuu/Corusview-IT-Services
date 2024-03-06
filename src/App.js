import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footers from "./components/Footers/Footers";
import Carrer from "./pages/Carrer/Carrer";
import Contact from "./pages/Contact/Contact";
import Nav from "./components/Headers/Nav";
import Techno from "./pages/Softwaredev/Techno";
import Test from "./pages/Test/Test";
import Products from "./pages/Products/Products";

function App() {
  return (
    <Main>
      {/* <Nav></Nav> */}
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="carrer" element={<Carrer />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="services" element={<Techno />}></Route>
        <Route path="test" element={<Test />}></Route>
        <Route path="our-products" element={<Products />}></Route>
        <Route path="test" element={<Test />}></Route>
        
      </Routes>
      {/* <Footers></Footers> */}
    </Main>
  );
}

export default App;
