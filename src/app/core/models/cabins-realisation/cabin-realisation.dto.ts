import { ImageDto, InspirationCategoryDto } from '@core/models';

export interface CabinRealisationDto {
  id: string;
  title: string;
  subTitle: string;
  inspirationCategories: Array<InspirationCategoryDto>;
  image: ImageDto;
}
