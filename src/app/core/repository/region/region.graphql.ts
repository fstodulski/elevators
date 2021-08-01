import { gql } from '@apollo/client/core';
import { RegionDto } from '@core/models';

export interface RegionsDto {
  regions: Array<RegionDto>;
}

export const regions = gql`
  query regions {
    regions {
      id
      name
    }
  }
`;
