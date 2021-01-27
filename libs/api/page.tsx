import { DocumentNode, gql } from '@apollo/client';

/**
 * Return a page
 */
export const GET_PAGE: DocumentNode = gql`
  query PageItem($id: ID!) {
    PageItem(id: $id) {
      content {
        _uid
        body
        component
      }
    }
  }
`;

/**
 * Returns the slug of every page
 */
export const GET_PAGE_SLUGS: DocumentNode = gql`
  query {
    PageItems {
      items {
        full_slug
      }
    }
  }
`;
