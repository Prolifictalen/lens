import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import useCounter from './Counter'; 

const ContactLensSolution = () => {
    const { counters, incrementCounter, decrementCounter } = useCounter();
    const cardsData = [
      {
        imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//a/q/aqualens-comfort-contct-lens-solution-60-ml__mg_7098_1.jpg",
        text: "Aqualens",
        price: "$2000"
      },
      {
        imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//b/i/biotrue300-solution_d_9954_1_1.jpg",
        text: "Aqualens",
        price: "$3500"
      },
      {
        imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//b/i/renu-fresh-contact-lens-solution-120-ml_csvfile-1695211355459-solution-renu100ml_g_9118_1222.jpg_(1).png",
        text: "Aqualens",
        price: "$2500"
      },
      {
        imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//a/i/aqualens-360-ml-combo-pack_csvfile-1684415777928-g_0026.jpg",
        text: "Aqualens",
        price: "$1500"
      }
    ];
  
    const cardsData1 = [
      {
        imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//a/i/aqualens-comfort-contact-lens-solution-120-ml-combo-pack_g_9384_za.jpg",
        text: "Aqualens",
        price: "$3000"
      },
      {
        imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//a/i/free-aqualens-comfort-contact-lens-solution-120-ml_aqualens-comfort-contct-lens-solution-120-ml-offer__mg_7089__1.png",
        text: "Aqualens",
        price: "$1500"
      },
      {
        imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//b/i/renu-fresh-multipurpose-contact-lens-solution-500ml_csvfile-1695204944023-renu-fresh-multipurpose-solution-500ml_renu-fresh-multipurpose-solution-500ml_500ml__j_8850_1_1.jpg_(3).png",
        text: "Aqualens",
        price: "$1500"
      },
      {
        imgSrc: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//a/i/aqualens-comfort-contact-lens-solution-360ml-with-60-ml-free_solution_poster.jpg",
        text: "Aqualens",
        price: "$1500"
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
        <img src="https://static1.lenskart.com/media/desktop/img/June22/contact-lens-more-1.jpg"
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

export default ContactLensSolution