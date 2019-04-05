import React, { Component } from 'react';
import Container from '../layout/container';
import styles from './segments.module.scss';
import { Tick } from '../utils';
import house from '../../images/house.svg';
import store from '../../images/store.svg';
import faq from '../../images/faq.svg';
import { TweenMax, Power2 } from 'gsap/all';
import { Tween } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';
import { Link } from 'gatsby';
require('gsap/ScrollToPlugin');

const COMMERCIAL_LIST = [
  'Farmácias',
  'Bombonieres',
  'Consultórios',
  'Escritórios',
  'Floriculturas',
  'Galerias',
  'Joalherias',
  'Loja de Aviamentos',
  'Loja de Bijuterias',
  'Loja de Brinquedos',
  'Loja de Celulares e Acessórios',
  'Loja de Cosméticos',
  'Loja de Informática',
  'Magazines',
  'Papelarias',
  'Shoppings',
  'Etc.',
];

const RESIDENTIAL_LIST = [
  'Box p/ banheiros',
  'Espelhos',
  'Portas',
  'Prateleiras',
  'Janelas',
  'Tampo de Mesa',
  'Etc.',
];

export default class Segments extends Component {
  scrollToLink = e => {
    e.preventDefault();
    if (document.querySelector(e.target.hash)) {
      TweenMax.to(window, 1, {
        scrollTo: {
          y: e.target.hash,
          offsetY:
            e.target.hash === '#empresa' && window.innerWidth < 768 ? '50' : 0,
        },
        ease: Power2.easeOut,
      });
    }
  };

  render() {
    return (
      <div className={styles.segments} id={this.props.id || null}>
        <Container className={styles.container}>
          <h3 className={styles.title}>
            CONHEÇA OS
            <br />
            <strong>PRINCIPAIS SEGMENTOS</strong>
            <Tick centered />
          </h3>
          <div className={styles.cards}>
            <Controller>
              <Scene
                triggerElement={`.${styles.commercial}`}
                reverse={false}
                offset={-50}
                duration={300}
              >
                {progress => (
                  <Tween
                    from={{
                      x: '-100%',
                      autoAlpha: 0,
                    }}
                    ease="Power2"
                    totalProgress={progress}
                    paused
                  >
                    <div className={styles.commercial}>
                      <div className={styles.headingWrapper}>
                        <img
                          src={store}
                          alt="Comercial ícone"
                          className={styles.icon}
                        />
                        <h3 className={styles.sectionTitle}>Comercial</h3>
                      </div>
                      <ul className={styles.list}>
                        {COMMERCIAL_LIST.map((item, i) => (
                          <li key={`${item + i}`} className={styles.item}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Tween>
                )}
              </Scene>
              <Scene
                triggerElement={`.${styles.residencial}`}
                reverse={false}
                offset={-50}
                duration={300}
              >
                {progress => (
                  <Tween
                    from={{
                      x: '100%',
                      autoAlpha: 0,
                    }}
                    ease="Power2"
                    totalProgress={progress}
                    paused
                  >
                    <div className={styles.residencial}>
                      <div className={styles.headingWrapper}>
                        <img
                          src={house}
                          alt="Residencial ícone"
                          className={styles.icon}
                        />
                        <h3 className={styles.sectionTitle}>Residencial</h3>
                      </div>
                      <ul className={styles.list}>
                        {RESIDENTIAL_LIST.map((item, i) => (
                          <li key={`${item + i}`} className={styles.item}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Tween>
                )}
              </Scene>
            </Controller>
          </div>
          <div className={styles.banner}>
            <img src={faq} alt="Pergunta" className={styles.bannerIcon} />
            <p>
              Quer fazer um projeto em outro segmento? Não tem problema,{' '}
              <Link to={'/#contato'} onClick={this.scrollToLink}>
                fale com a gente
              </Link>
              .
            </p>
          </div>
        </Container>
      </div>
    );
  }
}
