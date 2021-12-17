import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import Home from "./components/Home";
import OrderPizza from "./components/OrderPizza";
import formSchema from "./_tests_/formSchema";
import * as yup from "yup";
import RecentOrder from "./components/RecentOrder";
import axios from "axios";

const initialFormValues = {
  name: "",
  size: "",
  pepperoni: false,
  sausage: false,
  pineapple: false,
  tomatoes: false,
  olives: false,
  special: "",
};

const initialFormErrors = {
  name: "",
};

const initialOrders = [];
const initialDisabled = true;

const App = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getOrders = () => {
    axios
      .get("https://fakeapi.com")
      .then((resp) => {
        setOrders(resp.data);
      })
      .catch((err) => console.error(err));
  };

  const createOrder = (newOrder) => {
    axios
      .post("https://reqres.in/api/orders", newOrder)
      .then((resp) => {
        setOrders([resp.data, ...orders]);
      })
      .catch((error) => console.error(error))
      .finally(() => setFormValues(initialFormValues));
  };

  const validate = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((error) =>
        setFormErrors({ ...formErrors, [name]: error.errors[0] })
      );
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name,
      size: formValues.size,
      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      pineapple: formValues.pineapple,
      tomatoes: formValues.tomatoes,
      olives: formValues.olives,
      special: formValues.special,
    };
    createOrder(newOrder);
  };

  useEffect(() => {
    getOrders();
  }, []);

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

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
        <OrderPizza
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
        ></OrderPizza>
      </Route>
      <div className="recent-orders-container">
        <h2>Recent Orders</h2>
        {orders.map((order) => {
          return <RecentOrder key={order.id} details={order} />;
        })}
      </div>
    </div>
  );
};
export default App;
