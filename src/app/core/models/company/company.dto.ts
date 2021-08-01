import { ImageDto } from '@core/models';
import { CompanyCategoryDto } from '@core/models/company-category';

export interface CompanyDto {
  id: string;
  name: string;
  companyCategories: Array<CompanyCategoryDto>;
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

export interface CompaniesQueryDto {
  region?: string;
  name?: string;
}
