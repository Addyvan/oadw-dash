import React from "react";

import { Nav, DropdownItem } from "reactstrap";
import SidebarNavItem from "./Sidebar/SidebarNavItem";
import All from "../../assets/logos/oadw.png";
import GCcollab from "../../assets/logos/GCcollab.png";
import GCconnex from "../../assets/logos/GCconnex.png";

class SideBar extends React.Component {
  render() {
    return(
      <Nav style={{marginTop: "30px"}} vertical>
        <SidebarNavItem logo_path={All} text="Overview" path="/overview" />
        <DropdownItem divider></DropdownItem>
        <DropdownItem header>Career Marketplace</DropdownItem>
        <SidebarNavItem logo_path={GCcollab} text="GCcollab" path="/collab-careermp" />
        <SidebarNavItem logo_path={GCconnex} text="GCconnex" path="/connex-careermp" />
        <DropdownItem divider></DropdownItem>
        <DropdownItem header>Group 2</DropdownItem>
        <SidebarNavItem logo_path={GCcollab} text="New Collab" path="/newcollab" />
      </Nav>
    );
  }
}

export default SideBar;