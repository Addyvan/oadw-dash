import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import routes from "../routes";

import "../styles/custom.scss";

import '@gctools-components/aurora-css/css/aurora.min.css';
import '@gctools-components/aurora-ds/css/aurora.min.css';

class App extends React.Component {
  render() {
    return (
      <Router >
        <div className="flex-grow-1" style={{height:"100%"}}>
          {
            routes.map((route, index) => {
              return(
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={props => {
                    return (
                      <route.layout {...props}>
                        <route.component {...props} />
                      </route.layout>
                    );
                  }}
                />
              );
            })
          }
        </div>
      </Router>
    );
  }
}

export default App;