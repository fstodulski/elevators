import { gql } from '@apollo/client/core';
import { CabinsMaterialsDto } from '@core/models';

export interface CabinsMaterialsQuery {
  cabinsMaterials: Array<CabinsMaterialsDto>;
}
export const cabinsMaterialsQuery = gql`
  query cabinsMaterials($lang: Locale!) {
    cabinsMaterials(locales: [$lang]) {
      id
      title
      subTitle
      images {
        url
      }
      materials {
        id
        title
        link
        image {
          url
        }
      }
    }
  }
`;
