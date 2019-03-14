import gql from "graphql-tag";

const GET_ALL_MISSIONS = gql`
  query FunInTheSun {
    missions {
      test
    }
  }
`;

export {
  GET_ALL_MISSIONS
};