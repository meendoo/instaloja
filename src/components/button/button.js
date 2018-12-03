import React from 'react'
import { Link } from 'gatsby'
import styles from './button.module.scss'

export default function Button(props) {
  return (
    <>
      {props.to
        ? <Link className={`${styles.button} ${props.inverse ? styles.inverse : ''}`} to={props.to}>{props.children}</Link>
        : <button className={`${styles.button} ${props.inverse ? styles.inverse : ''}`}>{props.children}</button>
      }
    </>
  )
}
