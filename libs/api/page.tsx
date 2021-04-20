import { DocumentNode, gql } from '@apollo/client';

/**
 * Return a page
 */
export const GET_PAGE: DocumentNode = gql`
  query PageItem($id: ID!) {
    PageItem(id: $id, resolve_relations: "page.header,page.footer") {
      content {
        _uid
        body
        header {
          content
        }
        footer {
          content
        }
        backgroundGradient
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
