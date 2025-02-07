import { db } from "../../db";

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const resolvers = {
  Query: {
    products: () => db.products,
    product: (parent: any, args: { productId: string }, context: any) => {
      console.log({ parent }, { args }, { context });
      const result = db.products.find((pd) => pd.id === args.productId);
      console.log({ result });
    },
  },
};
