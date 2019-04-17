import gql from "graphql-tag";

const TOTALS = gql`
  query GetTotals {
    stats {
      gccollabTotalUsers
      gccollabTotalGroups
      gccollabTotalMissions
    }
  }
`;

export {
  TOTALS
};