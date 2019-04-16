import React from 'react';
import Plot from 'react-plotly.js';

class Graph extends React.Component {

  //Checks to see if prop x is definined. If so, creates data array for plot with x and y props. If not, chart is a pie chart and creates data array for plot with values and labels props. 
  createData() {
    if (this.props.x !== undefined){
      return [
        {type: this.props.type, 
          x: this.props.x, 
          y: this.props.y,
          fill: this.props.fill,
          orientation: this.props.orientation,
          marker: {color: '#175573'} }
      ]
    }
    //colors: ['#002D42', '#0D467D', '#137991', '#6DD2DA', '#15A3A6', '#92CC6F']
    //colors: ['#002D42', '#175573', '#4285A6', '#82BDD9', '#CCEFFF', '#F3F8FA']
    else {
      return [
        {values: this.props.values,
        labels: this.props.labels,
        type: "pie",
        marker: {colors: ['#002D42', '#175573', '#4285A6', '#82BDD9', '#CCEFFF', '#F3F8FA']} },
      ]
    }
  }

  render() {
    console.log(this.props.height)
    return (
      <Plot
        data={this.createData()}
        layout={ {width: 2.5, 
                  autosize: true,
                  margin: {l: this.props.leftMargin,
                          b: 20,
                          r: 0,
                          t: this.props.topMargin},
                  font: {family:"Nunito Sans", size: "16"}, 
                  yaxis: {ticksuffix: "  "} }}
        responsive = {true}
        useResizeHandler = {true}
        style = {{width: this.props.width,
                  height: this.props.height,
                  display: "block"}}
        config= {{ displayModeBar: false }}
      />
    );
  }
}


export default Graph;