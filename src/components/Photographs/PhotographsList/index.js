import React from 'react';
import { PhotographItem } from './PhotographItem';
import prevPageIcon from "../../../assets/icons/prev_icon.svg";
import nextPageIcon from "../../../assets/icons/next_icon.svg"

import styles from "./styles.module.scss";

const PhotographsList = () => {
  return (
    <div className={styles["main-container"]} >
      <div className={styles.photos}>
          <PhotographItem/>
          <PhotographItem/>
          <PhotographItem/>
          <PhotographItem/>
          <PhotographItem/>
          <PhotographItem/>
      </div>
      <div className={styles["pagination"]}>
        <img src={prevPageIcon}/>
        <label>1</label>
        <label className={styles.activePage}>2</label>
        <label>3</label>
        <label>4</label>
        <img src={nextPageIcon}/>
      </div>
    </div>

  )
}

export default PhotographsList