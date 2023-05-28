import React from 'react';
import styles from "./styles/Table.module.css";




export default function Table({num}) {
  return (
    <div className={styles.container}>
        <h3>{num}</h3>
    </div>
  )
}
