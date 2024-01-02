import { gql } from "@apollo/client";

export const getHomes = gql`
  {
    homes {
      nodes {
        id
        title
        slug
        status
        uri
        qmi_acf_fields {
          featuredHome
          homeName
          homeAddress
          homeCity
          homeState
          homeBeds
          homeBaths
          homeSqft
          homePrice
          photos {
            id
            altText
            mediaItemUrl
          }
          homeCommunity {
            ... on Community {
              id
              title
              uri
            }
          }
          downloadableBrochure {
            altText
            caption
            mediaItemUrl
            sourceUrl
            title
          }
          featuredHome
          homeAnnouncementsGroup {
            homeAnnouncementsToggle
          }
          homeAnnouncementsTextGroup {
            fieldGroupName
            homeCustomAnnouncements
          }
          homeFloorplan {
            ... on Plan {
              id
              uri
              title
              plans_acf_fields {
                planName
              }
            }
          }
        }
      }
    }
  }
`;
