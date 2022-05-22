import React, { useContext, useEffect, useState } from "react";
import AddToCartBtn from "../AddToCartBtn";
import { DAY_PICTURE_DATA } from "./dayPictureData";
import styles from "./styles.module.scss";
import { globalContext } from "../../App";
import { FETCH_FEATURED_PRODUCT } from "../../GraphQLQueries";
import { client } from "../../App";

const DayPicture = () => {

  const [featuredProduct, setFeaturedProduct] = useState();
  const { setCartProducts, setIsCartVisible } = useContext(globalContext);

  useEffect(() => {
    fetchDayPicture();
  },[])

  function fetchDayPicture(){
    let productsQuery = FETCH_FEATURED_PRODUCT;
    client
    .query({
      query: productsQuery
    })
    .then((result) => {
      let product = result.data.results;

      setFeaturedProduct(product[0]);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  function addProductToCart(){
    setCartProducts(prev => [...prev, featuredProduct]);
    setIsCartVisible(true);
  }

  return (
    <section className={styles.dayPicture}>
      <h2 className={styles["dayPicture__name"]}>{featuredProduct?.name}</h2>
      <div className={styles["dayPicture__button"]}>
        <AddToCartBtn onClick={addProductToCart}/>
      </div>
      <div className={styles["dayPicture__image"]}>
        <img src={featuredProduct?.image} alt={featuredProduct?.name}/>
        {/* <img src={"http://dummyimage.com/239x100.png/dddddd/000000"} alt={"day picture"}/> */}
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
              {featuredProduct?.recommendations.map((recommendation,index) => {
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

    </section>
  );
};

export default DayPicture;
