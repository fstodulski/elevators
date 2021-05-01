import { gql } from '@apollo/client/core';
import { CabinsHeroDto } from '@core/models';

export interface CabinsHeroQuery {
  cabinsHeroes: Array<CabinsHeroDto>;
}
export const cabinsHeroQuery = gql`
  query cabinsHero {
    cabinsHeroes {
      id
      title
      subTitle
      buttonLabel
      buttonTargetLink
      image {
        url
      }
    }
  }
`;
