import React, { Component } from 'react';
import Graph from './../assets/graphs/graph.js';
import { Card, Button, CardTitle, CardText, CardHeader, CardFooter} from 'reactstrap';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import "../styles/custom.scss";

class CollabCareerMP extends Component {
  componentDidMount() {
    document.title = 'GCcollab CareerMP Data';
  }

  render() {
    return (
      <Container id = 'container' style={{marginRight: '10px', marginLeft: '10px', marginTop: '10px'}}>
        <Row>
          <Col sm={4} md = {4} lg = {4}>
            <Card inverse style={{ backgroundColor: '#694B82', borderColor: '#694B82' }}>
              <CardHeader style={{ textAlign: 'center' }}>Career Marketplace accounts for</CardHeader>
              <CardText style={{ fontSize: '40px', textAlign: 'center', marginTop: '10px', marginBottom: '10px' }}>25%</CardText>
              <CardFooter style={{ textAlign: 'center' }}>of pageviews on GCcollab</CardFooter>
            </Card>
            <br />

            <Card inverse style={{ backgroundColor: '#037677', borderColor: '#037677' }}>
              <CardHeader style={{ textAlign: 'center' }}>Career Marketplace accounts for</CardHeader>
              <CardText style={{ fontSize: '40px', textAlign: 'center', marginTop: '10px', marginBottom: '10px' }}>25%</CardText>
              <CardFooter style={{ textAlign: 'center' }}>of pageviews on GCconnex</CardFooter>
            </Card>
            <br />

            <Card inverse style={{ backgroundColor: '#694B82', borderColor: '#694B82' }}>
              <CardHeader style={{ textAlign: 'center' }}>Number of users in the Career Marketplace group on GCcollab</CardHeader>
              <CardText style={{ fontSize: '40px', textAlign: 'center', marginTop: '10px', marginBottom: '10px' }}>20 000</CardText>
            </Card>
            <br />

            <Card inverse style={{ backgroundColor: '#037677', borderColor: '#037677' }}>
              <CardHeader style={{ textAlign: 'center' }}>Number of users in the Career Marketplace group on CCconnex</CardHeader>
              <CardText style={{ fontSize: '40px', textAlign: 'center', marginTop: '10px', marginBottom: '10px' }}>20 000</CardText>
            </Card>
            <br />

            <Card inverse style={{ backgroundColor: '#694B82', borderColor: '#694B82' }}>
              <CardHeader style={{ textAlign: 'center' }}>Offering vs Seeking Opportunities GCcollab</CardHeader>
              <CardText style={{ fontSize: '40px', textAlign: 'center', marginTop: '10px', marginBottom: '10px' }}>1000 vs 500</CardText>
            </Card>
            <br />

            <Card inverse style={{ backgroundColor: '#037677', borderColor: '#037677' }}>
              <CardHeader style={{ textAlign: 'center' }}>Offering vs Seeking Opportunities GCconnex</CardHeader>
              <CardText style={{ fontSize: '40px', textAlign: 'center', marginTop: '10px', marginBottom: '10px' }}>2000 vs 330</CardText>
            </Card>
            <br />


          </Col>
          <Col xs={8}>
          <Graph title=""></Graph>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CollabCareerMP;