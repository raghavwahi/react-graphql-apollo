import { gql } from "@apollo/client";

export const FETCH_COUNTRY = gql`
  query getCountryInfo($code: ID!) {
    country(code: $code) {
      name
      native
      capital
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
`;
