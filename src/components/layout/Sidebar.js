import React from "react";

import { Nav, DropdownItem } from "reactstrap";
import SidebarNavItem from "./Sidebar/SidebarNavItem";
import All from "../../assets/logos/oadw.png";
import GCcollab from "../../assets/logos/GCcollab.png";
import GCconnex from "../../assets/logos/GCconnex.png";

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
    this.state = {
      endDate: moment(today),
      startDate: moment(today.setDate(today.getDate() - 90))
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return(
      <div>
        <h5>Search by Date</h5>
        <div style={{ display: "block", float: "left" }}>
            <DatePickerInput
                displayFormat='DD/MM/YYYY'
                returnFormat='YYYY-MM-DD'
                className='my-react-component'
                placeholder='Start Date'
                defaultValue={this.state.startDate}
                iconClassName='calendar icon'
                style={{ width: '200px', float: 'left', marginRight: "10px", marginLeft: "5px" }}
                validationFormat="DD/MM/YYYY"
                showOnInputClick={true}
            />
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
            />
        </div>
        <Nav style={{marginTop: "30px", display: "block"}} vertical>
          <SidebarNavItem logo_path={All} text="Overview" path="/overview" />
          <DropdownItem divider></DropdownItem>
          <DropdownItem style = {{family:"Nunito Sans", size: "16"}} header>Legacy Tools</DropdownItem>
          <SidebarNavItem logo_path={GCcollab} text="GCcollab" path="/newcollab" />
          <SidebarNavItem logo_path={GCconnex} text="GCconnex" />
          <DropdownItem divider></DropdownItem>
          <DropdownItem style = {{family:"Nunito Sans", size: "16"}} header>Career Marketplace</DropdownItem>
          <SidebarNavItem logo_path={GCcollab} text="GCcollab" path="/collab-careermp" />
          <SidebarNavItem logo_path={GCconnex} text="GCconnex" path="/connex-careermp" />
        </Nav>
      </div>
    );
  }
}

export default SideBar;