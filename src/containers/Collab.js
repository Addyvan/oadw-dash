import React, { Component } from 'react';
import '@gctools-components/aurora-css/css/aurora.min.css';
import '@gctools-components/aurora-ds/css/aurora.min.css';
import "./NewCollab.css";

import CollabTotalsProvider from "../gql/collab/providers/CollabTotalsProvider";
import CollabTotalCards from "../components/collab/TotalCards";

import CollabUsersTimeSeriesProvider from "../gql/collab/providers/UsersTimeSeries";
import CollabUsersTimeSeries from "../components/collab/UsersTimeSeries";

import InnerNavBar from "../components/layout/InnerNavBar.js"; 
import {Container, Row, Col, Card, CardBody} from 'reactstrap';
import Community from "../assets/logos/community-people.png"


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
            <Card style = {{width: "997.26px", height: "550px", maxWidth: "997.26px", marginTop: "17.01px"}}>
              <CardBody>
                <h2 style = {{fontFamily: "Nunito Sans", fontSize: "21px", color: "#959595"}}>Total Users Over Time</h2>
                <CollabUsersTimeSeriesProvider amount={100}>
                  <CollabUsersTimeSeries />
                </CollabUsersTimeSeriesProvider>
              </CardBody>
            </Card>
            {/* <Card style = {{height: "625px"}}>
              <CardBody>
                <h2>Referral Sources</h2>
                <Plot title="Referral Sources" //need to keep title hear as title of csv
                        values={[100,
                        50,
                        43,
                        40,
                        30,
                        20]}
                        labels={["account.gccollab.ca", 
                        "gcconnex.gc.ca", 
                        "notification", 
                        "direct", 
                        "google", 
                        "Other"]}
                        type="pie"
                        buttonPosition="bottomRight"
                        height= "550px"
                        topMargin = "0"
                        width = "100%">                        >
                </Plot>
              </CardBody>
            </Card> */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NewCollab;