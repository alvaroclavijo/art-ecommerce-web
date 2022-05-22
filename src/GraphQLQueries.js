import { gql } from "@apollo/client";

export const FETCH_ALL_PRODUCTS = (
  minPrice,
  maxPrice,
  sortColumn,
  sortOrder,
  categories
) => {
  const categoriesCondition = (categories && categories.length > 0) ? `category: { _in: $categories },`: '';
  return gql`
  query ProductsQueryOrderByPriceAscNew($limit: Int!, $offset: Int!, $categories: [String]) {
    results: product(
      order_by: { ${sortColumn}: ${sortOrder} }
      limit: $limit
      offset: $offset
      where: { ${categoriesCondition} price: {_gte: ${minPrice}, _lte: ${maxPrice}} }
    ) {
      bestseller
      category
      currency
      description
      featured
      height
      image
      name
      price
      product_id
      recommendations
      size
      width
    }
    pageInfo: product_aggregate(
        where: { ${categoriesCondition} price: {_gte: ${minPrice}, _lte: ${maxPrice}} }
    ) {
      totalCount: aggregate {
        count(columns: product_id)
      }
    }
  }
`};

export const FETCH_FEATURED_PRODUCT = gql`
  query FeaturedProductQuery {
    results: product(limit: 1, where: {featured: {_eq: true}}) {
      bestseller
      category
      currency
      description
      featured
      height
      image
      name
      price
      product_id
      recommendations
      size
      width
    }
  }
`;


