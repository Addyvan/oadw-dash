import React from "react";
import DataCard from "../../assets/graphs/card.js";

class CollabTotalCards extends React.Component {
  render() {
    console.log(this.props);
    return(
      <div>
        <DataCard picture = {"fas fa-users"} title = {"Total Users"} number = {"153,450"}></DataCard>
        <DataCard picture = {"far fa-file"} title = {"Total Pageviews"} number = {"636,444"}></DataCard>
        <DataCard picture = {"far fa-handshake"} title = {"Groups"} number = {"15,387"}></DataCard>
        <DataCard picture = {"far fa-comments"} title = {"Ongoing Discussions"} number = {"15,387"}></DataCard>
      </div>
    );
  }
}

export default CollabTotalCards;