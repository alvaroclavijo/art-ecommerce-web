import { globalContext } from "../../../App";
import { PhotographItem } from "./PhotographItem";
import { Pagination } from "@mui/material";

import styles from "./styles.module.scss";
import Loading from "../../Loading";

const PhotographsList = ({ products, totalProducts, page, changePage, isLoading }) => {

  function onChangePageHandler(event, value) {
    changePage(value);
  }

  return (
    <div className={styles["main-container"]}>
      <div className={styles.photos}>
        {isLoading ? (
          <Loading />
        ) : (
          products?.map((product) => (
            <PhotographItem key={product.product_id} product={product}/>
          ))
        )}
      </div>

      <div className={styles["pagination"]}>
        <Pagination
          count={Math.ceil(totalProducts / 6)}
          page={page}
          size="large"
          onChange={onChangePageHandler}
          boundaryCount={2}
        ></Pagination>
      </div>
    </div>
  );
};

export default PhotographsList;
