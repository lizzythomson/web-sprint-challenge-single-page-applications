import React from "react";

function RecentOrder({ details }) {
  if (!details) {
    return <h3>Working fetching your order&apos;s details...</h3>;
  }

  return (
    <div className="order-container">
      <h2>{details.name}</h2>
      <p>Pizza Size: {details.size}</p>
      <p>Special Instructions: {details.special}</p>
    </div>
  );
}

export default RecentOrder;
