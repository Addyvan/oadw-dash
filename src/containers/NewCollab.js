import React, { Component } from 'react';
import '@gctools-components/aurora-css/css/aurora.min.css';
import '@gctools-components/aurora-ds/css/aurora.min.css';

class NewCollab extends Component {
  componentDidMount() {
    document.title = 'New Collab Data';
  }

  render() {
    return (
      <div>
        New Collab
      </div>
    );
  }
}

export default NewCollab;