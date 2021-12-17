import React, { useState } from "react";
import formSchema from "./formSchema";
import RecentOrder from "./RecentOrder";
import * as yup from "yup";
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

export default function OrderPizza() {
  const [orders, setOrders] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState({});

  const createOrder = (newOrder) => {
    axios
      .post("https://reqres.in/api/orders", newOrder)
      .then((res) => {
        setOrders([...orders, res.data]);
      })
      .catch((error) => console.error(error))
      .finally(() => setFormValues(initialFormValues));
  };

  const validate = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((error) => {
        setFormErrors({ ...formErrors, [name]: error.message });
      });
  };

  const onChange = (event) => {
    const { name, value, checked, type } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;
    inputChange(name, valueToUse);
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();

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

  return (
    <div className="order-pizza-form">
      <h1>Create a Pizza</h1>
      <img
        src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80"
        alt="pineapple pizza"
        className="pizza-order-img"
      ></img>
      <h2>Build Your Own Pizza</h2>
      <form className="form-container" id="pizza-form" onSubmit={onSubmit}>
        <div className="form-inputs">
          <label>
            <h3>Name</h3>
            <input
              id="name-input"
              name="name"
              type="text"
              placeholder="type your name"
              onChange={onChange}
              values={formValues.name}
            />
          </label>
          <div className="error">
            <div>{formErrors.name}</div>
          </div>
          <label name="size-dropdown">
            <h3>Select a Size</h3>
            <select
              id="size-dropdown"
              name="size"
              onChange={onChange}
              values={formValues.size}
            >
              <option value="">-- Select --</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="Extra Large">Extra Large</option>
            </select>
          </label>
          <h3>Toppings</h3>
          <label>
            Pepperoni
            <input
              type="checkbox"
              name="pepperoni"
              checked={formValues.pepperoni}
              onChange={onChange}
            />
          </label>

          <label>
            Sausage
            <input
              type="checkbox"
              name="sausage"
              checked={formValues.sausage}
              onChange={onChange}
            />
          </label>

          <label>
            Pineapple
            <input
              type="checkbox"
              name="pineapple"
              checked={formValues.pineapple}
              onChange={onChange}
            />
          </label>
          <label>
            Tomatoes
            <input
              type="checkbox"
              name="tomatoes"
              checked={formValues.tomatoes}
              onChange={onChange}
            />
          </label>
          <label>
            Olives
            <input
              type="checkbox"
              name="olives"
              checked={formValues.olives}
              onChange={onChange}
            />
          </label>
          <label>
            <h3>Special Instructions</h3>
            <input
              value={formValues.special}
              onChange={onChange}
              name="special"
              className="special"
              id="special-text"
              type="text"
            />
          </label>
          <button id="order-button">Add to Order</button>
        </div>
      </form>
      <div className="recent-orders-container">
        <h2>Recent Orders</h2>
        {orders.map((order) => {
          return order ? (
            <RecentOrder key={order.name} details={order} />
          ) : null;
        })}
      </div>
    </div>
  );
}
