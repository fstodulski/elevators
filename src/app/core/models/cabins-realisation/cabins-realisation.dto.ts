import { ImageDto, InspirationCategoryDto } from '@core/models';

export interface CabinsRealisationDto {
  id: string;
  title: string;
  subTitle: string;
  inspirationCategories: Array<InspirationCategoryDto>;
  image: Array<ImageDto>;
}
