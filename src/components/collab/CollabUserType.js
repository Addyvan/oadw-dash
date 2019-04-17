import React from "react";
import UserTypePlot from "./UserTypePlot";
import Plot from "../../assets/graphs/Plot.js";

class CollabUsersTimeSeries extends React.Component {
  render() {
    var bins = [];
    var values = [];

    var binRef = {};
    this.props.data.users.map((user) => {
      if (bins.includes(user["userType"])) {
        values[binRef[user["userType"]]] += 1;
      } else {
        bins.push(user["userType"]);
        binRef[user["userType"]] = bins.length - 1;
        values.push(0);
      }
    });

    return(
      <div>
        <Plot y={bins} x={values} title="User Types" type="bar" orientation="h" />
      </div>
    );
  }
}

export default CollabUsersTimeSeries;