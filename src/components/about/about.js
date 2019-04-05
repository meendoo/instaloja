import React, { Component } from 'react';
import styles from './about.module.scss';
import Container from '../layout/container';
import Glasses from './glasses';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { Tween } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';

export default class About extends Component {
  render() {
    return (
      <div className={styles.about} id={this.props.id || null}>
        <Container className={styles.container}>
          {/* <img src={glass} alt={'Vidros'} className={styles.glasses} /> */}
          <Controller>
            <Scene
              triggerElement={`.${styles.about}`}
              reverse={false}
              // offset={window.innerWidth < 768 ? 150 : 300}
              triggerHook={1}
              duration={120}
            >
              {progress => (
                <Tween
                  from={{
                    autoAlpha: 0,
                    x: Math.random() * 80,
                    y: Math.random() * 80,
                  }}
                  ease="Power1"
                  totalProgress={progress}
                  paused
                >
                  <Glasses className={styles.glasses} />
                </Tween>
              )}
            </Scene>
          </Controller>
          <div className={styles.copy}>
            <h3>
              Trabalhamos no segmento de Instalações Comerciais em Modulados de
              vidro temperado, principalmente no mercado de Salvador e interior
              da Bahia.
            </h3>
            <h4>
              Fornecemos elaboração gratuita de projeto (perspectiva e planta
              baixa), e o nosso diferencial no mercado está na qualidade do
              nosso produto. Atuamos com diversos materiais, a exemplo de MDF
              mesclado com vidro temperado, uma parceria nossa com a{' '}
              <OutboundLink
                href="http://prolojavidros.com.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                PROLOJA
              </OutboundLink>
              .
            </h4>
          </div>
        </Container>
      </div>
    );
  }
}
