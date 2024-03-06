import React from "react";
import "./Products.css";
import Nav from "../../components/Headers/Nav";
import Footers from "../../components/Footers/Footers";

function Products() {
  return (
    <>
      <Nav></Nav>
      <div className="product-container">
        <h1>Product Page</h1>
      </div>
      <Footers></Footers>
    </>
  );
}

export default Products;
