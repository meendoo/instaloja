import React from 'react';
import { TweenLite, Power2 } from 'gsap/all';
import { Link } from 'gatsby';

if (typeof window === 'undefined') {
  global.window = {};
}

const menuClick = e => {
  e.preventDefault();
  if (this.menuTl) {
    this.hideMenu();
  }
  if (document.querySelector(e.target.hash)) {
    TweenLite.to(window, 1, {
      scrollTo: {
        y: e.target.hash,
        offsetY:
          e.target.hash === '#empresa' && window.innerWidth < 768 ? '50' : 0,
      },
      ease: Power2.easeOut,
    });
  }
};

export const ScrollToHash = ({ to, children }) => {
  return (
    <Link to={to} onClick={menuClick}>
      {children}
    </Link>
  );
};
