import React from "react";

export default function OrderPizza(props) {
  const { values, submit, change, disabled, errors } = props;

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <div className="order-pizza-form">
      <h1>Build Your Pizza</h1>
      <img
        src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80"
        alt="pineapple pizza"
        className="pizza-order-img"
      ></img>
      <h2>Build Your Own Pizza</h2>
      <form className="form-container" id="pizza-form" onSubmit={onSubmit}>
        <div className="form-inputs">
          <label>
            Name
            <input
              id="name-input"
              name="name-input"
              type="text"
              placeholder="type your name"
            />
          </label>
          <label
            onChange={onChange}
            values={values.size}
            id="size-dropdown"
            name="size-dropdown"
          >
            <p className="regular-title">Choice of Size</p>
            <p className="small-title">Required</p>
            <select name="size">
              <option value="">-- Select --</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="Extra Large">Extra Large</option>
            </select>
          </label>
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
            Special Instructions
            <input
              value={values.special}
              onChange={onChange}
              name="special"
              id="special-text"
              type="text"
            />
          </label>
          <button disabled={disabled}>Add to Order</button>
        </div>
      </form>
    </div>
  );
}
