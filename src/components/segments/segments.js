import React from 'react'
import Container from '../layout/container'
import styles from './segments.module.scss';
import Tick from '../utils/tick';
import house from '../../images/house.svg'
import store from '../../images/store.svg'

export default function Segments(props) {
  return (
    <div className={styles.segments} id={props.id || null}>
        <Container className={styles.container}>
            <h3 className={styles.title}>CONHEÇA OS<br/><strong>PRINCIPAIS SEGMENTOS</strong><Tick/></h3>
            <div className={styles.commercial}>
                <div className={styles.headingWrapper}>
                    <h3 className={styles.sectionTitle}>Comercial</h3>
                    <img src={store} alt="Comercial ícone" className={styles.icon}/>
                </div>
                <ul className={styles.list}>
                    <li className={styles.item}>Farmácias</li>
                    <li className={styles.item}>Bombonieres</li>
                    <li className={styles.item}>Consultórios </li>
                    <li className={styles.item}>Escritórios </li>
                    <li className={styles.item}>Floriculturas </li>
                    <li className={styles.item}>Galerias </li>
                    <li className={styles.item}>Joalherias </li>
                    <li className={styles.item}>Loja de Aviamentos </li>
                    <li className={styles.item}>Loja de Bijuterias </li>
                    <li className={styles.item}>Loja de Brinquedos</li>
                    <li className={styles.item}>Loja de Celulares e Acessórios </li>
                    <li className={styles.item}>Loja de Cosméticos</li>
                    <li className={styles.item}>Loja de Informática </li>
                    <li className={styles.item}>Magazines </li>
                    <li className={styles.item}>Papelarias </li>
                    <li className={styles.item}>Shoppings </li>
                    <li className={styles.item}>Etc.</li>
                </ul>
            </div>
            <div className={styles.residencial}>
                <div className={styles.headingWrapper}>
                    <h3 className={styles.sectionTitle}>Residencial</h3>
                    <img src={house} alt="Residencial ícone" className={styles.icon}/>
                </div>
                <ul className={styles.list}>
                    <li className={styles.item}>Box p/ banheiros</li>
                    <li className={styles.item}>Espelhos</li>
                    <li className={styles.item}>Portas</li>
                    <li className={styles.item}>Prateleiras</li>
                    <li className={styles.item}>Janelas</li>
                    <li className={styles.item}>Tampo de Mesa</li>
                    <li className={styles.item}>Etc.</li>
                </ul>
            </div>
        </Container>
    </div>
  )
}
