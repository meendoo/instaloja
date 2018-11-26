import React from 'react'
import { Link } from 'gatsby'
import styles from './button.module.scss'

export default function Button(props) {
  return (
    <Link className={`${styles.button} ${props.inverse ? styles.inverse : ''}`} to={props.to}>{(props.title).toUpperCase()}</Link>
  )
}
