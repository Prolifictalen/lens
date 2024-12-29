import React, { useState } from 'react';
import Navbar1 from '../Navbar1';
const TrackOrder = () => {
  const [orderId, setOrderId] = useState('');
  const [orderStatus, setOrderStatus] = useState(null);

  const handleTrackOrder = () => {
    // Simulating a backend API response for tracking
    const mockOrderData = {
      "12345": "Your order has been shipped and is on the way!",
      "67890": "Your order has been delivered.",
      "11223": "Your order is being prepared.",
    };

    const status = mockOrderData[orderId];
    setOrderStatus(status || "Order ID not found. Please check and try again.");
  };

  const containerStyle = {
    textAlign: 'center',
    padding: '50px',
    fontFamily: 'Arial, sans-serif',
  };

  const inputStyle = {
    width: '300px',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  const statusStyle = {
    marginTop: '20px',
    fontSize: '18px',
    color: orderStatus?.includes("not found") ? 'red' : 'green',
  };

  return (
    <>
      <Navbar1 />
      <div style={containerStyle}>
      <h2>Track Your Order</h2>
      <p>Enter your Order ID to track the status of your order:</p>
      <input
        type="text"
        placeholder="Enter Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
        style={inputStyle}
      />
      <br />
      <button onClick={handleTrackOrder} style={buttonStyle}>
        Track Order
      </button>
      {orderStatus && <p style={statusStyle}>{orderStatus}</p>}
    </div>
    </>
  );
};
export default TrackOrder;

