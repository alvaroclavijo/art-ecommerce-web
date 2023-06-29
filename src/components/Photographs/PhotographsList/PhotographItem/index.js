import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import AddToCartBtn from "../../../AddToCartBtn";
import styles from "./styles.module.scss";
import { uiActions } from "../../../../store/ui-slice";
import { cartActions } from "../../../../store/cart-slice";
import { productsPath } from "../../../../utils/routePaths";

export const PhotographItem = ({ product }) => {
  const dispatch = useDispatch();

  function addProductToCart() {
    dispatch(cartActions.addItemToCart(product));
    dispatch(uiActions.showCart());
  }

  return (
    <div className={styles.item}>
      <div className={styles.picture}>
        <Link to={`${productsPath}/${product.product_id}`}>
          {product?.bestseller && <h5>Best Seller</h5>}
          <img src={product?.image} alt={product?.name} />
        </Link>
        <div>
          <AddToCartBtn onClick={addProductToCart} />
        </div>
      </div>
      <Link to={`${productsPath}/${product.product_id}`}>
        <h4>{product?.category}</h4>
        <h2>{product?.name}</h2>
        <h5>${product?.price}</h5>
      </Link>
    </div>
  );
};
