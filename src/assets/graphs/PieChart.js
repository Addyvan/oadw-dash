import React from 'react';
import Plot from 'react-plotly.js';

class PieChart extends React.Component {

  render() {
    return (
        <Plot
          data={[
            {values: this.props.values,
            labels: this.props.labels,
            type: "pie"},
          ]}
          layout={ {width: 2.5, 
            autosize: true,
            title: this.props.title,
            displayModeBar: false,
            margin: {l: this.props.leftMargin,
                    b: 0,
                    r: 0,
                    t: 50}} }
          responsive = {true}
          useResizeHandler = {true}
          style = {{width: "100%",
                    height: "100%"}}
          config= {{ displayModeBar: false }}
        />
    );
  }
}


export default PieChart;