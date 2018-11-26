import React from 'react'
import styles from './hero.module.scss'
import { TimelineMax, TweenMax, Power4 } from 'gsap'
import Button from '../button'

export default class Hero extends React.Component {

    componentDidMount = () => {
        let imgs = document.getElementsByClassName(styles.img);
        let heroTl = new TimelineMax();
        
        for (let i = 0; i < imgs.length; i++) {
            let img = imgs[i];
            heroTl
                .call(this.increaseZIndex.bind(this, img))
                .add( TweenMax.fromTo(img, 5, {transform: 'scale(1)', opacity: 0}, {transform: 'scale(1.1)', ease: Power4.easeOut, opacity: 1}), 'image')
                .add( TweenMax.fromTo(`.${styles.cta}`, 0.5, {xPercent: -100, ease: Power4.easeIn, opacity: 0}, {xPercent: 0, opacity: 1}), 'image-=4')
                .add( TweenMax.to(img, 0.4, {opacity: 0}));
        }
        heroTl.repeat(-1);
    }

    increaseZIndex(target) {
        target.style.zIndex = Number(target.style.zIndex) + 1;
    }
    
    
    render() {
        const images = this.props.data.edges.map((edges, i) => {
            return <div key={'img'+i} className={styles.img} style={{backgroundImage: `url('${edges.node.childImageSharp.original.src}')`}}/>
        });
        return (
            <div className={styles.heroContainer}>
                <div className={styles.cta}>
                    <div className={styles.hero}>
                        <h1>COMECE JÁ<br/>O <em>SEU NEGÓCIO</em></h1>
                        <Button to={"#contato"} title="monte sua loja"/>
                    </div>
                </div>
                <div className={styles.imageWrapper}>
                    {images}
                </div>
            </div>
        );
    }
}