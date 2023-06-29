import React from 'react';

import styles from "./styles.module.scss";

const Loading = () => {

  return (
    <div className={styles.loading}>
      <div className={styles["loading__spinner"]}></div>
    </div>
  );
}

export default Loading