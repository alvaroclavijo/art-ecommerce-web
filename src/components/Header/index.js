import styles from './styles.module.scss';
import logo from '../../assets/icons/logo.svg';
import shoppingCart from "../../assets/icons/shopping_cart.svg"

import React from 'react';

const Header = () => {
  return (
    <header className={styles.header}>
        <img className={styles["header__logo"]} src={logo} alt="logo"/>
        <img className={styles["header__shopping-cart"]} src={shoppingCart} alt="shopping-cart"/>
    </header>
  )
}

export default Header