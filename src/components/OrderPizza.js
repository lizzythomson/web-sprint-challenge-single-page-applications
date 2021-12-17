import React from "react";

export default function OrderPizza(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (event) => {
    const { name, value, checked, type } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
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
              name="name-input"
              type="text"
              placeholder="type your name"
              onChange={onChange}
              values={values.name}
            />
          </label>
          <label name="size-dropdown">
            <h3>Select a Size</h3>
            <select
              id="size-dropdown"
              name="size"
              onChange={onChange}
              values={values.size}
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
              checked={values.pepperoni}
              onChange={onChange}
            />
          </label>

          <label>
            Sausage
            <input
              type="checkbox"
              name="sausage"
              checked={values.sausage}
              onChange={onChange}
            />
          </label>

          <label>
            Pineapple
            <input
              type="checkbox"
              name="pineapple"
              checked={values.pineapple}
              onChange={onChange}
            />
          </label>
          <label>
            Tomatoes
            <input
              type="checkbox"
              name="tomatoes"
              checked={values.tomatoes}
              onChange={onChange}
            />
          </label>
          <label>
            Olives
            <input
              type="checkbox"
              name="olives"
              checked={values.olives}
              onChange={onChange}
            />
          </label>
          <label>
            <h3>Special Instructions</h3>
            <input
              value={values.special}
              onChange={onChange}
              name="special"
              className="special"
              id="special-text"
              type="text"
            />
          </label>
          <div className="error">
            <div>{errors.name}</div>
            <div>{errors.size}</div>
          </div>
          <button id="order-button" disabled={disabled}>
            Add to Order
          </button>
        </div>
      </form>
    </div>
  );
}
