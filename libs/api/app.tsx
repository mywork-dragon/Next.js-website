import { gql } from '@apollo/client';

/**
 * Returns languages
 */
export const GET_LANGUAGES = gql`
  query getLanguages {
    Space {
      languageCodes
    }
  }
`;
