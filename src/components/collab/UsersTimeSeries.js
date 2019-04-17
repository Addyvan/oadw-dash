import React from "react";
import Plot from "../../assets/graphs/Plot.js";

class CollabUsersTimeSeries extends React.Component {
  render() {

    var dates = [];
    var numUsers = [];
    var i = 1;


    this.props.data.users.map((user) => {
      dates.push(user["createdAtElgg"]);
      numUsers.push(i);
      i++;
    });

    return(
      <div style = {{marginTop: "30px"}}>
        <Plot x={dates} y={numUsers} title="Total Users" buttonPosition = "topRight"/>
      </div>
    );
  }
}

export default CollabUsersTimeSeries;