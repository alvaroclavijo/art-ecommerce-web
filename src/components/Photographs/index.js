import React, { useEffect, useState } from "react";

import sortingArrows from "../../assets/icons/sorting_arrows.svg";
import { P0_20, P100_200, P20_100, PM200 } from "../../utils/princeRangeFilters";
import FilterPhotographs from "./FilterPhotographs";
import PhotographsList from "./PhotographsList";
import { PRODUCTS } from "./Products";
import styles from "./styles.module.scss";

export const Photographs = () => {
  const [products, setProducts] = useState();
  const [categoriesFilters, setCategoriesFilter] = useState([]);
  const [priceRangeFilter, setPriceRangeFilter] = useState('');
  const [sorter, setSorter] = useState('')

  useEffect(() => {
    fetchProducts();
  }, []);

  function fetchProducts() {
    setProducts(PRODUCTS);
  }

  function onChangeCategoriesHandler(e) {
      if(e.target.checked){
          categoriesFilters.push(e.target.name);
      }else{
          let index = categoriesFilters.indexOf(e.target.name);
          categoriesFilters.splice(index,1);
      }
      filterByCategories(categoriesFilters);
  }

  function onChangePriceRangeHandler(e) {
    let min;
    let max;

    if(e.target.name === priceRangeFilter){
      setPriceRangeFilter('');
      filterByPrice(0,undefined);
      return;
    }

    setPriceRangeFilter(e.target.name);

    switch(e.target.name){
      case P0_20:
        min=0;
        max=20;
        break;
      case P20_100:
        min=20;
        max=100;
        break;
      case P100_200:
        min=100;
        max=200;
        break;
      case PM200:
        min=200;
        max=undefined
        break;
      default:
        min=0;
        max=undefined;
    }
    filterByPrice(min,max);
  }

  function onChangeSortHandler(e){
    sortProductsBy(e.target.value);
  }

  function filterByPrice(min, max){
    console.log(min,max);
  }

  function filterByCategories(selectedCategories){
    console.log(selectedCategories);
  }

  function sortProductsBy(option){
    console.log(option);
  }
  
  return (
    <div className={styles["photographs"]}>
      <div className={styles["photographs__title"]}>
        <h2>Photography /</h2>
        <h3> Premium Photos</h3>
      </div>

      <div className={styles["photographs__sorting"]}>
        <img src={sortingArrows} />
        <label>Sort By</label>
        <select name="sort" onChange={onChangeSortHandler}>
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
      </div>
      <div className={styles["photographs__filtering"]}>
        <FilterPhotographs
          onChangeCategories={onChangeCategoriesHandler}
          onChangePriceRange={onChangePriceRangeHandler}
          selectedPriceFilter={priceRangeFilter}
        />
      </div>
      <div className={styles["photographs__list"]}>
        <PhotographsList products={products} />
      </div>
    </div>
  );
};
