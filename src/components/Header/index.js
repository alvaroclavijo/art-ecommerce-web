import styles from './styles.module.scss';
import logo from '../../assets/icons/logo.svg';
import shoppingCart from "../../assets/icons/shopping_cart.svg";
import { globalContext } from '../../App';

import React, { useContext } from 'react';
import ShoppingCartList from './ShoppingCartList';

const Header = () => {

  const { setIsCartVisible } = useContext(globalContext);

  function toggleCartVisibility(){
    setIsCartVisible(prev => !prev);
  }
  return (
    <header className={styles.header}>
        <img className={styles["header__logo"]} src={logo} alt="logo"/>
        <img className={styles["header__shopping-cart"]} src={shoppingCart} alt="shopping-cart" onClick={toggleCartVisibility}/>
        <ShoppingCartList closeCart = {toggleCartVisibility}/>
    </header>
  )
}

export default Header