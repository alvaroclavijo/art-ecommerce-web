import React from 'react';
import { PhotographItem } from './PhotographItem';
import { Pagination } from '@mui/material';

import styles from "./styles.module.scss";

const PhotographsList = ({ products, totalProducts, page, changePage }) => {

  function onChangePageHandler(event, value){
    changePage(value);
  }

  return (
    <div className={styles["main-container"]} >
      <div className={styles.photos}>
        {products?.map((product,index) => <PhotographItem key={index} product={product}/>)}
      </div>
      <div className={styles["pagination"]}>
        <Pagination count={10} page={page} size="large" onChange={onChangePageHandler} boundaryCount={2}></Pagination>
      </div>
    </div>

  )
}

export default PhotographsList