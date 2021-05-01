import { gql } from '@apollo/client/core';
import { CabinsRealisationDto } from '@core/models';

export interface CabinsRealisationQuery {
  cabinsRealisations: Array<CabinsRealisationDto>;
}
export const cabinsRealisationsQuery = gql`
  query cabinsRealisations {
    cabinsRealisations {
      id
      title
      subTitle
      inspirationCategories {
        id
        title
      }
      image {
        url
      }
    }
  }
`;
