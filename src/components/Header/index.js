import styles from './styles.module.scss';
import logo from '../../assets/icons/logo.svg';
import shoppingCart from "../../assets/icons/shopping_cart.svg";
import { globalContext } from '../../App';
import React, { useContext } from 'react';
import ShoppingCartList from './ShoppingCartList';

const Header = () => {

  const { setIsCartVisible, cartProducts } = useContext(globalContext);

  function toggleCartVisibility(){
    setIsCartVisible(prev => !prev);
  }
  return (
    <header className={styles.header}>
        <img className={styles["header__logo"]} src={logo} alt="logo"/>
        <div className={styles["header__shopping-cart"]}>
          <img src={shoppingCart} alt="shopping-cart" onClick={toggleCartVisibility}/>
          {cartProducts.length > 0 && <label className={styles["cart__counter"]}>{cartProducts.length}</label>}
        </div>
        <ShoppingCartList closeCart = {toggleCartVisibility}/>
    </header>
  )
}

export default Header