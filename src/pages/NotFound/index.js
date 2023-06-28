import React from 'react';
import {Link} from 'react-router-dom'

import styles from './styles.module.scss';
import { homePath } from '../../utils/routePaths';

const NotFound = () => {
  return (
    <div className={styles.container}>
        <h1>Page not found!</h1>
        <Link to={`${homePath}`}>
            <button className={styles.button}>Go to Home</button>
        </Link>

    </div>
  )
}

export default NotFound