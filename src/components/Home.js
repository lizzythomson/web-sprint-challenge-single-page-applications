import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <div className="main-home-div">
        <h1>Your favorite food, delivered while coding</h1>
        <button className="pizza-button" id="order-pizza">
          <Link to="/pizza/:id" className="link">
            Pizza?
          </Link>
        </button>
      </div>
      <div className="main-content-container">
        <h2>Food Delivery in Franklin</h2>
        <div className="food-options">
          <div className="food-option">
            <img
              className="food-image"
              src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
              alt="cheeseburger"
            />
            <h3>McDonald's</h3>
            <p>$ - American - Fast Food - Burgers</p>
            <p>
              <span className="boxed">20-30 minutes</span>
              <span className="boxed">$5.99 Delivery Fee</span>
            </p>
          </div>
          <div className="food-option">
            <img
              className="food-image"
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="salad"
            />
            <h3>sweetgreen</h3>
            <p>$ - Healthy - Salads</p>
            <p>
              <span className="boxed">30-45 minutes</span>
              <span className="boxed">$4.99 Delivery Fee</span>
            </p>
          </div>
          <div className="food-option">
            <img
              className="food-image"
              src="https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="coffee"
            />
            <h3>Starbucks</h3>
            <p>$ - Cafe - Coffee and Tea - Brunch</p>
            <p>
              <span className="boxed">10-20 minutes</span>
              <span className="boxed">$2.99 Delivery Fee</span>
            </p>
          </div>
          <div className="food-option">
            <img
              className="food-image"
              src="https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="pancakes"
            />
            <h3>IHop</h3>
            <p>$ - American - Breakfast</p>
            <p>
              <span className="boxed">30-45 minutes</span>
              <span className="boxed">$3.99 Delivery Fee</span>
            </p>
          </div>
          <div className="food-option">
            <img
              className="food-image"
              src="https://images.unsplash.com/photo-1626323109252-0adb3b46692b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="shish kabob"
            />
            <h3>Greek-N-Go</h3>
            <p>$ - Greek - Fast Food - Mediterranean</p>
            <p>
              <span className="boxed">20-30 minutes</span>
              <span className="boxed">$5.99 Delivery Fee</span>
            </p>
          </div>
          <div className="food-option">
            <img
              className="food-image"
              src="https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
              alt="tacos"
            />
            <h3>Jurassic Tacos</h3>
            <p>$ - Mexican - Fast Food - Tacos</p>
            <p>
              <span className="boxed">15-25 minutes</span>
              <span className="boxed">$2.99 Delivery Fee</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
