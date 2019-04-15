import React, { Component } from 'react';
import '@gctools-components/aurora-css/css/aurora.min.css';import '@gctools-components/aurora-ds/css/aurora.min.css';


import InnerNavBar from "../components/layout/InnerNavBar.js"; 
import {Container, Row, Col} from 'reactstrap';
import DataCard from "../assets/graphs/card.js";
import Community from "../assets/logos/community-people.png"

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
            <DataCard picture = {Community} title = {"Total Users"} number = {"153,450"}></DataCard>
            <DataCard picture = {Community} title = {"Total Users"} number = {"153,450"}></DataCard>
            <DataCard picture = {Community} title = {"Total Users"} number = {"153,450"}></DataCard>
            <DataCard picture = {Community} title = {"Total Users"} number = {"153,450"}></DataCard>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NewCollab;