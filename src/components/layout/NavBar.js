import React from "react";
import { Row, Col } from "reactstrap";

import { I18n } from "react-i18next";
import "./sidebar.css"; 
import FlagEN from "./sig-en-w.png"
import FlagFR from "./sig-en-w.png"

import LanguageToggle from "../design-system/LanguageToggle";
import '@gctools-components/aurora-css/css/aurora.min.css';
import '@gctools-components/aurora-ds/css/aurora.min.css';

class NavBar extends React.Component {
  render() {
    return(
      <I18n ns={["translation"]}>
        {
          (t, { i18n }) => (
            <Row style = {{height: "60px", marginBottom: "0px", overflow: "hidden"}}>
              <Col id = "slantedCol"><img id = "flag" src={FlagEN} alt="Government of Canada" /></Col>
              <Col id = "gradient" style = {{width: "85%", backgroundColor: "blue", zIndex: "-1"}}></Col>
            </Row>
          )
        }
      </I18n>
    );
  }
}

export default NavBar;