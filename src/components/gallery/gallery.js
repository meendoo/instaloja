import React, { Component } from 'react';
import 'react-photoswipe/lib/photoswipe.css';
import { PhotoSwipeGallery } from 'react-photoswipe';
import { Tick } from '../utils';
import Container from '../layout/container';
import './photoswipe-fix.scss';
import styles from './gallery.module.scss';
import Button from '../button/';
import { TweenMax } from 'gsap/all';
if (typeof window !== `undefined`) {
  var ScrollMagic = require('scrollmagic');
  require('imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');
}

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
      imgsToShow: 10,
    };
    this.options = {
      history: false,
      showHideOpacity: true,
      getThumbBoundsFn: false,
      bgOpacity: 0.95,
    };
  }

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  getThumbnailContent = item => {
    return (
      <img
        className={styles.thumbnail}
        alt={'Imagem'}
        src={item.fluidSrc}
        width={200}
        height={200}
      />
    );
  };

  showMore = () => {
    this.setState({ imgsToShow: this.state.imgsToShow + 10 });
  };

  componentDidMount = () => {
    this.props.controller.addScene(
      new ScrollMagic.Scene({
        duration: 0,
        triggerElement: `.${styles.gallery}`,
        reverse: false,
        triggerHook: 0.5,
      }).setTween(
        TweenMax.staggerFrom(
          `.${styles.thumbnail}`,
          0.3,
          { opacity: 0, y: 30 },
          0.1
        )
      )
    );
  };

  componentDidUpdate = (prevProps, prevState) => {
    let startPoint = prevState.imgsToShow;
    let thumbs = Array.from(document.querySelectorAll(`.${styles.thumbnail}`));
    let interval = thumbs.slice(startPoint);
    TweenMax.staggerFrom(interval, 0.3, { opacity: 0, y: 30 }, 0.05);
  };

  render() {
    let items = [];
    let edges = this.props.data.edges;
    edges.slice(0, this.state.imgsToShow).forEach(img => {
      let fluidSrc = img.node.childImageSharp.fluid.src;
      if (fluidSrc !== null) {
        let { src, width, height } = img.node.childImageSharp.original;
        let item = {};
        item.fluidSrc = fluidSrc;
        item.src = src;
        item.w = width;
        item.h = height;
        items.push(item);
      }
    });

    return (
      <div id={this.props.id || ''}>
        <Container className={styles.gallery}>
          <h2>
            NOSSOS PROJETOS
            <Tick white />
          </h2>
          <PhotoSwipeGallery
            items={items}
            options={this.options}
            thumbnailContent={this.getThumbnailContent}
          />
          {this.state.imgsToShow >= edges.length ? (
            ''
          ) : (
            <Button
              size={'md'}
              className={styles.btnMore}
              onClick={this.showMore}
            >
              Ver Mais
            </Button>
          )}
        </Container>
      </div>
    );
  }
}
