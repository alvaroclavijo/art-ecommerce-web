import React, { useContext } from "react";

import closeIcon from "../../../assets/icons/close_icon.svg";
import { CartItem } from "./CartItem";
import styles from "./styles.module.scss";
import { globalContext } from "../../../App";

const ShoppingCartList = ({ closeCart }) => {
  const { isCartVisible, cartProducts, setCartProducts } = useContext(globalContext);

  if (!isCartVisible) {
    return;
  }

  function clearCartProducts(){
    setCartProducts([]);
    closeCart();
  }

  return (
    <div className={styles["shopping-cart"]}>
      <img
        className={styles["shopping-cart__close"]}
        src={closeIcon}
        onClick={closeCart}
      />
      <ul className={styles["shopping-cart__products"]}>
        {cartProducts.length > 0 ? (
          cartProducts.map((product) => <CartItem key={product.product_id} product={product} />)
        ) : (
          <h5 className={styles["cart-empty-message"]}>Shopping Cart Empty</h5>
        )}
      </ul>
      <button onClick={clearCartProducts}>Clear</button>
    </div>
  );
};

export default ShoppingCartList;
