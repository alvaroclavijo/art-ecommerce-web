import React from 'react';
import {Link} from 'react-router-dom'

import styles from './styles.module.scss';

const NotFound = () => {
  return (
    <div className={styles.container}>
        <h1>Page not found!</h1>
        <Link to="/welcome">
            <button className={styles.button}>Go to Home</button>
        </Link>

    </div>
  )
}

export default NotFound