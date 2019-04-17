import gql from "graphql-tag";

const USER_TYPE = gql`
  query UserType($amount: Int) {
    users(first: $amount, where: {platform: GCCOLLAB}) {
      userType
    }
  }
`;

export {
  USER_TYPE
};