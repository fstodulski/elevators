import { gql } from '@apollo/client/core';
import { CompanyDto } from '@core/models';

export interface CompaniesQuery {
  companies: Array<CompanyDto>;
}
export const companies = gql`
  query companies($lang: Locale!) {
    companies(locales: [$lang]) {
      id
      name
      logo {
        url
      }
      shortDescription
      longDescription
      city
      streetName
      phoneNumber
      facebook
      instagram
      email
      images {
        url
      }
    }
  }
`;
