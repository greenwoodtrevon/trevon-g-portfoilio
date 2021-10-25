import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import MyWork from './MyWork';
import ContactMe from './ContactMe';


const Home = (props) => {
  return (
      <Container className="landingContainer">
          <Row>
              <Col>
                  <h1 className="display-3">Trevon Greenwood</h1>
              </Col>
          </Row>
          <Row>
              <Col xs={{size: "10", offset:"1"}} sm={{size:"10"}} md={{size:"8", offset:"2"}} lg={{size:'8', offset:'2'}}>
                  <p className="lead">A few things about me</p>
              </Col>
          </Row>
          {/* <MyWork currentPage = {props.currentPage}  handlePageChange = {props.handlePageChange}/>
          <ContactMe /> */}
      </Container>
      
  );
};

export default Home;