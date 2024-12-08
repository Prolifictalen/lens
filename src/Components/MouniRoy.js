import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import useCounter from './Counter';
const MouniRoy = () => {
  const { counters, incrementCounter, decrementCounter } = useCounter();
    const cardsData = [
      {
        imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/i/john-jacobs-jj-s16899-c1-sunglasses_img_3237_18_jan24.jpg",
        text: "John Jacobs",
        price: "$2000"
      },
      {
        imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/i/john-jacobs-jj-s16897-c1-sunglasses_img_3254_18_jan24.jpg",
        text: "John Jacobs",
        price: "$3500"
      },
      {
        imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/i/black-grey-gradient-full-rim-heart-john-jacobs-jj-tints-jj-s16210-c1-sunglasses_csvfile-1705304386907-img_8756.jpg",
        text: "John Jacobs",
        price: "$2500"
      },
      {
        imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/i/john-jacobs-jj-s16500-c3-sunglasses_img_4778_17_11_2023.jpg",
        text: "John Jacobs",
        price: "$1500"
      }
    ];
  
    const cardsData1 = [
      {
        imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/i/john-jacobs-jj-s16897-c4-sunglasses_img_3197_18_jan24.jpg",
        text: "John Jacobs",
        price: "$3000"
      },
      {
        imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/i/john-jacobs-jj-s16500-c2-sunglasses_img_4748_17_11_2023.jpg",
        text: "John Jacobs",
        price: "$2000"
      },
      {
        imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/i/john-jacobs-jj-s16898-c2-sunglasses_img_3217_18_jan24.jpg",
        text: "John Jacobs",
        price: "$2400"
      },
      {
        imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/i/john-jacobs-jj-s16898-c3-sunglasses_img_3226_18_jan24.jpg",
        text: "John Jacobs",
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
        <img src="https://static1.lenskart.com/media/desktop/img/23may/cannes/web.gif"
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

export default MouniRoy