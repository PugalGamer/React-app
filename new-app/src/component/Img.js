import React from 'react';
import{Row,Col,Image} from 'react-bootstrap';

export default function Img() {
  return (
    <div>
        <Row>
          <Col xs={6} md={8} sx={7} lg={12} className=''>
          <Image src="./Images/SPIDERMAN.jpg" flui8d />
          </Col>
        </Row>
        <Row>
    <Col></Col>
    </Row>
    </div>
  )
}
