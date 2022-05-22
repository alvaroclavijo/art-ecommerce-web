import React from 'react';
import styles from './styles.module.scss';


const AddToCartBtn = ({onClick, product}) => {

  
  return (
    <button className={styles.button} onClick={onClick}>Add to cart</button>
  )
}

export default AddToCartBtn