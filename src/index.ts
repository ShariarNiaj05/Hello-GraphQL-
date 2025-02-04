import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  type Query {
id: ID!
name: String
description: String
price: Float
quantity: Int
onStock: Boolean
categoryId: ID!

  id: "2a089dca-d882-4305-9e25-d1dfeb93fd12",
    name: "Basketball",
    image: "basketball-image.jpg",
    description:
      "An official size basketball for both indoor and outdoor play.",
    price: 29.99,
    quantity: 30,
    onStock: true,
    categoryId: "4f7f61e5-96c2-445d-80fb-79f58e3d061b",
  }

`;

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {},
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
