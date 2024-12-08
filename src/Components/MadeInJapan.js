import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import useCounter from './Counter';
const MadeInJapan = () => {
  const { counters, incrementCounter, decrementCounter } = useCounter();
  const cardsData = [
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//o/i/black-full-rim-rectangle-owndays-titanium-od-e000011-xw-c1-eyeglasses_m_dsc5979_14_06_2024.jpg",
      text: "Lenskart Hustlr",
      price: "$2000"
    },
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//o/i/gunmetal-black-rimless-square-owndays-eukm106c-3s-c4-eyeglasses__dsc2809_10_05_2024.jpg",
      text: "John Jacobs",
      price: "$3500"
    },
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//o/i/gunmetal-black-full-rim-square-owndays-eujd106c-3s-c1-eyeglasses__dsc2307_10_05_2024.jpg",
      text: "OWNDAYS",
      price: "$2500"
    },
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//o/i/blue-gunmetal-grey-full-rim-square-owndays-eusun120a-3s-c3-sunglasses__dsc3453_11may24.jpg",
      text: "Lenskart Air",
      price: "$1500"
    }
  ];

  const cardsData1 = [
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//o/i/green-tortoise-full-rim-round-owndays-snap-eusun205n-1s-c2-clip-on-eyeglasses__dsc3659_11may24.jpg",
      text: "Lenskart Hustlr",
      price: "$3000"
    },
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//o/i/black-gold-black-full-rim-square-owndays-euju201n-3s-c1-eyeglasses__dsc2458_10_05_2024.jpg",
      text: "Lenskart Air",
      price: "$2000"
    },
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//o/i/grey-gradient-black-full-rim-aviator-owndays-eusun240n-2a-c1-sunglasses__dsc2869_10_05_2024.jpg",
      text: "Vincent Chase",
      price: "$2400"
    },
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//o/i/black-rimless-square-owndays-eukm108c-3s-c3-eyeglasses__dsc2756_10_05_2024.jpg",
      text: "Lenskart STUDIO",
      price: "$4500"
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
      <img src="https://static1.lenskart.com/media/desktop/img/June24/combo_vc/Desktop.gif"
      width="100%"
      height="240"
      alt=""
      />
    </div>
 
 
    {/* Cards */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '30px' }}>
        {cardsData.map((card, index) => (
            <Card style={{ width: '18rem', height: 'auto', margin: '10px', position: 'relative' }}>
              <FontAwesomeIcon icon={faHeart} style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }} />
              <Card.Img variant="top" src={card.imgSrc} style={{ marginTop: '40px' }} />
              <Card.Body style={{ textAlign: "left", marginTop: "7px"}}>
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
            <Card style={{ width: '18rem', height: 'auto', margin: '10px', position: 'relative' }}>
              <FontAwesomeIcon icon={faHeart} style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }} />
              <Card.Img variant="top" src={card.imgSrc} style={{ marginTop: '40px' }} />
              <Card.Body style={{ textAlign: "left", marginTop: "7px"}}>
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
    
    </>
  );
};

export default MadeInJapan