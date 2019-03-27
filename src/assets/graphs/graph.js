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
          orientation: this.props.orientation,
          color: ''}
      ]
    }
    else {
      return [
        {values: this.props.values,
        labels: this.props.labels,
        type: "pie"},
      ]
    }
  }

  render() {
    return (
      <Plot
        data={this.createData()}
        layout={ {width: 2.5, 
                  autosize: true,
                  title: this.props.title,
                  margin: {l: this.props.leftMargin,
                          b: 20,
                          r: 0,
                          t: this.props.topMargin}} }
        responsive = {true}
        useResizeHandler = {true}
        style = {{width: "100%",
                  height: this.props.height,
                  display: "block"}}
        config= {{ displayModeBar: false }}
      />
    );
  }
}


export default Graph;