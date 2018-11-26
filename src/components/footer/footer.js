import React from 'react'
import styles from './footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <p>Instaloja Instalações Comerciais® - {Date.now('yyyy')}</p>
        <p>Horários de funcionamento: Segunda à sexta 8h-18h e sábados 10h-14h</p>
    </footer>
  )
}
