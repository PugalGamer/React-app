import React, { useState } from 'react';
import { Button, Row, Col, Card, CloseButton } from 'react-bootstrap';

export default function Btn() {
  const [showCard, setShowCard] = useState(false);

  const handleClick = (technology) => {
    // Update state to show the card for the clicked technology
    setShowCard(true);
    console.log(`You clicked the ${technology} button!`); // Optional: Log for debugging or analytics
  };

  const handleCloseCard = () => {
    // Update state to hide the card
    setShowCard(false);
  };

  return (
    <div>
      <Row></Row>
      <Row>
        <Col sm={3} className='border '>
          <Button variant='light' className='' onClick={() => handleClick('React')}>React</Button>
        </Col>
        <Col sm={3} className='border'>
          <Button variant='light' onClick={() => handleClick('Express')}>Express</Button>
        </Col>
        <Col sm={3} className='border'>
          <Button variant='light' onClick={() => handleClick('MongoDb')}>MongoDb</Button>
        </Col>
        <Col sm={3} className='border'>
          <Button variant='light' onClick={() => handleClick('NodeJs')}>NodeJs</Button>
        </Col>
      </Row>

      {/* Conditionally render the card based on the showCard state */}
      {showCard && (
        <Card style={{ width: '18rem' }} className="mt-3">  {/* Added margin-top for spacing */}
          <Card.Img variant="top" src="./Images/SPIDERMAN.jpg" />
          <Card.Body>
            <Card.Title>Spidy</Card.Title>
          </Card.Body>
          <Card.Footer><CloseButton onClick={handleCloseCard} />
          </Card.Footer>
        </Card>
      )}
    </div>
  );
}
