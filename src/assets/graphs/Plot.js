import React from 'react';
import {Button} from 'reactstrap';
import PlotAbstract from './PlotAbstract';

class Plot extends PlotAbstract {
    constructor(props) {
      super(props);
      this.toggleGraph = this.toggleGraph.bind(this);
      this.renderGraph = this.renderGraph.bind(this, this.props.x, this.props.y, this.props.type, this.props.orientation, this.props.leftMargin, this.props.title);
    }
    
    render() {
      return (
        <div>
          <div style = {{position:"absolute", right: "10px", display: "block", zIndex: "10"}}>
              <Button style = {{marginRight: "10px"}} color="secondary" size="sm">Download CSV</Button>
              <Button onClick={this.toggleGraph} color="secondary" size="sm">{(this.showingGraph) ? "View as Table" : "View as Graph"}</Button>
          </div>
          {this.renderGraph()}
        </div>
      );
    }
  }

export default Plot;