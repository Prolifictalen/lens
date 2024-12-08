import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import useCounter from './Counter'; // Import the custom hook

const ContactLenses = () => {
  const { counters, incrementCounter, decrementCounter } = useCounter(); // Use the custom hook

  const cardsData = [
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//no-resize/a/i/aquacolor-tricky-turquoise-powered-monthly---1lp_tricky_turquoise_kiara_01_09_2023.jpg",
      text: "Aquacolor Premium Powered Green",
      price: "$2000"
    },
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//no-resize/a/i/aquacolor-naughty-brown-powered-monthly---1lp_naughty_brown_kiara_01_09_2023.jpg",
      text: "Aquacolor Premium Naughty Brown",
      price: "$2400"
    },
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//no-resize/a/i/aquacolor-tricky-turquoise-powered-monthly---1lp_tricky_turquoise_kiara_01_09_2023.jpg",
      text: "Aquacolor Premium Green Powered",
      price: "$2500"
    },
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//no-resize/a/i/aquacolor-silver-gray-premium-zero-power-monthly_silver_grey_kiara_01_09_2023.jpg",
      text: "Aquacolor Premium Naughty Brown Powered",
      price: "$1500"
    }
  ];

  const cardsData1 = [
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//no-resize/a/i/aquacolor-gray-premium-zero-power-monthly_gray_kiara_01_09_2023.jpg",
      text: "Aquacolor Premium Tricky Brown Color",
      price: "$3000"
    },
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//no-resize/a/i/aquacolor-dusk-blue-premium-zero-power-monthly_dusk_blue_kiara_01_09_2023.jpg",
      text: "Aquacolor Premium Naughty Green",
      price: "$2000"
    },
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//no-resize/a/i/aquacolor-emerald-premium-zero-power-monthly_emerald_kiara_01_09_2023.jpg",
      text: "Aquacolor Premium Naughty Powered Green",
      price: "$3500"
    },
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//no-resize/a/i/aquacolor-naughty-brown-powered-monthly---1lp_naughty_brown_kiara_01_09_2023.jpg",
      text: "Aquacolor Premium Naughty Dark Brown",
      price: "$2400"
    }
  ];

  const textStyle = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    fontWeight: 'bold'
  };

  return (
    <>
      <div>
        <img src="https://static1.lenskart.com/media/desktop/img/Oct22/kiara/Refresh-Banner-Web.gif"
          width="100%"
          height="240"
          alt=""
        />
      </div>
      {/* Cards */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '30px' }}>
        {cardsData.map((card, index) => (
          <Card key={index} style={{ width: '18rem', height: 'auto', margin: '10px', position: 'relative' }}>
            <FontAwesomeIcon icon={faHeart} style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }} />
            <Card.Img variant="top" src={card.imgSrc} style={{ marginTop: '40px' }} />
            <Card.Body style={{ textAlign: "left", marginTop: "7px" }}>
              <Card.Text style={textStyle}>{card.text}</Card.Text>
              <Card.Text style={textStyle}>{card.price}</Card.Text>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
                <Button variant="outline-secondary" size="sm" onClick={() => decrementCounter(index)}>-</Button>
                <span style={{ margin: '0 10px' }}>{counters[index]}</span>
                <Button variant="outline-secondary" size="sm" onClick={() => incrementCounter(index)}>+</Button>
              </div>
              <Button style={{ width: "100%", marginLeft: "4px" }}>Add to Cart</Button>
            </Card.Body>
          </Card>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '30px' }}>
        {cardsData1.map((card, index) => (
          <Card key={index} style={{ width: '18rem', height: 'auto', margin: '10px', position: 'relative' }}>
            <FontAwesomeIcon icon={faHeart} style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }} />
            <Card.Img variant="top" src={card.imgSrc} style={{ marginTop: '40px' }} />
            <Card.Body style={{ textAlign: "left", marginTop: "7px" }}>
              <Card.Text style={textStyle}>{card.text}</Card.Text>
              <Card.Text style={textStyle}>{card.price}</Card.Text>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
                <Button variant="outline-secondary" size="sm" onClick={() => decrementCounter(index + cardsData.length)}>-</Button>
                <span style={{ margin: '0 10px' }}>{counters[index + cardsData.length]}</span>
                <Button variant="outline-secondary" size="sm" onClick={() => incrementCounter(index + cardsData.length)}>+</Button>
              </div>
              <Button style={{ width: "100%", marginLeft: "4px" }}>Add to Cart</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default ContactLenses;
