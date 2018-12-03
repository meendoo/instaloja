import React from 'react'
import Container from '../layout/container'
import styles from './segments.module.scss';
import Tick from '../utils/tick';
import house from '../../images/house.svg'
import store from '../../images/store.svg'
import faq from '../../images/faq.svg'

const COMMERCIAL_LIST = [
    "Farmácias",
    "Bombonieres",
    "Consultórios",
    "Escritórios",
    "Floriculturas",
    "Galerias",
    "Joalherias",
    "Loja de Aviamentos",
    "Loja de Bijuterias",
    "Loja de Brinquedos",
    "Loja de Celulares e Acessórios",
    "Loja de Cosméticos",
    "Loja de Informática",
    "Magazines",
    "Papelarias",
    "Shoppings",
    "Etc."
];

const RESIDENTIAL_LIST = [
    "Box p/ banheiros",
    "Espelhos",
    "Portas",
    "Prateleiras",
    "Janelas",
    "Tampo de Mesa",
    "Etc."
]

export default function Segments(props) {
  return (
    <div className={styles.segments} id={props.id || null}>
        <Container className={styles.container}>
            <h3 className={styles.title}>CONHEÇA OS<br/><strong>PRINCIPAIS SEGMENTOS</strong><Tick centered/></h3>
            <div className={styles.cards}>
                <div className={styles.commercial}>
                    <div className={styles.headingWrapper}>
                        <img src={store} alt="Comercial ícone" className={styles.icon}/>
                        <h3 className={styles.sectionTitle}>Comercial</h3>
                    </div>
                    <ul className={styles.list}>
                        {COMMERCIAL_LIST.map((item, i) => <li key={`${item+i}`} className={styles.item}>{item}</li>)}
                    </ul>
                </div>
                <div className={styles.residencial}>
                    <div className={styles.headingWrapper}>
                        <img src={house} alt="Residencial ícone" className={styles.icon}/>
                        <h3 className={styles.sectionTitle}>Residencial</h3>
                    </div>
                    <ul className={styles.list}>
                        {RESIDENTIAL_LIST.map((item, i) => <li key={`${item+i}`} className={styles.item}>{item}</li>)}
                    </ul>
                </div>
            </div>
            <div className={styles.banner}>
                <img src={faq} alt="Pergunta" className={styles.bannerIcon}/>
                <p>Quer fazer um projeto em outro segmento? Não tem problema, <a href="#contato">fale com a gente</a>.</p>
            </div>
        </Container>
    </div>
  )
}