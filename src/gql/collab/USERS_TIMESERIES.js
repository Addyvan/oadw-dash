import gql from "graphql-tag";

const USERS_TIMESERIES = gql`
  query GetTotals {
    users(last: 1000) {
      createdAtElgg
      stats {
        numColleagues
      }
    }
  }
`;

export {
  USERS_TIMESERIES
};