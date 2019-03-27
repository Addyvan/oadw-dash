import React, { Component } from 'react';
import Graph from './../assets/graphs/graph.js';
import PieChart from './../assets/graphs/PieChart.js';
import Plot from './../assets/graphs/Plot.js';
import { Card, Button, CardTitle, CardText, CardHeader, CardFooter, Container, Row, Col, CardBody} from 'reactstrap';
import "../styles/custom.scss";

class CollabCareerMP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: true
    }
  }

  componentDidMount() {
    document.title = 'GCcollab CareerMP Data';
  }

  render() {
    return (
      <Container fluid id = 'container' style={{marginRight: '10px', marginLeft: '10px', marginTop: '10px'}}>
        <Row id = 'row'>
          <Col sm={3} md = {3} lg = {3}> 
            <Card inverse style={{ backgroundColor: '#694B82', borderColor: '#694B82' }}>
              <CardHeader style={{ textAlign: 'center' }}>Career Marketplace accounts for</CardHeader>
              <CardText style={{ fontSize: '40px', textAlign: 'center', marginTop: '10px', marginBottom: '10px' }}>25%</CardText>
              <CardFooter style={{ textAlign: 'center' }}>of pageviews on GCcollab</CardFooter>
            </Card>
            <br />

            <Card inverse style={{ backgroundColor: '#694B82', borderColor: '#694B82' }}>
              <CardHeader style={{ textAlign: 'center' }}>Number of users in the Career Marketplace group on GCcollab</CardHeader>
              <CardText style={{ fontSize: '40px', textAlign: 'center', marginTop: '10px', marginBottom: '10px' }}>20 000</CardText>
            </Card>
            <br />

            <Card inverse style={{ backgroundColor: '#694B82', borderColor: '#694B82' }}>
              <CardHeader style={{ textAlign: 'center' }}>Offering vs Seeking Opportunities GCcollab</CardHeader>
              <CardText style={{ fontSize: '40px', textAlign: 'center', marginTop: '10px', marginBottom: '10px' }}>1000 vs 500</CardText>
            </Card>
            <br />

          </Col>
          <Col xs = {9} sm={9} md = {9} lg = {9}>
            <Card style = {{height: "490px"}}>
              <CardBody> 
                <Plot title="Number of Users who have Opted Into each Oppurtunity Type" 
                          x={[3619,
                            5343,
                            3988,
                            5266,
                            1962,
                            2881,
                            5591,
                            4183,
                            2050,
                            2841,
                            3327,
                            4272]}
                          y={["Casual Work Seeker", 
                          "Casual Work Opportunity Creator", 
                          "Collaboration Seeker", 
                          "Collaboration Opportunity Creator", 
                          "Interchange Canada Seeker", 
                          "Interchange Canada Opportunity Creator",
                          "Mentee",
                          "Mentor",
                          "Skill Sharing Seeker",
                          "Skill Sharing Opportunity Creator",
                          "Student Integration Seeker",
                          "Student Integration Opportunity Creator"]}
                          type="bar"
                          orientation="h"
                          leftMargin = "275"
                          showing = {this.state.showing}>
                    </Plot>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
        <Col xs = {4} sm={4} md = {4} lg = {4}>
            <Card style = {{height: "640px"}}>
              <CardBody>
                <PieChart title="Opportunities by Opportunity Status" 
                      values={[578,
                      9928,
                      83,
                      3618,
                      188,
                      39]}
                      labels={["Declined", 
                      "Posted", 
                      "In Progress", 
                      "Cancelled", 
                      "Was Offered", 
                      "Accepted"]}
                      type="pie">
                </PieChart>
                <div style = {{position:"absolute", right: "10px", bottom: "10px", display: "block", zIndex: "10"}}>
                <Button style = {{marginRight: "10px"}} color="secondary" size="sm">Download CSV</Button>
                <Button color="secondary" size="sm">View as Table</Button>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs = {4} sm={4} md = {4} lg = {4}>
            <Card style = {{height: "640px"}}>
              <CardBody>
                <PieChart title="Opportunities Posted by Opportunity Type" 
                        values={[484,
                        111,
                        53,
                        38,
                        42,
                        279]}
                        labels={["Casual", 
                        "Collaboration", 
                        "Interchange", 
                        "Mentoring", 
                        "Skill Share", 
                        "Student"]}
                        type="pie">
                  </PieChart>
                <div style = {{position:"absolute", right: "10px", bottom: "10px", display: "block", zIndex: "10"}}>
                <Button style = {{marginRight: "10px"}} color="secondary" size="sm">Download CSV</Button>
                <Button color="secondary" size="sm">View as Table</Button>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs = {4} sm={4} md = {4} lg = {4}>
            <Card style = {{height: "640px"}}>
              <CardBody>
                <PieChart title="Referral Sources" 
                        values={[484,
                        111,
                        53,
                        38,
                        42,
                        279]}
                        labels={["account.gccollab.ca", 
                        "gcconnex.gc.ca", 
                        "notification", 
                        "direct", 
                        "google", 
                        "Other"]}
                        type="pie">
                </PieChart>
                <div style = {{position:"absolute", right: "10px", bottom: "10px", display: "block", zIndex: "10"}}>
                <Button style = {{marginRight: "10px"}} color="secondary" size="sm">Download CSV</Button>
                <Button color="secondary" size="sm">View as Table</Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CollabCareerMP;