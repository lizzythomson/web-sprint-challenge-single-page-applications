import React from "react";

export default function OrderPizza(props) {
  return (
    <div className="order-pizza-form">
      <h1>Build Your Pizza</h1>
      <img
        src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80"
        alt="pineapple pizza"
        className="pizza-order-img"
      ></img>
      <h2>Build Your Own Pizza</h2>
      <form className="form-container">
        <div className="form-inputs">
          <label></label>
          <label htmlFor="size">
            <p className="regular-title">Choice of Size</p>
            <p className="small-title">Required</p>
          </label>
          <select name="size" id="size">
            <option value="">-- Select --</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="Extra Large">Extra Large</option>
          </select>
          <label htmlFor="sauce">
            <p className="regular-title">Choice of Sauce</p>
            <p className="small-title">Required</p>
          </label>
          <
        </div>
      </form>
    </div>
  );
}
