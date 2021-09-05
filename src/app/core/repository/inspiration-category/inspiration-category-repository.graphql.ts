import { gql } from '@apollo/client/core';
import { InspirationCategoryDto } from '@core/models';

export interface InspirationCategoriesQuery {
  inspirationCategories: Array<InspirationCategoryDto>;
}
export const inspirationCategories = gql`
  query inspirationCategories($lang: Locale!) {
    inspirationCategories(locales: [$lang]) {
      id
      title
    }
  }
`;
