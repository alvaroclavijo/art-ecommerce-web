import React from 'react';

import sortingArrows from "../../assets/icons/sorting_arrows.svg";
import FilterPhotographs from './FilterPhotographs';
import PhotographsList from './PhotographsList';
import styles from './styles.module.scss';

export const Photographs = () => {
  return (
    <div className={styles["photographs"]}>
        <div className={styles["photographs__title"]}>
            <h2>Photography /</h2>
            <h3> Premium Photos</h3>
        </div>

        <div className={styles["photographs__sorting"]}>
            <img src={sortingArrows}/>
            <label>Sort By</label>
            <select name="sort">
                <option value="name">Name</option>
                <option value="price">Price</option>
            </select>
        </div>
        <div className={styles["photographs__filtering"]}>
            <FilterPhotographs/>
        </div>
        <div className={styles["photographs__list"]}>
            <PhotographsList/>
        </div>
    </div>
  )
}
