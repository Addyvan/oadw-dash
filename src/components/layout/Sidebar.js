import React from "react";

import { Nav, DropdownItem } from "reactstrap";
import SidebarNavItem from "./Sidebar/SidebarNavItem";
import All from "../../assets/logos/oadw.png";
import GCcollab from "../../assets/logos/GCcollab.png";

class SideBar extends React.Component {
  render() {
    return(
      <Nav style={{marginTop: "30px"}} vertical>
        <SidebarNavItem logo_path={All} text="Overview" path="/overview" />
        <DropdownItem divider></DropdownItem>
        <DropdownItem header>Group 1</DropdownItem>
        <SidebarNavItem logo_path={GCcollab} text="GCcollab" path="/collab" />
        <DropdownItem divider></DropdownItem>
        <DropdownItem header>Group 2</DropdownItem>
        <SidebarNavItem logo_path={GCcollab} text="New Collab" path="/newcollab" />
      </Nav>
    );
  }
}

export default SideBar;