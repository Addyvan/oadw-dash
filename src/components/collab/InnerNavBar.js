import React from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

class InnerNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      tab: "Overall Stats"
    };
  }

  toggle() {
    this.setState({
      tab: this.state.tab == "Overall Stats" ? "My Stats" : "Overall Stats"
    });
    console.log()
  }

  render() {
    return (
      <div>
        <h1 style= {{fontFamily: "Rubik", fontSize: "34px", fontWeight: "bold", color: "#707070", marginTop: "28px", marginBottom: "16px"}}>GCcollab</h1>
        <Nav tabs style = {{width: "997.26", maxWidth: "997.26px"}}>
          <NavItem>
            <NavLink href="#" active toggle={this.toggle} style = {{fontFamily: "Nunito Sans", fontSize: "18px"}} >Overall Stats</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" toggle={this.toggle} style = {{fontFamily: "Nunito Sans", fontSize: "18px"}} disabled>My Stats</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}


export default InnerNavBar;