import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import useCounter from './Counter';

const StarDust = () => {
  const { counters, incrementCounter, decrementCounter } = useCounter();

  const cardsData = [
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-s16909-c1-polarized-sunglasses_dsc5842_29_09_2024.jpg",
      text: "Vincent Chase",
      price: "$2000",
    },
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-s16930-c2-sunglasses_dsc5654_29_09_2024.jpg",
      text: "Vincent Chase",
      price: "$3500",
    },
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-s17056-c2-sunglasses_dsc5354_29_09_2024.jpg",
      text: "Vincent Chase",
      price: "$2500",
    },
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-s17055-c2-sunglasses_dsc5275_29_09_2024.jpg",
      text: "Vincent Chase",
      price: "$1500",
    },
  ];

  const cardsData1 = [
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-s16928-c1-sunglasses_dsc5676_29_09_2024.jpg",
      text: "Vincent Chase",
      price: "$3000",
    },
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-s16923-c1-sunglasses_dsc5456_29_09_2024.jpg",
      text: "Vincent Chase",
      price: "$2000",
    },
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-s17054-c2-sunglasses_dsc5345_29_09_2024.jpg",
      text: "Vincent Chase",
      price: "$2400",
    },
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-s16934-c2-sunglasses_dsc5604_29_09_2024.jpg",
      text: "Vincent Chase",
      price: "$4500",
    },
  ];

  const textStyle = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    fontWeight: 'bold',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    padding: '20px',
  };

  return (
    <>
      {/* Banner */}
      <div>
        <img
          src="https://static1.lenskart.com/media/desktop/img/May24/starDust/web_BannerStarDust.jpg"
          alt="StarDust Banner"
          width="100%"
          height="240"
        />
      </div>

      {/* Cards Section 1 */}
      <div style={gridStyle}>
        {cardsData.map((card, index) => (
          <Card key={index} style={{ position: 'relative' }}>
            <FontAwesomeIcon
              icon={faHeart}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                cursor: 'pointer',
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
                  marginBottom: '10px',
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

      {/* Cards Section 2 */}
      <div style={gridStyle}>
        {cardsData1.map((card, index) => (
          <Card key={index} style={{ position: 'relative' }}>
            <FontAwesomeIcon
              icon={faHeart}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                cursor: 'pointer',
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
                  marginBottom: '10px',
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

export default StarDust;
