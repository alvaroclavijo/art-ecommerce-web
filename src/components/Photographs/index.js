import React, { useEffect, useState } from "react";

import sortingArrows from "../../assets/icons/sorting_arrows.svg";
import { FETCH_ALL_PRODUCTS, FETCH_CATEGOTIES } from "../../GraphQLQueries";
import { P0_20, P100_200, P20_100, PM200 } from "../../utils/princeRangeFilters";
import FilterPhotographs from "./FilterPhotographs";
import PhotographsList from "./PhotographsList";
import styles from "./styles.module.scss";
import { client } from "../../App";

export const Photographs = () => {

  const [isLoading, setIsLoading] = useState(false);

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [priceRangeFilter, setPriceRangeFilter] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(999999999);
  const [sortingColumn, setSortingColumn] = useState('name')
  const [sortingOrder, setSorteWay] = useState('asc');
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);

  const PAGE_SIZE = 6;

  useEffect(() => {
    fetchProducts();
  },[categories,sortingColumn,sortingOrder,minPrice,maxPrice,page])

  function fetchProducts() {
    let limit = PAGE_SIZE;
    let offset = (page - 1) * PAGE_SIZE;
    let productsQuery = FETCH_ALL_PRODUCTS(minPrice, maxPrice, sortingColumn, sortingOrder, categories);
    setIsLoading(true);
    client
      .query({
        query: productsQuery,
        variables: { limit, offset, categories }
      })
      .then((result) => {
        setProducts(result.data.results)
        setTotalCount(result.data.pageInfo.totalCount.count)
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }

  function fetchAllCategories(){
    client
    .query({
      query: FETCH_CATEGOTIES
    })
    .then((result) => {
      console.log(result.data.catefories);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  function onChangeCategoriesHandler(e) {
      if(e.target.checked){
        setCategories(prev => [...prev,e.target.name]);
      }else{
        let filters = [...categories];
        let index = filters.indexOf(e.target.name);
        filters.splice(index,1);
        setCategories(filters);
      }
      setPage(1);
  }

  function onChangePriceRangeHandler(e) {

    if(e.target.name === priceRangeFilter){
      setMinPrice(0);
      setMaxPrice(999999999);
      setPriceRangeFilter('');
      setPage(1);
      return;
    }

    setPriceRangeFilter(e.target.name);

    switch(e.target.name){
      case P0_20:
        setMinPrice(0);
        setMaxPrice(20);
        break;
      case P20_100:
        setMinPrice(20);
        setMaxPrice(100);
        break;
      case P100_200:
        setMinPrice(100);
        setMaxPrice(200);
        break;
      case PM200:
        setMinPrice(200);
        setMaxPrice(999999999);
        break;
      default:
        setMinPrice(0);
        setMaxPrice(999999999);
    }
    setPage(1);
  }

  function toggleOrder(){
    setSorteWay(prev => prev == 'desc' ? 'asc' : 'desc');
    setPage(1)
  }

  function onChangeSortHandler(e){
    setSortingColumn(e.target.value);
    setPage(1);
  }

  function updatePageNumber(page){
    setPage(page);
  }

  return (
    <div className={styles["photographs"]}>
      <div className={styles["photographs__title"]}>
        <h2>Photography /</h2>
        <h3> Premium Photos</h3>
      </div>
      <div className={styles["sorting-container"]}>
        <div className={styles["photographs__sorting"]}>
          <img src={sortingArrows} onClick={toggleOrder} alt="sorting-arrows"height={35} width={35} />
          <label>Sort By</label>
          <select name="sort" onChange={onChangeSortHandler}>
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
        </div>
      </div>
      <div className={styles["photographs__filtering"]}>
        <FilterPhotographs
          onChangeCategories={onChangeCategoriesHandler}
          onChangePriceRange={onChangePriceRangeHandler}
          selectedPriceFilter={priceRangeFilter}
          categories={categories}
        />
      </div>
      <div className={styles["photographs__list"]}>
        <PhotographsList products={products} totalProducts={totalCount} page={page} changePage={(page) => updatePageNumber(page)} isLoading={isLoading} />
      </div>
    </div>
  );
};
