import React from "react";

import styles from "./styles.module.scss";

export const CartItem = ({ product }) => {
  return (
    <li className={styles.item}>
      <div className={styles["item__description"]}>
        <h3 className={styles["item__name"]}>{product.name}</h3>
        <h4 className={styles["item__price"]}>$ {product.totalPrice}</h4>
      </div>
      <img src={product?.image} alt={product?.name}/>
    </li>
  );
};
