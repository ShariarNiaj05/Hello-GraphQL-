import { db } from "../../db.js";

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const resolvers = {
  Query: {
    products: () => db.products,
    product: (parent: any, args: { productId: string }, context: any) => {
      console.log({ parent }, { args }, { context });
      const result = db.products.find((pd) => pd.id === args.productId);
      return result;
    },
    categories: () => db.categories,
    category: (parent: any, args: { categoryId: string }, context: any) => {
      const result = db.categories.find(
        (category) => category.id === args.categoryId
      );
      return result;
    },
  },
  Product: {
    category: (parent: any, args: any, context: any) => {
      const result = db.categories.find(
        (category) => category.id === parent.categoryId
      );
      return result;
    },
  },
  Category: {
    products: (parent: any, args: any, context: any) => {
      const result = db.products.filter(
        (product) => product.categoryId === parent.id
      );
      return result;
    },
  },
};
