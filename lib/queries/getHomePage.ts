import { gql } from "@apollo/client";

export const getHomePage = gql`
  {
    page(id: 6367, idType: DATABASE_ID) {
      id
      databaseId
      title
      slug
      isFrontPage
      homepage_acf {
        bannerTitle
        ncContent
        nextchapterTitle
        subtitle
        backgroundImage {
          mediaItemUrl
        }
        bannerButton {
          target
          title
          url
        }
        mdContent
        mdLearnMore {
          url
          title
          target
        }
        findYourHome {
          fyhButton {
            url
            title
            target
          }
          fyhImage {
            altText
            mediaItemUrl
            id
            databaseId
          }
          fieldGroupName
        }
        nhButton {
          url
          title
          target
        }
        ncImage {
          altText
          mediaItemUrl
        }
        mdSectionImage {
          mediaItemUrl
          srcSet
          altText
        }
        mdSubtitle
        mdTitle
      }
    }
  }
`;
