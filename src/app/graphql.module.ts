import { NgModule } from '@angular/core';
import {
  ApolloClientOptions,
  ApolloLink,
  InMemoryCache,
} from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { environment } from '@env';
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
      Authorization: `Bearer ${environment.graphqlToken}`,
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
