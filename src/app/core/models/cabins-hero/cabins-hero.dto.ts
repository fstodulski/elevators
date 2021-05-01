import { ImageDto } from '@core/models/image/image-dto';

export interface CabinsHeroDto {
  id: string;
  title: string;
  subTitle: string;
  buttonLabel: string;
  buttonTargetLink: string;
  image: ImageDto;
}
