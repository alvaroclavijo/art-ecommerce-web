import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AddToCartBtn from "../AddToCartBtn";
import styles from "./styles.module.scss";
import { FETCH_FEATURED_PRODUCT } from "../../GraphQLQueries";
import { client } from "../../App";
import { uiActions } from "../../store/ui-slice";
import { cartActions } from "../../store/cart-slice";
import Loading from "../Loading";

const DayPicture = () => {

  const dispatch = useDispatch();

  const [featuredProduct, setFeaturedProduct] = useState();
  const [ isLoading, setIsLoading ] = useState(false)

  useEffect(() => {
    fetchDayPicture();
  },[])

  function fetchDayPicture(){
    setIsLoading(true)
    let productsQuery = FETCH_FEATURED_PRODUCT;
    client
    .query({
      query: productsQuery
    })
    .then((result) => {
      let product = result.data.results;
      setIsLoading(false);
      setFeaturedProduct(product[0]);
    })
    .catch((error) => {
      console.log(error);
      setIsLoading(false);
    });
  }

  function addProductToCart(){
    dispatch(cartActions.addItemToCart(featuredProduct));
    dispatch(uiActions.showCart())
  }

  return (
    <>
      {isLoading && <Loading/>}
      {featuredProduct &&<section className={styles.dayPicture}>
        <h2 className={styles["dayPicture__name"]}>{featuredProduct?.name}</h2>
        <div className={styles["dayPicture__button"]}>
          <AddToCartBtn onClick={addProductToCart}/>
        </div>
        <div className={styles["dayPicture__image"]}>
          <img src={featuredProduct?.image} alt={featuredProduct?.name}/>
          <h5 >Photo of the day</h5>
        </div>
        <div className={styles["dayPicture__about"]}>
          <h3 >About the {featuredProduct?.name}</h3>
          <h4 >{featuredProduct?.category}</h4>
          <p>
            {featuredProduct?.description}
          </p>
        </div>
        <div className={styles["flex-container"]}>
          <div className={styles["dayPicture__suggested-products"]}>
              <h3>People also buy</h3>
              <div className={styles["pictures-container"]}>
                {featuredProduct?.recommendations?.map((recommendation,index) => {
                  return (
                  <img key={index} src={recommendation.src} alt={recommendation.alt}/>)
                })}
              </div>
          </div>
          <div className={styles["dayPicture__details"]}>
            <h3>Details</h3>
            <h4>Size: {featuredProduct?.width} x {featuredProduct?.height} pixel</h4>
            <h4>Size: {featuredProduct?.size} mb</h4>
          </div>
        </div>
      </section>}
    </>
  );
};

export default DayPicture;
