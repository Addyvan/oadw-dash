import React from 'react';
import {Button} from 'reactstrap';
import PlotAbstract from './PlotAbstract';
import {CSVLink} from 'react-csv';

class Plot extends PlotAbstract {
    constructor(props) {
      super(props);
      this.toggleGraph = this.toggleGraph.bind(this);
      this.renderGraph = this.renderGraph.bind(this, this.props.x, this.props.y, this.props.type, this.props.orientation, this.props.leftMargin, this.props.title, this.props.bottomMargin, this.props.values, this.props.labels, this.props.height, this.props.topMargin);
    }

    // Reformat data to .csv
    downloadCSV = () => {
      const names = this.props.y || this.props.labels;
      const numbers = this.props.x || this.props.values;
      var csvData = ``;
      for (var i = 0; i < names.length; i++){
        csvData = csvData + names[i].toString() + ',' + numbers[i].toString() + "\n"
      }
      return csvData
    }

    buttonStyle () {
      if (this.props.buttonPosition === "bottomRight"){
        return{
          position:"absolute", 
          right: "10px", 
          bottom: "10px",
          display: "block", 
          zIndex: "10"
        }
      }
      if (this.props.buttonPosition === "topRight"){
        return{
          position:"absolute", 
          right: "10px", 
          display: "block", 
          zIndex: "10",
          top: "10px"
        }
      }
    }

    render() {
      return (
        <div>
          {this.renderGraph()}
          <div style = {this.buttonStyle()}>
                <CSVLink data={this.downloadCSV().toString()} filename={this.props.title.toString() + ".csv"}><Button style = {{family:"Nunito Sans", size: "16", marginRight: "10px"}} color="secondary" size="sm">Download CSV</Button></CSVLink>
                <Button onClick={this.toggleGraph} color="secondary" size="sm" style = {{family:"Nunito Sans", size: "16"}}>View as Table</Button>
          </div>
        </div>
      );
    }
  }

export default Plot;