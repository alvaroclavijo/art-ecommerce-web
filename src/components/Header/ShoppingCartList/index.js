import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import closeIcon from "../../../assets/icons/close_icon.svg";
import { CartItem } from "./CartItem";
import styles from "./styles.module.scss";
import { globalContext } from "../../../App";
import { cartActions } from "../../../store/cart-slice";

const ShoppingCartList = ({ closeCart }) => {

  const showCart = useSelector(state => state.ui.isCartVisible);
  const cartProducts = useSelector(state => state.shoppingCart.items);

  const dispatch = useDispatch();
  if (!showCart) {
    return;
  }

  function clearCartProducts(){
    dispatch(cartActions.removeAllItems());
    closeCart();
  }

  return (
    <div className={styles["shopping-cart"]}>
      <img
        className={styles["shopping-cart__close"]}
        src={closeIcon}
        onClick={closeCart}
        alt="shopping-cart"
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
