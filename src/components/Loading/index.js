import React, { useContext } from 'react';

import styles from "./styles.module.scss";
import { globalContext } from '../../App';

const Loading = () => {

    const { isLoading } = useContext(globalContext);

    if(!isLoading){
        return;
    }
  return (
    <div className={styles.loading}>
      <div className={styles["loading__spinner"]}></div>
    </div>
  );
}

export default Loading