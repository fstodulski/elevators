import { CompanyDto } from '@core/models';

export interface Company extends CompanyDto {}

export function createCompany(params: Partial<Company>) {
  return {} as Company;
}
