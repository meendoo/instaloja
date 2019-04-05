import React from 'react';
import styles from './footer.module.scss';
import Container, { ContainerOptions } from '../layout/container';
import Icons from '../icons';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container type={ContainerOptions.wrap} className={styles.footerHolder}>
        <div className={styles.footerColumn}>
          <h2>Horários de atendimento</h2>
          <p className={styles.openingHours}>
            Segunda a sexta - 8h às 18h
            <br />
            Sábados - 10h às 14h
          </p>
        </div>
        <div className={styles.footerColumn}>
          <h2>Redes Sociais</h2>
          <ul className={styles.socialList}>
            <li>
              <OutboundLink
                href="https://www.instagram.com/instaloja_sergio/"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.Instagram
                  size={40}
                  className={`${styles.footerIcons} ${styles.instagram}`}
                />
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                href="https://api.whatsapp.com/send?phone=5571991238571"
                title="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.Whatsapp size={40} className={`${styles.footerIcons}`} />
              </OutboundLink>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h2>Telefones</h2>
          <p className={styles.openingHours}>
            <a href="tel:+5571991238571">(71) 99123-8571</a>{' '}
            <span>
              Tim{' '}
              <Icons.Whatsapp
                size={16}
                className={`${styles.footerIcons} ${styles.whatsappSmall}`}
              />
            </span>
            <br />
            <a href="tel:+5571986019545">(71) 98601-9545</a> Oi <br />
            <a href="tel:+5571982351256">(71) 98235-1256</a> Claro <br />
            <a href="tel:+5571996017691">(71) 99601-7691</a> Claro
          </p>
        </div>
      </Container>
      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          Instaloja Instalações Comerciais<sup>®</sup> -{' '}
          {new Date().getFullYear()}
        </p>
        <p className={styles.design}>
          Site feito por <a href="mailto:contact@meendoo.com">@meendoo</a>
        </p>
      </div>
    </footer>
  );
}
