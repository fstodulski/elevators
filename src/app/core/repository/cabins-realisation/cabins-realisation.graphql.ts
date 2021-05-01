import { gql } from '@apollo/client/core';
import { CabinsRealisationDto } from '@core/models';

export interface CabinsRealisationQuery {
  cabinsRealisations: Array<CabinsRealisationDto>;
}
export const cabinsRealisationsQuery = gql`
  query cabinsRealisations($lang: Locale!) {
    cabinsRealisations(locales: [$lang]) {
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
