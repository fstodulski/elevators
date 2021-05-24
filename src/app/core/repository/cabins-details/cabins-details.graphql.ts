import { gql } from '@apollo/client/core';
import { CabinsDetailsDto } from '@core/models';

export interface CabinsDetailsQuery {
  cabinsDetails: Array<CabinsDetailsDto>;
}
export const cabinsDetails = gql`
  query cabinsDetails($lang: Locale!) {
    cabinsDetails(locales: [$lang]) {
      id
      title
      cabinsDetailElements {
        id
        title
        image {
          url
        }
      }
    }
  }
`;
