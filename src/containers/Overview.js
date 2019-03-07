import React, { Component } from 'react';

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