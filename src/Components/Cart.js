import React, { useState } from 'react';
import Navbar1 from '../Navbar1';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Lensloom Air Eyeglasses',
      price: 2000,
      quantity: 1,
      imgSrc: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-air-la-e15417-w-c1-eyeglasses_csvfile-1701688526805-img_7894.jpg',
    },
    {
      id: 2,
      name: 'Vincent Chase Glasses',
      price: 3500,
      quantity: 1,
      imgSrc: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13634-ful-ram-ale-metl-stlbr-c1-eyeglasaas_g_4923.jpg',
    },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const cartStyle = {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  const itemStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '20px auto',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    width: '80%',
    maxWidth: '500px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  };

  const imageStyle = {
    width: '80px',
    borderRadius: '8px',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '5px 10px',
    cursor: 'pointer',
    margin: '0 5px',
  };

  const removeButtonStyle = {
    backgroundColor: '#ff4d4d',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '5px 10px',
    cursor: 'pointer',
  };

  const totalStyle = {
    fontWeight: 'bold',
    fontSize: '18px',
    marginTop: '20px',
  };

  return (
    <>
      <Navbar1 />
      <div style={cartStyle}>
        <h2>My Cart</h2>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} style={itemStyle}>
              <img src={item.imgSrc} alt={item.name} style={imageStyle} />
              <div style={{ flex: '1', marginLeft: '10px', textAlign: 'left' }}>
                <h4>{item.name}</h4>
                <p>Price: ${item.price}</p>
                <div>
                  <button
                    style={buttonStyle}
                    onClick={() => handleQuantityChange(item.id, -1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    style={buttonStyle}
                    onClick={() => handleQuantityChange(item.id, 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                style={removeButtonStyle}
                onClick={() => handleRemoveItem(item.id)}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p>Your cart is empty!</p>
        )}
        {cartItems.length > 0 && (
          <div style={totalStyle}>
            Total: ${calculateTotal()}
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
