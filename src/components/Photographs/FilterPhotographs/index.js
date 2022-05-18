import React from 'react';

import styles from './styles.module.scss'

const FilterPhotographs = () => {
  return (
      <div className={styles.filter}>
        <div className={styles["filter__section"]}>
            <h3>Category</h3>
            <ul className={styles["filter__section-list"]}>
                <div className={styles["filter__section-list-item"]}>
                    <input type="checkbox" name="people" id="people"/>
                    <label htmlFor='people' >People</label>
                </div>
                <div className={styles["filter__section-list-item"]}>
                    <input type="checkbox" name="premium" id="premium"/>
                    <label htmlFor='premium' >Premium</label>
                </div>
                <div className={styles["filter__section-list-item"]}>
                    <input type="checkbox" name="pets" id="pets"/>
                    <label htmlFor='pets' >Pets</label>
                </div>
                <div className={styles["filter__section-list-item"]}>
                    <input type="checkbox" name="food" id="food"/>
                    <label htmlFor='food' >Food</label>
                </div>
                <div className={styles["filter__section-list-item"]}>
                    <input type="checkbox" name="landmarks" id="landmarks"/>
                    <label htmlFor='landmarks' >Landmarks</label>
                </div>
                <div className={styles["filter__section-list-item"]}>
                    <input type="checkbox" name="cities" id="cities"/>
                    <label htmlFor='cities' >Cities</label>
                </div>
                <div className={styles["filter__section-list-item"]}>
                    <input type="checkbox" name="nature" id="nature"/>
                    <label htmlFor='nature' >Nature</label>
                </div>
            </ul>
        </div>
        <hr className='dividing-line'/>
        <div className={styles["filter__section"]}>
        <h3>Price Range</h3>
        <ul className={styles["filter__section-list"]}>
                <div className={styles["filter__section-list-item"]}>
                    <input type="checkbox" name="lowest" id="lowest"/>
                    <label htmlFor='lowest' >Lower than $20</label>
                </div>
                <div className={styles["filter__section-list-item"]}>
                    <input type="checkbox" name="medium" id="medium"/>
                    <label htmlFor='medium' >$20 - $100</label>
                </div>
                <div className={styles["filter__section-list-item"]}>
                    <input type="checkbox" name="high" id="high"/>
                    <label htmlFor='high' >$100 - $200</label>
                </div>
                <div className={styles["filter__section-list-item"]}>
                    <input type="checkbox" name="highest" id="highest"/>
                    <label htmlFor='highest' >More than $200</label>
                </div>
            </ul>
        </div>
      </div>
  )
}

export default FilterPhotographs