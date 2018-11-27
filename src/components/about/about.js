import React from 'react'
// import Container from '../layout/container'
import styles from './about.module.scss';
import glass from '../../images/glass.svg'
import Container from '../layout/container'

export default function about() {
  return (
    <div className={styles.about}>
      <Container>
        <img src={glass} alt={'Vidros'} className={styles.glasses} />
        <div>
          <h3>Trabalhamos no seguimento de Instalações Comerciais em Modulados de vidro temperado, principalmente no mercado de Salvador e interior da Bahia.</h3>
          <h4>Fornecemos elaboração gratuita de projeto (perspectiva e planta baixa), e o nosso diferencial no mercado está na qualidade do nosso produto. Atuamos com diversos materiais, a exemplo de MDF mesclado com vidro temperado, uma parceria nossa com a PROLOJA.</h4>
        </div>
      </Container>
    </div>
  )
}
