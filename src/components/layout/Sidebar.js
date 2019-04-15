import React from "react";

import { Nav, DropdownItem } from "reactstrap";
import SidebarNavItem from "./Sidebar/SidebarNavItem";
import All from "../../assets/logos/oadw.png";
import GCcollab from "../../assets/logos/GCcollab.png";
import GCconnex from "../../assets/logos/GCconnex.png";
import GCmessage from "../../assets/logos/GC_message_interim_A_icon.png";
import GCpedia from "../../assets/logos/GCpedia.png";
import GCtools from "../../assets/logos/GCtools.png";
import { Card, CardText, CardHeader, Button, Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu} from 'reactstrap';

import * as moment from 'moment';
import 'moment/locale/fr';
import 'moment/locale/en-ca';

import { DatePickerInput } from 'rc-datepicker';
import 'rc-datepicker/lib/style.css';

import '@gctools-components/aurora-css/css/aurora.min.css';
import '@gctools-components/aurora-ds/css/aurora.min.css';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    const today = new Date();
    this.toggle = this.toggle.bind(this);
    this.state = {
      endDate: moment(today),
      startDate: moment(today.setDate(today.getDate() - 90)),
      dropdownOpen: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return(
      <Container>
        <Row>
          <Col style = {{marginTop: "30px", marginLeft: "25px"}}>
            <div style={{display: "inline", marginRight: "10px"}}>
              <i style = {{color: "#137991"}}class="fas fa-chart-bar fa-2x"></i>
            </div>
            <h5 style={{display: "inline", fontFamily: 'Nunito Sans', fontWeight: "bold", color: "#4D5D6C"}}>GCanalytics</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <Nav style={{marginTop: "15px", display: "block"}} vertical>
              <DropdownItem divider></DropdownItem>
            </Nav>
            <div style = {{textAlign: "center", marginTop: "28px"}}>
              <h6 style = {{display: "inline-block", color: "#707070"}}>Filter by</h6>
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} style = {{display: "inline-block", marginLeft: "5px"}}>
                <DropdownToggle caret style = {{color: "#707070", backgroundColor: "#FFFFFF", borderColor: "#CECECE"}}>
                  Filter by
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Foo Action</DropdownItem>
                  <DropdownItem>Bar Action</DropdownItem>
                  <DropdownItem>Quo Action</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div style={{ display: "block", float: "left", marginTop: "28px"}}>
              <h6 style = {{display: "inline-block", marginRight: "5x", color: "#707070"}}>From</h6>
              <div style = {{display: "inline-block"}}>
              <DatePickerInput
                  displayFormat='DD/MM/YYYY'
                  returnFormat='YYYY-MM-DD'
                  className='my-react-component'
                  placeholder='Start Date'
                  defaultValue={this.state.startDate}
                  iconClassName='calendar icon'
                  validationFormat="DD/MM/YYYY"
                  showOnInputClick={true}
                  style = {{width: "30px", display: "inline-block", marginLeft: "5px"}}
              />
              </div>
              <h6 style = {{display: "inline-block", position: "absolute", left: "215px", top: "118px", color: "#707070"}}>To</h6>
              <div className="customDatePickerWidth">
              <DatePickerInput
                  displayFormat='DD/MM/YYYY'
                  returnFormat='YYYY-MM-DD'
                  className='my-react-component'
                  placeholder='End Date'
                  defaultValue={this.state.endDate}
                  iconClassName='calendar icon'
                  style={{ width: '200px', float: 'right' }}
                  validationFormat="DD/MM/YYYY"
                  showOnInputClick={true}
                  style = {{width: "40px", marginLeft: "5px", display: "inline-block", position: "absolute", left: "240px", top: "110px"}}
              />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col style = {{marginTop: "16px"}}>
            <Button color="link" style = {{display: "inline-block", color: "#137991", backgroundColor: "#FFFFFF", marginTop: "5px"}}>Reset</Button>
            <Button style = {{display: "inline-block", color: "#707070", backgroundColor: "#FFFFFF", borderColor: "#CECECE", position: "relative", float: "right", width: "120px"}}>SEARCH</Button>{' '}
          </Col>
        </Row>
        <Row>
          <Col>
            <Nav style={{marginTop: "15px", display: "block"}} vertical>
              <DropdownItem divider></DropdownItem>
              <DropdownItem style = {{family:"Nunito Sans", size: "16"}} header>Applications</DropdownItem>
              <SidebarNavItem style = {{family:"Nunito Sans", size: "16", color: "#707070"}} logo_path={GCcollab} text="GCcollab" path="/newcollab" />
              <SidebarNavItem logo_path={GCconnex} text="GCconnex" />
              <SidebarNavItem logo_path={GCtools} text="Career Marketplace" path="/collab-careermp" />
              <SidebarNavItem style = {{color: "#707070"}} logo_path={GCmessage} text="GCmessage" />
              <SidebarNavItem color= "secondary" logo_path={GCpedia} text="GCpedia"/>
            </Nav>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SideBar;