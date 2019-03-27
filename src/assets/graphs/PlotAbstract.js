import React from 'react';
import Graph from './graph.js'
import DataTable from './DataTable.js'

class PlotAbstract extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingGraph: true
    }
  }

  toggleGraph() {
    this.setState((prevState) => {
      return { showingGraph: !prevState.showingGraph }
    });
  }
  
  renderGraph(x, y, type, orientation, leftMargin, title, bottomMargin, values, labels, height, topMargin) {
    if (this.state.showingGraph)
      return <Graph x = {x} y={y} type={type} orientation={orientation} leftMargin={leftMargin} title = {title} values = {values} labels = {labels} height = {height} topMargin = {topMargin}/>;
    else
      return <DataTable x = {x} y={y} type={type} orientation={orientation} leftMargin={leftMargin} title = {title} bottomMargin = {bottomMargin} values = {values} labels = {labels} height = {height} topMargin = {topMargin}/>;
  }
}

export default PlotAbstract;