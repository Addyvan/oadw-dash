import React, { Component } from 'react';
import '@gctools-components/aurora-css/css/aurora.min.css';
import '@gctools-components/aurora-ds/css/aurora.min.css';
import "./NewCollab.css";

import CollabTotalsProvider from "../gql/collab/providers/CollabTotalsProvider";
import CollabTotalCards from "../components/collab/TotalCards";

import CollabUsersTimeSeriesProvider from "../gql/collab/providers/UsersTimeSeries";
import CollabUsersTimeSeries from "../components/collab/UsersTimeSeries";

import InnerNavBar from "../components/collab/InnerNavBar"; 
import {Container, Row, Col, Card, CardBody} from 'reactstrap';
import Community from "../assets/logos/community-people.png";


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
            <CollabTotalsProvider>
              <CollabTotalCards />
            </CollabTotalsProvider>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style = {{width: "997.26px", height: "550px", maxWidth: "997.26px", marginTop: "17.01px"}}>
              <CardBody>
                <h2 style = {{fontFamily: "Nunito Sans", fontSize: "21px", color: "#959595"}}>Total Users Over Time</h2>
                <CollabUsersTimeSeriesProvider amount={200}>
                  <CollabUsersTimeSeries />
                </CollabUsersTimeSeriesProvider>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style = {{width: "997.26px", height: "550px", maxWidth: "997.26px", marginTop: "17.01px", marginBottom: "20px"}}>
              <CardBody>

              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NewCollab;