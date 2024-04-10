import React from 'react'
import{Button,Row,Col} from 'react-bootstrap';

export default function Btn() {
  return (
    <div>
        <Row>
          <Col sm={3} className='border '>
          <Button variant='light' className=''>React</Button>
          </Col>
          <Col sm={3}  className='border'>
          <Button variant='light'>Express</Button>
          </Col>
          <Col sm={3}  className='border'>
          <Button variant='light'>MongoDb</Button>
          </Col>
          <Col sm={3}  className='border'>
          <Button variant='light'>NodeJs</Button>
          </Col>
        </Row>
    </div>
  )
}
