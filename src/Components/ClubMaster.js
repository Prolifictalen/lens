import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import useCounter from './Counter';

const Clubmaster = () => {
  const { counters, incrementCounter, decrementCounter } = useCounter();

  // Card data for Clubmaster
  const cardsData = [
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e12896-c4-eyeglasses_img_1255_12_03_2024.jpg",
      text: "Vincent Chase Clubmaster",
      price: "$2200",
    },
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13109-c3-eyeglasses_img_8934_02_12_2024.jpg",
      text: "Vincent Chase Premium",
      price: "$3100",
    },
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e12287-c1-eyeglasses_img_1201_28_04_2024.jpg",
      text: "Vincent Chase Classic",
      price: "$2600",
    },
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e12198-c5-eyeglasses_img_7323_01_06_2024.jpg",
      text: "Vincent Chase Sleek",
      price: "$1800",
    },
  ];

  const cardsData1 = [
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13429-c2-eyeglasses_img_4563_20_11_2024.jpg",
      text: "Vincent Chase Supreme",
      price: "$3300",
    },
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e12678-c1-eyeglasses_img_6701_14_03_2024.jpg",
      text: "Vincent Chase Essentials",
      price: "$2300",
    },
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13321-c3-eyeglasses_img_7429_07_08_2024.jpg",
      text: "Vincent Chase Elegance",
      price: "$2700",
    },
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13819-c4-eyeglasses_img_8124_12_10_2024.jpg",
      text: "Vincent Chase Professional",
      price: "$4600",
    },
  ];

  const textStyle = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    fontWeight: 'bold',
  };

  return (
    <>
      {/* Banner */}
      <div>
        <img
          src="https://static1.lenskart.com/media/desktop/img/Sep21/clubmaster.jpg"
          alt="Clubmaster Banner"
          width="100%"
          height="240"
        />
      </div>

      {/* Cards Section 1 */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '30px', flexWrap: 'wrap' }}>
        {cardsData.map((card, index) => (
          <Card style={{ width: '18rem', margin: '10px', position: 'relative' }} key={index}>
            <FontAwesomeIcon icon={faHeart} style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }} />
            <Card.Img variant="top" src={card.imgSrc} style={{ marginTop: '40px' }} />
            <Card.Body style={{ textAlign: 'left', marginTop: '7px' }}>
              <Card.Text style={textStyle}>{card.text}</Card.Text>
              <Card.Text style={textStyle}>{card.price}</Card.Text>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
                <Button variant="outline-secondary" size="sm" onClick={() => decrementCounter(index)}>
                  -
                </Button>
                <span style={{ margin: '0 10px' }}>{counters[index]}</span>
                <Button variant="outline-secondary" size="sm" onClick={() => incrementCounter(index)}>
                  +
                </Button>
              </div>
              <Button style={{ width: '100%' }}>Add to Cart</Button>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* Cards Section 2 */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '30px', flexWrap: 'wrap' }}>
        {cardsData1.map((card, index) => (
          <Card style={{ width: '18rem', margin: '10px', position: 'relative' }} key={index}>
            <FontAwesomeIcon icon={faHeart} style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }} />
            <Card.Img variant="top" src={card.imgSrc} style={{ marginTop: '40px' }} />
            <Card.Body style={{ textAlign: 'left', marginTop: '7px' }}>
              <Card.Text style={textStyle}>{card.text}</Card.Text>
              <Card.Text style={textStyle}>{card.price}</Card.Text>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
                <Button variant="outline-secondary" size="sm" onClick={() => decrementCounter(index)}>
                  -
                </Button>
                <span style={{ margin: '0 10px' }}>{counters[index]}</span>
                <Button variant="outline-secondary" size="sm" onClick={() => incrementCounter(index)}>
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

export default Clubmaster;
