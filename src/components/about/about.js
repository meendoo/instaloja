import React, { Component } from 'react'
import styles from './about.module.scss';
import Container from '../layout/container'
import Glasses from './glasses'
import { TweenMax, Power1 } from 'gsap/all';
import ScrollMagic from 'scrollmagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

export default class About extends Component {

  componentDidMount = () => {
    this.props.controller.addScene(
      new ScrollMagic.Scene({
        duration: 0,
        triggerElement: `.${styles.glasses}`,
        offset: window.innerWidth < 768 ? 150 : 300,
        reverse: false,
        triggerHook: 1
      })
      .setTween(this.animatedGlasses())
    );
  }

  animatedGlasses = () => {
    let glasses = document.querySelectorAll('.glasses');
    let glassesArr = [].slice.call(glasses);
    let tweens = [];
    glassesArr.forEach((element, i) => {
      let value = 80;
      if (i % 2 === 0) {
        value = -value
      }
      tweens.push(TweenMax.from(element, 1, {autoAlpha: 0, x: Math.random()*value , y: Math.random()*value, yoyo:true, ease: Power1.easeOut}));
      // TweenMax.fromTo(`.${styles.about}`, 3, {background: 'linear-gradient(to right, rgb(30, 41, 67), rgb(30, 41, 67))'}, {background: 'linear-gradient(to right, rgb(49, 110, 255), rgb(30, 41, 67))'});
    });
    return tweens;
  }

  render() {
    return (
      <div className={styles.about} id={this.props.id || null}>
        <Container className={styles.container}>
          {/* <img src={glass} alt={'Vidros'} className={styles.glasses} /> */}
          <Glasses className={styles.glasses}/>
          <div className={styles.copy}>
            <h3>Trabalhamos no segmento de Instalações Comerciais em Modulados de vidro temperado, principalmente no mercado de Salvador e interior da Bahia.</h3>
            <h4>Fornecemos elaboração gratuita de projeto (perspectiva e planta baixa), e o nosso diferencial no mercado está na qualidade do nosso produto. Atuamos com diversos materiais, a exemplo de MDF mesclado com vidro temperado, uma parceria nossa com a <a href="http://prolojavidros.com.br/" target="_blank" rel="noopener noreferrer">PROLOJA</a>.</h4>
          </div>
        </Container>
      </div>
    )
  }
}
