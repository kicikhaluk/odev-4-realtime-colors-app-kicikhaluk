import React from 'react';
import styles from './ColorChanger.module.css';

function ColorChanger({ color, colorChangeHandler }) {
  return <input className={styles.colorChanger} type="color" onChange={colorChangeHandler} value={color} />;
}

export default ColorChanger;
