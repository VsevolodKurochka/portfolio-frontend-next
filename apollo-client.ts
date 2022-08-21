import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({
  uri: 'http://localhost:1337/graphql'
})

const client = new ApolloClient({
  ssrMode: typeof window === "undefined",
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;