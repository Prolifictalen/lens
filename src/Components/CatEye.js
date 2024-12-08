import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import useCounter from './Counter';
const CatEye = () => {
  const { counters, incrementCounter, decrementCounter } = useCounter();
    const cardsData = [
      {
        imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e11803-c11-eyeglasses_img_2089_22_11_2023.jpg",
        text: "Lenskart Hustlr",
        price: "$2000"
      },
      {
        imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/gold-blue-full-rim-cat-eye-vincent-chase-sleek-steel-vc-e14711-c3-eyeglasses_g_2817_19_07_2022.jpg",
        text: "John Jacobs",
        price: "$3500"
      },
      {
        imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/black-transparent-gunmetal-full-rim-cat-eye-lenskart-air-fusion-la-e14101-c1-eyeglasses_lenskart-air-la-e14101-c1-c1-eyeglasses_g_7496_28july23.jpg",
        text: "OWNDAYS",
        price: "$2500"
      },
      {
        imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/Vincent-Chase-VC-E13048-C4-Eyeglasses_G_0777.jpg",
        text: "Lenskart Air",
        price: "$1500"
      }
    ];
  
    const cardsData1 = [
      {
        imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/blue-full-rim-cat-eye-vincent-chase-classic-acetate-vc-e16610-c2-eyeglasses_img_6368_09_02_2024.jpg",
        text: "Lenskart Hustlr",
        price: "$3000"
      },
      {
        imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e12896-c10-eyeglasses_img_9344_19_12_2023.jpg",
        text: "Lenskart Air",
        price: "$2000"
      },
      {
        imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/purple-full-rim-cat-eye-vincent-chase-sleek-steel-vc-e16789-c2-eyeglasses_img_7967_06_03_2024.jpg",
        text: "Vincent Chase",
        price: "$2400"
      },
      {
        imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/black-full-rim-cat-eye-vincent-chase-classic-acetate-vc-e17037-c1-eyeglasses__dsc1820_13_05_2024.jpg",
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
        <img src="https://static1.lenskart.com/media/desktop/img/harmony/28-jun-24/Web%20Banner%201920x520.jpg"
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
  

export default CatEye