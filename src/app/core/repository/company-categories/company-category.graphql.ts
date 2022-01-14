import { gql } from '@apollo/client/core';
import { CompanyCategoryDto } from '@core/models/company-category';

export interface CompanyCategoriesQuery {
  companyCategories: Array<CompanyCategoryDto>;
}

export const companyCategories = gql`
  query companyCategories($lang: Locale!) {
    companyCategories(locales: [$lang]) {
      id
      name
      icon
      slug
    }
  }
`;
