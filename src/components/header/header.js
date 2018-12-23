import React, { Component } from 'react';
import Logo from './logo'
import { Link } from 'gatsby'
import styles from './header.module.scss';
import { TimelineLite, TweenMax, Power4, Power2 } from 'gsap/all';

const MENUS = [
    'empresa',
    'segmentos',
    'galeria',
    'parceiros',
    'contato'
]

export class Header extends Component {
  constructor(props) {
    super(props);
    this.menu = React.createRef();
    this.state = {
      opened: false
    }
    this.menuTl = new TimelineLite();
    
  }

  menuToggleButton = () => {
    if (this.state.opened) {
      this.hideMenu();
      return;
    }
    this.showMenu('full');
    this.setState({opened:true});
  }

  showMenu = () => {
    this.menuTl
      .add( TweenMax.fromTo(this.menu.current, 0.3, {x: '100%', y: '0%', autoAlpha: 0, ease: Power4.easeIn}, {x: '0%', autoAlpha: 1}), 'slide' )
      .add( TweenMax.staggerFromTo(`.${styles.listItem}`, 0.3, {autoAlpha: 0, y: 30}, {autoAlpha: 1, y: 0}, 0.1), 'slide+=0.3' )
    this.menuTl.play(0);
  }

  hideMenu = (type) => {
    this.menuTl.stop();
    this.setState({opened:false});
    TweenMax.to(this.menu.current, 0.3, {y: '100%', ease: Power4.easeIn, clearProps: "transform"});
    if (type === 'full') {
      TweenMax.to(`.${styles.listItem}`, 0.3, {autoAlpha: 0});
    }
  }

  menuClick = (e) => {
    e.preventDefault();
    if (this.menuTl) {
      this.hideMenu();
    }
    if (document.querySelector(e.target.hash)) {
      TweenMax.to(window, 1, {scrollTo: {y: e.target.hash, offsetY: e.target.hash === '#empresa' && window.innerWidth < 768 ? '50' : 0}, ease: Power2.easeOut});
    }
  }

  render() {
    const menu = MENUS.map(item => {
      return <Link to={`#${item}`} key={item} className={styles.listItem} onClick={this.menuClick}>{item.toUpperCase()}</Link>
    });

    return (
      <>
        <header className={styles.header}>
          <Link className={styles.logo} to={'/'}>
            <Logo width={'220px'} white/>
          </Link>
          <div className={styles.menuWrapper}>
            <div className={styles.menuBtn} onClick={this.menuToggleButton}>
              <h5>{this.state.opened ? 'FECHAR' : 'MENU'}</h5>
            </div>
            <ul className={styles.menu} ref={this.menu}>
              {menu}
            </ul>
          </div>
        </header>
        <div className={styles.backdrop}/>
      </>
    )
  }
}

export default Header
