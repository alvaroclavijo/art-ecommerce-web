import React, { useContext } from 'react';
import AddToCartBtn from '../../../AddToCartBtn';

import styles from "./styles.module.scss";
import { globalContext } from '../../../../App';

export const PhotographItem = ({ product }) => {

  const { setCartProducts, setIsCartVisible } = useContext(globalContext);

  function addProductToCart(){
    setCartProducts(prev => [...prev, product]);
    setIsCartVisible(true);
  }

  return (
    <div className={styles.item}>
        <div className={styles.picture}>
            {product?.bestseller && <h5>Best Seller</h5>}
            <img src={product?.image.src} alt={product?.image.alt}/>
            <div>
                <AddToCartBtn onClick={addProductToCart}/>
            </div>
            
        </div>
        <h4>{product?.category}</h4>
        <h2>{product?.name}</h2>
        <h5>${product?.price}</h5>
    </div>
  )
}
