import { gql } from '@apollo/client/core';
import { CompanyDto } from '@core/models';

export interface CompanyQuery {
  company: CompanyDto;
}
export const company = gql`
  query company($id: ID!) {
    company(where: { id: $id }) {
      id
      name
      logo {
        url
      }
      images {
        url
      }
      geoLat
      geoLang
      websiteUrl
      city
      streetName
      shortDescription
      longDescription
      longDescriptionv2 {
        markdown
      }
      phoneNumber
      email
      facebook
      instagram
      companyCategories {
        id
        name
      }
    }
  }
`;

export interface CompaniesQuery {
  companies: Array<CompanyDto>;
}
export const companies = gql`
  query companies($lang: Locale!, $region: ID, $name: String, $last: Int) {
    companies(
      locales: [$lang]
      where: { region: { id_contains: $region }, name_contains: $name }
      last: $last
    ) {
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
      geoLat
      geoLang
      websiteUrl
      city
      longDescriptionv2 {
        markdown
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
