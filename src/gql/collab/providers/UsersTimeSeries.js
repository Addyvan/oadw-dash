import React from "react";
import {Query} from "react-apollo";

import { Spinner } from "reactstrap";

import {
  USERS_TIMESERIES
} from "../USERS_TIMESERIES";

class CollabUsersTimeSeriesProvider extends React.Component {
    render() {
      const { children } = this.props;
      return(
        <Query query={USERS_TIMESERIES}>
          {
            ({ loading, error, data }) => {
              console.log("icit");
              if (loading) return (<Spinner color="primary" />);
              if (error) { console.log(error); return; }

              if (data) {

                if (data) {
                  const childrenWithProps = React.Children.map(children, child =>
                    React.cloneElement(child, { data: data })
                  );
                    
                  return <div>{childrenWithProps}</div>
                } else {
                  return null;
                }
              }
            }
          }
        </Query>
      );
    }
}

export default CollabUsersTimeSeriesProvider;