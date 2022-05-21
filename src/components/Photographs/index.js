import React, { useEffect, useState } from "react";

import sortingArrows from "../../assets/icons/sorting_arrows.svg";
import { P0_20, P100_200, P20_100, PM200 } from "../../utils/princeRangeFilters";
import FilterPhotographs from "./FilterPhotographs";
import PhotographsList from "./PhotographsList";
import { PRODUCTS } from "./Products";
import styles from "./styles.module.scss";

export const Photographs = () => {
  const [products, setProducts] = useState([]);
  const [categoriesFilters, setCategoriesFilter] = useState([]);
  const [priceRangeFilter, setPriceRangeFilter] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState();
  const [sortingColumn, setSortingColumn] = useState('')
  const [sortingOrder, setSorteWay] = useState('desc');
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, [page]);

  useEffect(() => {
    let filters = {
      categoriesFilters,sortingColumn,sortingOrder,minPrice,maxPrice
    }
    setPage(0);
    // fetchProducts();
  },[categoriesFilters,sortingColumn,sortingOrder,minPrice,maxPrice])

  function fetchProducts() {
    console.log('*****fetching products*****');
    setProducts(PRODUCTS);
  }

  function onChangeCategoriesHandler(e) {
      if(e.target.checked){
        setCategoriesFilter(prev => [...prev,e.target.name]);
      }else{
        let filters = [...categoriesFilters];
        let index = filters.indexOf(e.target.name);
        filters.splice(index,1);
        setCategoriesFilter(filters);
      }
  }

  function onChangePriceRangeHandler(e) {

    if(e.target.name === priceRangeFilter){
      setMinPrice(0);
      setMaxPrice(undefined);
      setPriceRangeFilter('');
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
        setMaxPrice(null);
        break;
      default:
        setMinPrice(0);
        setMaxPrice(null);
    }
  }

  function toggleOrder(){
    setSorteWay(prev => prev == 'desc' ? 'asc' : 'desc');
  }

  function onChangeSortHandler(e){
    setSortingColumn(e.target.value);
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
          <img src={sortingArrows} onClick={toggleOrder}/>
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
        />
      </div>
      <div className={styles["photographs__list"]}>
        <PhotographsList products={products} totalProducts={totalCount} page={page} changePage={(page) => updatePageNumber(page)}/>
      </div>
    </div>
  );
};
