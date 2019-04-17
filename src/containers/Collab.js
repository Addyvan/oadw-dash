import React, { Component } from 'react';
import '@gctools-components/aurora-css/css/aurora.min.css';import '@gctools-components/aurora-ds/css/aurora.min.css';

import CollabTotalsProvider from "../gql/collab/providers/CollabTotalsProvider";
import CollabTotalCards from "../components/collab/TotalCards";

import CollabUsersTimeSeriesProvider from "../gql/collab/providers/UsersTimeSeries";
import CollabUsersTimeSeries from "../components/collab/UsersTimeSeries";

import InnerNavBar from "../components/layout/InnerNavBar.js"; 
import {Container, Row, Col, Card, CardBody} from 'reactstrap';
import Community from "../assets/logos/community-people.png"
import Plot from "../assets/graphs/Plot.js";

class NewCollab extends Component {

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <InnerNavBar/>
          </Col>
        </Row>
        <Row>
          <Col>
          {/*
            <CollabTotalsProvider>
              <CollabTotalCards />
          </CollabTotalsProvider>*/}
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style = {{width: "997.26px", height: "475.2px", maxWidth: "997.26px", marginTop: "17.01px"}}>
              <CardBody>
                <h2 style = {{fontFamily: "Nunito Sans", fontSize: "21px", color: "#959595"}}>Total Users Over Time</h2>
                <CollabUsersTimeSeriesProvider>
                  <CollabUsersTimeSeries />
                </CollabUsersTimeSeriesProvider>
                {/*<Plot title="Number of Users who have Opted Into each Oppurtunity Type" //need to keep title hear as title of csv
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
                      type="scatter"
                      fill="tozeroy"
                      orientation="h"
                      leftMargin = "300"
                      buttonPosition = "topRight"
                      height= "262.93px"
                      topMargin = "0"
                      width= "100%"
                      >
                      </Plot>*/}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NewCollab;