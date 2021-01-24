import React from 'react';
import styles from './ColorField.module.css';

function ColorField({ color }) {
  return (
    <p className={styles.colorfield}>
      {color}
    </p>
  )
}

export default ColorField
