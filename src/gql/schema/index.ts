// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const typeDefs = `#graphql
  type Product {
id: ID!
name: String
image: String
description: String
price: Float
quantity: Int
onStock: Boolean
categoryId: String
  }


  type Category {
  
  }


  type Query {
  products: [Product]
  product(productId: ID!): Product
  category: [Category]
  category(categoryId: ID!): Category
  }

`;
