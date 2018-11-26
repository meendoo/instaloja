import React from 'react'
// import Container from '../layout/container'
import styles from './callout.module.scss';

export default function callout() {
  return (
    <div className={styles.callout}>
      <h2 className={styles.title}>SÃO MAIS DE <em>15 ANOS</em><br/>DE EXPERIÊNCIA</h2>
    </div>
  )
}
