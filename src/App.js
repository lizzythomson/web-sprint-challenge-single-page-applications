import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";

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
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </div>
  );
};
export default App;
