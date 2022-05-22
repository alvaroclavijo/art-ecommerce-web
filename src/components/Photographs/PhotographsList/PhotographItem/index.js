import React from 'react';
import AddToCartBtn from '../../../AddToCartBtn';

import dog from "../../../../assets/images/suggestedPic1.svg"

import styles from "./styles.module.scss";

export const PhotographItem = () => {
  return (
    <div className={styles.item}>
        <div className={styles.picture}>
            <h5>Best Seller</h5>
            <img src={dog}/>
            <div>
                <AddToCartBtn/>
            </div>
            
        </div>
        <h4>People</h4>
        <h2>Red Bench</h2>
        <h5>$3.89</h5>
    </div>
  )
}
