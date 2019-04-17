import React from "react";
import {Query} from "react-apollo";

import { Spinner } from "reactstrap";

import {
  TOTALS
} from "../TOTALS";

class CollabTotalsProvider extends React.Component {
    render() {
      const { children } = this.props;
      return(
        <Query query={TOTALS}>
          {
            ({ loading, error, data }) => {
              if (loading) return (<Spinner color="primary" />);
              if (error) { console.log(error); return; }

              if (data) {
                console.log(this.props);
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

export default CollabTotalsProvider;