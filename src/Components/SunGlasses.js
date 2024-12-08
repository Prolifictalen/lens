import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import useCounter from './Counter';

const SunGlasses = () => {
  const { counters, incrementCounter, decrementCounter } = useCounter();
  const cardsData = [
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/silver-black-grey-gradient-rimless-square-vincent-chase-met-effect-vc-s15397-c2-sunglasses_g_1011_02_02_23.jpg",
      text: "Lenskart Hustlr",
      price: "$2000"
    },
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/silver-pink-full-rim-round-vincent-chase-polarized-met-effect-vc-s15398-c4-sunglasses_g_1005_02_02_23.jpg",
      text: "John Jacobs",
      price: "$3500"
    },
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-s15407-c1-sunglasses_g_2711_07_02_2023.jpg",
      text: "OWNDAYS",
      price: "$2500"
    },
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/gold-brown-brown-rimless-square-vincent-chase-met-effect-vc-s15397-c3-sunglasses_g_1017_02_02_23.jpg",
      text: "Lenskart Air",
      price: "$1500"
    }
  ];

  const cardsData1 = [
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-s13137-c4-c4-sunglasses_g_8693.jpg",
      text: "Lenskart Hustlr",
      price: "$3000"
    },
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/black-blue-full-rim-cat-eye-vincent-chase-polarized-the-metal-edit-vc-s14079-c1-polarized-sunglasses_vincent-chase-vc-s14079-c1-c1-sunglasses_vincent-chase-vc-s14079-c1-c1-sunglasses_vincent-chase-vc-s14079-c1-c1-sunglasses_2_5july23.jpg",
      text: "Lenskart Air",
      price: "$2000"
    },
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-s16964-c2-sunglasses__dsc5951_22_05_2024.jpg",
      text: "Vincent Chase Polarized",
      price: "$2400"
    },
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/Black-Grey-Full-Rim-Clubmaster-Vincent-Chase-Polarized-MIRAGE-VC-S10681/P-C2-Sunglasses_vincent-chase-vc-s10681-c2-sunglasses_untitled-218_02_2022.jpg",
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
  )
}

export default SunGlasses