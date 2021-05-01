import { ImageDto } from '@core/models';

export interface CabinMaterialDto {
  id: string;
  title: string;
  link: string;
  image: ImageDto;
}

export interface CabinsMaterialsDto {
  id: string;
  title: string;
  subTitle: string;
  images: Array<ImageDto>;
  materials: Array<CabinMaterialDto>;
}
