import { NgModule } from '@angular/core';
import {
  ApolloClientOptions,
  ApolloLink,
  InMemoryCache,
} from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

const uri =
  'https://api-eu-central-1.graphcms.com/v2/cko31b8sybkjr01yz6xvg4dy9/master'; // <-- add the URL of the GraphQL server here

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const basic = setContext(() => ({
    headers: {
      Accept: 'charset=utf-8',
    },
  }));

  const auth = setContext(() => ({
    headers: {
      Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MTk4NjE5MzIsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NrbzMxYjhzeWJranIwMXl6Nnh2ZzRkeTkvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMDdiZjdjYTgtNGJkZC00OGZjLTg5NTUtZGY0YzEwYTBmNWZmIiwianRpIjoiY2tvNWp5eXRiNmc0bDAxeXo0NTZhMndlNiJ9.g5KIDW8JfMxpU90A0-5LpK-862GLHaKxHV96erQFv8FLbeBhuldWt93DDiIQPa9o2Ux7ERlaSNwIjrqcmJvn1XleCgEN_ulKPKUorXRIS8Ji-K5jOF6gKtIZEOalBXz8805RDCRGRqTsomcWIEgjZgQJuv3xcIqUfRD9m4IqMigKMEVhfQaGUtpR-3Nb-ML35yKbX-VO06hE78vP1epVVHsLriKUbBfLi07Cb20oMyIp81Hze6J_yZ-VSUcA9L_KoNvwBLp681KDgE55wz0-eumklc_oNylRmi_lNnuToWE_xeaHsPLvokmYM9DJwcGxZxM_QfJlKOpeLTP5Ye1gWXUb4WMzBHqWz-VZ0-0wm_OiKCUj2eU_tkpJ4UsmnZGXw5SqhpECQe2inb17lWBFxfN8yAWU3BdYleg9F1SvkXiIMt4dfua5YFzPnmpsKv8QsDqqGVUr1nzUcQggVL4EDZrRoyyEg5eJKy6cJt4VFO9KnQ-enge005oXj-TosCJOfda9qZHJ92YZuDDuPRHLDhBiZxBHvMyHVS5Wn2aWNZIWY7DASKygQsG-npr3WMvjdNW4nD1suVbtObyNAbgzEB1Q6vvGHprcYePqyxjVdX_IMgAcacIpyQQr-4bs9jZvtlZ26oLMmR_j5F39627f82UZJX5HKIrFapO61mzPzbQ`,
    },
  }));

  return {
    link: ApolloLink.from([basic, auth, httpLink.create({ uri })]),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
