import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import OrderPizza from "./components/OrderPizza";

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
    </div>
  );
};
export default App;
