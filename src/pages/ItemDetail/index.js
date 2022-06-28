import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FETCH_PRODUCT_BY_ID } from '../../GraphQLQueries';
import { client, globalContext } from '../../App';

import styles from './styles.module.scss';
import AddToCartBtn from '../../components/AddToCartBtn';
import Loading from '../../components/Loading';
import { cartActions } from '../../store/cart-slice';
import { uiActions } from '../../store/ui-slice';

const ItemDetail = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const { isLoading, setIsLoading } = useContext(globalContext);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchProductById(itemId)
  }, [])

  const fetchProductById = (id) => {
    setIsLoading(true);
    let productsQuery = FETCH_PRODUCT_BY_ID;
    client
    .query({
      query: productsQuery,
      variables: {product_id:itemId}
    })
    .then((result) => {
      let product = result.data.product[0];
      setIsLoading(false);

      setProduct(product);
    })
    .catch((error) => {
      console.log(error);
      setIsLoading(false);
    });
  }

  const addToCart = () => {
    dispatch(cartActions.addItemToCart(product));
    dispatch(uiActions.showCart())
  }

  return (
    <>
     {isLoading && <Loading/>}
     {product && <div className={styles.item}>
          <Link to="/welcome"> &#x21e6; Back</Link>
          <img src={product.image}/>
          <div className={styles.info}>
            <div className={styles["info-field"]}>
              <label>Name</label>
              <h3>{product.name}</h3>
            </div>
            <div className={styles["info-field"]}>
              <label>Category</label>
              <h3>{product.category}</h3>
            </div>
            <div className={styles["info-field"]}>
              <label>Description</label>
              <h3>{product.description}</h3>
            </div>
            <div className={styles["info-field"]}>
              <label>Dimensions</label>
              <h3>{`${product.width} x ${product.height}`}</h3>
            </div>
            <div className={styles["info-field"]}>
              <label>Size</label>
              <h3>{product.size}</h3>
            </div>
            <div className={styles["info-field"]}>
              <label>Price</label>
              <h3>$  {product.price}</h3>
            </div>
            <AddToCartBtn onClick={addToCart}/>
          </div>
      </div> }
      {!product && !isLoading && <h1 className={styles.notFound}>Product not found!</h1>}
    </>

  )
}

export default ItemDetail;