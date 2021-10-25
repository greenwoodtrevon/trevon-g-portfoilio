import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import MyWork from './MyWork';


const ContactMe = (props) => {
  return (
      <Container className="landingContainer">
          <Row>
              <Col>
                  <h1 className="display-3">Want to Reach Out?</h1>
              </Col>
          </Row>
          <Row>
              <Col className='contactCol' xs={{size: "10", offset:"1"}} sm={{size:"10"}} md={{size:"8", offset:"2"}} lg={{size:'8', offset:'2'}}>
                <a href='mailto:greenwoodtrevon@gmail.com' className='contacts'>greenwoodtrevon@gmail.com</a>
              </Col>
              <Col className='contactCol' xs={{size: "10", offset:"1"}} sm={{size:"10"}} md={{size:"8", offset:"2"}} lg={{size:'8', offset:'2'}}>
                <a href='tel:+18018846663' className='contacts'>(801) 884-6663</a>
              </Col>
              <Col className='contactCol' xs={{size: "10", offset:"1"}} sm={{size:"10"}} md={{size:"8", offset:"2"}} lg={{size:'8', offset:'2'}}>
                <a href='https://github.com/greenwoodtrevon' className='contacts'>GitHub: greenwoodtrevon</a>
              </Col>
          </Row>
          {/* <MyWork currentPage = {props.currentPage}  handlePageChange = {props.handlePageChange}/> */}
      </Container>
      
  );
};

export default ContactMe;