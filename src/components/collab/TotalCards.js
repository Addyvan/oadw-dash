import React from "react";
import DataCard from "../../assets/graphs/card.js";
import {Col} from 'reactstrap'

class CollabTotalCards extends React.Component {
  render() {
    console.log("here");
    console.log(this.props);
    var {
      gccollabTotalUsers, 
      gccollabTotalGroups, 
      gccollabTotalMissions
    } = this.props.data.stats[this.props.data.stats.length - 1];

    return(
      <div>
        <DataCard picture = {"fas fa-users"} title = {"Total Users"} number = {gccollabTotalUsers}></DataCard>
        <DataCard picture = {"far fa-file"} title = {"Total Groups"} number = {gccollabTotalGroups}></DataCard>
        <DataCard picture = {"far fa-handshake"} title = {"Total Missions"} number = {gccollabTotalMissions}></DataCard>
        <DataCard picture = {"far fa-comments"} title = {"Ongoing Discussions"} number = {"15,387"}></DataCard>
      </div>
    );
  }
}

export default CollabTotalCards;