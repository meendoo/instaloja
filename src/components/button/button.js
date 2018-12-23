import React from 'react'
import { Link } from 'gatsby'
import styles from './button.module.scss'

export default function Button({children, to, inverse}) {
  return (
    <>
      {to
        ? <Link className={`${styles.button} ${inverse ? styles.inverse : ''}`} to={to}>{children}</Link>
        : <button className={`${styles.button} ${inverse ? styles.inverse : ''}`}>{children}</button>
      }
    </>
  )
}
