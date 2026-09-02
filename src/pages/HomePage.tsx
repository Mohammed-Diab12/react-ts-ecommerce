import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>HomePage</h1>
      <ul>
        <li>
          <Link to={"/cart"}>Cart Page</Link>
        </li>
        <li>
      <Link to="/product/1phXjx94qtgXg9UkNHtc">Product Page</Link>    
    </li>
      </ul>
    </>
  );
}

export default HomePage;
