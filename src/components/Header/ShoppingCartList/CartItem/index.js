import React from "react";

import pic from "../../../../assets/images/samurai_king_resting.svg";
import styles from "./styles.module.scss";

export const CartItem = ({ product }) => {
  return (
    <li className={styles.item}>
      <div className={styles["item__description"]}>
        <h3 className={styles["item__name"]}>{product.name}</h3>
        <h4 className={styles["item__price"]}>$ {product.price}</h4>
      </div>
      {/* TODO INTEGRATE IMAGES WITH FETCHED DATA , ERASE THE FOLLOWING CODE AND UNCOMMMENT THE NEXT ONE*/}
      <img src={"http://dummyimage.com/226x100.png/cc0000/ffffff"} alt={"what ever"} />
      {/* <img src={product?.src} alt={product?.alt}/> */}
    </li>
  );
};
