import { gql } from "@apollo/client";

export const FETCH_ALL_PRODUCTS = (minPrice, maxPrice, sortColumn, sortOrder)=>gql`
  query ProductsQueryOrderByPriceAscNew($limit: Int!, $offset: Int!, $categories: [String]!) {
    results: products(
      order_by: { ${sortColumn}: ${sortOrder} }
      limit: $limit
      offset: $offset
      where: { category: { _in: $categories }, price: {_gte: ${minPrice}, _lte: ${maxPrice}} }
    ) {
      name
      price
      product_id
      featured
      details
      currency
      category
      bestselleer
      image
    }
    pageInfo: products_aggregate(
        where: { category: { _in: $categories }, price: {_gte: ${minPrice}, _lte: ${maxPrice}} }
    ) {
      totalCount: aggregate {
        count(columns: product_id)
      }
    }
  }
`;

