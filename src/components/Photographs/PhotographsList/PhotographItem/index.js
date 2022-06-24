import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import AddToCartBtn from '../../../AddToCartBtn';
import styles from "./styles.module.scss";
import { globalContext } from '../../../../App';
import { uiActions } from '../../../../store/ui-slice';

export const PhotographItem = ({ product }) => {

  const dispatch = useDispatch()

  const { setCartProducts } = useContext(globalContext);

  function addProductToCart(){
    setCartProducts(prev => [...prev, product]);
    dispatch(uiActions.toggle())
  }

  return (
    <div className={styles.item}>
        <div className={styles.picture}>
            {product?.bestseller && <h5>Best Seller</h5>}
            <img src={product?.image} alt={product?.name}/>
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
