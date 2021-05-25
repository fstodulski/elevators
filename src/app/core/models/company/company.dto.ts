import { ImageDto } from '@core/models';

export interface CompanyDto {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  logo: ImageDto;
  geoLang: number;
  geoLat: number;
  websiteUrl: string;
  phoneNumber: string;
  city: string;
  streetName: string;
  email: string;
  facebook: string;
  instagram: string;
  images: Array<ImageDto>;
}
