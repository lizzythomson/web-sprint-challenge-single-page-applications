import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./components/Home";
import OrderPizza from "./components/OrderPizza";
// import axios from "axios";

const App = () => {
  return (
    <div className="page-container">
      <header>
        <h2>BloomTech Eats</h2>
        <nav>
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/help" className="link">
            Help
          </Link>
        </nav>
      </header>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route exact path="/pizza">
        <OrderPizza></OrderPizza>
      </Route>
    </div>
  );
};
export default App;
