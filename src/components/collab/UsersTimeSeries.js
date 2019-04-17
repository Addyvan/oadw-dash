import React from "react";
import UsersTimeSeriesPlot from "./UsersTimeSeriesPlot";

class CollabUsersTimeSeries extends React.Component {
  render() {
    console.log(this.props);

    var dates = [];
    var numColleagues = [];
    this.props.data.users.map((user) => {
      dates.push(user["createdAtElgg"]);
      if (user["stats"])
        numColleagues.push(user["stats"]["numColleagues"]);
      else {
        numColleagues.push(15);
      }
    });

    return(
      <div>
        <UsersTimeSeriesPlot x={dates} y={numColleagues} title="Example Plot" />
      </div>
    );
  }
}

export default CollabUsersTimeSeries;