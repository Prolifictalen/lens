import React, { useState } from 'react';
import Navbar1 from '../Navbar1';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-air-la-e15417-w-c1-eyeglasses_csvfile-1701688526805-img_7894.jpg",
      name: "Lensloom Air Eyeglasses",
      price: "$2000",
    },
    {
      id: 2,
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13634-ful-ram-ale-metl-stlbr-c1-eyeglasaas_g_4923.jpg",
      name: "Vincent Chase Glasses",
      price: "$3500",
    },
  ]);

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  const wishlistStyle = {
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
    backgroundColor: '#ff4d4d',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '5px 10px',
    cursor: 'pointer',
  };

  const emptyStyle = {
    textAlign: 'center',
    marginTop: '50px',
    fontSize: '18px',
    color: '#666',
  };

  const logoStyle = {
    width: '150px',
    margin: '20px auto',
  };

  return (
    <>
      <Navbar1 />
      <div style={wishlistStyle}>
        <h2>My Wishlist</h2>
        {wishlistItems.length > 0 ? (
          wishlistItems.map((item) => (
            <div key={item.id} style={itemStyle}>
              <img src={item.imgSrc} alt={item.name} style={imageStyle} />
              <div style={{ flex: '1', marginLeft: '10px', textAlign: 'left' }}>
                <h4>{item.name}</h4>
                <p>{item.price}</p>
              </div>
              <button
                style={buttonStyle}
                onClick={() => removeFromWishlist(item.id)}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p style={emptyStyle}>Your wishlist is empty!</p>
        )}
      </div>
    </>
  );
};

export default Wishlist;
