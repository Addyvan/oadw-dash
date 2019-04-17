import React from "react";
import {Query} from "react-apollo";

import { Spinner } from "reactstrap";

import {
  USER_TYPE
} from "../USER_TYPE";

class CollabUserTypesProvider extends React.Component {
    render() {
      const { children } = this.props;
      return(
        <Query query={USER_TYPE} variables={{amount: (this.props.amount) ? this.props.amount : 10}}>
          {
            ({ loading, error, data }) => {
              if (loading) return (<Spinner color="info" />);
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

export default CollabUserTypesProvider;