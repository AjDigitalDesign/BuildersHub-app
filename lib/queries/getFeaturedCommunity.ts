import { gql } from "@apollo/client";

export const getFeaturedCommunity = gql`
  {
    communities {
      nodes {
        id
        title
        slug
        status
        home {
          featuredCommunity
          commCity
          commState
          status
          planAddMarketingHeadline
          planMarketingHeadline
          commDescriptionGroup {
            commHeadline
            commDescription
          }
          gallery {
            altText
            mediaItemUrl
          }
          commPrice {
            commMinPrice
          }
        }
      }
    }
  }
`;
