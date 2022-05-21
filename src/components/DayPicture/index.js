import React, { useContext, useEffect, useState } from "react";
import AddToCartBtn from "../AddToCartBtn";
import { DAY_PICTURE_DATA } from "./dayPictureData";
import styles from "./styles.module.scss";
import { globalContext } from "../../App";

const DayPicture = () => {

  const [featuredProduct, setFeaturedProduct] = useState();
  const { setCartProducts, setIsCartVisible } = useContext(globalContext);

  useEffect(() => {
    fetchDayPicture();
  },[])

  function fetchDayPicture(){
    setFeaturedProduct(DAY_PICTURE_DATA);
  }

  function addProductToCart(){
    console.log("add button executed")
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
        <img src={featuredProduct?.image.src} alt={featuredProduct?.image.alt}/>
        <h5 >Photo of the day</h5>
      </div>
      <div className={styles["dayPicture__about"]}>
        <h3 >About the {featuredProduct?.name}</h3>
        <h4 >{featuredProduct?.category}</h4>
        <p>
          {featuredProduct?.details.description}
        </p>
      </div>
      <div className={styles["flex-container"]}>
        <div className={styles["dayPicture__suggested-products"]}>
            <h3>People also buy</h3>
            <div className={styles["pictures-container"]}>
              {featuredProduct?.details.recommendations.map((recommendation,index) => {
                return (
                <img key={index} src={recommendation.src} alt={recommendation.alt}/>)
              })}
            </div>
        </div>
        <div className={styles["dayPicture__details"]}>
          <h3>Details</h3>
          <h4>Size: {featuredProduct?.details.dimmentions.width} x {featuredProduct?.details.dimmentions.height} pixel</h4>
          <h4>Size: {featuredProduct?.details.size/1000} mb</h4>
        </div>
      </div>

    </section>
  );
};

export default DayPicture;
