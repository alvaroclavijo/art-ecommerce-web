import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { uiActions } from '../../store/ui-slice';

import styles from './styles.module.scss';
import logo from '../../assets/icons/logo.svg';
import shoppingCart from "../../assets/icons/shopping_cart.svg";
import ShoppingCartList from './ShoppingCartList';

const Header = () => {

  const dispatch = useDispatch();
  const cartProducts = useSelector(state => state.shoppingCart.items);
  const cartItemsAmount = useSelector(state => state.shoppingCart.totalQuantity)

  function toggleCartVisibility(){
    dispatch(uiActions.toggle());
  }
  return (
    <header className={styles.header}>
        <p className={styles["header__logo"]}>ArtCom</p>
        <div className={styles["header__shopping-cart"]}>
          <img src={shoppingCart} alt="shopping-cart" onClick={toggleCartVisibility} width={54} height={54}/>
          {cartProducts.length > 0 && <label className={styles["cart__counter"]}>{cartItemsAmount}</label>}
        </div>
        <ShoppingCartList closeCart = {toggleCartVisibility}/>
    </header>
  )
}

export default Header