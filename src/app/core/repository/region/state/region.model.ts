import { RegionDto } from '@core/models';

export interface Region extends RegionDto {}

export function createRegion(params: Partial<Region>) {
  return {} as Region;
}
