import React from "react";
import Plot from 'react-plotly.js';
import sizeMe  from "react-sizeme";
import PropTypes from "prop-types";

class UserTypePlot extends React.Component {
  render() {
    return(
      <div>
        <Plot
          data={[
            {
              x: this.props.x,
              y: this.props.y,
              type: "bar",
              name: this.props.name,
              line: {color: this.props.color},
              textposition: 'auto',
              hoverinfo: 'none',
              orientation: 'h'
            }
          ]}
          layout={{
            autosize: false,
            width: this.props.size.width,
            margin: {
              t: 0,
              b: 0,
              l: 30,
              r: 30
            }
          }}
          config={{displayModeBar: false, responsive: true}}
        />
        </div>
    );
  }
}

UserTypePlot.propTypes = {
  x: PropTypes.array.isRequired,
  y: PropTypes.array.isRequired
};

export default sizeMe()(UserTypePlot);