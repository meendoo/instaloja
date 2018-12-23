import React from 'react'
import styles from './footer.module.scss'
import Container from '../layout/container'

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <Container>
          <p>Instaloja Instalações Comerciais® - { Array.from(Date().split(' '))[3] }</p>
          <p>Horários de funcionamento: SEG À SEX 8h-18h e SÁB 10h-14h</p>
        </Container>
    </footer>
  )
}
