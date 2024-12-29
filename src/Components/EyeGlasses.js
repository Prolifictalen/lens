import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import useCounter from './Counter';

const EyeGlasses = () => {
  const { counters, incrementCounter, decrementCounter } = useCounter();
  const cardsData = [
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-air-la-e15417-w-c1-eyeglasses_csvfile-1701688526805-img_7894.jpg",
      text: "Lensloom Hustlr",
      price: "$2000"
    },
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13634-ful-ram-ale-metl-stlbr-c1-eyeglasaas_g_4923.jpg",
      text: "John Jacobs",
      price: "$3500"
    },
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc--e17039-c1-eyeglasses__dsc1782_13_05_2024.jpg",
      text: "OWNDAYS",
      price: "$2500"
    },
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/peyush-bansal-shark-tank-blue-sky-full-rim-hustlr-eyeglasses_g_603130_dec22.jpg",
      text: "Lensloom Air",
      price: "$1500"
    }
  ];

  const textStyle = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    fontWeight: 'bold'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    padding: '20px'
  };

  return (
    <>
      {/* Banner */}
      <div>
        <img
          src="https://static1.lenskart.com/media/desktop/img/harmony/28-jun-24/Web%20Banner%201920x520.jpg"
          width="100%"
          height="240"
          alt="Eyewear Banner"
        />
      </div>

      {/* Cards Grid */}
      <div style={gridStyle}>
        {cardsData.map((card, index) => (
          <Card key={index} style={{ width: '100%', position: 'relative' }}>
            <FontAwesomeIcon
              icon={faHeart}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                cursor: 'pointer'
              }}
            />
            <Card.Img variant="top" src={card.imgSrc} style={{ marginTop: '20px' }} />
            <Card.Body style={{ textAlign: 'left', marginTop: '7px' }}>
              <Card.Text style={textStyle}>{card.text}</Card.Text>
              <Card.Text style={textStyle}>{card.price}</Card.Text>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '10px'
                }}
              >
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => decrementCounter(index)}
                >
                  -
                </Button>
                <span style={{ margin: '0 10px' }}>{counters[index]}</span>
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => incrementCounter(index)}
                >
                  +
                </Button>
              </div>
              <Button style={{ width: '100%' }}>Add to Cart</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default EyeGlasses;
