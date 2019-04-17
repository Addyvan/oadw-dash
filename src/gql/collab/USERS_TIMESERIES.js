import gql from "graphql-tag";

const USERS_TIMESERIES = gql`
  query GetTotals($amount: Int) {
    users(first: $amount) {
      createdAtElgg
    }
  }
`;

export {
  USERS_TIMESERIES
};