import React from "react";
import { useDispatch } from 'react-redux';
import { cartActions } from "../../../../store/cart-slice"

import styles from "./styles.module.scss";

export const CartItem = ({ product }) => {

  const dispatch = useDispatch();

  const addAmountOfItem = () => {
    dispatch(cartActions.addItemToCart(product));
  }

  const substractAmountItem = () => {
    dispatch(cartActions.reduceItemQuantity(product.product_id));
  }

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(product.product_id));
  }
  return (
    <li className={styles.item}>
      <div className={styles["item__quantity"]}>
        <h3>{`x ${product.quantity}`}</h3>
      </div>
      <div className={styles["item__description"]}>
        <h3 className={styles["item__name"]}>{product.name}</h3>
        <h4 className={styles["item__price"]}>$ {product.totalPrice}</h4>
      </div>
      <img src={product?.image} alt={product?.name}/>
      <div className={styles["modify-cart-container"]}>
        <button onClick={addAmountOfItem}>+</button>
        <button onClick={substractAmountItem}>-</button>
        <button onClick={deleteItem}>DEL</button>
      </div>
    </li>
  );
};
