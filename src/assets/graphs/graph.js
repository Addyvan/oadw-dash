import React from 'react';
import Plot from 'react-plotly.js';

class Graph extends React.Component {

  render() {
    return (
      <Plot
        data={[
          {type: this.props.type, 
          x: this.props.x, 
          y: this.props.y,
          orientation: this.props.orientation,
          color: ''},
        ]}
        layout={ {width: 2.5, 
                  autosize: true,
                  title: this.props.title,
                  margin: {l: this.props.leftMargin,
                          b: 0,
                          r: 0,
                          t: 50}} }
        responsive = {true}
        useResizeHandler = {true}
        style = {{width: "100%",
                  height: "100%",
                  display: "block"}}
        config= {{ displayModeBar: false }}
      />
    );
  }
}


export default Graph;