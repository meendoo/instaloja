import React, { Component } from 'react';
import Logo from './logo'
import { Link } from 'gatsby'
import styles from './header.module.scss';
import { TimelineLite, TweenMax, Power4 } from 'gsap';

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
  }

  showMenu = () => {
    if (this.state.opened) {
      this.hideMenu();
      return;
    }
    const menu = this.menu.current;
    this.menuTl = new TimelineLite();
    this.menuTl
      .add( TweenMax.to(`.${styles.listItem}`, 0, {opacity: 0}))
      .add( TweenMax.fromTo(menu, 0.3, {x: '100%', y: '0%', opacity: 0, ease: Power4.easeIn}, {x: '0%', opacity: 1}), 'slide')
      .add( TweenMax.staggerFromTo(`.${styles.listItem}`, 0.3, {opacity: 0, y: 30}, {opacity: 1, y: 0}, 0.1), 'slide+=0.3')
    this.menuTl.play();
    this.setState({opened:true});
  }

  hideMenu = () => {
    const menu = this.menu.current;
    this.menuTl.stop();
    TweenMax.to(menu, 0.3, {y: '100%', ease: Power4.easeIn, clearProps: "transform"});
    this.setState({opened:false});
  }

  render() {
    const menu = MENUS.map(item => {
      return <Link to={`#${item}`} key={item} className={styles.listItem} onClick={this.hideMenu}>{item.toUpperCase()}</Link>
    });

    return (
      <>
        <header className={styles.header}>
          <Link className={styles.logo} to={'/'}>
            <Logo width={'240px'} white/>
          </Link>
          <div className={styles.menuWrapper}>
            <div className={styles.menuBtn} onClick={this.showMenu}>
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
