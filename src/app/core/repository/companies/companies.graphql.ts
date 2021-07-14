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
      companyCategories {
        id
        name
        icon {
          url
        }
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

export interface CompaniesInRangeQuery {
  companies: Array<Partial<CompanyDto>>;
}
export const companiesInRange = gql`
  query companies {
    companies(first: 2) {
      id
      name
      logo {
        url
      }
      companyCategories {
        id
        name
      }
      city
      streetName
      phoneNumber
    }
  }
`;
