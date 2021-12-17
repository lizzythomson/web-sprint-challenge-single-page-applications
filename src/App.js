import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import OrderPizza from "./components/OrderPizza";
import axios from "axios";

const initialFormValues = {
  name: "",
  size: "",
  pepperoni: false,
  sausage: false,
  pineapple: false,
  tomatoes: false,
  olives: false,
};
const initialFormErrors = {
  name: "",
};

const App = () => {
  const [orders, setOrders] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const getOrders = () => {
    axios
      .get("http://fakeapi.com")
      .then((resp) => {
        setOrders(resp.data);
      })
      .catch((err) => console.error(err)) }, []);

  // const createNewOrder = (newOrder) => {
  //   axios
  //     .post("http://fakeapi.com/api/orders", newOrder)
  //     .then((resp) => {
  //       setOrders([resp.data, ...orders]);
  //     })
  //     .catch((err) => console.error(err))
  //     .finally(() => setFormValues(initialFormValues));
  // };

  useEffect(() => {
    getOrders();
  }, []);

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
