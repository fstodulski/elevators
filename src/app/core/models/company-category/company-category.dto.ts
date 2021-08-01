import { ImageDto } from '@core/models';

export interface CompanyCategoryDto {
  id: string | number;
  name: string;
  icon: ImageDto;
}
