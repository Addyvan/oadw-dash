import React, { Component } from 'react';
import '@gctools-components/aurora-css/css/aurora.min.css';
import '@gctools-components/aurora-ds/css/aurora.min.css';


class Overview extends Component {
  componentDidMount() {
    document.title = 'OADW Data';
  }

  render() {
    return (
      <div>
        Overview
      </div>
    );
  }
}

export default Overview;