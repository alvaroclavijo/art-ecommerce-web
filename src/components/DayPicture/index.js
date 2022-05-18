import React from "react";
import samurai from '../../assets/images/samurai_king_resting.svg';
import suggestedPic1 from "../../assets/images/suggestedPic1.svg";
import suggestedPic2 from "../../assets/images/suggestedPic2.svg";
import suggestedPic3 from "../../assets/images/suggestedPic3.svg";
import AddToCartBtn from "../AddToCartBtn";
import styles from "./styles.module.scss";

const DayPicture = () => {
  return (
    <section className={styles.dayPicture}>
      <h2 className={styles["dayPicture__name"]}>Samurai King Resting</h2>
      <div className={styles["dayPicture__button"]}>
        <AddToCartBtn/>
      </div>
      <div className={styles["dayPicture__image"]}>
        <img src={samurai}/>
        <h5 >Photo of the day</h5>
      </div>
      <div className={styles["dayPicture__about"]}>
        <h3 >About the Samurai King</h3>
        <h4 >Pets</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla risus
          mauris, imperdiet at mattis ac, aliquam sed sapien. Praesent sit amet
          dui lobortis ligula bibendum pharetra. Vestibulum rutrum euismod
          massa, nec volutpat dolor pulvinar ut. Nullam tincidunt commodo velit
          non feugiat. Nunc malesuada ipsum sit amet posuere mattis. Fusce
          ultrices nibh nec nulla mollis tincidunt. Nullam lacinia purus vel
          eros molestie, at rutrum lorem malesuada. Praesent lacinia ligula sit
          amet arcu aliquam, malesuada vestibulum sem euismod. Sed eget
          tincidunt ligula, ut dignissim erat.
        </p>
      </div>
      <div className={styles["flex-container"]}>
        <div className={styles["dayPicture__suggested-products"]}>
            <h3>People also buy</h3>
            <div className={styles["pictures-container"]}>
              <img src={suggestedPic1}/>
              <img src={suggestedPic2}/>
              <img src={suggestedPic3}/>
            </div>
        </div>
        <div className={styles["dayPicture__details"]}>
          <h3>Details</h3>
          <h4>Size: 1020 x 1020 pixel</h4>
          <h4>Size: 15 mb</h4>
        </div>
      </div>

    </section>
  );
};

export default DayPicture;
