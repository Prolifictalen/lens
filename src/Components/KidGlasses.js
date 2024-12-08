import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import useCounter from './Counter'

const KidGlasses = () => {
  const { counters, incrementCounter, decrementCounter } = useCounter();
  const cardsData = [
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//h/i/pink-transparent-purple-pink-tortoise-full-rim-rectangle-kids-(5-8-yrs)-hooper-flexi-hooper-hp-e15084m-c3-eyeglasses_g_5388_9_21_22.jpg",
      text: "Lenskart Hustlr",
      price: "$2000"
    },
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//h/i/blue-transparent-black-grey-full-rim-rectangle-kids--8-12-yrs--hooper-flexi-hooper-hp-e15084l-c3-eyeglasses_blue-transparent-black-grey-full-rim-rectangle-kids-(8-12-yrs)-hooper-flexi-hooper-hp-e15084l-c3-eyeglasses_g_5352_9_21_22_22_march23.jpg.jpg",
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
      text: "Lenskart Air",
      price: "$1500"
    }
  ];

  const cardsData1 = [
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//h/i/kids-glasses:-blue-sky-blue-full-rim-rectangle-kids--5-8-yrs--hooper-flexi-hooper-hp-e10004-c3_hooper-hp-e10004-c3-eyeglasses_g_5751_22_march23.jpg.jpg",
      text: "Lenskart Hustlr",
      price: "$3000"
    },
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//h/i/transparent-blue-full-rim-round-kids-(5-8-yrs)-hooper-flexi-hooper-hp-e15083m-c1-eyeglasses_g_5370_9_21_22.jpg",
      text: "Lenskart Air",
      price: "$2000"
    },
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//h/i/kids-glasses:-blue-yellow-full-rim-cat-eye-kids--5-8-yrs--hooper-flexi-hooper-hp-e10084-c3_hooper-hp-e10084-c3-eyeglasses_g_5492_22_march23.jpg.jpg",
      text: "Vincent Chase",
      price: "$2400"
    },
    {
      imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/o/john-jacobs-jj-e13772-c2-eyoglass_g_9422.jpg",
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

export default KidGlasses