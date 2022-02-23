import { ImageDto } from '@core/models';
import { CompanyCategoryDto } from '@core/models/company-category';

export interface CompanyDto {
  id: string;
  name: string;
  logo: ImageDto;
  companyCategories: Array<CompanyCategoryDto>;
  shortDescription: string;
  longDescription: string;
  longDescriptionv2: {
    markdown: string;
  };
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
  isMarkerSelected?: boolean;
}

export interface CompaniesQueryDto {
  region?: string;
  name?: string;
  last?: number;
  slug?: string;
}
