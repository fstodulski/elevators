import { ImageDto } from '@core/models';

export interface CabinsDetailsElementDto {
  id: string;
  image: ImageDto;
  title: string;
}

export interface CabinsDetailsDto {
  id: string;
  title: string;
  cabinsDetailElements: Array<CabinsDetailsElementDto>;
}
