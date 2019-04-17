import React, { Component } from 'react';
import '@gctools-components/aurora-css/css/aurora.min.css';
import '@gctools-components/aurora-ds/css/aurora.min.css';
import "./NewCollab.css";


import InnerNavBar from "../components/layout/InnerNavBar.js"; 
import {Container, Row, Col, Card, CardBody} from 'reactstrap';
import DataCard from "../assets/graphs/card.js";
import Community from "../assets/logos/community-people.png"
import Plot from "../assets/graphs/Plot.js";

class NewCollab extends Component {

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <InnerNavBar>
            </InnerNavBar>
          </Col>
        </Row>
        <Row>
          <Col>
            <DataCard picture = {"fas fa-users"} title = {"Total Users"} number = {"153,450"}></DataCard>
            <DataCard picture = {"far fa-file"} title = {"Total Pageviews"} number = {"636,444"}></DataCard>
            <DataCard picture = {"far fa-handshake"} title = {"Groups"} number = {"15,387"}></DataCard>
            <DataCard picture = {"far fa-comments"} title = {"Ongoing Discussions"} number = {"15,387"}></DataCard>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style = {{width: "997.26px", height: "475.2px", maxWidth: "997.26px", marginTop: "17.01px"}}>
              <CardBody>
                <h2 style = {{fontFamily: "Nunito Sans", fontSize: "21px", color: "#959595"}}>Total Users Over Time</h2>
                <Plot title="Number of Users who have Opted Into each Oppurtunity Type" //need to keep title hear as title of csv
                      x={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"]}
                      y={[10000, 100030, 100100, 100300, 100700, 100800, 103000, 103400, 104500, 105000, 106000, 107000]}
                      type="scatter"
                      fill="tozeroy"
                      orientation="h"
                      leftMargin = ""
                      buttonPosition = "topRight"
                      height= "400px"
                      topMargin = "0px"
                      width= "100%"
                      >
                  </Plot>
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