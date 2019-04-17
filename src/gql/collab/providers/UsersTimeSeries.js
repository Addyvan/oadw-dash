import React from "react";
import {Query} from "react-apollo";

import { Spinner } from "reactstrap";

import {
  USERS_TIMESERIES
} from "../USERS_TIMESERIES";

class CollabUsersTimeSeriesProvider extends React.Component {
    render() {
      const { children } = this.props;
      console.log("HERE");
      console.log(this.props);
      return(
        <Query query={USERS_TIMESERIES}  variables={{amount: (this.props.amount) ? this.props.amount : 10}}>
          {
            ({ loading, error, data }) => {
              if (loading) return (<Spinner color="info" />);
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