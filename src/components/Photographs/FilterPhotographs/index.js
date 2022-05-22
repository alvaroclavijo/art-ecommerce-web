import React from "react";

import { PEOPLE, FOOD, CITIES, LANDMARKS, NATURE, PETS, PREMIUM } from "../../../utils/categoryOptions";
import { P0_20, P20_100, P100_200, PM200 } from "../../../utils/princeRangeFilters";
import styles from "./styles.module.scss";

const FilterPhotographs = ({ onChangeCategories, onChangePriceRange, selectedPriceFilter }) => {
  return (
    <div className={styles.filter}>
      <div className={styles["filter__section"]}>
        <h3>Category</h3>
        <ul className={styles["filter__section-list"]}>
          <div className={styles["filter__section-list-item"]}>
            <input type="checkbox" name={PEOPLE} id={PEOPLE} onChange={onChangeCategories}/>
            <label htmlFor={PEOPLE}>{PEOPLE}</label>
          </div>
          <div className={styles["filter__section-list-item"]}>
            <input type="checkbox" name={PREMIUM} id={PREMIUM} onChange={onChangeCategories}/>
            <label htmlFor={PREMIUM}>{PREMIUM}</label>
          </div>
          <div className={styles["filter__section-list-item"]}>
            <input type="checkbox" name="pets" id={PETS} onChange={onChangeCategories}/>
            <label htmlFor={PETS}>{PETS}</label>
          </div>
          <div className={styles["filter__section-list-item"]}>
            <input type="checkbox" name={FOOD} id={FOOD} onChange={onChangeCategories}/>
            <label htmlFor={FOOD}>{FOOD}</label>
          </div>
          <div className={styles["filter__section-list-item"]}>
            <input type="checkbox" name={LANDMARKS} id={LANDMARKS} onChange={onChangeCategories}/>
            <label htmlFor={LANDMARKS}>{LANDMARKS}</label>
          </div>
          <div className={styles["filter__section-list-item"]}>
            <input type="checkbox" name={CITIES} id={CITIES} onChange={onChangeCategories}/>
            <label htmlFor={CITIES}>{CITIES}</label>
          </div>
          <div className={styles["filter__section-list-item"]}>
            <input type="checkbox" name={NATURE} id={NATURE} onChange={onChangeCategories}/>
            <label htmlFor={NATURE}>{NATURE}</label>
          </div>
        </ul>
      </div>
      <hr className="dividing-line" />
      <div className={styles["filter__section"]}>
        <h3>Price Range</h3>
        <ul className={styles["filter__section-list"]}>
          <div className={styles["filter__section-list-item"]}>
            <input type="checkbox" name={P0_20} id={P0_20} checked={selectedPriceFilter === P0_20} onChange={onChangePriceRange}/>
            <label htmlFor={P0_20}>Lower than $20</label>
          </div>
          <div className={styles["filter__section-list-item"]}>
            <input type="checkbox" name={P20_100} id={P20_100} checked={selectedPriceFilter === P20_100} onChange={onChangePriceRange}/>
            <label htmlFor={P20_100}>$20 - $100</label>
          </div>
          <div className={styles["filter__section-list-item"]}>
            <input type="checkbox" name={P100_200} checked={selectedPriceFilter === P100_200} id={P100_200} onChange={onChangePriceRange}/>
            <label htmlFor={P100_200}>$100 - $200</label>
          </div>
          <div className={styles["filter__section-list-item"]}>
            <input type="checkbox" name={PM200} id={PM200} checked={selectedPriceFilter === PM200} onChange={onChangePriceRange}/>
            <label htmlFor={PM200}>More than $200</label>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default FilterPhotographs;
