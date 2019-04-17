import React from "react";
import Moment from 'react-moment';
import UsersTimeSeriesPlot from "./UsersTimeSeriesPlot";

class CollabUsersTimeSeries extends React.Component {
  render() {
    console.log(this.props);

    var dates = [];
    var numColleagues = [];
    this.props.data.users.map((user) => {
      dates.push(user["createdAtElgg"]);
      numColleagues.push(user["stats"]["numColleagues"]);
    });

    return(
      <div>
        <UsersTimeSeriesPlot x={dates} y={numColleagues} title="Example Plot" />
      </div>
    );
  }
}

export default CollabUsersTimeSeries;