import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import useCounter from './Counter';
const Round = () => {
  const { counters, incrementCounter, decrementCounter } = useCounter();
  const cardsData = [
      {
        imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e12896-c10-eyeglasses_img_9344_19_12_2023.jpg",
        text: "Lenskart Hustlr",
        price: "$2000"
      },
      {
        imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/Purple-Silver-Purple-Transparent-Full-Rim-Round-Vincent-Chase-SLEEK-STEEL-VC-E13784-C1-Eyeglasses_vincent-chase-vc-e13784-c1-eyeglasses_g_301709_02_2022.jpg",
        text: "John Jacobs",
        price: "$3500"
      },
      {
        imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13784-c2-eyeglasses_vincent-chase-vc-e13784-c2-eyeglasses_g_3010.jpg",
        text: "OWNDAYS",
        price: "$2500"
      },
      {
        imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-transparent-full-rim-round-lenskart-air-classic-la-e14532-c2-eyeglasses_g_9420.jpg",
        text: "Lenskart Air",
        price: "$1500"
      }
    ];
  
    const cardsData1 = [
      {
        imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/purple-brown-gunmetal-purple-brown-full-rim-round-lenskart-air-essentials-la-e15847-c4-eyeglasses_g_0309_25_05_2023.jpg",
        text: "Lenskart Hustlr",
        price: "$3000"
      },
      {
        imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/transparent-black-transparent-full-rim-round-lenskart-air-signia-la-e14963-c2-eyeglasses_g_3236_06_oct22.jpg",
        text: "Lenskart Air",
        price: "$2000"
      },
      {
        imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-blu-lb-e13739-c5-eyeglasses_g_4835_06_06_2022.jpg",
        text: "Vincent Chase",
        price: "$2400"
      },
      {
        imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/e/lenskart-air-la-e14364-c2-eyeglasses_G_0770.jpg",
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
        <img src="https://static1.lenskart.com/media/desktop/img/Sep22/ROUNDS.jpg"
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
  

export default Round