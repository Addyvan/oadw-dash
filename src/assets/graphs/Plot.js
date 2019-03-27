import React from 'react';
import {Button} from 'reactstrap';
import PlotAbstract from './PlotAbstract';

class Plot extends PlotAbstract {
    constructor(props) {
      super(props);
      this.toggleGraph = this.toggleGraph.bind(this);
      this.renderGraph = this.renderGraph.bind(this, this.props.x, this.props.y, this.props.type, this.props.orientation, this.props.leftMargin, this.props.title, this.props.bottomMargin, this.props.values, this.props.labels, this.props.height, this.props.topMargin);
    }
    
    buttonStyle () {
      if (this.props.buttonPosition == "bottomRight"){
        return{
          position:"absolute", 
          right: "10px", 
          bottom: "10px",
          display: "block", 
          zIndex: "10"
        }
      }
      if (this.props.buttonPosition == "topRight"){
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
                <Button style = {{marginRight: "10px"}} color="secondary" size="sm">Download CSV</Button>
                <Button onClick={this.toggleGraph} color="secondary" size="sm">View as Table</Button>
          </div>
        </div>
      );
    }
  }

export default Plot;