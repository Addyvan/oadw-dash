import React from "react";
import Plot from "../../assets/graphs/Plot.js";

class CollabUsersTimeSeries extends React.Component {
  render() {
    console.log(this.props);

    var dates = [];
    var numUsers = [];
    var i = 1;


    this.props.data.users.map((user) => {
      dates.push(user["createdAtElgg"]);
      numUsers.push(i);
      i++;
    });

    return(
      <div>
        <Plot x={dates} y={numUsers} title="Total Users" />
      </div>
    );
  }
}

export default CollabUsersTimeSeries;